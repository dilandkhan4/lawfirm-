import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div className='max-w-[1320px] mx-auto my-24'>
            <div className='flex flex-col lg:flex-row space-x-20'>
                <div className='relative'>
                    {/* <Image
                        src='/together.png'
                        height={600}
                        width={550}
                        alt='photo'
                        className=''

                    /> */}
                
                        <Image
                            src='/photo2.png'
                            height={536}
                            width={480}
                            alt='photo'
                            className=''

                        />
                   
                    <div className='bg-[#B68C5A] w-[390px] h-[450px] rounded-[8px] absolute top-8 left-8'>
                    <Image
                            src='/group-image.png'
                            height={450}
                            width={390}
                            alt='photo'
                            className='relative top-6 left-6 rounded-[8px]'

                        />
                    </div>
                </div>
                <div>
                    <div className='flex space-x-2 mb-6'>
                        <Image src='/order.png' height={26} width={32} alt='order'></Image>
                        <p className='text-[#B68C5A] text-[16px] font-semibold'>About Us</p>
                    </div>
                    <h1 className='mb-10 text-[#021C1B] font-bold text-4xl'>Justice Delivered Rights Defended</h1>
                    <p className='text-[#5B5353] text-[16px] mb-12 max-w-[750px]'>At the heart of our practice lies a steadfast commitment to defending your rights and delivering justice
                        with precision and integrity. We understand the importance of every case and the impact it has on your
                        life. Our dedicated team works tirelessly to ensure that your voice is heard.</p>
                    {/* <button className="px-8 py-4 flex border-2 border-[#B68C5A] text-[#1D1C22] text-xl rounded-[4px] hover:bg-[#B68C5A] hover:text-white transition-colors duration-300">
                        learn more
                        <Image src='/Frame.svg' height={24} width={24} alt='arrow' className='ml-2 mt-1 transition-colors duration-300 group-hover:invert '></Image>
                    </button> */}
                    <button className="px-8 py-4 flex border-2 border-[#B68C5A] text-[#1D1C22] text-xl rounded-[4px] hover:bg-[#B68C5A] hover:text-white transition-colors duration-300 group">
                        learn more
                        <Image
                            src='/Frame.svg'
                            height={24}
                            width={24}
                            alt='arrow'
                            className='ml-2 mt-1 transition-colors duration-300 group-hover:invert'
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;