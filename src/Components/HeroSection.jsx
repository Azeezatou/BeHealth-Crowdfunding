import React from "react";
import PrimaryButton from "./PrimaryButton";
import DonateButton from "./DonateButton";

const HeroSection = () => (
    <main className="p-10 flex flex-col" >

        <div className="flex flex-col md:flex-row justify-between md:px-10 bg-no-repeat bg-right-bottom bg-[url('/public/images/bg-image.svg')">
               <div className="md:w-1/2 flex flex-col text-center md:text-start space-y-5">
                       <span className="bg-pink-200 p-2 rounded-2xl  max-w-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline-block mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
            Urgent! Help Asmau get Liver surgery within the next 54 days.</span>
            <h1 className=" md:text-6xl font-bold leading-relaxed"> Fundraising for <br />  <span className="text-pink-500"> Women & Children </span> <br /> with Health Challenges.</h1>
            <h3>
                Help provide access to quality healthcare for women and children from low income backgrounds, overcoming financial barriers and health disparities.
                </h3>
                <div>
                    <DonateButton className="!bg-[#d74a94] !h-10 !rounded-md !w-28 !text-white !text-xs !mx-3"/>
                </div>
            <div className="mt-5 max-w-md">
                <ul className="grid grid-cols-3 ">
                    <li>
                        <h3 className="text-xl">23%+ </h3>
                        <h5 className="text-sm">Monthly <br /> Donations</h5>
                    </li>
                    <li>
                        <h3 className="text-xl">1K+</h3>
                        <h5 className="text-sm">Successful treatments</h5>
                    </li>
                    <li>
                        <h3 className="text-xl">1500</h3>
                        <h5 className="text-sm">International <br /> Donors</h5>
                    </li>
                </ul>
            </div>
        </div>
            <div className="text-end">
                <div>

                  <img
                  className=""
                  src="/images/image-1.png"
                  alt="hero"
                  />
                  </div>

        
        </div>
         
        </div>


   
        <div className="flex flex-col space-y-5 mt-10">
            <div className="flex flex-row justify-between">

                <h2 className="font-bold text-2xl">Latest News </h2>
                      <span className="bg-pink-200 p-2 rounded-2xl  max-w-xl
            ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline-block mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
</svg>
Urgent! Help Asmau get Liver surgery within the next 54 days.</span>
            </div>
            <div className="flex flex-row space-x-4">

                <div className="border border-gray-200 p-5 w-1/3 flex flex-col rounded-2xl space-y-5 ">
                    <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                 src="/images/image-2.png"
                  alt=""
                />
              </div>
                    <h2 className=" text-lg font-bold">Help Asmau get Liver Surgery</h2>
                    <p className=" font-light"> Help provide access to quality healthcare for women & children from low income backgrounds, overcoming financial barriers and health disparities.</p>
                    <div>

                    <PrimaryButton></PrimaryButton>
                    </div>
                </div>
                <div className="border border-gray-200 p-5 w-2/3 flex flex-col rounded-md space-y-5">
                     <div className="flex flex-1 items-center h-2/3 justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
          <img
                  className=" object-cover object-center"
                  src="/images/image-3.png"
                  alt=""
                />
          </div>
                    <h2 className=" text-lg font-bold">Help Asmau get Liver Surgery</h2>
                    <p className=" font-light"> Help provide access to quality healthcare for women and children from low income backgrounds, overcoming financial barriers and health disparities.</p>
                    <div>

                    <PrimaryButton></PrimaryButton>
                    </div>

                </div>
            </div>
         
        </div>

        
        <div className="flex flex-col space-y-5 bg-pink-400 p-10 text-white">
            <h2 className="font-bold text-2xl ">About Us</h2>
            <div className="grid grid-cols-3 ">

                   <div className="flex flex-col rounded-md">
                     <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
          <img
                  className=" object-cover object-center"
                  src="/images/image-4.png"
                  alt=""
                />
          </div>
                  
                </div>
                <div className="flex flex-col rounded-md">
                     <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
          <img
                  className=" object-cover object-center"
                   src="/images/image-5.png"
                  alt=""
                />
          </div>
                   
                </div>
                <div className=" flex flex-col rounded-md">
                     <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
          <img
                  className=" object-cover object-center"
                  src="/images/image-6.png"
                  alt=""
                />
          </div>
                    
                </div>
            </div>
            <p className="text-2xl mt-5"> At BeHealth, we believe that access to quality healthcare is a fundamental human right and it’s not a
privilege reserved for few. Our mission it to bridge the gap for low income women & children, empowering them to
live healthier & more fulfilling lives. Join the movement, together let’s break down healthcare barrier,
transform lives & create a more compassionate world.</p>
            
            <div>

                <h2 className="text-3xl">Our Vison</h2>
            <p className="mt-5 text-2xl"> A world where every individual regardless of income or background, can access life saving medical services,
procedures & medication.</p>
                
            </div>
        </div>
        <div className="p-10">
            <h2>Frequently Asked Questions?</h2>
            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-3">

            <div className="p-5 bg-pink-300  border rounded-md flex flex-row col-span-1">
                    <p className="text-lg">Can I donate anonymously?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline-flex">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

            </div>
            <div className="p-5 bg-pink-300  border rounded-md flex flex-row col-span-2">
                    <p className="text-lg">Can I donate anonymously?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline-flex">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

            </div>
            </div>

        </div>

        <div className="bg-pink-500 text-center font-bold text-2xl border rounded-xl p-10 text-white">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem animi sed mollitia dicta ipsum error placeat rem ipsam quia, nemo ullam, perspiciatis voluptatum esse totam! At obcaecati sapiente nam?
        </div>
        <footer className="p-5 ">
            <div className="flex flex-row justify-between">

            <div className="flex flex-col">
                <h2>Be Health</h2>
                <p>
                    join newsletter
                </p>
</div>
            <div className="flex flex-col">
                <h2>Be Health</h2>
                <p>
                   About
                </p>
                <p>
                   Latest
                </p>
                <p>
                   Faq
                </p>
                </div>
            </div>
            <hr />
            <div className="flex flex-row justify-between">
                <div>

                mercedez benz
                </div>
            <div className="">
            x, ig, F
             </div>
             </div>
        </footer>
    </main>
        
)
export default HeroSection