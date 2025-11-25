import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Zap, Sparkles, ArrowRight, CheckCircle2, Waves, Building2 } from "lucide-react";
import { Link } from "wouter";
import { APP_LOGO, APP_TITLE } from "@/const";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-healing">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-lg text-gray-900">{APP_TITLE}</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-sm text-gray-700 hover:text-emerald-600 transition-colors font-medium">設計服務</Link>
            <Link href="/case-studies" className="text-sm text-gray-700 hover:text-emerald-600 transition-colors font-medium">案例</Link>
            <Link href="/testimonials" className="text-sm text-gray-700 hover:text-emerald-600 transition-colors font-medium">見證</Link>
            <Link href="/blog" className="text-sm text-gray-700 hover:text-emerald-600 transition-colors font-medium">部落格</Link>
            <Link href="/about" className="text-sm text-gray-700 hover:text-emerald-600 transition-colors font-medium">關於我們</Link>
          </div>
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg">預約諮詢</Button>
        </div>
      </nav>

      {/* Hero Section with Slogan */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-blue-50/50 -z-10" />
        
        {/* 量子波紋背景 */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl -z-5 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl -z-5 animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Main Slogan */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
                科學化靈性空間設計
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                打造療癒的能量場
              </h2>
            </div>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              結合傳統風水智慧與現代健康標準，透過科學化的能量場分析，為您的空間帶來深度療癒與心靈成長。無論是企業辦公室、療癒中心還是私密家居，我們都能打造出真正實現身心平衡的靜修空間。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg">
                預約免費諮詢 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                了解設計服務
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 三大設計支柱 Section */}
      <section className="py-16 md:py-24 px-4 bg-white/50 backdrop-blur">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              療癒空間設計的三大支柱
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              科學化的設計理念，為您的空間帶來完整的療癒體驗
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 自然空間設計 */}
            <Card className="border-2 border-emerald-200/50 bg-gradient-to-br from-emerald-50/50 to-white hover:shadow-xl transition-all duration-300 group">
              <div className="p-8">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">自然空間設計</h3>
                <p className="text-gray-700">
                  運用自然元素、光線和空氣流動，營造如同置身大自然的療癒環境。
                </p>
              </div>
            </Card>

            {/* 靈修功能設計 */}
            <Card className="border-2 border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-white hover:shadow-xl transition-all duration-300 group">
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
            <Card className="border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-white hover:shadow-xl transition-all duration-300 group">
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

      {/* 設計服務方案 Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-emerald-50/50 to-blue-50/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              針對性設計方案
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              從個人家居到企業辦公，我們提供完整的療癒空間設計方案
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 個人療癒空間 */}
            <Card className="border border-emerald-200 hover:border-emerald-400 transition-colors group">
              <div className="p-8">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                  <Leaf className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">個人療癒空間</h3>
                <p className="text-gray-700 mb-4">
                  為您的臥室、書房或家庭靜修室打造私人療癒聖地。
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium">
                  了解詳情 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>

            {/* 家居靈修室 */}
            <Card className="border border-blue-200 hover:border-blue-400 transition-colors group">
              <div className="p-8">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">家居靈修室</h3>
                <p className="text-gray-700 mb-4">
                  專為冥想、瑜伽和靈性修行設計的獨立靜修空間。
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                  查看方案 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>

            {/* 企業 Wellness Room */}
            <Card className="border border-purple-200 hover:border-purple-400 transition-colors group">
              <div className="p-8">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Building2 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">企業 Wellness Room</h3>
                <p className="text-gray-700 mb-4">
                  為企業打造員工身心健康的靜修空間，提升工作效率。
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium">
                  企業方案 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg">
              查看完整設計服務 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* 輔助工具 - 量子療癒空間淨化儀 Section */}
      <section className="py-16 md:py-24 px-4 bg-white/50 backdrop-blur">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              設計的完美輔助
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              量子療癒空間淨化儀 — 強化設計效果的科技工具
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border border-emerald-200 bg-gradient-to-br from-emerald-50/50 to-white p-8">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">空氣淨化</h4>
              <p className="text-gray-700 text-sm">釋放森林級數的負離子，營造清新的呼吸環境</p>
            </Card>

            <Card className="border border-blue-200 bg-gradient-to-br from-blue-50/50 to-white p-8">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">能量調頻</h4>
              <p className="text-gray-700 text-sm">量子調頻技術驅走負能量，提升正能量</p>
            </Card>

            <Card className="border border-purple-200 bg-gradient-to-br from-purple-50/50 to-white p-8">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">氣場優化</h4>
              <p className="text-gray-700 text-sm">分析空間能量，提升氣場運轉效率</p>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
              了解淨化儀詳情 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              準備改變您的空間能量了嗎？
            </h2>
            <p className="text-lg mb-8 opacity-90">
              立即預約免費的空間設計諮詢，讓我們為您打造真正實現身心平衡的靜修空間。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 shadow-lg">
                預約免費諮詢
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                查看案例
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-5 h-5 text-emerald-500" />
                <span className="font-semibold text-white">{APP_TITLE}</span>
              </div>
              <p className="text-sm">打造療癒的能量場</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">設計服務</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="hover:text-white transition-colors">個人療癒空間</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">家居靈修室</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">企業 Wellness</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">公司</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">關於我們</Link></li>
                <li><Link href="/case-studies" className="hover:text-white transition-colors">成功案例</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">部落格</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">聯繫我們</h4>
              <p className="text-sm">WhatsApp: +852 XXXX XXXX</p>
              <p className="text-sm">Email: info@healing-space.hk</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 療癒空間設計指南。版權所有。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
