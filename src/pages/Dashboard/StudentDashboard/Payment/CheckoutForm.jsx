import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../../api/useAxiosSecure';
import { AuthContext } from '../../../../provider/AuthProvider';

const CheckoutForm = ({price}) => {
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements()
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        console.log([price]);
        if(price > 0){
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
                <button type="submit" className='bg-pink-500 border-black rounded-lg w-24'disabled={!stripe || !clientSecret }>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {/* {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>} */}
        </>
    );
};

export default CheckoutForm;