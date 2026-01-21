
import React from 'react';
import { useData } from '../context/DataContext';
import { Clock, Info } from 'lucide-react';

const Schedule: React.FC = () => {
  const { data } = useData();

  return (
    <div className="py-20 animate-in fade-in duration-500">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-saffron mb-4">পূজা ও আরতির সময়সূচী</h2>
          <p className="text-gray-600">আপনার সুবিধার জন্য প্রতিদিনের ও বিশেষ পূজার সময় নিম্নে প্রদান করা হলো।</p>
        </div>

        <div className="space-y-12">
          {/* Daily Schedule */}
          <section className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-saffron p-6 text-white text-center">
              <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
                <Clock /> প্রতিদিনের সময়সূচী
              </h3>
            </div>
            <div className="divide-y divide-gray-100">
              {data.schedule.map((item) => (
                <div key={item.id} className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4 hover:bg-orange-50 transition-colors">
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-bold text-gray-800">{item.name}</h4>
                    <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                  </div>
                  <div className="bg-orange-100 text-saffron px-6 py-2 rounded-full font-bold text-lg">
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Important Info */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-2xl flex items-start gap-4">
            <Info className="text-blue-500 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-blue-800 mb-1">গুরুত্বপূর্ণ তথ্য:</h4>
              <p className="text-blue-700">বিশেষ তিথি বা উৎসবের দিনে সময়সূচী পরিবর্তিত হতে পারে। যেকোনো পরিবর্তনের জন্য অনুগ্রহ করে মন্দিরের বিজ্ঞপ্তির দিকে নজর রাখুন অথবা ফোন করে নিশ্চিত হয়ে নিন।</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
