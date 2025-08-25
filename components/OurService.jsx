import Image from 'next/image';
import React from 'react';

const OurService = () => {
    return (
        <div className='max-w-[1230px] mx-auto my-24'>
            <div className='flex flex-col lg:flex-row space-x-24'>
                <div>
                    <div className='flex space-x-2 mb-6'>
                        <Image src='/order.png' height={26} width={32} alt='order'></Image>
                        <p className='text-[#B68C5A] text-[16px] font-semibold'>Our Services</p>
                    </div>
                    <h1 className='mb-10 text-[#021C1B] font-bold text-4xl'>The best lawyer best solution.</h1>
                    <p className='text-[#5B5353] text-[16px] mb-12 max-w-[550px]'>Our firm provides comprehensive legal services, specializing in defending your
                        rights and ensuring justice is delivered with unwavering professionalism and
                        dedication. We are committed to guiding you through every legal challenge
                        with expert advice and personalized support, always prioritizing your best
                        interests.</p>
                    <p className="flex text-[#B68C5A] text-xl font-medium ">
                    Discover more service
                        <Image src='/Frame.png' height={24} width={24} alt='arrow' className='text-[#B68C5A] mx-2'></Image>
                    </p>
                </div>
                <div>
                    <Image
                        src='/photo-5.png'
                        height={600}
                        width={550}
                        alt='photo'
                        className=''
                   
                    />
                </div>

            </div>
        </div>
    );
};

export default OurService;