import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Sparkles } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      id: 1,
      title: "堅尼地城 12 坪小戶型淨修室改造",
      category: "個人家庭",
      icon: Sparkles,
      color: "emerald",
      client: "李女士",
      background: "35 歲上班族，長期失眠",
      challenge: "空間狹小、隔音差、光線不足",
      solution: "軟裝隔音、自然光優化、親生命設計",
      results: [
        "睡眠品質提升 80%",
        "能量感提升顯著",
        "身心放鬆效果明顯"
      ],
      investment: "HKD 80,000",
      testimonial: "終於找到真正的靜修空間。自從改造後，我的睡眠品質明顯提升，每天都能感受到空間的正能量。"
    },
    {
      id: 2,
      title: "九龍灣工業風淨修室設計",
      category: "個人家庭",
      icon: Sparkles,
      color: "blue",
      client: "陳先生",
      background: "創意工作者，需要靈感空間",
      challenge: "工業風格、噪音、能量混亂",
      solution: "工業風 + 親生命設計結合、聲學優化、能量場調整",
      results: [
        "創意產出提升",
        "工作效率提升 40%",
        "靈感激發更頻繁"
      ],
      investment: "HKD 120,000",
      testimonial: "這個設計完全改變了我的工作環境。我現在在這個空間裡工作時，創意源源不絕。"
    },
    {
      id: 3,
      title: "科技公司 Wellness Room 設計",
      category: "企業",
      icon: Users,
      color: "purple",
      client: "某科技公司",
      background: "150 人規模，員工 Burnout 率高",
      challenge: "開放式辦公室、預算限制、員工教育",
      solution: "獨立冥想室、WELL 標準、員工培訓",
      results: [
        "員工滿意度提升 60%",
        "病假率下降 30%",
        "工作效率提升 25%"
      ],
      investment: "HKD 300,000",
      testimonial: "這個項目超出了我們的預期。員工真的在使用，並且反饋非常正面。我們看到了員工的身心健康改善。"
    },
    {
      id: 4,
      title: "高端 Spa 靈性空間升級",
      category: "Spa/療癒中心",
      icon: TrendingUp,
      color: "amber",
      client: "五星級 Spa",
      background: "尋求差異化和品牌提升",
      challenge: "現有空間改造、品牌一致性、療癒效果最大化",
      solution: "感官療癒設計、能量場優化、VIP 體驗區",
      results: [
        "客戶回頭率提升 45%",
        "客單價提升 25%",
        "品牌口碑顯著提升"
      ],
      investment: "HKD 600,000",
      testimonial: "這次升級讓我們的 Spa 成為了市場上獨一無二的療癒聖地。客戶的滿意度和忠誠度都大幅提升。"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { badge: string; border: string; bg: string; text: string }> = {
      emerald: {
        badge: "bg-emerald-100 text-emerald-800",
        border: "border-emerald-200",
        bg: "bg-emerald-50",
        text: "text-emerald-700"
      },
      blue: {
        badge: "bg-blue-100 text-blue-800",
        border: "border-blue-200",
        bg: "bg-blue-50",
        text: "text-blue-700"
      },
      purple: {
        badge: "bg-purple-100 text-purple-800",
        border: "border-purple-200",
        bg: "bg-purple-50",
        text: "text-purple-700"
      },
      amber: {
        badge: "bg-amber-100 text-amber-800",
        border: "border-amber-200",
        bg: "bg-amber-50",
        text: "text-amber-700"
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            成功案例
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            真實的轉變故事
          </p>
          <p className="text-lg text-gray-600">
            從個人家庭到高端企業，看看我們如何為客戶創造療癒空間
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((caseStudy) => {
              const colors = getColorClasses(caseStudy.color);
              const IconComponent = caseStudy.icon;
              
              return (
                <Card key={caseStudy.id} className={`border-2 ${colors.border} overflow-hidden hover:shadow-lg transition-shadow`}>
                  <CardHeader className={colors.bg}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <Badge className={colors.badge}>{caseStudy.category}</Badge>
                        <CardTitle className="text-xl mt-3">{caseStudy.title}</CardTitle>
                      </div>
                      <IconComponent className={`w-8 h-8 ${colors.text} flex-shrink-0`} />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {/* Client Info */}
                    <div className="mb-6 pb-6 border-b">
                      <p className="font-semibold text-gray-900 mb-1">{caseStudy.client}</p>
                      <p className="text-sm text-gray-600">{caseStudy.background}</p>
                    </div>

                    {/* Challenge */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">設計挑戰：</p>
                      <p className="text-gray-700">{caseStudy.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">解決方案：</p>
                      <p className="text-gray-700">{caseStudy.solution}</p>
                    </div>

                    {/* Results */}
                    <div className="mb-6 pb-6 border-b">
                      <p className="text-sm font-semibold text-gray-900 mb-3">成果：</p>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <span className={`w-2 h-2 rounded-full ${colors.text} mt-2 flex-shrink-0`}></span>
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Investment */}
                    <div className="mb-6 pb-6 border-b">
                      <p className="text-sm text-gray-600">投資額：</p>
                      <p className={`text-2xl font-bold ${colors.text}`}>{caseStudy.investment}</p>
                    </div>

                    {/* Testimonial */}
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-2">客戶見證：</p>
                      <p className="text-gray-700 italic">「{caseStudy.testimonial}」</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            我們的影響力
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "100+",
                label: "已完成項目",
                color: "emerald"
              },
              {
                number: "95%",
                label: "客戶滿意度",
                color: "blue"
              },
              {
                number: "50K+",
                label: "受益人數",
                color: "purple"
              },
              {
                number: "5M+",
                label: "總投資額",
                color: "amber"
              }
            ].map((stat, index) => {
              const bgColor = {
                emerald: "bg-emerald-600",
                blue: "bg-blue-600",
                purple: "bg-purple-600",
                amber: "bg-amber-600"
              }[stat.color];

              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                  <p className={`text-4xl font-bold ${bgColor} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </p>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Categories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            我們服務的客戶類型
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "個人家庭",
                description: "從小坪數公寓到豪宅，我們為個人創造私人的療癒空間",
                count: "50+ 個案例"
              },
              {
                title: "企業與機構",
                description: "為科技公司、金融機構等提供員工 Wellness 解決方案",
                count: "30+ 個案例"
              },
              {
                title: "Spa 與療癒中心",
                description: "為高端療癒中心升級靈性空間，提升客戶體驗",
                count: "20+ 個案例"
              }
            ].map((category, index) => (
              <Card key={index} className="border border-gray-200 hover:border-emerald-400 transition-colors">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{category.description}</p>
                  <p className="text-sm font-semibold text-emerald-600">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            您的療癒空間故事從這裡開始
          </h2>
          <p className="text-lg mb-8 opacity-90">
            讓我們幫您創造一個真正改變生活的療癒空間
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
