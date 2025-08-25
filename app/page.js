import CaseStudy from '@/components/CaseStudy';
import ClientsExperience from '@/components/ClientsEcperience';
import FaceJustice from '@/components/FaceJustice/FaceJustice';
import Hero2 from '@/components/Hero2';
import Home2AboutUs from '@/components/Home2AboutUs';
import LatestAndTopBlog from '@/components/LatestAndTopBlog';
import OnlineBooking from '@/components/OnlineBooking';
import OurMission from '@/components/OurMission';
import OurServices from '@/components/OurServices';
import OurTeam from '@/components/OurTeam/OurTeam';
import Statistics from '@/components/Statistics';
import React from 'react';

export default function Home() {
    return (
       <div>
             <Hero2></Hero2>
             <Statistics></Statistics>
             <OurMission></OurMission>
             <OurServices></OurServices>
             <Home2AboutUs></Home2AboutUs>
             <OurTeam></OurTeam>
             {/* <FaceJustice></FaceJustice> */}
             <CaseStudy></CaseStudy>
             <ClientsExperience></ClientsExperience>
             <LatestAndTopBlog></LatestAndTopBlog>
             <OnlineBooking></OnlineBooking>
     
        </div>
    );
}
