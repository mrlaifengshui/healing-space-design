import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      category: "個人療癒空間",
      title: "堅尼地城小戶型靜修室改造",
      location: "香港堅尼地城",
      area: "12 坪",
      duration: "3 週",
      challenge: "空間狹小、採光不足、能量場混亂",
      solution: "運用自然光線優化、量子淨化儀安裝、風水擺設調整",
      result: "客戶睡眠品質提升 80%，工作效率提升 60%",
      rating: 5,
      testimonial: "這個空間改造完全改變了我的生活。我現在每天都期待回家，在這個靜修室冥想 30 分鐘就能恢復活力。",
      author: "李女士，35 歲，企業主管"
    },
    {
      category: "企業 Wellness Room",
      title: "九龍灣科技公司員工休息室",
      location: "香港九龍灣",
      area: "25 坪",
      duration: "6 週",
      challenge: "員工壓力大、工作效率低、辦公室能量場負面",
      solution: "完整的 Wellness Room 設計、量子淨化儀系統、能量場優化",
      result: "員工滿意度提升 75%，病假率下降 40%，生產力提升 35%",
      rating: 5,
      testimonial: "自從安裝了這個 Wellness Room，員工的工作狀態明顯改善。公司的整體氛圍也變得更加正面。",
      author: "王先生，CEO，科技公司"
    },
    {
      category: "Spa 療癒中心",
      title: "五星級 Spa 中心靈性空間升級",
      location: "香港中環",
      area: "120 坪",
      duration: "12 週",
      challenge: "客戶體驗平凡、競爭力不足、品牌價值需提升",
      solution: "完整的靈性空間設計、感官療癒優化、高端傢俱配置、量子能量系統",
      result: "客戶滿意度提升 90%，重複消費率提升 65%，營收提升 45%",
      rating: 5,
      testimonial: "這次改造完全提升了我們 Spa 的品牌形象。客戶現在不僅來做療程，更是來體驗一個完整的靈性療癒之旅。",
      author: "陳女士，Spa 中心負責人"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-healing">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50/50 via-white to-blue-50/50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            成功案例
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            真實的療癒空間改造故事
          </p>
          <p className="text-lg text-gray-600">
            從個人家庭到企業辦公，看看我們如何為客戶打造療癒的能量場
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12">
            {cases.map((caseItem, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-emerald-400 transition-all overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left Side - Project Info */}
                  <div className="p-8 bg-gradient-to-br from-gray-50/50 to-white">
                    <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                      {caseItem.category}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {caseItem.title}
                    </h3>

                    <div className="space-y-4 mb-8">
                      <div>
                        <p className="text-sm text-gray-600 font-semibold">位置</p>
                        <p className="text-gray-900">{caseItem.location}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600 font-semibold">面積</p>
                          <p className="text-gray-900">{caseItem.area}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 font-semibold">週期</p>
                          <p className="text-gray-900">{caseItem.duration}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600 font-semibold mb-2">挑戰</p>
                        <p className="text-gray-700">{caseItem.challenge}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-semibold mb-2">解決方案</p>
                        <p className="text-gray-700">{caseItem.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Results & Testimonial */}
                  <div className="p-8 bg-gradient-to-br from-emerald-50/50 to-blue-50/50 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">成果</h4>
                      <p className="text-gray-700 mb-8 text-lg font-semibold text-emerald-700">
                        {caseItem.result}
                      </p>

                      <div className="border-t border-gray-300 pt-8">
                        <div className="flex gap-1 mb-4">
                          {[...Array(caseItem.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-4">
                          "{caseItem.testimonial}"
                        </p>
                        <p className="text-sm text-gray-600 font-semibold">
                          — {caseItem.author}
                        </p>
                      </div>
                    </div>

                    <Button className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-white">
                      了解更多詳情 <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-50/50 to-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            我們的成就
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "已完成項目" },
              { number: "95%", label: "客戶滿意度" },
              { number: "5.0", label: "平均評分" },
              { number: "3+", label: "年行業經驗" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <p className="text-4xl font-bold text-emerald-600 mb-2">{stat.number}</p>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-3xl font-bold mb-6">
            準備開始您的療癒空間改造了嗎？
          </h2>
          <p className="text-lg mb-8 opacity-90">
            聯繫我們，預約免費的空間諮詢，讓我們為您打造獨一無二的療癒空間
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              預約免費諮詢
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              查看更多案例
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
