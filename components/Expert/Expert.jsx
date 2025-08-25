"use client"
import Image from 'next/image';
import { ArrowRightOutlined } from '@ant-design/icons';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './style.css';
import { EffectCards } from 'swiper/modules';

const Expert = () => {
    return (
        <section className='max-w-[1230px] mx-auto '>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center justify-center h-full'>
                <div className='flex flex-col justify-center items-center h-[700px] gap-56'>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        loop={true}
                        modules={[EffectCards]}
                        className="mySwiper w-full max-w-[424px] max-h-[580px] -mt-20"
                    >
                        <SwiperSlide className='flex !h-[480px] justify-center items-center'>
                            <Image src='/image 1.png' height={480} width={424} alt='Blog Icon' />
                        </SwiperSlide>
                        <SwiperSlide className='flex !h-[480px] justify-center items-center'>
                            <Image src='/image 2.png' height={480} width={424} alt='Blog Icon' />
                        </SwiperSlide>
                        <SwiperSlide className='flex !h-[480px] justify-center items-center'>
                            <Image src='/image 3.png' height={480} width={424} alt='Blog Icon' />
                        </SwiperSlide>
                        <SwiperSlide className='flex !h-[480px] justify-center items-center'>
                            <Image src='/image 4.png' height={480} width={424} alt='Blog Icon' />
                        </SwiperSlide>
                    </Swiper>
                    <div className=''>
                        <p className='text-[#B68C5A] text-[14px] font-medium mt-3'>Real Specie</p>
                        <h3 className='text-[#021C1B] text-[18px] font-medium mt-3'>Divorce Law Case</h3>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-2'>
                        <Image src='/blogIcon.png' height={26} width={32} alt='Blog Icon' />
                        <p className='text-[#B68C5A] text-[16px] font-bold'>What we are expert at</p>
                    </div>
                    <div className='mt-[20px]'>
                        <h1 className='heading'>Our Case Study</h1>
                    </div>
                    <p className='description mt-10 lato'>
                        A case study showcases our firm’s expertise in resolving complex legal issues.
                        It highlights our strategic approach, personalized client care, and commitment
                        to delivering justice while protecting our clients rights.
                    </p>
                    <div className='mt-10'>
                        <button className='flex items-center gap-2 bg-white hover:bg-[#B68C5A] border border-[#B68C5A] text-black hover:text-white rounded-lg py-4 px-8'>
                            <p className='text-[18px] lato'>Read More</p>
                            <ArrowRightOutlined />
                        </button>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Expert;
