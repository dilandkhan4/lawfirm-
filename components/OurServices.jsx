import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const OurServices = () => {
    return (
        <div className='max-w-[1320px] mx-auto mb-20'>
            <div>
                <h1 className='text-[#B68C5A] text-[18px] font-bold pb-6 '>Service</h1>
                <h3 className='text-[#0C0C15] text-4xl font-bold pb-10 '>Our Practice Area </h3>
                <p className='text-[#5B5353] text-[16px] pb-16 text-justify max-w-[540px] '> Our legal services are designed to protect your rights and deliver results.
                    With expertise across a range of practice areas, we provide personalized,
                    professional support for every case. </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {/* Additional Services */}
                    <div className='border-[#E4D7D7] bg-[#EFF5F5] hover:bg-[#B68C5A] hover:text-[white]  max-w-[312px] rounded-lg transition-colors duration-300 group'>
                        <div className='p-6 hover:text-white'>
                            <Image src='/4.png' height={26} width={32} alt='Corporate Law' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>
                            <h1 className='text-[18px] font-bold pt-10'>Corporate & Commercial Law</h1>
                            <p className=' text-[16px] pt-10 text-justify '>Expert legal advice for businesses, contracts, mergers, acquisitions, and regulatory compliance.</p>
                        </div>
                    </div>
                    <div className='border-[#E4D7D7] bg-[#EFF5F5] hover:bg-[#B68C5A] hover:text-[white]  max-w-[312px] rounded-lg transition-colors duration-300 group'>
                        <div className='p-6 hover:text-white'>
                            <Image src='/6.png' height={26} width={32} alt='Intellectual Property' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>
                            <h1 className='text-[18px] font-bold pt-10'>Intellectual Property</h1>
                            <p className=' text-[16px] pt-10 text-justify '>Protection and enforcement of trademarks, copyrights, patents, and trade secrets.</p>
                        </div>
                    </div>
                    <div className='border-[#E4D7D7] bg-[#EFF5F5] hover:bg-[#B68C5A] hover:text-[white]  max-w-[312px] rounded-lg transition-colors duration-300 group'>
                        <div className='p-6 hover:text-white'>
                            <Image src='/7.png' height={26} width={32} alt='Litigation' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>
                            <h1 className='text-[18px] font-bold pt-10'>Litigation & Dispute Resolution</h1>
                            <p className=' text-[16px] pt-10 text-justify '>Representation in court, arbitration, and mediation for civil and commercial disputes.</p>
                        </div>
                    </div>
                    <div className='border-[#E4D7D7] bg-[#EFF5F5] hover:bg-[#B68C5A] hover:text-[white]  max-w-[312px] rounded-lg transition-colors duration-300 group'>
                        <div className='p-6 hover:text-white'>
                            <Image src='/8.png' height={26} width={32} alt='Employment Law' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>
                            <h1 className='text-[18px] font-bold pt-10'>Employment & Labor Law</h1>
                            <p className=' text-[16px] pt-10 text-justify '>Advice on employment contracts, workplace disputes, and labor regulations for employers and employees.</p>
                        </div>
                    </div>
                    <div className='border-[#E4D7D7] bg-[#EFF5F5] hover:bg-[#B68C5A] hover:text-[white]  max-w-[312px] rounded-lg transition-colors duration-300 group'>
                        <div className='p-6 hover:text-white'>
                            <Image src='/2.png' height={26} width={32} alt='order' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>

                            <h1 className='text-[18px] font-bold pt-10'>Law Family</h1>
                            <p className=' text-[16px] pt-10 text-justify '>Lorem ipsum dolor sit amet, consecte
                            tur adipiscing elit. Ut vitae eros nec turpis ornare gravida. Integer lacinia libero tortor. Ut lobortis purus diam, vitae lobortis velit auctor sit amet   </p>

                        </div>
                    </div>
                    <div className='border-[#E4D7D7] bg-[#EFF5F5] hover:bg-[#B68C5A] hover:text-[white]  max-w-[312px] rounded-lg transition-colors duration-300 group'>
                        <div className='p-6 hover:text-white'>
                            <Image src='/hs.png' height={26} width={32} alt='order' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>

                            <h1 className='text-[18px] font-bold pt-10'>Law Criminal</h1>
                            <p className=' text-[16px] pt-10 text-justify '>Lorem ipsum dolor sit amet, consecte
                            tur adipiscing elit. Ut vitae eros nec turpis ornare gravida. Integer lacinia libero tortor. Ut lobortis purus diam, vitae lobortis velit auctor sit amet   </p>

                        </div>
                    </div>
                    <div className='border-[#E4D7D7] bg-[#EFF5F5] hover:bg-[#B68C5A] hover:text-[white]  max-w-[312px] rounded-lg transition-colors duration-300 group'>
                        <div className='p-6 hover:text-white'>
                            <Image src='/3.png' height={26} width={32} alt='order' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>

                            <h1 className='text-[18px] font-bold pt-10'>Law Real-Estate</h1>
                            <p className=' text-[16px] pt-10 text-justify '>Lorem ipsum dolor sit amet, consecte
                            tur adipiscing elit. Ut vitae eros nec turpis ornare gravida. Integer lacinia libero tortor. Ut lobortis purus diam, vitae lobortis velit auctor sit amet   </p>

                        </div>
                    </div>
                    <div className='border-[#E4D7D7] bg-[#EFF5F5] hover:bg-[#B68C5A] hover:text-[white]  max-w-[312px] rounded-lg transition-colors duration-300 group'>
                        <div className='p-6 hover:text-white'>
                            <Image src='/5.png' height={26} width={32} alt='order' className='transition-colors duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'></Image>

                            <h1 className='text-[18px] font-bold pt-10'>Law Professional Advice</h1>
                            <p className=' text-[16px] pt-10 text-justify '>Lorem ipsum dolor sit amet, consecte
                            tur adipiscing elit. Ut vitae eros nec turpis ornare gravida. Integer lacinia libero tortor. Ut lobortis purus diam, vitae lobortis velit auctor sit amet   </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end pt-12">
                <Link href="/services">
                    <button className="px-8 py-4 border-2 border-[#B68C5A] text-[#1D1C22] text-xl rounded-[4px] hover:bg-[#B68C5A] hover:text-white transition-colors duration-300">
                        View All Services
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default OurServices;