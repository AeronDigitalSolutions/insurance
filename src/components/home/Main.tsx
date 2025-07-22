import React from "react";
import Carousel from "../ui/Carousal";
import carousalImage from "@/assets/home/carousal1.jpeg";
import carousalImage1 from "@/assets/home/carousal1.jpeg";
import carousalImage2 from "@/assets/home/carousal1.jpeg";
import { div } from "framer-motion/client";

const images = [carousalImage, carousalImage1, carousalImage2];

function Main() {
  return <Carousel images={images }/>;
}

export default Main;
