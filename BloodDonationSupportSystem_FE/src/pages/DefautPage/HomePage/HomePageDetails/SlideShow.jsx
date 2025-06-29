import { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const slides = [
  {
    image: "/banner/banner4.png",
    caption: "Hinh 1",
  },
  {
    image: "/banner/banner5.png",
    caption: "Hinh 2",
  },

];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        marginTop: "64px",
        width: "100%",
        height: "400px",
        overflow: "hidden",
        boxShadow: 3,
      }}
    >
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: index === current ? 1 : 0,
            zIndex: index === current ? 2 : 1,
            transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1)",
            pointerEvents: index === current ? "auto" : "none",
          }}
        >
          <img
            src={slide.image}
            alt={slide.caption}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </Box>
      ))}

      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "40%",
          height: "100px",
          width: "100px",
          left: 16,
          color: "black",
          zIndex: 1,
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          height: "100px",
          width: "100px",
          top: "40%",
          right: 16,
          color: "black",
          zIndex: 1,
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Banner;
