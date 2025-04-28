"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick'), { ssr: false });
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { renderImage } from '@/utils/ImageRender';
  
const OurMenusSlider = () => {

    function SampleNextArrow(props:any) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
              ...style,
              display: "none",
              background: "green",
    
              borderRadius: "100%",
            }}
            onClick={onClick}
          />
        );
      }
    
      function SamplePrevArrow(props:any) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
              ...style,
              display: "none",
              background: "green",
              borderRadius: "100%",
            }}
            onClick={onClick}
          />
        );
      }


    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    
    
        dots: false,
    
        draggable: true,
        autoplay: true,
        autoplaySpeed: 3000,
    
        responsive: [
          {
            breakpoint: 1100, // lg breakpoint
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  const menuItems = [
    {
     image:"/Images/desserts/dessert1.jpg",
     title: 'Asian Dry Food',
     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident possimus laborum!',
    },
    {
        image:"/Images/desserts/dessert2.jpg",
        title: 'Italian Pasta',
        desc: 'Freshly made pasta with rich tomato sauce and cheese.',
    },
    {
        image:"/Images/desserts/dessert3.jpg",
        title: 'Mexican Tacos',
        desc: 'Spicy, crunchy, and filled with flavorful meat.',
    },
    {
        image:"/Images/desserts/dessert4.jpg",
        title: 'Desserts & Cakes',
        desc: 'Satisfy your sweet cravings with our signature desserts.',
    },
    {
        image:"/Images/desserts/dessert5.jpg",
      title: 'Healthy Salads',
      desc: 'Fresh, green, and nutrient-packed salads.',
    },
  ]

  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto flex items-center justify-between">
        <div className="space-y-2.5">
          <p className="section-tag">New Menu</p>
          <h4 className="section-title">View Our Menus</h4>
        </div>
        <button className="btn-2">View All</button>
      </div>

      <div className="mt-10    ">
        <Slider {...settings}>
          {menuItems.map((item, index) => (
            <div key={index} className="px-6 h-fit">
              <div className="space-y-8 ">
                <div className="h-[480px] bg-white rounded-xl shadow-xl hover:shadow-2xl overflow-hidden group ">
                     <Image  width={700} height={700} className='w-full h-full object-cover group-hover:scale-110 duration-300 ' alt='banner' src={renderImage(item.image)}   />
                </div>
                <div className='space-y-2'>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurMenusSlider;
