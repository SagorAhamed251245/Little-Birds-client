import { useState } from "react";
import Button from "../../component/Button/Button";
import useAxiosSecure from "../../api/useAxiosSecure";


const ApplyFeedback = ({item}) => {
    const [showModal, setShowModal] = useState(false);
    const [axiosSecure] = useAxiosSecure()
   

    const handelSubmitFeedback = () => {

                
          const text =  document.getElementById("feedbackMessage").value ;
          const feedbackItem = {
            ...item , feedbackId: item._id , feedbackMessage : text 

          }
          delete feedbackItem?._id;
          
          
          axiosSecure.post('feedbackByAdmin', feedbackItem)
            .then(res => {
                console.log(res);
              
                
                // Update the status after posting the class
            })
            .catch(err => console.log(err));

    }
    return (
        <>
            <div onClick={() => setShowModal(true)}>
              <Button title={'Feedback'}></Button>
            </div>
            
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Modal Title
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    
                                    <div className="my-4  text-slate-500 text-lg leading-relaxed">
                                       <textarea id="feedbackMessage" type="text"  className=" border-black border-2 p-1 w-[500px]"/>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <div
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        
                                        onClick={() => setShowModal(false)}
                                    >
                                        <Button title={'Close'}></Button>
                                    </div>
                                    <div
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        
                                        onClick={() =>  { setShowModal(false) ,handelSubmitFeedback()}}
                                    >
                                        <Button title={'Send'}></Button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default ApplyFeedback;