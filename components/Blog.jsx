import Image from 'next/image';
import React from 'react';

const Blog = () => {
    return (
        <section className='mt-20 mb-20 max-w-[1230px] mx-auto'>
            <div className='flex items-center gap-2'>
                <Image src='/blogIcon.png' height={26} width={32} alt='Blog Icon' />
                <p className='text-[#B68C5A] text-[16px] font-bold'>Latest Top Blog</p>
            </div>
            <div className='mt-[25px]'>
                <h1 className='heading text-left'>Legal Insights & Expert Advice: <br className='hidden lg:flex' />
                    Our Blog</h1>
            </div>
            <div className='mt-[40px]'>
                <p className='description w-full lg:w-1/2'> Stay informed with our expert legal insights and advice. Our blog covers key topics to <br className='hidden lg:flex' />  help 
                    you navigate complex legal matters with confidence.</p>
            </div>
            <div className='mt-[40px] grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className=' bg-[#F9F6EE] rounded-lg p-5'>
                    <Image src='/blog.png' height={327} width={455} alt='Blog Icon' />
                    <div className='section-heading uppercase mt-5'>
                        REAL-ESTATE
                    </div>
                    <p className='description mt-5'>Key Legal Rights Every Individual Should Know: A Guide
                        to Protecting Yourself</p>
                    <div className='mt-5 flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <Image src='/person.png' height={30} width={30} alt='Blog Icon' />
                            <p className='description'>Antony Das</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src='/timeIcon.png' height={20} width={20} alt='Blog Icon' />
                            <p className='description uppercase'>10 min to read</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 '>
                    <div className='bg-[#F9F6EE] rounded-lg px-5 pt-5 pb-1'>
                        <div className='section-heading uppercase'>
                            civil law
                        </div>
                        <p className='description '>10 Essential Legal Rights You Should Be Aware of: Protecting Yourself and Navigating Complex
                            Legal Situations with Confidence</p>
                    </div>
                    <div className='bg-[#F9F6EE] rounded-lg px-5 pt-5 pb-1 mt-3'>
                        <div className='section-heading uppercase'>
                            education law
                        </div>
                        <p className='description'>10 Essential Legal Rights You Should Be Aware of: Protecting Yourself and Navigating Complex
                            Legal Situations with Confidence</p>
                    </div>
                    <div className='bg-[#F9F6EE] rounded-lg px-5 pt-5 pb-1 mt-3'>
                        <div className='section-heading uppercase'>
                            criminal law
                        </div>
                        <p className='description '>10 Essential Legal Rights You Should Be Aware of: Protecting Yourself and Navigating Complex
                            Legal Situations with Confidence</p>
                    </div>
                    <div className='bg-[#F9F6EE] rounded-lg px-5 pt-5 pb-1 mt-3'>
                        <div className='section-heading uppercase'>
                            professional law
                        </div>
                        <p className='description'>10 Essential Legal Rights You Should Be Aware of: Protecting Yourself and Navigating Complex
                            Legal Situations with Confidence</p>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Blog;