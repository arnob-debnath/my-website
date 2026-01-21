
import React from 'react';
import { useData } from '../context/DataContext';
import { MapPin, Phone, Mail, Send, Facebook, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const { data } = useData();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('ধন্যবাদ! আপনার বার্তাটি আমরা পেয়েছি। শীঘ্রই আপনার সাথে যোগাযোগ করা হবে।');
  };

  return (
    <div className="py-20 animate-in fade-in duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-saffron mb-4">যোগাযোগ করুন</h2>
          <p className="text-gray-600">আপনার কোনো প্রশ্ন বা মতামত থাকলে আমাদের সাথে যোগাযোগ করতে পারেন।</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-saffron">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-saffron">
                    <MapPin />
                  </div>
                  <h4 className="text-xl font-bold">ঠিকানা</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">{data.address}</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-saffron">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-saffron">
                    <Phone />
                  </div>
                  <h4 className="text-xl font-bold">ফোন</h4>
                </div>
                <p className="text-gray-600">{data.phone}</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-saffron">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-saffron">
                    <Mail />
                  </div>
                  <h4 className="text-xl font-bold">ইমেইল</h4>
                </div>
                <p className="text-gray-600">{data.email}</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-saffron">
                <h4 className="text-xl font-bold mb-6">আমাদের ফলো করুন</h4>
                <div className="flex gap-4">
                   {data.facebookUrl && (
                     <a href={data.facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 font-bold hover:underline">
                       <Facebook /> Facebook
                     </a>
                   )}
                   {data.instagramUrl && (
                     <a href={data.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-600 font-bold hover:underline">
                       <Instagram /> Instagram
                     </a>
                   )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-8 text-gray-800">আমাদের বার্তা পাঠান</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">নাম</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all" placeholder="আপনার নাম লিখুন" required />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">ফোন নম্বর</label>
                      <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all" placeholder="আপনার ফোন নম্বর" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">বিষয়</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all" placeholder="বার্তার বিষয়" required />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">বার্তা</label>
                    <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all" placeholder="আপনার বিস্তারিত বার্তা এখানে লিখুন..." required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-saffron text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <Send size={20} /> বার্তা পাঠান
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-20 h-96 rounded-3xl overflow-hidden shadow-2xl grayscale border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117900.22234057631!2d88.29362391054362!3d22.560731478140324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277296122d11b%3A0x67375a3038676a66!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1714478125674!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
