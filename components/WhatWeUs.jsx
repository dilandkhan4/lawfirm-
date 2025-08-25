import Image from 'next/image';
import React from 'react';


const WhatWeUs = () => {
    return (
        <div className='max-w-[1230px] mx-auto mb-24'>

            <div className='flex justify-center items-center mb-10'>
                <div className='flex space-x-2  '>
                    <Image src='/order.png' height={26} width={32} alt='order'></Image>
                    <p className='text-[#B68C5A] text-[16px] font-semibold'>What we Offer</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {/* <div className='bg-[#F3E8DF] hover:bg-[#B68C5A] hover:text-white h-[222px] max-w-72 rounded-lg transition-colors duration-300 group'>
                    <div className='p-6'>
                        <Image
                            src='/hs.png'
                            height={26}
                            width={32}
                            alt='order'
                            className='transition-colors duration-300 group-hover:red-filter'
                        />
                        <div className='flex justify-between pt-24'>
                            <h1 className='text-[18px] font-bold'>
                                Law <br />
                                Criminal
                            </h1>
                            <Image
                                src='/Frame.svg'
                                height={24}
                                width={24}
                                alt='order'
                                className='transition-colors duration-300 group-hover:red-filter'
                            />
                        </div>
                    </div>
                </div> */}


                <div className='bg-[#F3E8DF] hover:bg-[#B68C5A] hover:text-white h-[222px] max-w-72 rounded-lg transition-colors duration-300 group'>
                    <div className='p-6'>
                        <Image
                            src='/hs.png'
                            height={26}
                            width={32}
                            alt='order'
                            className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'
                        />
                        <div className='flex justify-between pt-24'>
                            <h1 className='text-[18px] font-bold'>
                                Law <br />
                                Criminal
                            </h1>
                            <Image
                                src='/Frame.svg'
                                height={24}
                                width={24}
                                alt='order'
                                className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'
                            />
                        </div>
                    </div>
                </div>

                <div className='bg-[#F3E8DF] hover:bg-[#B68C5A] hover:text-[white] h-[222px] max-w-72 rounded-lg transition-colors duration-300 group'>
                    <div className='p-6'>
                        <Image src='/2.png' height={26} width={32} alt='order' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>
                        <div className='flex justify-between pt-24'>
                            <h1 className='text-[18px] font-bold'>Law <br />
                                Family</h1>
                            <Image src='/Frame.svg' height={24} width={24} alt='order' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>
                        </div>

                    </div>

                </div>
                <div className='bg-[#F3E8DF] hover:bg-[#B68C5A] hover:text-[white] h-[222px] max-w-72 rounded-lg transition-colors duration-300 group'>
                    <div className='p-6'>
                        <Image src='/3.png' height={26} width={32} alt='order' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>
                        <div className='flex justify-between pt-24'>
                            <h1 className='text-[18px] font-bold'>Law <br />
                                Real-Estate</h1>
                            <Image src='/Frame.svg' height={24} width={24} alt='order' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>
                        </div>

                    </div>

                </div>
                <div className='bg-[#F3E8DF] hover:bg-[#B68C5A] hover:text-[white] h-[222px] max-w-72 rounded-lg transition-colors duration-300 group'>
                    <div className='p-6'>
                        <Image src='/4.png' height={26} width={32} alt='order' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>
                        <div className='flex justify-between pt-24'>
                            <h1 className='text-[18px] font-bold'>Law <br />
                                Civil</h1>
                            <Image src='/Frame.svg' height={24} width={24} alt='order' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>
                        </div>

                    </div>

                </div>
                <div className='bg-[#F3E8DF] hover:bg-[#B68C5A] hover:text-[white] h-[222px] max-w-72 rounded-lg transition-colors duration-300 group'>
                    <div className='p-6'>
                        <Image src='/5.png' height={26} width={32} alt='order' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>
                        <div className='flex justify-between pt-24'>
                            <h1 className='text-[18px] font-bold'>Law <br />
                                Professional Advice</h1>
                            <Image src='/Frame.svg' height={24} width={24} alt='order' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>
                        </div>

                    </div>

                </div>
                <div className='bg-[#F3E8DF] hover:bg-[#B68C5A] hover:text-[white] h-[222px] max-w-72 rounded-lg transition-colors duration-300 group'>
                    <div className='p-6'>
                        <Image src='/6.png' height={26} width={32} alt='order' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>
                        <div className='flex justify-between pt-24'>
                            <h1 className='text-[18px] font-bold'>Law <br />
                                Employment</h1>
                            <Image src='/Frame.svg' height={24} width={24} alt='order' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>
                        </div>

                    </div>

                </div>
                <div className='bg-[#F3E8DF] hover:bg-[#B68C5A] hover:text-[white] h-[222px] max-w-72 rounded-lg transition-colors duration-300 group'>
                    <div className='p-6'>
                        <Image src='/7.png' height={26} width={32} alt='order' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>
                        <div className='flex justify-between pt-24'>
                            <h1 className='text-[18px] font-bold'>Law <br />
                                Education</h1>
                            <Image src='/Frame.svg' height={24} width={24} alt='order' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>
                        </div>

                    </div>

                </div>
                <div className='bg-[#F3E8DF] hover:bg-[#B68C5A] hover:text-[white] h-[222px] max-w-72 rounded-lg transition-colors duration-300 group'>
                    <div className='p-6'>
                        <Image src='/8.png' height={26} width={32} alt='order' className='transition-colors duration-500 group-hover:invert'></Image>
                        <div className='flex justify-between pt-24'>
                            <h1 className='text-[18px] font-bold'>Law <br />
                                Competitive Pricing</h1>
                            <Image src='/Frame.svg' height={24} width={24} alt='order' className='transition-colors duration-500 group-hover:invert'></Image>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default WhatWeUs;