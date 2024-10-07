import React, {useState} from "react";

const SignUp = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <button onClick={togglePopup} className="bg-[#d74a94] h-10 rounded-md w-28 text-white text-xs mx-3">
                {isOpen ? 'Close' : 'Sign up'}
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-3/5 h-3/5 p-6 relative">
                        <button onClick={togglePopup} className="justify-items-end font-bold text-2xl ">
                            &times;
                        </button>

                        <h2 className="text-xl text-justify font-">Create Account</h2>
                        <form className="text-white-600 mb-4 ">
                            <input type="text" id="name" placeholder="Full name" className="rounded-md my-2 border-2 border-grey w-5/6 p-2"></input><br/>
                            <input type="text" id="email" placeholder="Email" className="rounded-md my-2 border-2 border-grey w-5/6 p-2"></input><br/>
                            <input type="text" id="password" placeholder="Password" className="rounded-md my-2 border-2 border-grey w-5/6 p-2"></input><br/>
                            <input type="text" id="password" placeholder="Confirm Password"className="rounded-md my-2 border-2 border-grey w-5/6 p-2"></input>
                        </form>
                        <button onClick={togglePopup} className="px-4 py-2 bg-[#d74a94] text-white rounded-md shadow-lg hover:bg-pink-400"> Sign up
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default SignUp