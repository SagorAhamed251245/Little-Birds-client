import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../../api/useAxiosSecure';
import { AuthContext } from '../../../../provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ item }) => {
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements()
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate()

    const { Product_id, _id, classImage, available_seats, number_of_students, className, price, user_email, } = item;

    const paymentInfo = {
        Product_id, paymentId: _id, classImage, className, price, user_email, date: new Date()

    }

    useEffect(() => {
        console.log([price]);
        if (price > 0) {
            axiosSecure.post("/create-payment-intent", { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }

    }, [price, axiosSecure])



    const handleSubmit = async (event) => {


        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        event.preventDefault();
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        console.log('cart', card);
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {

            setCardError('');
        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
       
        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {...paymentInfo, transactionId: transactionId }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res);

                    axiosSecure.delete(`/deleteBookings/${_id}`)
                        .then(deleteRes => {
                            console.log(deleteRes);
                            const updatedSeats = parseInt(available_seats) - 1;
                            const updatedStudents = parseInt(number_of_students) + 1;

                            axiosSecure.patch('/updateSomeInfo', {
                                Product_id,
                                available_seats: updatedSeats,
                                number_of_students: updatedStudents
                            })
                                .then(updateRes => {
                                    console.log(updateRes);

                                    navigate('/dashboard/payment-history')
                                    toast.success('Class Successfully paid');

                                })
                                .catch(updateErr => {
                                    console.log(updateErr);
                                    toast.error('Failed to update class information');
                                });
                        })
                        .catch(deleteErr => {
                            console.log(deleteErr);
                            toast.error('Failed to delete booking');
                        });
                })
                .catch(err => console.log(err));

        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
               <div className='w-full flex justify-center mt-5'>
               <button type="submit" className='bg-pink-500 border-black text-white rounded-lg w-36 p-2 mt-5 ' disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
               </div>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;