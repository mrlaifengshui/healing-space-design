import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, Sparkles, Zap, Heart, Wind, Lightbulb, Globe } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      {/* 導航欄 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="container flex items-center justify-between py-4 px-4">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            {language === 'zh-TW' ? '療癒空間設計' : 'Healing Space'}
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/products" className="text-gray-700 hover:text-emerald-600 transition-colors">
              {t('nav.products')}
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-emerald-600 transition-colors">
              {t('nav.services')}
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-emerald-600 transition-colors">
              {t('nav.cases')}
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-emerald-600 transition-colors">
              {t('nav.blog')}
            </Link>
            
            {/* 語言切換 */}
            <div className="flex items-center gap-2 border-l border-gray-300 pl-8">
              <button
                onClick={() => setLanguage('zh-TW')}
                className={`px-3 py-1 rounded transition-colors ${
                  language === 'zh-TW'
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                中文
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded transition-colors ${
                  language === 'en'
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                English
              </button>
            </div>
            
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6">
              {t('nav.consult')}
            </Button>
          </div>
        </div>
      </nav>

      {/* 英雄區段 */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-br from-emerald-50/50 via-white to-blue-50/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* Slogan */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-in-up">
                <span className="text-gray-900">{t('hero.title1')}</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent animate-slide-in-up" style={{animationDelay: '0.1s'}}>
                {t('hero.title2')}
              </h2>
            </div>

            {/* 描述 */}
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              {t('hero.description')}
            </p>

            {/* CTA 按鈕 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in-up" style={{animationDelay: '0.3s'}}>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all pulse-button">
                {t('hero.cta1')} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg rounded-full border-2 border-gray-300 hover:border-emerald-600 transition-colors">
                {t('hero.cta2')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 療癒空間的三大支柱 */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-in-up">
              {t('pillars.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-in-up" style={{animationDelay: '0.1s'}}>
              {t('pillars.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 自然空間設計 */}
            <Card className="border-2 border-emerald-200/50 bg-gradient-to-br from-emerald-50/50 to-white card-hover-lift stagger-item">
              <div className="p-8">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pillar1.title')}</h3>
                <p className="text-gray-700">
                  {t('pillar1.desc')}
                </p>
              </div>
            </Card>

            {/* 靈修功能設計 */}
            <Card className="border-2 border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-white card-hover-lift stagger-item">
              <div className="p-8">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pillar2.title')}</h3>
                <p className="text-gray-700">
                  {t('pillar2.desc')}
                </p>
              </div>
            </Card>

            {/* 感官療癒設計 */}
            <Card className="border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-white card-hover-lift stagger-item">
              <div className="p-8">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('pillar3.title')}</h3>
                <p className="text-gray-700">
                  {t('pillar3.desc')}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 針對性解決方案 */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-emerald-50/50 to-blue-50/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-in-up">
              {t('solutions.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-in-up" style={{animationDelay: '0.1s'}}>
              {t('solutions.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 個人療癒空間 */}
            <Card className="border border-emerald-200 card-hover-lift stagger-item">
              <div className="p-8">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('solution1.title')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('solution1.desc')}
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-smooth">
                  {t('solution1.cta')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>

            {/* 家居靈修室 */}
            <Card className="border border-blue-200 card-hover-lift stagger-item">
              <div className="p-8">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Wind className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('solution2.title')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('solution2.desc')}
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-smooth">
                  {t('solution2.cta')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>

            {/* 企業 Wellness Room */}
            <Card className="border border-purple-200 card-hover-lift stagger-item">
              <div className="p-8">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t('solution3.title')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('solution3.desc')}
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-smooth">
                  {t('solution3.cta')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 量子療癒空間淨化儀 */}
      <section className="py-16 md:py-24 px-4 bg-white/50 backdrop-blur">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('product.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('product.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border border-emerald-200 bg-gradient-to-br from-emerald-50/50 to-white p-8">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('product.feature1')}</h3>
              <p className="text-gray-700">
                {t('product.feature1.desc')}
              </p>
            </Card>

            <Card className="border border-blue-200 bg-gradient-to-br from-blue-50/50 to-white p-8">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('product.feature2')}</h3>
              <p className="text-gray-700">
                {t('product.feature2.desc')}
              </p>
            </Card>

            <Card className="border border-purple-200 bg-gradient-to-br from-purple-50/50 to-white p-8">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('product.feature3')}</h3>
              <p className="text-gray-700">
                {t('product.feature3.desc')}
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-full">
              {t('product.cta')} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA 區段 */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            {t('cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-semibold">
              {t('cta.btn1')}
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg rounded-full border-2 border-white text-white hover:bg-white/10">
              {t('cta.btn2')}
            </Button>
          </div>
        </div>
      </section>

      {/* 頁腳 */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">
                {language === 'zh-TW' ? '療癒空間設計' : 'Healing Space Design'}
              </h3>
              <p className="text-sm">{t('footer.about')}</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">{t('footer.products')}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.device')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.design')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.about_us')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.blog')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">{t('footer.contact')}</h4>
              <p className="text-sm">{t('footer.whatsapp')}</p>
              <p className="text-sm">{t('footer.email')}</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
