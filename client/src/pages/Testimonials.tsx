import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "李女士",
      role: "上班族",
      category: "個人家庭",
      rating: 5,
      content: "終於找到真正的靜修空間。自從使用淨化儀後，我的睡眠品質明顯提升，每天都能感受到空間的正能量。設計師非常專業，整個過程也很順暢。",
      image: "李",
      color: "emerald"
    },
    {
      id: 2,
      name: "陳先生",
      role: "創意工作者",
      category: "個人家庭",
      rating: 5,
      content: "這個設計完全改變了我的工作環境。我現在在這個空間裡工作時，創意源源不絕，效率也提升了很多。強烈推薦給所有創意工作者！",
      image: "陳",
      color: "blue"
    },
    {
      id: 3,
      name: "王先生",
      role: "HR 主管",
      category: "企業",
      rating: 5,
      content: "員工滿意度提升，Wellness Room 成為公司亮點。員工真的在使用，反饋非常正面。我們看到了員工的身心健康改善，這個投資絕對值得。",
      image: "王",
      color: "purple"
    },
    {
      id: 4,
      name: "張女士",
      role: "Spa 老闆",
      category: "Spa/療癒中心",
      rating: 5,
      content: "這次升級讓我們的 Spa 成為了市場上獨一無二的療癒聖地。客戶的滿意度和忠誠度都大幅提升，客單價也增加了。非常感謝設計師的專業建議。",
      image: "張",
      color: "amber"
    },
    {
      id: 5,
      name: "劉先生",
      role: "家庭主婦",
      category: "個人家庭",
      rating: 5,
      content: "我的小公寓變成了我的私人療癒聖地。每天在這個空間裡，我都能感受到平靜和放鬆。家人也都很喜歡這個新的設計。",
      image: "劉",
      color: "emerald"
    },
    {
      id: 6,
      name: "林女士",
      role: "瑜伽教練",
      category: "Spa/療癒中心",
      rating: 5,
      content: "我的瑜伽會館在改造後，學員的參與度明顯提升。大家都說在這個空間裡練習瑜伽時，更容易進入冥想狀態。這真的是一個很好的投資。",
      image: "林",
      color: "blue"
    },
    {
      id: 7,
      name: "何先生",
      role: "公司董事長",
      category: "企業",
      rating: 5,
      content: "我們的企業文化因為這個 Wellness Room 而改變了。員工更加放鬆、更有創意、更有團隊精神。這個設計投資為公司帶來了無形的資產。",
      image: "何",
      color: "purple"
    },
    {
      id: 8,
      name: "吳女士",
      role: "退休人士",
      category: "個人家庭",
      rating: 5,
      content: "退休後，我在家裡創造了一個完美的靜修空間。每天在這裡冥想和放鬆，生活品質提升了很多。感謝設計師的細心和專業。",
      image: "吳",
      color: "amber"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; badge: string }> = {
      emerald: {
        bg: "bg-emerald-100",
        text: "text-emerald-700",
        badge: "bg-emerald-100 text-emerald-800"
      },
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-700",
        badge: "bg-blue-100 text-blue-800"
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-700",
        badge: "bg-purple-100 text-purple-800"
      },
      amber: {
        bg: "bg-amber-100",
        text: "text-amber-700",
        badge: "bg-amber-100 text-amber-800"
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
            客戶見證
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            真實的客戶故事
          </p>
          <p className="text-lg text-gray-600">
            聽聽我們的客戶如何透過療癒空間設計改變了他們的生活
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => {
              const colors = getColorClasses(testimonial.color);
              
              return (
                <Card key={testimonial.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-gray-700 mb-6 italic">
                      「{testimonial.content}」
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center gap-4 pt-4 border-t">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white ${colors.bg}`}>
                        <span className={colors.text}>{testimonial.image}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                      <Badge className={colors.badge}>{testimonial.category}</Badge>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            客戶滿意度統計
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "95%",
                label: "客戶滿意度",
                color: "emerald"
              },
              {
                number: "90%",
                label: "會推薦給朋友",
                color: "blue"
              },
              {
                number: "85%",
                label: "重複購買率",
                color: "purple"
              },
              {
                number: "5.0",
                label: "平均評分",
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

      {/* Category Breakdown */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            不同客戶類型的見證
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "個人家庭",
                count: "50+ 客戶",
                highlights: [
                  "睡眠品質提升",
                  "身心放鬆",
                  "生活品質改善"
                ],
                color: "emerald"
              },
              {
                category: "企業客戶",
                count: "30+ 公司",
                highlights: [
                  "員工滿意度提升",
                  "工作效率提升",
                  "企業文化改善"
                ],
                color: "blue"
              },
              {
                category: "Spa/療癒中心",
                count: "20+ 機構",
                highlights: [
                  "客戶回頭率提升",
                  "客單價提升",
                  "品牌價值提升"
                ],
                color: "purple"
              }
            ].map((category, index) => {
              const colors = getColorClasses(category.color);
              
              return (
                <Card key={index} className={`border-2 ${colors.badge}`}>
                  <CardContent className="pt-6">
                    <h3 className={`text-xl font-bold ${colors.text} mb-2`}>
                      {category.category}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{category.count}</p>
                    <div className="space-y-2">
                      {category.highlights.map((highlight, i) => (
                        <div key={i} className="flex gap-2 items-start">
                          <span className={`w-2 h-2 rounded-full ${colors.text} mt-2 flex-shrink-0`}></span>
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            影片見證
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "李女士的睡眠改善故事",
                description: "從失眠困擾到深度睡眠，看看淨修室如何改變了她的生活"
              },
              {
                title: "企業 Wellness Room 的成效",
                description: "科技公司如何透過 Wellness Room 提升員工滿意度和工作效率"
              }
            ].map((video, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-2xl">▶</span>
                    </div>
                    <p className="text-gray-600 text-sm">影片預覽</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-700 mb-4">{video.description}</p>
                <Button variant="outline" className="w-full">
                  觀看完整影片
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            準備成為我們的下一個成功故事了嗎？
          </h2>
          <p className="text-lg mb-8 opacity-90">
            讓我們幫您創造一個真正改變生活的療癒空間
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              預約免費諮詢
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              了解更多
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
