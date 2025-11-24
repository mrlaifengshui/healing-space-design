import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      level: "Level 1",
      title: "空間能量檢測與優化",
      subtitle: "入門級",
      duration: "1-2 小時",
      color: "emerald",
      description: "首次接觸、預算有限、想快速改善",
      features: [
        "上門能量場檢測 (1-2 小時)",
        "空間診斷報告",
        "基礎優化建議 (3-5 項)",
        "產品推薦",
        "後續跟進諮詢"
      ],
      cta: "預約檢測"
    },
    {
      level: "Level 2",
      title: "個人療癒空間設計",
      subtitle: "中級",
      duration: "2-4 週",
      color: "blue",
      description: "有明確需求、預算中等、想完整改造",
      features: [
        "空間規劃與設計圖",
        "材料與傢俱建議",
        "能量場優化方案",
        "施工監督 (可選)",
        "完工後能量場複檢",
        "3 個月售後支持"
      ],
      cta: "開始設計"
    },
    {
      level: "Level 3",
      title: "企業 Wellness Room 設計",
      subtitle: "高級",
      duration: "4-8 週",
      color: "purple",
      description: "企業客戶、預算充足、需要完整解決方案",
      features: [
        "完整的空間規劃與設計",
        "WELL 標準認證支持",
        "項目管理與施工監督",
        "員工培訓與使用指南",
        "定期能量場維護",
        "12 個月售後支持",
        "ROI 分析報告"
      ],
      cta: "企業諮詢"
    },
    {
      level: "Level 4",
      title: "Spa/療癒中心靈性空間設計",
      subtitle: "頂級",
      duration: "8-12 週",
      color: "amber",
      description: "高端療癒中心、品牌提升、長期合作",
      features: [
        "完整的靈性空間設計",
        "感官療癒優化",
        "品牌體驗設計",
        "高端傢俱與藝術品配置",
        "長期能量場維護與優化",
        "24 個月售後支持",
        "客戶滿意度提升方案",
        "專屬顧問支持"
      ],
      cta: "高端方案諮詢"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; bg: string; text: string; button: string }> = {
      emerald: {
        border: "border-emerald-300",
        bg: "bg-emerald-50/50",
        text: "text-emerald-700",
        button: "bg-emerald-600 hover:bg-emerald-700"
      },
      blue: {
        border: "border-blue-300",
        bg: "bg-blue-50/50",
        text: "text-blue-700",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      purple: {
        border: "border-purple-300",
        bg: "bg-purple-50/50",
        text: "text-purple-700",
        button: "bg-purple-600 hover:bg-purple-700"
      },
      amber: {
        border: "border-amber-300",
        bg: "bg-amber-50/50",
        text: "text-amber-700",
        button: "bg-amber-600 hover:bg-amber-700"
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-healing">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50/50 via-white to-blue-50/50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            療癒空間設計服務
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            由淺入深的設計方案，滿足不同客戶需求
          </p>
          <p className="text-lg text-gray-600">
            從個人家庭到企業辦公，我們提供完整的靈性空間解決方案
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <Card key={index} className={`border-2 ${colors.border} bg-gradient-to-br ${colors.bg} to-white hover:shadow-lg transition-shadow`}>
                  <CardHeader className={`bg-gradient-to-r from-${service.color}-100/50 to-${service.color}-50/50`}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className={`text-sm font-semibold ${colors.text} mb-1`}>{service.level}</p>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <CardDescription>{service.subtitle}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="mb-6">
                      <p className="text-sm text-gray-600 mb-2">適合客戶：</p>
                      <p className="text-gray-700 font-medium">{service.description}</p>
                    </div>

                    <div className="mb-6 pb-6 border-b">
                      <p className="text-sm text-gray-600">預計週期：</p>
                      <p className={`text-lg font-bold ${colors.text}`}>{service.duration}</p>
                    </div>

                    <div className="mb-8">
                      <p className="text-sm font-semibold text-gray-900 mb-3">包含服務：</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex gap-3 items-start">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className={`w-full ${colors.button} text-white`}>
                      {service.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-50/50 to-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            設計流程
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "初步諮詢",
                description: "了解您的需求、預算和期望，進行初步空間評估"
              },
              {
                step: "2",
                title: "能量場檢測",
                description: "上門進行專業的能量場檢測和空間診斷"
              },
              {
                step: "3",
                title: "設計方案",
                description: "根據檢測結果，提供客製化的設計方案和報告"
              },
              {
                step: "4",
                title: "實施與優化",
                description: "協助實施設計方案，定期跟進和優化效果"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-white ${
                  index === 0 ? 'bg-emerald-600' :
                  index === 1 ? 'bg-blue-600' :
                  index === 2 ? 'bg-purple-600' :
                  'bg-amber-600'
                }`}>
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            為什麼選擇我們
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "科學化設計",
                description: "結合傳統風水智慧與現代科學，提供有實證支持的設計方案"
              },
              {
                title: "客製化方案",
                description: "根據每個客戶的獨特需求，提供量身訂製的解決方案"
              },
              {
                title: "長期支持",
                description: "提供完工後的定期維護和優化，確保長期效果"
              },
              {
                title: "專業團隊",
                description: "擁有室內設計、風水、能量場分析等多領域專家"
              },
              {
                title: "成功案例",
                description: "已為數百個家庭和企業打造療癒空間，獲得高度滿意"
              },
              {
                title: "全面服務",
                description: "從檢測、設計、施工到維護，提供一站式服務"
              }
            ].map((item, index) => (
              <Card key={index} className="border border-gray-200 hover:border-emerald-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
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
            準備開始您的療癒空間之旅了嗎？
          </h2>
          <p className="text-lg mb-8 opacity-90">
            選擇最適合您的服務級別，預約免費初步諮詢
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              預約諮詢
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
