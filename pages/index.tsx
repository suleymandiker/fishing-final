import React from "react";
import { NextPage } from "next";
import SeoHead from "../components/global/SeoHead";
import Main from "../components/Main";
import SlideImg from "../components/SlideImg";
import Features from "../components/Features";
import TriToken from "../components/TriToken";
import RoadMap from "../components/RoadMap";
import NfClub from "../components/NfClub";
import FooterTop from "../components/FooterTop";

const IndexPage: NextPage = () => {
  return (
    <div>
      <SeoHead title={"Home - Fishing"} description={"NF Club"} />
      <Main />
      <SlideImg />
      <Features />
      <TriToken />
      <RoadMap />
      <NfClub />
      <FooterTop view="index" />
    </div>
  );
};

export default IndexPage;
