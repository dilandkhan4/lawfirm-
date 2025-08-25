import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#F9F6EE]'>
            <footer className="footer1 space-x-24 max-w-[1320px] mx-auto pt-16 pb-10">
                <nav>
                    <Image src='/logo.png' width={150} height={45} alt='logo' className='-mt-3'></Image>
                    <p className="font-semibold text-2xl text-[#0C0C15] mb-4 mt-11">Enter Your Email To Get The Latest News</p>
                    <p className="font-normal text-[16px] text-[#5B5353] mb-5">we got you<br /> trust. </p>
                    <div className="join w-[475px]">
                        <input
                            type="text"
                            placeholder="Email address..."
                            className="input input-bordered join-item max-w-[480px] md:w-[480px]" />
                        <button className="btn  bg-[#B68C5A] text-white join-item">Submit</button>
                    </div>
                </nav>
                <nav>
                    <h6 className="text-[16px] text-[#0C0C15] font-semibold mb-16">Useful Links</h6>
                    <a className="link link-hover font-medium text-[16px] text-[#0C0C15] mb-5">Home</a>
                    <a className="link link-hover font-medium text-[16px] text-[#0C0C15] mb-5">About</a>
                    <a className="link link-hover font-medium text-[16px] text-[#0C0C15] mb-5">Service</a>
                    <a className="link link-hover font-medium text-[16px] text-[#0C0C15] mb-5">Case study</a>
                    <a className="link link-hover font-medium text-[16px] text-[#0C0C15] mb-5">Contact</a>
                </nav>
                <nav>
                    <h6 className="text-[16px] text-[#0C0C15] font-semibold mb-16">Support</h6>
                    <a className="link link-hover font-medium text-[16px] text-[#0C0C15] mb-5">Blog</a>
                    <a className="link link-hover font-medium text-[16px] text-[#0C0C15] mb-5">Page</a>
                    <a className="link link-hover font-medium text-[16px] text-[#0C0C15]">Careers</a>
                    
                </nav>
                <nav>
                    <h6 className="text-[18px] text-[#0C0C15] font-semibold">Follows us on :</h6>
                    <div className="grid grid-flow-col mt-5 gap-4">

                        <div className='border-2 bg-white h-[40px] w-[40px] rounded-full '>
                            <Image src='/face.png' width={40} height={40} alt='logo' className='p-2' ></Image>
                        </div>
                        <div className='border-2 bg-white h-[40px] w-[40px] rounded-full '>
                            <Image src='/twi.png' width={40} height={40} alt='logo' className='p-2' ></Image>
                        </div>
                        <div className='border-2 bg-white h-[40px] w-[40px] rounded-full '>
                            <Image src='/you.png' width={40} height={40} alt='logo' className='p-2' ></Image>
                        </div>
                        <div className='border-2 bg-white h-[40px] w-[40px] rounded-full '>
                            <Image src='/ins.png' width={40} height={40} alt='logo' className='p-2' ></Image>
                        </div>

                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;