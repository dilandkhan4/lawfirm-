// import Image from 'next/image';
// import React from 'react';

// const Statistics = () => {
//     return (
//         <div className='bg-[#0C0C15]  relative -top-24'>
//             <div className='max-w-[1320px] mx-auto py-14'>
//                <div className='grid grid-cols-2 md:grid-cols-4 '>
 
//                 <div className='flex space-x-5 border-r-2 border-gray-30'>
//                     <div  className='flex justify-center items-center'>
//                         <Image src='/s1 (6).png' width={50} height={50} alt='image'></Image>
//                     </div>
//                     <div className='flex flex-col space-y-3'>
//                         <h1 className='text-white text-3xl font-bold'>162</h1>
//                         <h1 className='text-[#fff] text-xl'>Successful Case</h1>
//                     </div>
//                 </div>

           
//                 <div className='flex space-x-5 border-r-2 border-gray-30'>
//                     <div  className='flex justify-center items-center'>
//                         <Image src='/s1 (2).png' width={50} height={50} alt='image'></Image>
//                     </div>
//                     <div className='flex flex-col space-y-3'>
//                         <h1 className='text-white text-3xl font-bold'>160</h1>
//                         <h1 className='text-[#fff] text-xl'>Case Close</h1>
//                     </div>
//                 </div>
//                 <div className='flex space-x-5 border-r-2 border-gray-30'>
//                     <div  className='flex justify-center items-center'>
//                         <Image src='/s1 (3).png' width={50} height={50} alt='image'></Image>
//                     </div>
//                     <div className='flex flex-col space-y-3'>
//                         <h1 className='text-white text-3xl font-bold'>262</h1>
//                         <h1 className='text-[#fff] text-xl'>Trusted Client</h1>
//                     </div>
//                 </div>
//                 <div className='flex space-x-5 pl-10'>
//                     <div  className='flex justify-center items-center'>
//                         <Image src='/s1 (4).png' width={50} height={50} alt='image'></Image>
//                     </div>
//                     <div className='flex flex-col space-y-3'>
//                         <h1 className='text-white text-3xl font-bold'>60</h1>
//                         <h1 className='text-[#fff] text-xl'>Expert Team</h1>
//                     </div>
//                 </div>
//                </div>
//             </div>
//         </div>
//     );
// };

// export default Statistics;


import Image from 'next/image';
import React from 'react';

const Statistics = () => {
    return (
        <div className='bg-[#0C0C15] relative -top-24'>
            <div className='max-w-[1320px]  mx-auto py-14'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-12'>
                    {/* First Statistic */}
                    <div className='flex items-center space-x-5 border-r-2 border-gray-300 pr-8'>
                        <Image src='/s1 (6).png' width={50} height={50} alt='image' />
                        <div className='flex flex-col'>
                            <h1 className='text-white text-3xl font-bold'>162</h1>
                            <h1 className='text-[#fff] text-xl'>Successful Case</h1>
                        </div>
                    </div>

                    {/* Second Statistic */}
                    <div className='flex items-center space-x-5 border-r-2 border-gray-300 pl-8 pr-8'>
                        <Image src='/s1 (2).png' width={50} height={50} alt='image' />
                        <div className='flex flex-col'>
                            <h1 className='text-white text-3xl font-bold'>160</h1>
                            <h1 className='text-[#fff] text-xl'>Case Close</h1>
                        </div>
                    </div>

                    {/* Third Statistic */}
                    <div className='flex items-center space-x-5 border-r-2 border-gray-300 pl-8 pr-8'>
                        <Image src='/s1 (3).png' width={50} height={50} alt='image' />
                        <div className='flex flex-col'>
                            <h1 className='text-white text-3xl font-bold'>262</h1>
                            <h1 className='text-[#fff] text-xl'>Trusted Client</h1>
                        </div>
                    </div>

                    {/* Fourth Statistic */}
                    <div className='flex items-center space-x-5 pl-8'>
                        <Image src='/s1 (4).png' width={50} height={50} alt='image' />
                        <div className='flex flex-col'>
                            <h1 className='text-white text-3xl font-bold'>60</h1>
                            <h1 className='text-[#fff] text-xl'>Expert Team</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
