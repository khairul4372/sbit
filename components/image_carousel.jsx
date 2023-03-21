import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import slide1 from "../public/images/slide1.jpeg";
import slide2 from "../public/images/slide2.jpeg";
import slide3 from "../public/images/slide3.jpeg";
import slide4 from "../public/images/slide4.jpeg";
import slide5 from "../public/images/slide5.jpeg";

/* const items = [
  {
    src: "/images/slide1.jpeg",
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: "/images/slide2.jpeg",
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: "/images/slide3.jpeg",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
  {
    src: "/images/slide4.jpeg",
    altText: "Slide 4",
    caption: "",
    header: "",
    key: "4",
  },
  {
    src: "/images/slide5.jpeg",
    altText: "Slide 5",
    caption: "",
    header: "",
    key: "5",
  },
]; */

const ImageCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <Image className="d-block w-100" src={slide1} alt="First slide" />
      {/* <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
      <Image className="d-block w-100" src={slide2} alt="Second slide" />
    </Carousel.Item>
    <Carousel.Item>
      <Image className="d-block w-100" src={slide3} alt="Third slide" />
    </Carousel.Item>
    <Carousel.Item>
      <Image className="d-block w-100" src={slide4} alt="Forth slide" />
    </Carousel.Item>
    <Carousel.Item>
      <Image className="d-block w-100" src={slide5} alt="Fifth slide" />
    </Carousel.Item>
  </Carousel>
);

export default ImageCarousel;
