
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Lock } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useData();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin');
    } else {
      setError('ভুল পাসওয়ার্ড। আবার চেষ্টা করুন। (Demo: admin123)');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 border border-orange-100">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-saffron/10 rounded-full flex items-center justify-center text-saffron mx-auto mb-6">
            <Lock size={40} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">এডমিন প্যানেল</h2>
          <p className="text-gray-500 mt-2">আপনার পাসওয়ার্ড দিয়ে লগইন করুন</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">পাসওয়ার্ড</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all" 
              placeholder="পাসওয়ার্ড লিখুন"
              required 
            />
          </div>
          
          {error && <p className="text-red-500 text-center font-medium">{error}</p>}

          <button type="submit" className="w-full bg-saffron text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all">
            লগইন করুন
          </button>
        </form>
        
        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-sm italic">শুধুমাত্র মন্দির কর্তৃপক্ষের ব্যবহারের জন্য</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
