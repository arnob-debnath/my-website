
import React, { useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { Calendar, ChevronRight, Clock, Heart, Hourglass } from 'lucide-react';
import { Link } from 'react-router-dom';

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center bg-black/40 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 min-w-[80px]">
      <span className="text-3xl md:text-4xl font-bold text-saffron">{value.toString().padStart(2, '0')}</span>
      <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/80 font-bold">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center gap-3 md:gap-6 mt-8 animate-in slide-in-from-bottom-8 duration-1000">
      <TimeUnit value={timeLeft.days} label="দিন" />
      <TimeUnit value={timeLeft.hours} label="ঘন্টা" />
      <TimeUnit value={timeLeft.minutes} label="মিনিট" />
      <TimeUnit value={timeLeft.seconds} label="সেকেন্ড" />
    </div>
  );
};

const Home: React.FC = () => {
  const { data } = useData();
  const nextEvent = data.events[0];

  const heroImage = (data.countdownEnabled && data.countdownBannerImageUrl) 
    ? data.countdownBannerImageUrl 
    : (data.heroImageUrl || "https://images.unsplash.com/photo-1609137233857-81491d9b4b0e?q=80&w=1920");

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Temple Hero" 
            className="w-full h-full object-cover scale-105 animate-pulse-slow opacity-90"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-7xl font-bold mb-4 tracking-wide drop-shadow-lg">
            {data.templeName}
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-medium drop-shadow-md opacity-90">
            {data.countdownEnabled ? data.countdownTitle : "আপনার আধ্যাত্মিক যাত্রার এক অনন্য কেন্দ্র"}
          </p>

          {data.countdownEnabled && <CountdownTimer targetDate={data.countdownTargetDate} />}

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
            <Link to="/schedule" className="bg-saffron hover:bg-[#e68a2e] text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg transition-all transform hover:scale-105">
              পূজার সময়সূচী
            </Link>
            <Link to="/about" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/50 px-8 py-3 rounded-full text-lg font-bold transition-all">
              মন্দির সম্পর্কে জানুন
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 bg-[#FFFDF5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-saffron text-5xl mb-6">ॐ</div>
            <h3 className="text-3xl font-bold mb-6 text-gray-800">সুস্বাগতম</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {data.history.substring(0, 300)}...
            </p>
            <Link to="/about" className="text-saffron font-bold flex items-center gap-1 justify-center hover:underline">
              বিস্তারিত পড়ুন <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights / Upcoming Events */}
      {nextEvent && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-800">আসন্ন অনুষ্ঠানসমূহ</h3>
                <p className="text-gray-500 mt-2">মন্দিরের বিশেষ আয়োজনগুলোতে অংশগ্রহণ করুন</p>
              </div>
              <Link to="/events" className="text-saffron font-bold hover:underline hidden md:block">সবগুলো দেখুন</Link>
            </div>

            <div className="bg-orange-50 rounded-3xl overflow-hidden shadow-xl border border-orange-100 flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img src={nextEvent.imageUrl} alt={nextEvent.title} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <span className="bg-saffron text-white px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">সর্বশেষ সংবাদ</span>
                <h4 className="text-3xl font-bold mb-4 text-gray-800">{nextEvent.title}</h4>
                <div className="flex gap-6 mb-6 text-gray-600">
                  <span className="flex items-center gap-2"><Calendar size={20} className="text-saffron" /> {nextEvent.date}</span>
                  <span className="flex items-center gap-2"><Clock size={20} className="text-saffron" /> {nextEvent.time}</span>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {nextEvent.description}
                </p>
                <Link to="/events" className="bg-saffron text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-saffron/20 transition-all inline-block">
                  অংশগ্রহণ করুন
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Access Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center border-b-4 border-saffron hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-saffron mx-auto mb-6">
                <Clock size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">প্রতিদিনের পূজা</h4>
              <p className="text-gray-600 mb-6">নিয়মিত প্রার্থনা এবং আরতির সময়সূচী জেনে নিন।</p>
              <Link to="/schedule" className="text-saffron font-bold hover:underline">সময় দেখুন</Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center border-b-4 border-saffron hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-saffron mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">দান ও সেবা</h4>
              <p className="text-gray-600 mb-6">আপনার দান মন্দিরের উন্নয়নের কাজে ব্যবহার করা হবে।</p>
              <Link to="/donation" className="text-saffron font-bold hover:underline">দান করুন</Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center border-b-4 border-saffron hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-saffron mx-auto mb-6">
                <Calendar size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">উৎসব গ্যালারি</h4>
              <p className="text-gray-600 mb-6">গতবারের অনুষ্ঠানগুলোর স্মরণীয় মুহূর্তগুলো দেখুন।</p>
              <Link to="/gallery" className="text-saffron font-bold hover:underline">ছবি দেখুন</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
