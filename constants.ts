
import { SiteData } from './types';

export const INITIAL_DATA: SiteData = {
  templeName: "ঐতিহ্যবাহী শ্রী মন্দির",
  logoUrl: "https://cdn-icons-png.flaticon.com/512/3301/3301646.png",
  heroImageUrl: "https://images.unsplash.com/photo-1609137233857-81491d9b4b0e?q=80&w=1920",
  history: "এই মন্দিরটি প্রায় ১০০ বছর আগে স্থানীয় ভক্তদের প্রচেষ্টায় নির্মিত হয়েছিল। মন্দিরটি আধ্যাত্মিকতার এক অন্যতম কেন্দ্র হিসেবে পরিচিত।",
  establishmentYear: "১৯২৪",
  importance: "এটি অঞ্চলের প্রাচীনতম এবং সবচেয়ে পবিত্র স্থান হিসেবে বিবেচিত হয় যেখানে প্রতিদিন শত শত মানুষ প্রার্থনার জন্য আসেন।",
  address: "১২৩, ভক্তি রোড, শান্তির বাজার, কলকাতা - ৭০০০০০",
  phone: "+৯১ ৯৮৭৬৫ ৪৩২১০",
  email: "contact@shrimondir.org",
  facebookUrl: "https://facebook.com",
  instagramUrl: "https://instagram.com",
  deities: [
    {
      id: "1",
      name: "শ্রী কৃষ্ণ",
      description: "ভগবান কৃষ্ণ হলো প্রেমের এবং ধর্মের প্রতীক।",
      imageUrl: "https://images.unsplash.com/photo-1590050752117-23a9d7fc2140?q=80&w=800"
    },
    {
      id: "2",
      name: "মা দূর্গা",
      description: "শক্তির দেবী মা দূর্গা দুষ্টের দমন এবং শিষ্টের পালনের জন্য পূজা করা হয়।",
      imageUrl: "https://images.unsplash.com/photo-1601002347395-9f5e04e94d80?q=80&w=800"
    }
  ],
  schedule: [
    { id: "1", name: "মঙ্গল আরতি", time: "০৫:০০ ভোর", description: "ভোরবেলার প্রথম আরতি।" },
    { id: "2", name: "ভোগ নিবেদন", time: "১২:৩০ দুপুর", description: "দুপুরের অন্নভোগ নিবেদন।" },
    { id: "3", name: "সন্ধ্যা আরতি", time: "০৬:৩০ সন্ধ্যা", description: "সূর্যাস্তের সময় সন্ধ্যার আরতি।" }
  ],
  events: [
    {
      id: "1",
      title: "আসন্ন জন্মাষ্টমী উৎসব",
      date: "2025-09-05",
      time: "রাত ১২:০০",
      description: "ভগবান শ্রী কৃষ্ণের জন্মতিথি যথাযথ মর্যাদায় পালন করা হবে।",
      imageUrl: "https://images.unsplash.com/photo-1631584342211-f9257d07963c?q=80&w=800"
    }
  ],
  gallery: [
    { id: "1", url: "https://picsum.photos/id/1018/800/600", caption: "মন্দির প্রাঙ্গণ" },
    { id: "2", url: "https://picsum.photos/id/1015/800/600", caption: "উৎসবের দিন" }
  ],
  donationInfo: "মন্দিরের উন্নয়ন এবং সেবামূলক কাজের জন্য আপনার দান সাদরে গৃহীত হয়। আপনি বিকাশ বা নগদের মাধ্যমেও সাহায্য করতে পারেন।",
  countdownEnabled: false,
  countdownTitle: "আসন্ন মহোৎসব শুরু হতে বাকি",
  countdownTargetDate: "2025-10-20T00:00:00",
  countdownBannerImageUrl: ""
};
