
import React from 'react';
import { useData } from '../context/DataContext';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events: React.FC = () => {
  const { data } = useData();

  return (
    <div className="py-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-saffron mb-4">অনুষ্ঠান ও উৎসব</h2>
          <p className="text-gray-600">আসন্ন এবং গত উৎসবের মুহূর্তগুলো আমাদের সাথে ভাগ করে নিন।</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          <h3 className="text-2xl font-bold border-b-2 border-saffron pb-2 inline-block">আসন্ন অনুষ্ঠানসমূহ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.events.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col lg:flex-row h-full">
                <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                  <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                </div>
                <div className="p-8 lg:w-3/5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-bold mb-4 text-gray-800">{event.title}</h4>
                    <div className="space-y-3 mb-6 text-gray-600">
                      <p className="flex items-center gap-2"><Calendar size={18} className="text-saffron" /> {event.date}</p>
                      <p className="flex items-center gap-2"><Clock size={18} className="text-saffron" /> {event.time}</p>
                      <p className="flex items-center gap-2"><MapPin size={18} className="text-saffron" /> মন্দির চত্বর</p>
                    </div>
                    <p className="text-gray-600 line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                  <button className="mt-8 w-full border-2 border-saffron text-saffron font-bold py-2 rounded-xl hover:bg-saffron hover:text-white transition-all">
                    আরো দেখুন
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 inline-block mb-10 text-gray-400">অতীতের কিছু ঝলক</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative group rounded-xl overflow-hidden aspect-video grayscale hover:grayscale-0 transition-all">
                  <img src={`https://picsum.photos/id/${10 + i}/600/400`} alt="Past Event" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold">উৎসবের স্মৃতি</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
