'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Emily KOUMBA',
    review: "Je suis absolument ravie de mon expérience d'achat sur O'lo Store. La qualité des produits est excellente et la livraison a été rapide et efficace.",
    image: '/images/emily.jpg', // Remplace avec la vraie image
  },
  {
    id: 2,
    name: 'Chef ONANGA',
    review: "O'lo Store est devenu mon magasin de référence pour l'électronique. J'ai commandé un nouvel ordinateur portable et il est arrivé en parfait état.",
    image: '/images/onanga.jpg',
  },
  {
    id: 3,
    name: 'Dan MOULELE',
    review: "Je cherchais un magasin fiable pour acheter un appareil photo et des accessoires, et je suis tombée sur O'lo Store. Je recommande sans hésiter !",
    image: '/images/dan.jpg',
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">Nos clients disent</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="bg-white shadow-lg p-6 rounded-2xl relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p className="text-gray-700 mb-4">{testimonial.review}</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-yellow-600">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">Client satisfait</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
