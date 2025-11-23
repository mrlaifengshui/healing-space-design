import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Zap, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { APP_LOGO, APP_TITLE } from "@/const";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-lg">{APP_TITLE}</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">產品</Link>
            <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">服務</Link>
            <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">案例</Link>
            <Link href="/testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">見證</Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">部落格</Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">關於我們</Link>
          </div>
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">預約諮詢</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-background to-teal-50 -z-10" />
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              科學化靈性空間設計
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mt-2">打造療癒的能量場</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              結合傳統風水智慧與現代健康標準，透過科學化的能量場分析，為您的空間帶來深度療癒與心靈成長。無論是企業辦公室、療癒中心還是私密家居，我們都能打造出真正實現身心平衡的靜修空間。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                立即預約諮詢 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section id="philosophy" className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">設計三大支柱</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">從美學到深度療癒的完整實踐</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "親生命設計",
                description: "將自然元素融入空間，重建人與自然的連結。透過自然光線、天然材質和垂直綠化，降低壓力、提升情緒穩定性。",
                color: "from-emerald-500 to-teal-600"
              },
              {
                icon: Zap,
                title: "感官療癒設計",
                description: "透過五感控制，創造深度靜修環境。優化聽覺、嗅覺、視覺等感官體驗，實現無干擾的高專注狀態。",
                color: "from-amber-500 to-orange-600"
              },
              {
                icon: Shield,
                title: "淨修功能性",
                description: "確保空間具備高效的健康與靜修功能。智能空氣淨化、隱藏式收納、人體工學設計，實現『留白』美學。",
                color: "from-blue-500 to-cyan-600"
              }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Card key={idx} className="p-8 border-0 bg-background hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">針對性解決方案</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">為不同客戶類型量身定制的專業設計方案</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "企業 Wellness Room",
                subtitle: "降低員工 Burnout，提升生產力",
                features: ["冥想室設計", "正念空間規劃", "員工減壓方案"],
                price: "HKD 30 萬+"
              },
              {
                title: "療癒中心升級",
                subtitle: "深度療癒空間，提升客戶體驗",
                features: ["能量場優化", "感官設計應用", "專業療癒環境"],
                price: "HKD 50 萬+"
              },
              {
                title: "居家淨修室",
                subtitle: "私密靜修空間，提升生活品質",
                features: ["小坪數設計", "隔音優化", "靈性佈置"],
                price: "HKD 10 萬+"
              }
            ].map((solution, idx) => (
              <Card key={idx} className="p-8 border-0 bg-gradient-to-br from-background to-muted/50 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{solution.subtitle}</p>
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">起價</p>
                  <p className="text-lg font-semibold text-emerald-600">{solution.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">準備好打造您的療癒空間了嗎？</h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">立即預約免費的空間能量場初步諮詢，我們將根據您的需求提供專業的設計方案。</p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
            立即預約 <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">關於我們</h4>
              <p className="text-sm text-muted-foreground">科學化靈性空間設計專家，結合量子風水與國際健康標準。</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">快速連結</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#philosophy">設計理念</Link></li>
                <li><Link href="#solutions">解決方案</Link></li>
                <li><Link href="/blog">部落格</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">聯繫方式</h4>
              <p className="text-sm text-muted-foreground">WhatsApp: +852 XXXX XXXX</p>
              <p className="text-sm text-muted-foreground">Email: info@healing-space.hk</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">合作夥伴</h4>
              <p className="text-sm text-muted-foreground">與 mrlaifengshui.com 合作，提供專業的靈性空間設計服務。</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 療癒空間設計指南。版權所有。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
