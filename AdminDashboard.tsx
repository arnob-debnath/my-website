
import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Save, Plus, Trash2, Layout as LayoutIcon, Image as ImageIcon, Calendar, Clock, Heart, Share2, Facebook, Instagram, Upload, Hourglass } from 'lucide-react';
import { Deity, Event, PujaTime, GalleryItem } from '../types';

const AdminDashboard: React.FC = () => {
  const { data, updateData, isAdmin } = useData();
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState(data);

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center bg-red-50 p-10 rounded-3xl border border-red-100">
          <h2 className="text-2xl font-bold text-red-600 mb-2">অ্যাক্সেসDenied (অনুমতি নেই)</h2>
          <p className="text-gray-600">দয়া করে আগে এডমিন হিসেবে লগইন করুন।</p>
        </div>
      </div>
    );
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, callback: (base64: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("ছবির সাইজ ২ মেগাবাইটের কম হতে হবে।");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    updateData(formData);
    alert('তথ্য সফলভাবে সেভ করা হয়েছে!');
  };

  const handleAddDeity = () => {
    const newDeity: Deity = {
      id: Date.now().toString(),
      name: 'নতুন দেব-দেবী',
      description: 'বিবরণ লিখুন',
      imageUrl: ''
    };
    setFormData({ ...formData, deities: [...formData.deities, newDeity] });
  };

  const handleRemoveDeity = (id: string) => {
    setFormData({ ...formData, deities: formData.deities.filter(d => d.id !== id) });
  };

  const handleAddEvent = () => {
    const newEvent: Event = {
      id: Date.now().toString(),
      title: 'নতুন অনুষ্ঠান',
      date: '২০২৪-১২-০১',
      time: '০৬:০০ সন্ধ্যা',
      description: 'বিস্তারিত বিবরণ',
      imageUrl: ''
    };
    setFormData({ ...formData, events: [...formData.events, newEvent] });
  };

  const handleRemoveEvent = (id: string) => {
    setFormData({ ...formData, events: formData.events.filter(e => e.id !== id) });
  };

  const handleAddGalleryItem = () => {
    const newItem: GalleryItem = {
      id: Date.now().toString(),
      url: '',
      caption: 'নতুন ছবি'
    };
    setFormData({ ...formData, gallery: [...formData.gallery, newItem] });
  };

  const handleRemoveGalleryItem = (id: string) => {
    setFormData({ ...formData, gallery: formData.gallery.filter(item => item.id !== id) });
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold text-gray-800">এডমিন ড্যাশবোর্ড</h2>
          <button 
            onClick={handleSave}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg"
          >
            <Save size={20} /> সব সেভ করুন
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-2">
            {[
              { id: 'general', name: 'সাধারণ তথ্য', icon: <LayoutIcon size={18}/> },
              { id: 'media', name: 'লোগো ও ব্যানার', icon: <ImageIcon size={18}/> },
              { id: 'countdown', name: 'কাউন্টডাউন', icon: <Hourglass size={18}/> },
              { id: 'social', name: 'সোশ্যাল মিডিয়া', icon: <Share2 size={18}/> },
              { id: 'deities', name: 'দেব-দেবী', icon: <ImageIcon size={18}/> },
              { id: 'schedule', name: 'সময়সূচী', icon: <Clock size={18}/> },
              { id: 'events', name: 'অনুষ্ঠান', icon: <Calendar size={18}/> },
              { id: 'gallery', name: 'গ্যালারি', icon: <ImageIcon size={18}/> },
              { id: 'donation', name: 'দান তথ্য', icon: <Heart size={18}/> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-6 py-4 rounded-xl font-bold transition-all flex items-center gap-3 ${
                  activeTab === tab.id ? 'bg-saffron text-white shadow-md' : 'bg-white text-gray-600 hover:bg-orange-50'
                }`}
              >
                {tab.icon} {tab.name}
              </button>
            ))}
          </div>

          <div className="lg:col-span-3 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            {activeTab === 'general' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold mb-6">সাধারণ তথ্য পরিবর্তন</h3>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">মন্দিরের নাম</label>
                  <input 
                    type="text" 
                    value={formData.templeName}
                    onChange={(e) => setFormData({...formData, templeName: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron/20"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">ইতিহাস</label>
                  <textarea 
                    rows={4}
                    value={formData.history}
                    onChange={(e) => setFormData({...formData, history: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron/20"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">প্রতিষ্ঠা সাল</label>
                    <input 
                      type="text" 
                      value={formData.establishmentYear}
                      onChange={(e) => setFormData({...formData, establishmentYear: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron/20"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">ফোন</label>
                    <input 
                      type="text" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">ইমেইল</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron/20"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">ঠিকানা</label>
                  <input 
                    type="text" 
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron/20"
                  />
                </div>
              </div>
            )}

            {activeTab === 'media' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold mb-6">লোগো ও ব্যানার ছবি</h3>
                <div className="grid grid-cols-1 gap-8">
                  <div className="p-6 border rounded-2xl bg-gray-50">
                    <label className="block text-gray-700 font-bold mb-4">মন্দির লোগো আপলোড করুন</label>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="w-32 h-32 bg-white border rounded-xl flex items-center justify-center overflow-hidden shrink-0">
                        {formData.logoUrl ? <img src={formData.logoUrl} alt="Logo Preview" className="w-full h-full object-contain" /> : <ImageIcon className="text-gray-300" size={40} />}
                      </div>
                      <div className="flex-grow w-full">
                        <label className="w-full flex items-center justify-center gap-2 bg-white border-2 border-dashed border-gray-300 rounded-xl py-4 cursor-pointer hover:border-saffron hover:bg-orange-50 transition-all">
                          <Upload size={20} className="text-saffron" />
                          <span className="text-gray-600 font-medium">ডিভাইস থেকে ছবি বেছে নিন</span>
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, (url) => setFormData({...formData, logoUrl: url}))} />
                        </label>
                        <p className="text-xs text-gray-400 mt-2">সুপারিশকৃত: PNG বা JPG ফরম্যাট (সর্বোচ্চ ২ মেগাবাইট)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 border rounded-2xl bg-gray-50">
                    <label className="block text-gray-700 font-bold mb-4">হোম পেজ ব্যানার ছবি আপলোড করুন</label>
                    <div className="space-y-4">
                      <div className="w-full h-48 bg-white border rounded-xl flex items-center justify-center overflow-hidden">
                        {formData.heroImageUrl ? <img src={formData.heroImageUrl} alt="Hero Preview" className="w-full h-full object-cover" /> : <ImageIcon className="text-gray-300" size={60} />}
                      </div>
                      <label className="w-full flex items-center justify-center gap-2 bg-white border-2 border-dashed border-gray-300 rounded-xl py-4 cursor-pointer hover:border-saffron hover:bg-orange-50 transition-all">
                        <Upload size={20} className="text-saffron" />
                        <span className="text-gray-600 font-medium">ব্যানার ছবি আপলোড করুন</span>
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, (url) => setFormData({...formData, heroImageUrl: url}))} />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'countdown' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">কাউন্টডাউন ব্যবস্থাপনা</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-600">চালু করুন:</span>
                    <button 
                      onClick={() => setFormData({...formData, countdownEnabled: !formData.countdownEnabled})}
                      className={`w-12 h-6 rounded-full transition-colors relative ${formData.countdownEnabled ? 'bg-green-500' : 'bg-gray-300'}`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${formData.countdownEnabled ? 'left-7' : 'left-1'}`}></div>
                    </button>
                  </div>
                </div>

                <div className="p-6 border rounded-2xl bg-gray-50 space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">কাউন্টডাউন টাইটেল (যেমন: দুর্গাপূজা শুরু হতে বাকি)</label>
                    <input 
                      type="text" 
                      value={formData.countdownTitle}
                      onChange={(e) => setFormData({...formData, countdownTitle: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron/20"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">লক্ষ্য তারিখ ও সময়</label>
                    <input 
                      type="datetime-local" 
                      value={formData.countdownTargetDate}
                      onChange={(e) => setFormData({...formData, countdownTargetDate: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron/20"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-4">কাউন্টডাউন ব্যানার ছবি (ডিভাইস থেকে আপলোড)</label>
                    <div className="space-y-4">
                      <div className="w-full h-40 bg-white border rounded-xl flex items-center justify-center overflow-hidden">
                        {formData.countdownBannerImageUrl ? <img src={formData.countdownBannerImageUrl} alt="Countdown Preview" className="w-full h-full object-cover" /> : <ImageIcon className="text-gray-300" size={40} />}
                      </div>
                      <label className="w-full flex items-center justify-center gap-2 bg-white border-2 border-dashed border-gray-300 rounded-xl py-4 cursor-pointer hover:border-saffron hover:bg-orange-50 transition-all">
                        <Upload size={20} className="text-saffron" />
                        <span className="text-gray-600 font-medium">ছবি আপলোড করুন</span>
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, (url) => setFormData({...formData, countdownBannerImageUrl: url}))} />
                      </label>
                      <p className="text-xs text-gray-400">এই ছবিটি কাউন্টডাউন চালু থাকলে হোম পেজের মূল ব্যানার হিসেবে দেখা যাবে।</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'social' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold mb-6">সোশ্যাল মিডিয়া লিংক</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                      <Facebook size={18} className="text-blue-600" /> Facebook URL
                    </label>
                    <input 
                      type="text" 
                      value={formData.facebookUrl}
                      onChange={(e) => setFormData({...formData, facebookUrl: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron/20"
                      placeholder="https://facebook.com/yourtemple"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                      <Instagram size={18} className="text-pink-600" /> Instagram URL
                    </label>
                    <input 
                      type="text" 
                      value={formData.instagramUrl}
                      onChange={(e) => setFormData({...formData, instagramUrl: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron/20"
                      placeholder="https://instagram.com/yourtemple"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'deities' && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">দেব-দেবী ব্যবস্থাপনা</h3>
                  <button onClick={handleAddDeity} className="flex items-center gap-1 bg-saffron text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm"><Plus size={16}/> নতুন যুক্ত করুন</button>
                </div>
                <div className="space-y-6">
                  {formData.deities.map((deity, idx) => (
                    <div key={deity.id} className="p-6 border border-gray-100 rounded-2xl bg-gray-50 relative group shadow-sm">
                      <button onClick={() => handleRemoveDeity(deity.id)} className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors"><Trash2 size={20}/></button>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1">
                          <div className="w-full h-40 bg-white border rounded-xl flex items-center justify-center overflow-hidden mb-3">
                            {deity.imageUrl ? <img src={deity.imageUrl} alt="Deity" className="w-full h-full object-cover" /> : <ImageIcon className="text-gray-300" size={32} />}
                          </div>
                          <label className="w-full flex items-center justify-center gap-1 bg-white border border-gray-200 rounded-lg py-2 cursor-pointer text-xs font-bold text-gray-600 hover:bg-orange-50 transition-colors">
                            <Upload size={14} className="text-saffron" /> ছবি পাল্টান
                            <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, (url) => {
                              const newList = [...formData.deities];
                              newList[idx].imageUrl = url;
                              setFormData({...formData, deities: newList});
                            })} />
                          </label>
                        </div>
                        <div className="md:col-span-2 space-y-4">
                          <div>
                            <label className="block text-sm font-bold text-gray-500 mb-1">নাম</label>
                            <input 
                              type="text" 
                              value={deity.name}
                              onChange={(e) => {
                                const newList = [...formData.deities];
                                newList[idx].name = e.target.value;
                                setFormData({...formData, deities: newList});
                              }}
                              className="w-full border rounded-lg px-3 py-2 bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-gray-500 mb-1">বিবরণ</label>
                            <textarea 
                              rows={2}
                              value={deity.description}
                              onChange={(e) => {
                                const newList = [...formData.deities];
                                newList[idx].description = e.target.value;
                                setFormData({...formData, deities: newList});
                              }}
                              className="w-full border rounded-lg px-3 py-2 bg-white"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'schedule' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold">সময়সূচী পরিবর্তন</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b text-gray-500 text-sm">
                        <th className="py-3 px-4 font-bold">নাম</th>
                        <th className="py-3 px-4 font-bold">সময়</th>
                        <th className="py-3 px-4 font-bold">অ্যাকশন</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.schedule.map((item, idx) => (
                        <tr key={item.id} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4">
                            <input 
                              type="text" 
                              value={item.name}
                              onChange={(e) => {
                                const newList = [...formData.schedule];
                                newList[idx].name = e.target.value;
                                setFormData({...formData, schedule: newList});
                              }}
                              className="w-full border rounded px-3 py-1 bg-white"
                            />
                          </td>
                          <td className="py-3 px-4">
                            <input 
                              type="text" 
                              value={item.time}
                              onChange={(e) => {
                                const newList = [...formData.schedule];
                                newList[idx].time = e.target.value;
                                setFormData({...formData, schedule: newList});
                              }}
                              className="w-full border rounded px-3 py-1 bg-white"
                            />
                          </td>
                          <td className="py-3 px-4">
                             <button onClick={() => {
                               const newList = formData.schedule.filter(s => s.id !== item.id);
                               setFormData({...formData, schedule: newList});
                             }} className="text-red-400 hover:text-red-600 transition-colors"><Trash2 size={18}/></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button onClick={() => {
                    const newItem = { id: Date.now().toString(), name: 'নতুন পূজা', time: 'সময়', description: '' };
                    setFormData({...formData, schedule: [...formData.schedule, newItem]});
                  }} className="mt-4 flex items-center gap-1 text-saffron font-bold hover:underline"><Plus size={16}/> নতুন সময় যোগ করুন</button>
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">অনুষ্ঠান ব্যবস্থাপনা</h3>
                  <button onClick={handleAddEvent} className="flex items-center gap-1 bg-saffron text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm"><Plus size={16}/> নতুন অনুষ্ঠান</button>
                </div>
                <div className="space-y-6">
                  {formData.events.map((event, idx) => (
                    <div key={event.id} className="p-6 border border-gray-100 rounded-2xl bg-gray-50 relative shadow-sm">
                      <button onClick={() => handleRemoveEvent(event.id)} className="absolute top-4 right-4 text-red-400 hover:text-red-600"><Trash2 size={20}/></button>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1">
                          <div className="w-full h-40 bg-white border rounded-xl flex items-center justify-center overflow-hidden mb-3">
                            {event.imageUrl ? <img src={event.imageUrl} alt="Event" className="w-full h-full object-cover" /> : <ImageIcon className="text-gray-300" size={32} />}
                          </div>
                          <label className="w-full flex items-center justify-center gap-1 bg-white border border-gray-200 rounded-lg py-2 cursor-pointer text-xs font-bold text-gray-600 hover:bg-orange-50 transition-colors">
                            <Upload size={14} className="text-saffron" /> অনুষ্ঠান ছবি আপলোড
                            <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, (url) => {
                              const newList = [...formData.events];
                              newList[idx].imageUrl = url;
                              setFormData({...formData, events: newList});
                            })} />
                          </label>
                        </div>
                        <div className="md:col-span-2 space-y-4">
                          <div>
                            <label className="block text-sm font-bold text-gray-500 mb-1">শিরোনাম</label>
                            <input 
                              type="text" 
                              value={event.title}
                              onChange={(e) => {
                                const newList = [...formData.events];
                                newList[idx].title = e.target.value;
                                setFormData({...formData, events: newList});
                              }}
                              className="w-full border rounded-lg px-3 py-2 bg-white"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-bold text-gray-500 mb-1">তারিখ</label>
                              <input 
                                type="date" 
                                value={event.date}
                                onChange={(e) => {
                                  const newList = [...formData.events];
                                  newList[idx].date = e.target.value;
                                  setFormData({...formData, events: newList});
                                }}
                                className="w-full border rounded-lg px-3 py-2 bg-white"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-bold text-gray-500 mb-1">সময়</label>
                              <input 
                                type="text" 
                                value={event.time}
                                onChange={(e) => {
                                  const newList = [...formData.events];
                                  newList[idx].time = e.target.value;
                                  setFormData({...formData, events: newList});
                                }}
                                className="w-full border rounded-lg px-3 py-2 bg-white"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">গ্যালারি ব্যবস্থাপনা</h3>
                  <button onClick={handleAddGalleryItem} className="flex items-center gap-1 bg-saffron text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm"><Plus size={16}/> নতুন ছবি যোগ করুন</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formData.gallery.map((item, idx) => (
                    <div key={item.id} className="p-4 border rounded-2xl bg-gray-50 relative group shadow-sm transition-all hover:shadow-md">
                      <button onClick={() => handleRemoveGalleryItem(item.id)} className="absolute top-2 right-2 bg-white/90 p-2 rounded-full text-red-500 hover:text-red-700 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-10"><Trash2 size={16}/></button>
                      <div className="w-full h-40 bg-white border rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                        {item.url ? <img src={item.url} alt="Gallery" className="w-full h-full object-cover" /> : <ImageIcon className="text-gray-200" size={40} />}
                      </div>
                      <div className="space-y-3">
                        <label className="w-full flex items-center justify-center gap-1 bg-white border border-gray-200 rounded-lg py-2 cursor-pointer text-xs font-bold text-gray-600 hover:bg-orange-50 transition-colors">
                          <Upload size={14} className="text-saffron" /> গ্যালারি ছবি নির্বাচন করুন
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, (url) => {
                            const newList = [...formData.gallery];
                            newList[idx].url = url;
                            setFormData({...formData, gallery: newList});
                          })} />
                        </label>
                        <input 
                          type="text" 
                          placeholder="ক্যাপশন লিখুন..."
                          value={item.caption}
                          onChange={(e) => {
                            const newList = [...formData.gallery];
                            newList[idx].caption = e.target.value;
                            setFormData({...formData, gallery: newList});
                          }}
                          className="w-full border rounded-lg px-3 py-2 text-sm bg-white"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'donation' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold">দান সংক্রান্ত তথ্য</h3>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">দান সংক্রান্ত মেসেজ</label>
                  <textarea 
                    rows={6}
                    value={formData.donationInfo}
                    onChange={(e) => setFormData({...formData, donationInfo: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron/20"
                    placeholder="ভক্তদের উদ্দেশ্যে দান সংক্রান্ত অনুরোধ এখানে লিখুন..."
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
