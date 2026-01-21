
import React from 'react';
import { useData } from '../context/DataContext';

const Gallery: React.FC = () => {
  const { data } = useData();

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-saffron mb-4">ফটো গ্যালারি</h2>
          <p className="text-gray-600">মন্দিরের উৎসব এবং প্রাত্যহিক মুহূর্তগুলোর সংকলন।</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.gallery.map((item) => (
            <div key={item.id} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all aspect-[4/3]">
              <img 
                src={item.url} 
                alt={item.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-xl">{item.caption}</p>
              </div>
            </div>
          ))}
          
          {/* Default items if gallery is sparse */}
          {[1011, 1012, 1013, 1014, 1015, 1016].map(id => (
            <div key={id} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all aspect-[4/3]">
              <img 
                src={`https://picsum.photos/id/${id}/800/600`} 
                alt="Temple Moment" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-xl">মন্দিরের পবিত্র মুহূর্ত</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
