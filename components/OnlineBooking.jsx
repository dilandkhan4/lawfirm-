import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const OnlineBooking = () => {
    return (
        <section className='max-w-[1320px] mx-auto my-20 px-4'>
            <h4 className='section-heading2 text-center'>online booking</h4>
            <h1 className='mt-6 section-title2 text-center'>Schedule Your Consultation Today</h1>
            <p className='mt-10 text-center section-description2 w-full lg:w-1/2 mx-auto'>
                Take the first step toward resolving your legal issue. Book a free consultation with
                our expert team today, and get the personalized advice and guidance you need
            </p>
            
            <div className='flex flex-col md:flex-row mt-14 justify-between gap-4'>
                <div className='bg-[#EFF5F5] grid grid-cols-4 rounded hover:text-[#B68C5A] transition-colors duration-300'>
                    <div className='py-14 pl-10'>
                        <Image src='/personIcon.png' width={56} height={56} alt='Fill Form' />
                    </div>
                    <div className='w-[1.5px] h-[78px] mx-10 mt-12 bg-[#D9CDCD]'></div>
                    <div className='col-span-2 py-14 pr-16'>
                        <p className='lato text-[16px] font-normal'>Step 1</p>
                        <h2 className='mt-4 text-[24px] font-bold lato'>Fill Form</h2>
                    </div>
                </div>

                <div className='bg-[#EFF5F5] grid grid-cols-4 rounded hover:text-[#B68C5A] transition-colors duration-300'>
                    <div className='py-14 pl-10'>
                        <Image src='/pay.png' width={56} height={56} alt='Confirmation' />
                    </div>
                    <div className='w-[1.5px] h-[78px] mx-10 mt-12 bg-[#D9CDCD]'></div>
                    <div className='col-span-2 py-14 pr-16'>
                        <p className='lato text-[16px] font-normal'>Step 2</p>
                        <h2 className='mt-4 text-[24px] font-bold lato'>Confirmation</h2>
                    </div>
                </div>

                <div className='bg-[#EFF5F5] grid grid-cols-4 rounded hover:text-[#B68C5A] transition-colors duration-300'>
                    <div className='py-14 pl-10'>
                        <Image src='/hand.png' width={56} height={56} alt='Meet Lawyer' />
                    </div>
                    <div className='w-[1.5px] h-[78px] mx-10 mt-12 bg-[#D9CDCD]'></div>
                    <div className='col-span-2 py-14 pr-16'>
                        <p className='lato text-[16px] font-normal'>Step 3</p>
                        <h2 className='mt-4 text-[24px] font-bold lato'>Meet Lawyer</h2>
                    </div>
                </div>
            </div>

            {/* Call to Action Button */}
            <div className='text-center mt-12'>
                <Link
                    href='/appointment'
                    className='inline-block bg-[#B68C5A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#A67B4A] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1'
                >
                    Book Your Appointment Now
                </Link>
            </div>
        </section>
    );
};

export default OnlineBooking;