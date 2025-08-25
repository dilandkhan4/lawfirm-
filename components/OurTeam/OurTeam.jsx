'use client'
import React from 'react';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const OurTeam = () => {
    return (
        <section className='max-w-[1400px] mx-auto'>
            <div className='flex flex-col items-center'>
                <h1 className='text-[#B68C5A] text-[18px] font-bold pb-6 '>Our Team</h1>
                <h3 className='text-[#0C0C15] text-4xl font-bold pb-10 '>The Faces Of Justice </h3>
                <p className='text-[#5B5353] text-[16px] pb-10  text-center'> Meet our dedicated legal team, committed to providing expert advice and <br />
                    achieving the best outcomes for our clients </p>
            </div>
            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className=''>
                        <Image src='/clientSliderimage1.jpeg' width={400} height={400} alt='Slider Image' />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <Image src='/slideimage3.jpeg' width={400} height={500} alt='Slider Image' />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <Image src='/slideimage2.jpeg' width={400} height={500} alt='Slider Image' />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <Image src='/slideimage2.jpeg' width={400} height={500} alt='Slider Image' />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <Image src='/slideimage2.jpeg' width={400} height={500} alt='Slider Image' />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <Image src='/slideimage2.jpeg' width={400} height={500} alt='Slider Image' />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <Image src='/slideimage2.jpeg' width={400} height={500} alt='Slider Image' />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <Image src='/slideimage2.jpeg' width={400} height={400} alt='Slider Image' />
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <Image src='/sliderTeam2.jpeg' width={400} height={400} alt='Slider Image' />
                    </SwiperSlide>

                </Swiper>
            </div>

        </section>
    );
};



export default OurTeam;