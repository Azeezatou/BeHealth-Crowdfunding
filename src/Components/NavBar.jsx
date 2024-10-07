import React, {useState} from "react";
import SignUp from "./SignUp";

const Navbar = ( ) => {
    const [isOpen, setIsOpen] = useState(false); 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="p-10 w-screen">
            <div className="flex justify-between flex-row">
                {/* <img alt=""></img> */}
                <h1 className="">BeHealth</h1>
                <div className="flex ">
                    <ul className="flex flex-row space-x-5">
                        <li>Home</li>
                        <li>Latest</li>
                        <li>About Us</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className="flex w-14, justify-end">
                    <button className="bg-[#d74a94] h-10 rounded-md w-28 text-white text-xs mx-3">Donate</button>
                    <SignUp isOpen={isOpen} togglePopup={togglePopup} />
                </div>
            </div>
            <hr className="mt-10 w-screen"></hr>
        </nav>
    )
}
export default Navbar