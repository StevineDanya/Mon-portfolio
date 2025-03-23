'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../components/Header';




const images = ['/cat3.jpg', '/cat2.jpg', '/cat.jpg', '/cat3.jpg', '/cat2.jpg'];

const Navbar = () => {
  return (
     <Header />
  );
};

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      {images.map((src, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: index === currentIndex ? 1 : 0, scale: index === currentIndex ? 1 : 0.8 }}
          transition={{ duration: 1 }}
          className="absolute w-1/2 h-3/4 rounded-lg shadow-lg overflow-hidden"
        >
          <Image src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-700 text-white">
      <Navbar />
      <div className="mt-20 text-center max-w-2xl bg-black bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-4xl font-bold text-green-400 mb-2">Bienvenue dans le monde Du Développeur Web</h1>
        <p className="text-lg font-semibold text-yellow-200">Découvre la passion en devenant un front-end</p>
      </div>
      <Slider />
    </div>
  );
}
