import Image from 'next/image';
import React from 'react';

const Home2AboutUs = () => {
    return (
        <div className='bg-[#EFF5F5]'>
            <div className='max-w-[1320px] mx-auto  my-20 py-10'>
                <div className='flex flex-col lg:flex-row space-x-28'>
                    <div>
                        <Image
                            src='/hERO3.JPg'
                            height={480}
                            width={424}
                            alt='photo'
                            className='mx-auto md:mx-0'

                        />
                    </div>
                    <div className='flex flex-col  justify-center '>
                        <div className='flex space-x-2 mb-6'>
                            <p className='text-[#B68C5A] text-[16px] font-semibold'>About Us</p>
                        </div>
                        <h1 className='mb-10 text-[#021C1B] font-bold text-4xl'>Welcome To our Law <br />
                            Firm Company</h1>
                        <h2 className='mb-10 text-[#021C1B] font-bold text-2xl border-l-4 border-[#B68C5A] pl-10'>
                            Attorney General And <br />
                            Criminal Lawyer
                        </h2>
                        <p className='text-[#5B5353] text-[16px] mb-10 max-w-[750px]'>Our firm is committed to delivering justice with integrity and expertise. We provide personalized
                            legal services, ensuring every client receives trusted guidance and dedicated support.</p>

                        <div className="flex justify-start">
                            <button className="px-8 py-4 border-2 border-[#B68C5A] text-[#1D1C22] text-xl rounded-[4px] hover:bg-[#B68C5A] hover:text-white transition-colors duration-300">
                            About Our Firm
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home2AboutUs;
