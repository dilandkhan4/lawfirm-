import Image from 'next/image';
import React from 'react';

const OurMission = () => {
    return (
        <div className=' bg-[#EFF5F5] relative -top-24'>
            <div className=' max-w-[1320px] mx-auto  flex flex-col space-x-10 pt-24 md:flex-row'>
                
                <div>
                    <Image src='/man2.png' height={552} width={476} alt='Blog Icon' />
                </div>
                <div className='max-w-[750px]'>
                    <h1 className='text-[#B68C5A] text-[18px] font-bold pb-6 '>Our Mission</h1>
                    <h3 className='text-[#0C0C15] text-4xl font-bold pb-10 '>Our Promise To You !</h3>
                    <p className='text-[#5B5353] text-[16px] pb-16 text-justify '>Our promise to you is unwavering and unmatched: relentless dedication, personalized attention, and a fierce
                        pursuit of justice. From the moment you walk through our doors, your case becomes our top priority. We
                        pledge to defend your rights with absolute integrity, transparency, and professionalism. No matter how
                        challenging or complex your legal matter may be, we will stand by your side, fight tirelessly, and guide you
                        every step of the way. We are committed to exploring every avenue and leaving no stone unturned to ensure
                        your voice is heard. Our mission is not just to represent you but to partner with you in achieving the best
                        possible outcome. With us, you gain a devoted ally who is deeply invested in your success and well-being.
                        We promise a journey of advocacy marked by unwavering support and a relentless drive for justice, ensuring
                        that you feel confident and secure throughout the entire process</p>
                        <Image src='/signature.png' height={144} width={250} alt='Blog Icon' />
                        <h1 className='text-[#0C0C15] text-[16px] font-medium pt-2'>
                        founder & senior lawyer 
                        </h1>
                </div>
            </div>
        </div>
    );
};

export default OurMission;