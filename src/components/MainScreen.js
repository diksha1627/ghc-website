import React, { useState, useEffect } from "react";
import product from "../assests/product.png";
import tag from "../assests/tag.png";
import stars from "../assests/stars.png";
import heart from "../assests/heart.png";
import banner from "../assests/banner.png";
import banner2 from "../assests/banner2.png"
import blog1 from "../assests/blog1.png";
import blog2 from "../assests/blog2.png";
import blog3 from "../assests/blog3.png";
import blog4 from "../assests/blog4.png";
import blog5 from "../assests/blog5.png";
import blog6 from "../assests/blog6.png";
import blog7 from "../assests/blog7.png";
import blog0 from "../assests/blog0.png";
import hairProduct1 from "../assests/hairProduct1.png";
import hairProduct2 from "../assests/hairProduct2.png";
import weight1 from "../assests/weight1.png";
import icon1 from "../assests/icon1.png";
import icon2 from "../assests/icon2.png";
import icon3 from "../assests/icon3.png";
import icon4 from "../assests/icon4.png";
import drop from "../assests/drop.png";
import bed from "../assests/bed.png";
import fire from "../assests/fire.png";
import image from "../assests/image.png";
import arrow from "../assests/arrow.png";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Navbar from "./Navbar";
import Footer from "./Footer";
function MainScreen() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(width);
  const boxWidth = width / 5.1;

  const carousalArr = [
    {
      id: 1,
      image: product,
    },
    {
      id: 2,
      image: product,
    },
    {
      id: 3,
      image: product,
    },
    {
      id: 4,
      image: product,
    },
    {
      id: 5,
      image: product,
    },
    {
      id: 6,
      image: product,
    },

    {
      id: 7,
      image: product,
    },
    {
      id: 8,
      image: product,
    },
  ];

  const carousalArrHair = [
    {
      id: 1,
      image: hairProduct1,
    },
    {
      id: 2,
      image: hairProduct2,
    },
    {
      id: 3,
      image: product,
    },
    {
      id: 4,
      image: product,
    },

    {
      id: 5,
      image: product,
    },
    {
      id: 6,
      image: product,
    },

    {
      id: 7,
      image: product,
    },
    {
      id: 8,
      image: product,
    },
  ];

  const carousalBlog1 = [
    {
      id: 1,
      image: blog0,
    },
    {
      id: 2,
      image: blog1,
    },
    {
      id: 3,
      image: blog2,
    },
    {
      id: 4,
      image: blog3,
    },
    {
      id: 5,
      image: blog4,
    },
    {
      id: 6,
      image: blog5,
    },
    {
      id: 7,
      image: blog6,
    },
    {
      id: 8,
      image: blog7,
    },
  ];

  const carousalBlog2 = [
    {
      id: 1,
      image: blog4,
    },
    {
      id: 2,
      image: blog5,
    },
    {
      id: 3,
      image: blog6,
    },
    {
      id: 4,
      image: blog7,
    },
  ];

  const iconArr = [
    {
      id: 1,
      image: icon1,
      color:"#CDCCF3",
      text:"TRACK"
    },
    {
      id: 2,
      image: icon2,
      color:"#F5FCC6",
      text:"WALLET",
    },
    {
      id: 3,
      image: icon3,
      color:"#C5EEFD",
      text:"BLOGS",

    },
    {
      id: 4,
      image: icon4,
      color:"#FDEEE0",
      text:"CONSULT",

    },
  ];

  const bannerArr = [
    {
      id: 1,
      image: banner,
    },
    {
      id: 2,
      image: banner2,
    },
    {
      id: 3,
      image: banner,
    },
  ];

  return (
    <div
      className="flex flex-col w-[100%]
     gap-3 h-auto justify-center
      items-center"
    >

    
    <Navbar/>


      <h1 className="w-[95%] text-b size-[22] font-sans flex justify-start">
        Welcome,
        <span className="font-bold">
          June!
        </span>
      </h1>

      <div className="flex flex-row items-center justify-around w-[100%]">
        {iconArr.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center"
              style={{
                width: `${boxWidth}px`,
                height: `${boxWidth}px`,
                backgroundColor: item.color,
                borderRadius: "1rem",
              }}
            >
              <img className="w-[70%] h-[50%]" src={item.image} alt="" />
              <h1
                className="size-[10px]  font-[500]  w-[100%] 
          text-center"
              >
                {item.text}
              </h1>
            </div>
          );
        })}
      </div>

      <div className="flex w-[100%]  justify-center ">
        <div
          className="bg-[#EFEEFB] rounded-xl w-[95%] h-[114px] 
        flex flex-row justify-between items-between"
        >
          <div className="flex flex-col items-center w-[40%] relative">
            <h1
              className="text-[15px] font-[500] w-[100%]
                 text-center"
            >
              Wellness Overview:
            </h1>
            <div
              className="flex flex-row h-auto
                  w-[100%] justify-center gap-2
                  items-center
                  "
            >
              <h1
                className="text-[40px] font-[500] 
                 text-center"
              >
                40
              </h1>
              <div
                className="h-[24px] 
                flex justify-center 
                items-center bg-[white] 
                rounded-2xl absolute right-[-15px]"
              >
                <h1
                  className="pl-1 pr-1 font-[500] w-[100%]
                   text-[10px] text-center text-[#FA725F]"
                >
                  Overweight
                </h1>
              </div>
            </div>
            <h1
              className="size-12 w-[100%] 
                text-center"
            >
              Your current BMI
            </h1>
          </div>

          <div
            className="flex flex-col 
            w-[50%] justify-center items-center
             gap-2"
          >
            <div
              className="flex justify-between items-center
                   flex-row w-[80%] pl-10 pr-5 h-[26px] rounded-2xl 
                   bg-[white] gap-2"
            >
              <img src={weight1} className="w-[18px] h-[18px]" />
              <h1 className="w-[80%] text-[12px]">80.5kgs</h1>
            </div>
            <div
              className="flex justify-between items-center
                   flex-row w-[80%] pl-10 pr-5 h-[26px] rounded-2xl 
                   bg-[white] gap-2"
            >
              <img src={bed} className="w-[18px] h-[18px]" alt=""/>
              <h1 className="w-[80%] text-[12px]">7/8 Hours</h1>
            </div>
            <div
              className="flex justify-between items-center
                   flex-row w-[80%] pl-10 pr-5 h-[26px] rounded-2xl 
                   bg-[white] gap-2"
            >
              <img src={drop} className="w-[18px] h-[18px]"  alt=""/>
              <h1 className="w-[80%] text-[11px]">4/7 Glasses</h1>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-row w-[100%]
       justify-evenly"
      >
        <div className="flex flex-col w-[46.5%] h-[114px] rounded-xl bg-[#FFF3EB] justify-center items-center">
          <h1 className="text-[14px] font-[700] text-center">
            Overall Skin score:
          </h1>
          <div>
            <div className="flex flex-row gap-1 justify-center items-center">
              <h1
                className="text-[40px] font-[500] 
                 text-center"
              >
                45
              </h1>
              <div className="flex flex-col justify-center ">
                <div className="flex flex-row w-[70px] justify-between items-center">
                  <img src={fire} className="w-[14px] h-[14px]" alt=""/>
                  <h1 className="text-[12px] text-[#777777]">5 weeks</h1>
                </div>
                <div className="flex flex-row w-[85px]  justify-between items-center">
                  <img src={image} className="w-[14px] h-[14px]" alt=""/>
                  <h1 className="text-[12px] text-[#777777]">20 uploads</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] h-[4px] rounded-xl bg-[#FF7F7F]">
            <div className="w-[50%] h-[4px] rounded-xl bg-[red]"></div>
          </div>
          <div className="flex justify-start w-[90%] ">
            <h1 className="">Week: 40/54</h1>
          </div>
        </div>

        <div
          className="flex flex-col w-[46.5%] h-[114px] rounded-xl 
        bg-[#FFF3EB] justify-center items-center gap-2"
        >
          <h1
            className="text-[14px] font-[700] 
                 text-center"
          >
            Hair Tracker:
          </h1>
          <div>
            <div className="flex flex-row gap-1 justify-center items-center">
              <div className="flex flex-col justify-center ">
                <div className="flex flex-row w-[70px] justify-between items-center">
                  <img src={fire} className="w-[14px] h-[14px]" alt=""/>
                  <h1 className="text-[12px] text-[#777777]">5 weeks</h1>
                </div>
                <div className="flex flex-row w-[85px]  justify-between items-center">
                  <img src={image} className="w-[14px] h-[14px]" alt="" />
                  <h1 className="text-[12px] text-[#777777]">20 uploads</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] h-[4px] rounded-xl bg-[#FF7F7F] relative top-2">
            <div className="w-[50%] h-[4px] rounded-xl bg-[red]"></div>
          </div>
          <div className="flex justify-start w-[90%]  ">
            <h1 className="">Week: 40/54</h1>
          </div>
        </div>
      </div>

      <div className="flex w-[100%]  justify-center items-center ">
        <div
          className="flex flex-row items-center pl-10 pr-10 bg-[#333333] w-[95%] h-[48px] 
        justify-between rounded-md"
        >
          <h1 className="text-[white] text-[16px]">View all trackers</h1>
          <img className="w-[8px] h-[13px]" src={arrow} alt="" />
        </div>
      </div>

      <Swiper
        freeMode={true}
        pagination={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper flex flex-row items-center justify-between
         w-[95%] h-[336px]"
      >
        {bannerArr.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="flex w-[100%]  justify-center ">
                <div className=" w-[95%] h-[336px] rounded-3xl">
                  <img
                    src={item.image}
                    className="w-[100%] rounded-3xl h-[100%] bg-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex w-[100%]  justify-center items-center ">
        <div
          className="flex flex-row items-center 
          w-[94%] h-[48px] 
        justify-between "
        >
          <h1
            className="font-[500]
          text-[20px]"
          >
            Bestsellers
          </h1>
          <div
            className="flex w-[83px] h-[24px] rounded-2xl 
          border-[black] border-[2px] justify-center items-center"
          >
            <h1 className="text-[12px] ">View all</h1>
          </div>
        </div>
      </div>

      <Swiper
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper flex flex-row items-center justify-between
         w-[95%] h-[250px]"
        breakpoints={{
          200: {
            slidesPerView: 2.2,
            spaceBetween: 40,
          },
          400: {
            slidesPerView: 2.9,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 3.2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
      >
        {carousalArr.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div
                className="w-[152px] h-[229px] rounded-2xl flex flex-col
          items-center  shadow-[0_3px_15px_rgb(0,0,0,0.3)] relative "
              >
                <div className="absolute z-[1] w-[50px] h-[20px] left-0 top-4">
                  <img src={tag} alt="" />
                </div>
                <div className="absolute z-[1] w-[18px] h-[18px] right-3 top-5">
                  <img src={heart} alt="" />
                </div>
                <img
                  src={item.image}
                  className="w-[100%] h-[146px] bg-cover"
                  alt="Product"
                  
                />
                <div className="flex flex-col">
                  <h1>Anti-ageing Combo</h1>
                  <div className="flex items-center w-[70px] h-[16px] gap-2">
                    <img src={stars} className="w-[100%] h-[100%]"  alt=""/>
                    <h1>(4.5)</h1>
                  </div>
                  <h1>
                    Rs. 999 <span>Rs. 1,598</span>
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex w-[100%]  justify-center items-center ">
        <div
          className="flex flex-row items-center 
          w-[94%] h-[48px] 
        justify-between "
        >
          <h1
            className="font-[500]
          text-[20px]"
          >
            Hair Care
          </h1>
          <div
            className="flex w-[83px] h-[24px] rounded-2xl 
          border-[black] border-[2px] justify-center items-center"
          >
            <h1 className="text-[12px] ">View all</h1>
          </div>
        </div>
      </div>

      <Swiper
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper flex flex-row items-center justify-between 
        w-[95%] h-[250px]"
        breakpoints={{
          200: {
            slidesPerView: 2.2,
            spaceBetween: 40,
          },
          400: {
            slidesPerView: 2.9,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 3.2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
      >
        {carousalArrHair.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div
                className="w-[152px] h-[229px] rounded-2xl flex flex-col
          items-center  shadow-[0_3px_15px_rgb(0,0,0,0.3)] relative "
              >
                <div className="absolute z-[1] w-[50px] h-[20px] left-0 top-4">
                  <img src={tag} alt="" />
                </div>
                <div className="absolute z-[1] w-[18px] h-[18px] right-3 top-5">
                  <img src={heart} alt="" />
                </div>
                <img
                  src={item.image}
                  className="w-[100%] h-[146px] bg-cover"
                  alt="Product"

                />
                <div className="flex flex-col">
                  <h1>Anti-ageing Combo</h1>
                  <div className="flex items-center w-[70px] h-[16px] gap-2">
                    <img src={stars} className="w-[100%] h-[100%]" alt="" />
                    <h1>(4.5)</h1>
                  </div>
                  <h1>
                    Rs. 999 <span>Rs. 1,598</span>
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex w-[100%]  justify-center items-center ">
        <div className="flex flex-row items-center w-[94%] h-[48px] justify-between ">
          <h1 className="font-[500] text-[20px]">Understanding Hair</h1>
          <div className="flex w-[83px] h-[24px] rounded-2xl border-[black] border-[2px] justify-center items-center">
            <h1 className="text-[12px] ">View all</h1>
          </div>
        </div>
      </div>

      <Swiper
        freeMode={true}
        modules={[FreeMode]}
        className=" flex flex-row items-center gap-4 justify-center
         w-[95%] h-[300px] mySwiper"
        breakpoints={{
          200: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          300: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2.1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {carousalBlog1.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="w-[271px] h-[271px] rounded-2xl">
                <div className="absolute left-2 top-2 bg-black  w-[94%] h-[94%] opacity-50 rounded-2xl z-0"></div>
                <img
                  src={item.image}
                  className="w-[100%] h-[100%] rounded-2xl bg-contain opacity-[1] absolute z-[-1]"
                  alt="Blog Image"
                />

                <h1 className="text-[14px] font-[500] absolute bottom-16 left-4 text-white w-[80%] z-10">
                  Groom to Perfection: Aloe Vera Hair Mask for Men's Hair Care
                </h1>
                <h1 className="text-[10px] font-[400] absolute bottom-12 left-4 text-white z-10">
                  By Mars by GHC on Jun 22, 2022
                </h1>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex w-[100%]  justify-center items-center ">
        <div className="flex flex-row items-center w-[94%] h-[48px] justify-start">
          <h1 className="font-[500] text-[20px]">Skin Care</h1>
        </div>
      </div>

      <Swiper
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper flex flex-row items-center 
        justify-between w-[95%] h-[250px]"
        breakpoints={{
          200: {
            slidesPerView: 2.2,
            spaceBetween: 40,
          },
          400: {
            slidesPerView: 2.9,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 3.2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
      >
        {carousalArr.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div
                className="w-[152px] h-[229px] rounded-2xl flex flex-col
          items-center  shadow-[0_3px_15px_rgb(0,0,0,0.3)] relative "
              >
                <div className="absolute z-[1] w-[50px] h-[20px] left-0 top-4">
                  <img src={tag} alt="" />
                </div>
                <div className="absolute z-[1] w-[18px] h-[18px] right-3 top-5">
                  <img src={heart} alt="" />
                </div>
                <img
                  src={item.image}
                  className="w-[100%] h-[146px] bg-cover"
                  alt="Product"
                />
                <div className="flex flex-col">
                  <h1>Anti-ageing Combo</h1>
                  <div className="flex items-center w-[70px] h-[16px] gap-2">
                    <img src={stars} className="w-[100%] h-[100%]" alt="" />
                    <h1>(4.5)</h1>
                  </div>
                  <h1>
                    Rs. 999 <span>Rs. 1,598</span>
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex w-[100%]  justify-center items-center ">
        <div className="flex flex-row items-center w-[94%] h-[48px] justify-start">
          <h1 className="font-[500] text-[20px]">Skin Talk</h1>
        </div>
      </div>
      <Swiper
        freeMode={true}
        modules={[FreeMode]}
        className=" flex flex-row items-center gap-4 justify-center w-[95%] h-[300px] mySwiper"
        breakpoints={{
          200: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          300: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2.1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {carousalBlog1.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="w-[271px] h-[271px] rounded-2xl">
                <div className="absolute left-2 top-2 bg-black  w-[94%] h-[94%] opacity-50 rounded-2xl z-0"></div>
                <img
                  src={item.image}
                  className="w-[100%] h-[100%] rounded-2xl bg-contain opacity-[1] absolute z-[-1]"
                  alt="Blog Image"
                />

                <h1 className="text-[14px] font-[500] absolute bottom-16 left-4 text-white w-[80%] z-10">
                  Groom to Perfection: Aloe Vera Hair Mask for Men's Hair Care
                </h1>
                <h1 className="text-[10px] font-[400] absolute bottom-12 left-4 text-white z-10">
                  By Mars by GHC on Jun 22, 2022
                </h1>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>


    <Footer/>
    </div>
  );
}

export default MainScreen;
