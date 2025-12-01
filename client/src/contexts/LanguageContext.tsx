import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'zh-TW' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  'zh-TW': {
    'nav.products': '產品',
    'nav.services': '服務',
    'nav.cases': '案例',
    'nav.blog': '部落格',
    'nav.about': '關於',
    'nav.consult': '預約諮詢',
    
    'hero.title1': '科學化靈性空間設計',
    'hero.title2': '打造療癒的能量場',
    'hero.description': '結合傳統風水與智慧與現代健康標準，透過科學化的能量場分析，為您的空間帶來深度療癒與心靈成長。無論是企業辦公室、療癒中心還是私密家居，我們都能打造出真正實現身心平衡的靜修空間。',
    'hero.cta1': '預約免費諮詢',
    'hero.cta2': '了解更多',
    
    'pillars.title': '療癒空間的三大支柱',
    'pillars.subtitle': '科學化靈性空間設計的核心理念',
    'pillar1.title': '自然空間設計',
    'pillar1.desc': '運用自然元素、光線和空氣流動，營造如同置身大自然的療癒環境。',
    'pillar2.title': '靈修功能設計',
    'pillar2.desc': '通過能量場分析與優化，提升空間的靈性頻率，支持冥想與靜修。',
    'pillar3.title': '感官療癒設計',
    'pillar3.desc': '優化視覺、聽覺、嗅覺、觸覺體驗，為身心帶來全方位的療癒感受。',
    
    'solutions.title': '針對性解決方案',
    'solutions.subtitle': '從個人家居到企業辦公，我們提供完整的療癒空間設計方案',
    'solution1.title': '個人療癒空間',
    'solution1.desc': '為您的臥室、書房或家庭靜修室打造私人療癒聖地。',
    'solution1.cta': '了解詳情',
    'solution2.title': '家居靈修室',
    'solution2.desc': '專為冥想、瑜伽和靈性修行設計的獨立靜修空間。',
    'solution2.cta': '查看方案',
    'solution3.title': '企業 Wellness Room',
    'solution3.desc': '為企業打造員工身心健康的靜修空間，提升工作效率。',
    'solution3.cta': '企業方案',
    
    'product.title': '量子療癒空間淨化儀',
    'product.subtitle': '物質與非物質同步淨化，改善空間能量頻率',
    'product.feature1': '空氣淨化',
    'product.feature1.desc': '釋放森林級數的負離子，過濾懸浮粒子及細菌病毒。',
    'product.feature2': '能量提升',
    'product.feature2.desc': '量子調頻驅走負能量及提升正能量。',
    'product.feature3': '氣場優化',
    'product.feature3.desc': '分析及擺設方位提升空間氣場運轉，轉運效應立竿見影。',
    'product.cta': '了解產品詳情',
    
    'cta.title': '準備改變您的空間能量場嗎？',
    'cta.desc': '立即預約免費的空間能量檢測，讓我們為您打造真正實現身心平衡的靜修空間。',
    'cta.btn1': '預約免費諮詢',
    'cta.btn2': '查看成功案例',
    
    'footer.about': '科學化靈性空間設計，打造療癒的能量場。',
    'footer.products': '產品',
    'footer.device': '量子淨化儀',
    'footer.design': '設計服務',
    'footer.company': '公司',
    'footer.about_us': '關於我們',
    'footer.blog': '部落格',
    'footer.contact': '聯繫方式',
    'footer.whatsapp': 'WhatsApp: +852 XXXX XXXX',
    'footer.email': 'Email: contact@healing-space-design.com',
    'footer.copyright': '© 2025 療癒空間設計。版權所有。',
  },
  'en': {
    'nav.products': 'Products',
    'nav.services': 'Services',
    'nav.cases': 'Cases',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.consult': 'Book Consultation',
    
    'hero.title1': 'Scientific Spiritual Space Design',
    'hero.title2': 'Creating Healing Energy Fields',
    'hero.description': 'Combining traditional Feng Shui wisdom with modern health standards, through scientifically analyzed energy fields, we bring deep healing and spiritual growth to your space. Whether it\'s a corporate office, healing center, or private home, we create truly balanced spaces for body and mind.',
    'hero.cta1': 'Book Free Consultation',
    'hero.cta2': 'Learn More',
    
    'pillars.title': 'Three Pillars of Healing Spaces',
    'pillars.subtitle': 'Core principles of scientific spiritual space design',
    'pillar1.title': 'Natural Space Design',
    'pillar1.desc': 'Using natural elements, light, and air flow to create a healing environment that feels like nature itself.',
    'pillar2.title': 'Spiritual Function Design',
    'pillar2.desc': 'Through energy field analysis and optimization, elevate the spiritual frequency of your space to support meditation and practice.',
    'pillar3.title': 'Sensory Healing Design',
    'pillar3.desc': 'Optimize visual, auditory, olfactory, and tactile experiences for comprehensive healing of body and mind.',
    
    'solutions.title': 'Tailored Solutions',
    'solutions.subtitle': 'From personal homes to corporate offices, we provide complete healing space design solutions',
    'solution1.title': 'Personal Healing Space',
    'solution1.desc': 'Create a private healing sanctuary in your bedroom, study, or home meditation room.',
    'solution1.cta': 'Learn More',
    'solution2.title': 'Home Meditation Room',
    'solution2.desc': 'Dedicated meditation, yoga, and spiritual practice space designed for your home.',
    'solution2.cta': 'View Plans',
    'solution3.title': 'Corporate Wellness Room',
    'solution3.desc': 'Create employee wellness spaces that enhance mental health and work efficiency.',
    'solution3.cta': 'Corporate Plans',
    
    'product.title': 'Quantum Healing Space Purifier',
    'product.subtitle': 'Synchronized material and non-material purification for improved space energy frequency',
    'product.feature1': 'Air Purification',
    'product.feature1.desc': 'Release forest-level negative ions, filtering suspended particles and bacteria.',
    'product.feature2': 'Energy Enhancement',
    'product.feature2.desc': 'Quantum frequency tuning to remove negative energy and elevate positive vibrations.',
    'product.feature3': 'Field Optimization',
    'product.feature3.desc': 'Analyze and optimize space positioning to enhance energy circulation with immediate transformative effects.',
    'product.cta': 'Learn About Product',
    
    'cta.title': 'Ready to Transform Your Space Energy?',
    'cta.desc': 'Book a free space energy assessment now and let us create a truly balanced healing space for your body and mind.',
    'cta.btn1': 'Book Free Consultation',
    'cta.btn2': 'View Success Cases',
    
    'footer.about': 'Scientific spiritual space design creating healing energy fields.',
    'footer.products': 'Products',
    'footer.device': 'Quantum Purifier',
    'footer.design': 'Design Services',
    'footer.company': 'Company',
    'footer.about_us': 'About Us',
    'footer.blog': 'Blog',
    'footer.contact': 'Contact',
    'footer.whatsapp': 'WhatsApp: +852 XXXX XXXX',
    'footer.email': 'Email: contact@healing-space-design.com',
    'footer.copyright': '© 2025 Healing Space Design. All rights reserved.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh-TW');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['zh-TW']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
