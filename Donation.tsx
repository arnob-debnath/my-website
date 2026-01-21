
import React from 'react';
import { useData } from '../context/DataContext';
import { Heart, CreditCard, ShieldCheck } from 'lucide-react';

const Donation: React.FC = () => {
  const { data } = useData();

  return (
    <div className="py-20 bg-orange-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-saffron pb-2 inline-block">দান ও সেবা</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                আপনার একটু সাহায্য মন্দিরের সেবামূলক কাজগুলোকে এগিয়ে নিতে সাহায্য করবে। আর্তমানবতার সেবা এবং মন্দিরের সংস্কার কাজে অংশগ্রহণ করুন।
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-saffron/10 rounded-full flex items-center justify-center text-saffron shrink-0">
                    <Heart />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">অন্ন সেবা</h4>
                    <p className="text-gray-600">দরিদ্র মানুষের মধ্যে প্রতিদিন অন্ন বিতরণের জন্য আপনি দান করতে পারেন।</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-saffron/10 rounded-full flex items-center justify-center text-saffron shrink-0">
                    <ShieldCheck />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">মন্দির সংস্কার</h4>
                    <p className="text-gray-600">মন্দিরের প্রাচীন অংশগুলো আধুনিকীকরণের কাজে সাহায্য করুন।</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-orange-100">
              <h3 className="text-2xl font-bold text-center mb-8">অনলাইনে দান করুন</h3>
              
              <div className="bg-orange-50 p-6 rounded-2xl mb-8 border border-orange-100">
                <p className="text-center text-gray-700 italic">
                  "{data.donationInfo}"
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 bg-[#E2136E] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
                    bKash
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-[#F7941E] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
                    Nagad
                  </button>
                </div>
                <button className="w-full flex items-center justify-center gap-3 bg-gray-800 text-white py-4 rounded-xl font-bold hover:bg-gray-900 transition-colors">
                  <CreditCard /> ব্যাংকের মাধ্যমে দান
                </button>
                <div className="mt-6 text-center text-gray-500 text-sm">
                  সব ধরণের দান আয়কর মুক্ত হওয়ার যোগ্য হতে পারে।
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
