
import React from 'react';
import { useData } from '../context/DataContext';

const Deities: React.FC = () => {
  const { data } = useData();

  return (
    <div className="py-20 bg-[#FFFDF5] min-h-screen">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold text-saffron mb-4">মন্দিরের দেব-দেবী</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">আমাদের মন্দিরে বিভিন্ন দেব-দেবীর বিগ্রহ নিষ্ঠার সাথে পূজা করা হয়। প্রতিটি বিগ্রহের রয়েছে নিজস্ব ধর্মীয় তাৎপর্য।</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.deities.map((deity) => (
            <div key={deity.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={deity.imageUrl} 
                  alt={deity.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white tracking-wide">{deity.name}</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed text-lg italic">
                  "{deity.description}"
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center">
                  <span className="text-saffron font-bold text-sm uppercase tracking-widest">প্রণাম নিবেদন</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deities;
