import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Users, Target, Zap } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <div className="border-b border-border bg-muted/30 py-12">
        <div className="container">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block">
            ← 返回首頁
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">關於我們</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            結合傳統智慧與現代科學，為您打造真正實現身心平衡的靈性空間
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">我們的使命</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                在現代高壓的都市生活中，人們對空間的需求已不再僅限於美觀與實用。我們的使命是透過科學化的能量場分析與現代設計方法，為企業、療癒中心和家庭打造能夠實現深度療癒與心靈成長的靜修空間。
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                我們相信，一個設計得當的空間不僅能提升生活品質，更能成為身心健康的堅實後盾。
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-8 border border-emerald-200">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">精準定位</h3>
                    <p className="text-sm text-muted-foreground">根據客戶的具體需求與空間特性，提供量身定制的設計方案</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">科學化方法</h3>
                    <p className="text-sm text-muted-foreground">運用數據與科學儀器，將玄學轉化為可量測、可優化的設計方案</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">國際標準</h3>
                    <p className="text-sm text-muted-foreground">結合 WELL 認證標準與親生命設計趨勢，確保設計的專業性與權威性</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">核心價值</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "以客戶為中心",
                description: "深入了解每個客戶的獨特需求，提供個性化的設計解決方案"
              },
              {
                icon: Award,
                title: "專業與權威",
                description: "結合傳統風水智慧與現代科學，建立行業領先的設計標準"
              },
              {
                icon: Zap,
                title: "創新與突破",
                description: "不斷探索新的設計趨勢與技術，為客戶帶來超越期待的成果"
              },
              {
                icon: Target,
                title: "透明與誠實",
                description: "清晰溝通設計理念與預期效果，建立長期信任的合作關係"
              }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="p-6 border-0 bg-background hover:shadow-lg transition-shadow">
                  <Icon className="w-8 h-8 text-emerald-600 mb-4" />
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">我們的專業背景</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">多領域專業整合</h3>
              <p className="text-muted-foreground leading-relaxed">
                我們的團隊匯聚了來自室內設計、風水學、心理學、建築工程等多個領域的專業人士。每位成員都在各自的領域擁有深厚的專業知識與豐富的實踐經驗。
              </p>
              <ul className="space-y-3">
                {[
                  "WELL 認證設計顧問",
                  "傳統風水與能量場分析專家",
                  "親生命設計與感官設計研究者",
                  "高端室內設計與工程管理團隊"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">完整的服務流程</h3>
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "初步諮詢",
                    desc: "深入了解您的空間目標、預算與期望的療癒效果"
                  },
                  {
                    step: "02",
                    title: "能量場檢測",
                    desc: "運用專業儀器進行實地或遠程的空間能量數據採集與分析"
                  },
                  {
                    step: "03",
                    title: "設計方案",
                    desc: "結合量子風水與三大設計支柱，提出視覺化設計圖與能量佈局方案"
                  },
                  {
                    step: "04",
                    title: "工程執行",
                    desc: "嚴選環保健康建材，確保施工品質符合健康標準"
                  },
                  {
                    step: "05",
                    title: "驗收調校",
                    desc: "完工後進行能量場複檢，確保空間達到最佳療癒狀態"
                  }
                ].map((process, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-semibold text-sm">
                      {process.step}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{process.title}</h4>
                      <p className="text-sm text-muted-foreground">{process.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">準備好開始您的療癒空間之旅了嗎？</h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
            聯繫我們，預約免費的空間能量場初步諮詢，讓我們為您打造真正實現身心平衡的靜修空間。
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
            立即預約諮詢
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2025 療癒空間設計指南。版權所有。</p>
        </div>
      </footer>
    </div>
  );
}
