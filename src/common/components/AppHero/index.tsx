import { Button, Container, Grid, Text } from "@nextui-org/react";
import ShoppingGirl from "@/assets/images/nike-shoes-1.png";
import Image from "next/image";
import React from "react";
import Box from "../Box";
import SVGWave from "./wave.svg";

const HeroSection = () => {
  return (
    <Box
      classes={{
        height: "80vh",
        overflow: "hidden",
        borderBottom: "1px solid $accents5",
      }}
    >
      <Container lg css={{ py: "$10", height: "100%" }}>
        <div className="flex  justify-center lg:justify-between items-center h-full">
          <div className="text-center lg:text-left">
            <div className="">
              <Text
                h1
                size={60}
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
              >
                Shop the Latest
              </Text>
              <Text
                h1
                size={60}
                css={{
                  textGradient: "45deg, $purple600 -20%, $pink600 100%",
                }}
                weight="bold"
              >
                Trends with Our
              </Text>
              <Text
                h1
                size={60}
                css={{
                  textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }}
                weight="bold"
              >
                Online Store
              </Text>
            </div>
            <Text css={{ maxWidth: 600 }}>
              Welcome to FastFind, where you can discover a vast array of
              products and find everything you need for your home, wardrobe, and
              lifestyle. Our website offers a user-friendly and convenient
              shopping experience, with easy navigation and search functions to
              help you find exactly what you are looking for.
            </Text>

            <div className="flex items-center gap-5 justify-center lg:justify-start">
              <Button color="gradient" css={{ mt: "$20" }}>
                Shop Now
              </Button>
              <Button bordered color="gradient" css={{ mt: "$20" }}>
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute w-[500px] h-[500px] bg-orange-400 rounded-full"></div>
            <div className="relative">
              <Image
                src={ShoppingGirl}
                width="500"
                height="500"
                alt="shoes"
                priority
              />
            </div>
          </div>
        </div>
        <div className=""></div>
      </Container>
    </Box>
  );
};

export default HeroSection;
