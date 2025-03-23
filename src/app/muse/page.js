// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import Header from '../components/Header';




// const images = ['/cat3.jpg', '/cat2.jpg', '/cat.jpg', '/cat3.jpg', '/cat2.jpg'];

// const Navbar = () => {
//   return (
//      <Header />
//   );
// };

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
//       {images.map((src, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: index === currentIndex ? 1 : 0, scale: index === currentIndex ? 1 : 0.8 }}
//           transition={{ duration: 1 }}
//           className="absolute w-1/2 h-3/4 rounded-lg shadow-lg overflow-hidden"
//         >
//           <Image src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default function Home() {
//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-700 text-white">
//       <Navbar />
//       <div className="mt-20 text-center max-w-2xl bg-black bg-opacity-50 p-6 rounded-lg">
//         <h1 className="text-4xl font-bold text-green-400 mb-2">Bienvenue dans le monde Du Développeur Web</h1>
//         <p className="text-lg font-semibold text-yellow-200">Découvre la passion en devenant un front-end</p>
//       </div>
//       <Slider />
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/cat.jpg",
  "/cat.jpg",
  "/cat2.jpg",
  "/cat3.jpg",
  "/cat.jpg",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
   
      
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        
        
        <div
          className="absolute inset-0 flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`Slide ${i + 1}`}
              className="absolute w-full h-full object-cover transition-opacity duration-1000"
              animate={{ opacity: i === index ? 1 : 0 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
