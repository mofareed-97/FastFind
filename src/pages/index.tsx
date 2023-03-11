import HeroSection from "@/common/components/AppHero";
import Box from "@/common/components/Box";
import { Container } from "@nextui-org/react";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Box>
        <HeroSection />
      </Box>
    </div>
  );
};

export default Home;
