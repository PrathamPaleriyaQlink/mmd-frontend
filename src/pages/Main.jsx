import React from "react";
import helmet from "helmet";
import HeroSection from "../components/landing/HeroSection";
import Section1 from "../components/landing/Section1";
import Marque1 from "../components/landing/Marque1";
import WhyThisExists from "../components/landing/WhyThisExists";
import WhoThisIsFor from "../components/landing/WhoThisIsFor";
import Image12Section from "../components/landing/Image12Section";
import WhatMakesDifferent from "../components/landing/WhatMakesDifferent";
import PortalFeaturesSection from "../components/landing/PortalFeaturesSection";
import MasterclassVault from "../components/landing/MasterclassVault";
import FinalCTA from "../components/landing/FinalCTA";
import IsThisForYouSection from "../components/landing/IsThisForYouSection";
import MeetSanaya from "../components/landing/MeetSanaya";

const Main = () => {
  return (
    <div>
      <helmet>
        <meta charSet="utf-8" />
        <title>Menifest My Dreams</title>
      </helmet>
      <div className="">
        <HeroSection/>
        <Section1/>
        <Marque1/>
        <WhyThisExists/>
        <WhoThisIsFor/>
        <Image12Section/>
        <WhatMakesDifferent/>
        <PortalFeaturesSection/>
        <Marque1/>
        <MasterclassVault/>
        <FinalCTA/>
        <IsThisForYouSection/>
        <MeetSanaya/>
      </div>
    </div>
  );
};

export default Main;
