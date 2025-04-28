"use client"
import React from 'react'
import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick'), { ssr: false });
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { renderImage } from '@/utils/ImageRender';

const BlogSection = () => {

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
         },
        {
            image:"/Images/desserts/dessert2.jpg",
            title: 'Italian Pasta',
         },
        {
            image:"/Images/desserts/dessert3.jpg",
            title: 'Mexican Tacos',
         },
        {
            image:"/Images/desserts/dessert4.jpg",
            title: 'Desserts & Cakes',
         },
        {
            image:"/Images/desserts/dessert5.jpg",
          title: 'Healthy Salads',
         },
      ]
    
  return (
    <section className="py-16 md:py-32">
    <div className="container mx-auto flex items-center justify-between">
      <div className="space-y-2.5">
        <p className="section-tag">Latest News </p>
        <h4 className="section-title">Check Our Blog</h4>
      </div>
     </div>
           <div className="mt-10    ">
             <Slider {...settings}>
               {menuItems.map((item, index) => (
                 <div key={index} className="px-5 h-fit">
                   <div className="space-y-4 ">
                     <div className="h-[300px] bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden group  relative cursor-pointer">
                        <div className='absolute top-4 left-4 bg-white w-fit text-black px-4 py-2 z-10   text-sm rounded-lg'>
                            <span className='font-semibold  text-lg'>22</span> <br /> SEP
                        </div>
                          <Image  width={700} height={700} className='w-full h-full object-cover group-hover:scale-110 duration-300 ' alt='banner' src={renderImage(item.image)}   />
                     </div>
                     <div className='space-y-2'>
                       <h3 className="text-lg font-bold">{item.title}</h3>
                      </div>
                   </div>
                 </div>
               ))}
             </Slider>
           </div>
    </section>
  )
}

export default BlogSection