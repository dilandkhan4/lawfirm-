"use client";
import React from 'react';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import './styleFace.css'
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
const FaceJustice = () => {
      const gradientStyle = {
        background: 'linear-gradient(180deg, rgba(0, 66, 37, 0.80) 30.1%, rgba(34, 25, 25, 0.80) 50%)',
    };
  return (
    <div>
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
          <SwiperSlide>
            <div>
              <Image src='/sliderTeam.png' height={480} width={424} alt='Blog Icon' >

              </Image>

              <div style={gradientStyle} className='relative w-[343px] -mt-[87px] ml-[7px] h-20 pl-5 '>
                <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div>
              <Image src='/sliderTeam.png' height={480} width={424} alt='Blog Icon' >

              </Image>

              <div style={gradientStyle} className='relative w-[343px] -mt-[87px] ml-[7px] h-20 pl-5 '>
                <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div>
              <Image src='/sliderTeam.png' height={480} width={424} alt='Blog Icon' >

              </Image>

              <div style={gradientStyle} className='relative w-[343px] -mt-[87px] ml-[7px] h-20 pl-5 '>
                <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div>
              <Image src='/sliderTeam.png' height={480} width={424} alt='Blog Icon' >

              </Image>

              <div style={gradientStyle} className='relative w-[343px] -mt-[87px] ml-[7px] h-20 pl-5 '>
                <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div>
              <Image src='/sliderTeam.png' height={480} width={424} alt='Blog Icon' >

              </Image>

              <div style={gradientStyle} className='relative w-[343px] -mt-[87px] ml-[7px] h-20 pl-5 '>
                <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div>
              <Image src='/sliderTeam.png' height={480} width={424} alt='Blog Icon' >

              </Image>

              <div style={gradientStyle} className='relative w-[343px] -mt-[87px] ml-[7px] h-20 pl-5 '>
                <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div>
              <Image src='/sliderTeam.png' height={480} width={424} alt='Blog Icon' >

              </Image>

              <div style={gradientStyle} className='relative w-[343px] -mt-[87px] ml-[7px] h-20 pl-5 '>
                <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div>
              <Image src='/sliderTeam.png' height={480} width={424} alt='Blog Icon' >

              </Image>

              <div style={gradientStyle} className='relative w-[343px] -mt-[87px] ml-[7px] h-20 pl-5 '>
                <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div>
              <Image src='/sliderTeam.png' height={480} width={424} alt='Blog Icon' >

              </Image>

              <div style={gradientStyle} className='relative w-[343px] -mt-[87px] ml-[7px] h-20 pl-5 '>
                <h3 className='text-white text-xl pt-5'>Antony Das</h3>
                <p className='mt-3 text-white text-xs'>Criminal Lawyer</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FaceJustice;