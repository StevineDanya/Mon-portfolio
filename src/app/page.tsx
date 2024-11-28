"use client"
import { useEffect } from 'react';
import Typed from "typed.js";
import Image from 'next/image';

export default function Home() {

  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: ["Mougoula", "Kimou"],
      typeSpeed: 90,
      backSpeed: 70,  // Corrected from `back`
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className=''>
      <header className="bg-black">
        <nav className="bg-black flex justify-around accent-lime-50 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-white">
              Stevine<span id="typed-text" className='ml-1 text-green-600'></span>
            </h1>
          </div>
          
          
          <div className="hidden md:flex justify-evenly mt-4 md:mt-0" id="menu">
            <ul className="flex flex-col md:flex-row md:justify-evenly w-full gap-5">
              <li className="my-2 md:my-0"><a href="#" className="text-white">Accueil</a></li>
              <li className="my-2 md:my-0"><a href="#" className="text-white">A propos</a></li>
              <li className="my-2 md:my-0"><a href="#" className="text-white">Services</a></li>
              <li className="my-2 md:my-0"><a href="#" className="text-white">Contact</a></li>
              <li className="my-2 md:my-0"><a href="#" className="text-white">Mon blog</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="flex items-center justify-center min-h-screen bg-slate-500 text-white ">
      
      <div className="bg-yellow-800 mr-9">
        <p className="text-yellow-500 uppercase mx-3.5">Bonjour</p>
        <h1 className="text-5xl font-bold">
          Je suis un <span className="text-yellow-500">concepteur de <br /> site web</span> basé à
          Libreville
        </h1>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg">
            Engagez-moi
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-white font-semibold rounded-lg">
            Mes œuvres
          </button>
        </div>
      </div>
      <div className="ml-7">
      {/* <Image
          src="/stevine-removebg-preview.png"  
          alt="Description de l'image"
          width={200} 
          height={150}
          className='rounded-lg' 
        /> */}
      </div>
      </div>


      <div className='flex items-center justify-center min-h-screen bg-black text-white px-8 py-12'>
          <div className="flex flex-col md:flex-row items-center max-w-4xl">
        {/* Profile Image */}
        <div className="md:mr-8">
        
        {/* <Image
          src="/stevine-removebg-preview.png" 
          alt="Description de l'image"
          width={400} 
          height={600}
          className='rounded-lg' 
        /> */}
        </div>

       
        <div className="mt-8 md:mt-0">
          <div className='relative'>
            <h2 className="text-6xl font-bold absolute">Sur moi</h2>
            <h1 className='opacity-10 text-8xl -my-9'>A propos</h1>
            <p className="mt-2 text-gray-400 ">
              Je suis une jeune developpeuse web et web mobile à votre service
            </p>
          </div>

          <div className="mt-4 space-y-2">
            <p>
              <strong>Nom:</strong> MOUGOULA KIMOU
            </p>
            <p>
              <strong>Date de naissance:</strong> 27 novembre 2000
            </p>
            <p>
              <strong>Address:</strong> Libreville PK11
            </p>
            <p>
              <strong>Zip code:</strong> 1000
            </p>
            <p>
              <strong>Email:</strong> mougoulastevine@gmail.com
            </p>
            <p>
              <strong>Numero de téléphone:</strong> +241 066.99.15.66 
            </p>
          </div>

          <a href="/DIALOGUE.pdf"download><button className='px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg'>Télécharger</button></a>
        
        

          {/* Download CV Button */}
          {/* <button className="mt-4 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg">
            Telecharger CV
          </button> */}
        </div>
      </div>
      </div>

      <div className='min-h-screen bg-gray-900 text-white p-10 justify-center items-center px-8 py-20'>
        <div className="relative flex justify-center items-center flex-col" >
          <h1 className='absolute mb-28 text-6xl'>CV</h1>
          <h1 className='opacity-10 text-8xl mb-10'>CV</h1>
          <p className='absolute text-gray-400'>Voici un aperçu des compétences techniques et l expérience professionnelle développée au fil du temps. <br /> C est un pays paradisiaque, où des morceaux de phrases grillées volent dans votre bouche.</p>
       </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mt-6'>
        <div className=" border-2 border-yellow-500 p-4 rounded-lg">
           <div className="text-yellow-500 text-2xl">2020-2021</div>
           <div className="">Baccalauréat série A1</div>
           <div className="">Lycée Charles MEFANE</div>
           <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, totam odio placeat fugiat tempora illo, numquam sunt aut dolores nam distinctio nesciunt voluptatum ad commodi harum, deserunt odit! Mollitia, possimus.</p>
        </div>

        <div className=" border-2 border-yellow-500 p-4 rounded-lg">
          <div className="text-yellow-500 text-2xl mb-2">2024</div>
          <div className="text-white font-semibold">Design UI/UX</div>
          <div className="text-gray-200">Ecole241</div>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, totam odio placeat fugiat tempora illo, numquam sunt aut dolores nam distinctio nesciunt voluptatum ad commodi harum, deserunt odit! Mollitia, possimus.</p>
        </div>

        <div className=" border-2 border-yellow-500 p-4 rounded-lg">
            <div className="text-yellow-500 text-2xl">2024</div>
            <div className="">Intégrateur web</div>
            <div className="">Ecole241</div>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, totam odio placeat fugiat tempora illo, numquam sunt aut dolores nam distinctio nesciunt voluptatum ad commodi harum, deserunt odit! Mollitia, possimus.</p>
        </div>

        <div className=" border-2 border-yellow-500 p-4 rounded-lg">
            <div className="text-yellow-500 text-2xl">2024</div>
            <div className="">Wordpress Developer</div>
            <div className="">Ecole241</div>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, totam odio placeat fugiat tempora illo, numquam sunt aut dolores nam distinctio nesciunt voluptatum ad commodi harum, deserunt odit! Mollitia, possimus.</p>
        </div>

        <div className=" border-2 border-yellow-500 p-4 rounded-lg">
            <div className="text-yellow-500 text-2xl">2024</div>
            <div className="">Développeur Web et Web Mobile</div>
            <div className="">CAMBRIDGE UNIVERSITY</div>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, totam odio placeat fugiat tempora illo, numquam sunt aut dolores nam distinctio nesciunt voluptatum ad commodi harum, deserunt odit! Mollitia, possimus.</p>
        </div>

        <div className=" border-2 border-yellow-500 p-4 rounded-lg">
            <div className="text-yellow-500 text-2xl">2024</div>
            <div className="title">Che de projet</div>
            <div className="institution">Ecole241</div>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, totam odio placeat fugiat tempora illo, numquam sunt aut dolores nam distinctio nesciunt voluptatum ad commodi harum, deserunt odit! Mollitia, possimus.</p>
        </div>
        
        <a href="/DIALOGUE.pdf"download><button className='px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg'>Télécharger</button></a>
          
       </div>
      </div>

      <div className='min-h-screen bg-gray-900 text-white p-10 justify-center items-center px-8 py-20'>
      <div className="relative flex justify-center items-center flex-col" >
          <h1 className='absolute mb-28 text-6xl'>Mes compétences</h1>
          <h1 className='opacity-10 text-8xl mb-10'>Compétence</h1>
          <p className='absolute text-gray-400'>Voici un aperçu des compétences techniques et l expérience professionnelle développée au fil du temps. <br /> C est un pays paradisiaque, où des morceaux de phrases grillées volent dans votre bouche.</p>
       </div>
         
      </div>
    </section>
    
  );
}
