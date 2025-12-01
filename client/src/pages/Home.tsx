import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, Sparkles, Zap, Heart, Wind, Lightbulb } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 導航欄 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="container flex items-center justify-between py-4 px-4">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            療癒空間設計
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/products" className="text-gray-700 hover:text-emerald-600 transition-colors">
              產品
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-emerald-600 transition-colors">
              服務
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-emerald-600 transition-colors">
              案例
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-emerald-600 transition-colors">
              部落格
            </Link>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6">
              預約諮詢
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
                <span className="text-gray-900">科學化靈性空間設計</span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent animate-slide-in-up" style={{animationDelay: '0.1s'}}>
                打造療癒的能量場
              </h2>
            </div>

            {/* 描述 */}
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              結合傳統風水與智慧與現代健康標準，透過科學化的能量場分析，為您的空間帶來深度療癒與心靈成長。無論是企業辦公室、療癒中心還是私密家居，我們都能打造出真正實現身心平衡的靜修空間。
            </p>

            {/* CTA 按鈕 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in-up" style={{animationDelay: '0.3s'}}>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all pulse-button">
                預約免費諮詢 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg rounded-full border-2 border-gray-300 hover:border-emerald-600 transition-colors">
                了解更多
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
              療癒空間的三大支柱
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-in-up" style={{animationDelay: '0.1s'}}>
              科學化靈性空間設計的核心理念
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 自然空間設計 */}
            <Card className="border-2 border-emerald-200/50 bg-gradient-to-br from-emerald-50/50 to-white card-hover-lift stagger-item">
              <div className="p-8">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">自然空間設計</h3>
                <p className="text-gray-700">
                  運用自然元素、光線和空氣流動，營造如同置身大自然的療癒環境。
                </p>
              </div>
            </Card>

            {/* 靈修功能設計 */}
            <Card className="border-2 border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-white card-hover-lift stagger-item">
              <div className="p-8">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">靈修功能設計</h3>
                <p className="text-gray-700">
                  通過能量場分析與優化，提升空間的靈性頻率，支持冥想與靜修。
                </p>
              </div>
            </Card>

            {/* 感官療癒設計 */}
            <Card className="border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-white card-hover-lift stagger-item">
              <div className="p-8">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">感官療癒設計</h3>
                <p className="text-gray-700">
                  優化視覺、聽覺、嗅覺、觸覺體驗，為身心帶來全方位的療癒感受。
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
              針對性解決方案
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-in-up" style={{animationDelay: '0.1s'}}>
              從個人家居到企業辦公，我們提供完整的療癒空間設計方案
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 個人療癒空間 */}
            <Card className="border border-emerald-200 card-hover-lift stagger-item">
              <div className="p-8">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">個人療癒空間</h3>
                <p className="text-gray-700 mb-4">
                  為您的臥室、書房或家庭靜修室打造私人療癒聖地。
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-smooth">
                  了解詳情 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>

            {/* 家居靈修室 */}
            <Card className="border border-blue-200 card-hover-lift stagger-item">
              <div className="p-8">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Wind className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">家居靈修室</h3>
                <p className="text-gray-700 mb-4">
                  專為冥想、瑜伽和靈性修行設計的獨立靜修空間。
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-smooth">
                  查看方案 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>

            {/* 企業 Wellness Room */}
            <Card className="border border-purple-200 card-hover-lift stagger-item">
              <div className="p-8">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">企業 Wellness Room</h3>
                <p className="text-gray-700 mb-4">
                  為企業打造員工身心健康的靜修空間，提升工作效率。
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-smooth">
                  企業方案 <ArrowRight className="w-4 h-4" />
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
              量子療癒空間淨化儀
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              物質與非物質同步淨化，改善空間能量頻率
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border border-emerald-200 bg-gradient-to-br from-emerald-50/50 to-white p-8">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">空氣淨化</h3>
              <p className="text-gray-700">
                釋放森林級數的負離子，過濾懸浮粒子及細菌病毒。
              </p>
            </Card>

            <Card className="border border-blue-200 bg-gradient-to-br from-blue-50/50 to-white p-8">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">能量提升</h3>
              <p className="text-gray-700">
                量子調頻驅走負能量及提升正能量。
              </p>
            </Card>

            <Card className="border border-purple-200 bg-gradient-to-br from-purple-50/50 to-white p-8">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">氣場優化</h3>
              <p className="text-gray-700">
                分析及擺設方位提升空間氣場運轉，轉運效應立竿見影。
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-full">
              了解產品詳情 <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA 區段 */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            準備改變您的空間能量場嗎？
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            立即預約免費的空間能量檢測，讓我們為您打造真正實現身心平衡的靜修空間。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-semibold">
              預約免費諮詢
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg rounded-full border-2 border-white text-white hover:bg-white/10">
              查看成功案例
            </Button>
          </div>
        </div>
      </section>

      {/* 頁腳 */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">療癒空間設計</h3>
              <p className="text-sm">科學化靈性空間設計，打造療癒的能量場。</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">產品</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">量子淨化儀</a></li>
                <li><a href="#" className="hover:text-white transition-colors">設計服務</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">公司</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">關於我們</a></li>
                <li><a href="#" className="hover:text-white transition-colors">部落格</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">聯繫方式</h4>
              <p className="text-sm">WhatsApp: +852 XXXX XXXX</p>
              <p className="text-sm">Email: contact@healing-space-design.com</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 療癒空間設計。版權所有。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
