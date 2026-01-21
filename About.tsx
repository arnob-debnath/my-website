
import React from 'react';
import { useData } from '../context/DataContext';

const About: React.FC = () => {
  const { data } = useData();

  return (
    <div className="py-20 animate-in slide-in-from-bottom-4 duration-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-saffron mb-12">মন্দির পরিচিতি</h2>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1609137233857-81491d9b4b0e?q=80&w=1200" 
              className="w-full h-80 object-cover" 
              alt="Temple History" 
            />
            <div className="p-8 md:p-12 space-y-8">
              <section>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-saffron pl-4">ইতিহাস</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {data.history}
                </p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="bg-orange-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">প্রতিষ্ঠা কাল</h3>
                  <p className="text-3xl font-bold text-saffron">{data.establishmentYear} সাল</p>
                </section>
                <section className="bg-orange-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">সাংস্কৃতিক গুরুত্ব</h3>
                  <p className="text-gray-600">আমাদের মন্দির শুধুমাত্র একটি প্রার্থনার স্থান নয়, এটি শিল্প ও সংস্কৃতির এক মিলনস্থল।</p>
                </section>
              </div>

              <section>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-saffron pl-4">ধর্মীয় তাৎপর্য</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {data.importance}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
