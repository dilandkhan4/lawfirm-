
"use client";
import React from 'react';

const caseStudies = [
    {
        title: 'Premier Legal Solution: Your Trusted Advisor In Law',
        description: `Explore our case studies to see how we've successfully navigated complex legal challenges. Each case reflects our dedication, expertise, and commitment to achieving the best.`
    }
];

const CaseStudy = () => {
        const handleViewDetails = (title) => {
            alert(`More details about: ${title}`);
        };
        return (
                <div className='max-w-[1320px] mx-auto mt-28 mb-28'>
                        <div className='mb-10 p-6 bg-[#f9f6f2] rounded-lg border border-[#B68C5A]'>
                                <h2 className='text-2xl font-bold text-[#B68C5A] mb-2'>Why Choose Us for Your Legal Needs?</h2>
                                <p className='text-[#5B5353] text-[16px]'>
                                    We provide expert legal solutions tailored to your unique situation. Our team is dedicated to delivering results with professionalism, confidentiality, and a client-focused approach. Explore our case studies below to see real examples of our impact.
                                </p>
                        </div>
                        {caseStudies.map((cs, idx) => (
                            <div className='mb-7' key={cs.title}>
                                <div className='flex flex-col md:flex-row space-x-2 lg:space-x-20'>
                                    <h1 className='text-[#0C0C15] text-2xl font-medium'>{cs.title}</h1>
                                    <p className='text-[#0C0C15] text-[16px] flex items-center'>{cs.description}</p>
                                    <div className=" flex items-center">
                                        <button
                                            className="px-4 py-4 border-2 border-[#B68C5A] text-[#1D1C22] text-xl rounded-[4px] hover:bg-[#B68C5A] hover:text-white transition-colors duration-300 whitespace-nowrap"
                                            onClick={() => handleViewDetails(cs.title)}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                                <div className=' mr-4 mt-7 border-t-2 border-[#B68C5A]'></div>
                            </div>
                        ))}
            <div className='flex flex-col items-start'>
                <h1 className='text-[#B68C5A] text-[18px] font-bold pb-6 '>Case Study</h1>
                <h3 className='text-[#0C0C15] text-4xl font-bold pb-10 '>Our Recent Case Project. </h3>
                <p className='text-[#5B5353] text-[16px] pb-10 '> Discover how we've resolved complex legal challenges with expertise <br />
                    and dedication through our successful case studies. </p>
            </div>
            <div className='mb-7'>
                <div className='flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-20'>
                    <div className='md:w-1/3'>
                   <h1 className='text-[#0C0C15] text-2xl font-medium'>Premier Legal Solution: <br />
                        Your Trusted Advisor In <br /> Law</h1>
                    </div>
                    <div className='md:w-1/2'>
                    <p className='text-[#0C0C15] text-[16px] flex items-center'>Explore our case studies to see how we've successfully navigated complex legal challenges. <br />
                        Each case reflects our dedication, expertise, and commitment to achieving the best</p>
                    </div>
                    <div className='md:w-1/6 flex justify-start md:justify-end'>
                         <button className="px-8 py-4 border-2 border-[#B68C5A] text-[#1D1C22] text-xl rounded-[4px] hover:bg-[#B68C5A] hover:text-white transition-colors duration-300 whitespace-nowrap">
                        view details
                        </button>
                    </div>
                    </div>
                <div className=' mr-4 mt-7 border-t-2 border-[#B68C5A]'></div>
            </div>
            
            <div className='mb-7'>
                <div className='flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-20'>
                    <div className='md:w-1/3'>
                    <h1 className='text-[#0C0C15] text-2xl font-medium'>Landmark Corporate Merger</h1>
                    </div>
                    <div className='md:w-1/2'>
                    <p className='text-[#0C0C15] text-[16px] flex items-center'>Midas successfully advised on a high-profile merger between two leading corporations, ensuring regulatory compliance and a seamless transition for all stakeholders.</p>
                    </div>
                    <div className='md:w-1/6 flex justify-start md:justify-end'>
                       <button className="px-8 py-4 border-2 border-[#B68C5A] text-[#1D1C22] text-xl rounded-[4px] hover:bg-[#B68C5A] hover:text-white transition-colors duration-300 whitespace-nowrap">
                        view details
                        </button>
                    </div>
                    </div>
                <div className=' mr-4 mt-7 border-t-2 border-[#B68C5A]'></div>
            </div>
           
            <div className='mb-7'>
                <div className='flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-20'>
                    <div className='md:w-1/3'>
                    <h1 className='text-[#0C0C15] text-2xl font-medium'>Intellectual Property Victory</h1>
                    </div>
                    <div className='md:w-1/2'>
                    <p className='text-[#0C0C15] text-[16px] flex items-center'>Our team secured a favorable judgment in a complex intellectual property dispute, protecting our client’s innovations and market position.</p>
                    </div>
                    <div className='md:w-1/6 flex justify-start md:justify-end'>
                        <button className="px-8 py-4 border-2 border-[#B68C5A] text-[#1D1C22] text-xl rounded-[4px] hover:bg-[#B68C5A] hover:text-white transition-colors duration-300 whitespace-nowrap">
                        view details
                        </button>
                    </div>
                    </div>
                <div className=' mr-4 mt-7 border-t-2 border-[#B68C5A]'></div>
            </div>
           
            <div className='mb-7'>
                <div className='flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-20'>
                    <div className='md:w-1/3'>
                    <h1 className='text-[#0C0C15] text-2xl font-medium'>Family Law Resolution</h1>
                    </div>
                    <div className='md:w-1/2'>
                    <p className='text-[#0C0C15] text-[16px] flex items-center'>Midas guided a client through a sensitive family law matter, achieving a fair settlement and protecting the interests of all parties involved.</p>
                    </div>
                    <div className='md:w-1/6 flex justify-start md:justify-end'>
                        <button className="px-8 py-4 border-2 border-[#B68C5A] text-[#1D1C22] text-xl rounded-[4px] hover:bg-[#B68C5A] hover:text-white transition-colors duration-300 whitespace-nowrap"> View Details
                        </button>
                    </div>
                    </div>
                <div className=' mr-4 mt-7 border-t-2 border-[#B68C5A]'></div>
            </div>

            
        </div>
    );
};

export default CaseStudy;