import Image from 'next/image';
import React from 'react';

const Experience = () => {
    return (
        <section className='mt-20'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center gap-2 justify-center'>
                    <Image src='/blogIcon.png' height={26} width={32} alt='Blog Icon' />
                    <p className='text-[#B68C5A] text-[16px] font-bold'>Client Experiences</p>
                </div>
                <div className='mt-[25px] '>
                    <h1 className='heading text-center'>clients have confident <br className='hidden lg:flex' /> with us </h1>
                </div>
            </div>
            <div className='bg-[#F9F6EE] mt-12'>
                {/* slider part */}

                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">

                        <div className='max-w-[1320px] mx-auto pt-20 pb-8 pl-5'>
                            <div className='flex flex-col lg:flex-row justify-between'>
                                <div className='flex-1'>
                                    <div>
                                        <Image src='/logo.png' height={100} width={100} alt='Blog Icon' />
                                    </div>
                                
                                    <p className='text-2xl lato mt-10 lg:mt-32 text-justify'>“ I am incredibly satisfied with the firm’s professionalism and dedication. They kept me informed, supported, and delivered outstanding results. Highly recommend! ”</p>

                                </div>
                                <div className='flex-1'>
                                    <div className='flex justify-between'>
                                        <div> <br /> </div>
                                        <div className=''>
                                            <Image className='mt-0 lg:-mt-20' src='/experience.png' height={400} width={400} alt='Blog Icon' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className=' mt-10 w-full h-[1px] bg-[#B68C5A]'>
                                <br />
                            </div>


                            <div className='flex justify-between items-center'>
                                <div className='mt-8 flex gap-2 items-center'>
                                    <Image src='/quete.png' height={50} width={50} alt='Blog Icon' />
                                    <div>
                                        <p className='text-xl '>MODESTER KESI</p>
                                        <p className='text-[14px] '>CEO and Founder</p>
                                    </div>
                                </div>
                                <div>
                                    <div className=" flex gap-4 mt-10">
                                        <a href="#slide4" className="py-2 px-3 rounded-md bg-white text-[#B68C5A]">❮</a>
                                        <a href="#slide2" className="py-2 px-3 rounded-md bg-white text-[#B68C5A]">❯</a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div id="slide2" className="carousel-item relative w-full">

                        <div className='max-w-[1320px] mx-auto pt-20 pb-8 pl-5'>
                            <div className='flex flex-col lg:flex-row justify-between'>
                                <div className='flex-1'>
                                    <div>
                                        <Image src='/logo.png' height={100} width={100} alt='Blog Icon' />
                                    </div>
                                   
                                    <p className='text-[26px] lato mt-10 lg:mt-32'>“ I am incredibly satisfied with the firm’s professionalism and dedication. They kept me informed, supported, and delivered outstanding results. Highly recommend! ”</p>

                                </div>
                                <div className='flex-1'>
                                    <div className='flex justify-between'>
                                        <div> <br /> </div>
                                        <div className=''>
                                            <Image className='mt-0 lg:-mt-20' src='/experience.png' height={400} width={400} alt='Blog Icon' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className=' mt-10 w-full h-[1px] bg-[#B68C5A]'>
                                <br />
                            </div>


                            <div className='flex justify-between items-center'>
                                <div className='mt-8 flex gap-2 items-center'>
                                    <Image src='/quete.png' height={50} width={50} alt='Blog Icon' />
                                    <div>
                                        <p className='text-xl lato'>Brooklyn Simmons</p>
                                        <p className='text-[14px] lato'>CEO and Founder</p>
                                    </div>
                                </div>
                                <div>
                                    <div className=" flex gap-4 mt-10">
                                        <a href="#slide1" className="py-2 px-3 rounded-md bg-white text-[#B68C5A]">❮</a>
                                        <a href="#slide3" className="py-2 px-3 rounded-md bg-white text-[#B68C5A]">❯</a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div id="slide3" className="carousel-item relative w-full">

                        <div className='max-w-[1320px] mx-auto pt-20 pb-8 pl-5'>
                            <div className='flex flex-col lg:flex-row justify-between'>
                                <div className='flex-1'>
                                    <div>
                                        <Image src='/logo.png' height={100} width={100} alt='Blog Icon' />
                                    </div>
                                  
                                    <p className='text-[26px] lato mt-10 lg:mt-32'>“ I am incredibly satisfied with the firm’s professionalism and dedication. They kept me informed, supported, and delivered outstanding results. Highly recommend! ”</p>

                                </div>
                                <div className='flex-1'>
                                    <div className='flex justify-between'>
                                        <div> <br /> </div>
                                        <div className=''>
                                            <Image className='mt-0 lg:-mt-20' src='/experience.png' height={400} width={400} alt='Blog Icon' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className=' mt-10 w-full h-[1px] bg-[#B68C5A]'>
                                <br />
                            </div>


                            <div className='flex justify-between items-center'>
                                <div className='mt-8 flex gap-2 items-center'>
                                    <Image src='/quete.png' height={50} width={50} alt='Blog Icon' />
                                    <div>
                                        <p className='text-xl lato'>Brooklyn Simmons</p>
                                        <p className='text-[14px] lato'>CEO and Founder</p>
                                    </div>
                                </div>
                                <div>
                                    <div className=" flex gap-4 mt-10">
                                        <a href="#slide2" className="py-2 px-3 rounded-md bg-white text-[#B68C5A]">❮</a>
                                        <a href="#slide4" className="py-2 px-3 rounded-md bg-white text-[#B68C5A]">❯</a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div id="slide4" className="carousel-item relative w-full">

                        <div className='max-w-[1320px] mx-auto pt-20 pb-8 pl-5'>
                            <div className='flex flex-col lg:flex-row justify-between'>
                                <div className='flex-1'>
                                    <div>
                                        <Image src='/logo.png' height={100} width={100} alt='Blog Icon' />
                                    </div>
                              
                                    <p className='text-[26px] lato mt-10 lg:mt-32'>“ I am incredibly satisfied with the firm’s professionalism and dedication. They kept me informed, supported, and delivered outstanding results. Highly recommend! ”</p>

                                </div>
                                <div className='flex-1'>
                                    <div className='flex justify-between'>
                                        <div> <br /> </div>
                                        <div className=''>
                                            <Image className='mt-0 lg:-mt-20' src='/experience.png' height={400} width={400} alt='Blog Icon' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className=' mt-10 w-full h-[1px] bg-[#B68C5A]'>
                                <br />
                            </div>


                            <div className='flex justify-between items-center'>
                                <div className='mt-8 flex gap-2 items-center'>
                                    <Image src='/quete.png' height={50} width={50} alt='Blog Icon' />
                                    <div>
                                        <p className='text-xl lato'>Brooklyn Simmons</p>
                                        <p className='text-[14px] lato'>CEO and Founder</p>
                                    </div>
                                </div>
                                <div>
                                    <div className=" flex gap-4 mt-10">
                                        <a href="#slide3" className="py-2 px-3 rounded-md bg-white text-[#B68C5A]">❮</a>
                                        <a href="#slide1" className="py-2 px-3 rounded-md bg-white text-[#B68C5A]">❯</a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;