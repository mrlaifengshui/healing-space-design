import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Zap, Sparkles, Wind, Heart, TrendingUp, ArrowRight } from "lucide-react";

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-healing">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50/50 via-white to-blue-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            量子療癒空間淨化儀
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            物質與非物質同步淨化
          </p>
          <p className="text-lg text-gray-600 mb-8">
            改善空間能量頻率 • 淨化空氣 • 轉運效應立竿見影
          </p>
          <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg">
            預約諮詢 <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            三合一核心功能
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-2 border-emerald-200/50 bg-gradient-to-br from-emerald-50/50 to-white hover:shadow-xl transition-all">
              <CardHeader>
                <Wind className="w-12 h-12 text-emerald-600 mb-4" />
                <CardTitle className="text-xl">改善空間粒子</CardTitle>
                <CardDescription>空氣淨化過濾</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  高效過濾懸浮粒子、細菌和病毒，為您的空間帶來潔淨的呼吸環境。
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-2 border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-white hover:shadow-xl transition-all">
              <CardHeader>
                <Zap className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">提升能量意識</CardTitle>
                <CardDescription>量子調頻技術</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  透過量子調頻驅走負能量，提升正能量，改善空間的整體能量場。
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-white hover:shadow-xl transition-all">
              <CardHeader>
                <Sparkles className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">優化空間氣場</CardTitle>
                <CardDescription>能量場分析與擺設</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  分析空間能量流動，提供最佳擺設方位建議，提升空間氣場運轉。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Unique Advantages Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-50/50 to-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            獨特優點
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Leaf className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                空氣淨化
              </h3>
              <p className="text-gray-700">
                釋放森林級數的負離子，營造如同置身森林般的清新環境。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Heart className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                負能量轉化
              </h3>
              <p className="text-gray-700">
                量子轉化技術將負能量轉化為正能量，提升生活品質。
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <TrendingUp className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                豐盛顯化
              </h3>
              <p className="text-gray-700">
                轉運效應立竿見影，吸引更多正面機遇和豐盛能量。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specifications Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            產品規格與應用場景
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Standard Model */}
            <Card className="border-2 border-emerald-300 bg-gradient-to-br from-emerald-50/50 to-white">
              <CardHeader className="bg-gradient-to-r from-emerald-100/50 to-emerald-50/50">
                <CardTitle className="text-2xl text-emerald-700">標準型</CardTitle>
                <CardDescription>適合個人臥室</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">適用空間：</p>
                    <p className="text-gray-700">10-15 坪</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">預期效果：</p>
                    <p className="text-gray-700">深度睡眠、能量提升、身心放鬆</p>
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    預約諮詢
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Model */}
            <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50/50 to-white">
              <CardHeader className="bg-gradient-to-r from-blue-100/50 to-blue-50/50">
                <CardTitle className="text-2xl text-blue-700">進階型</CardTitle>
                <CardDescription>適合家庭客廳</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">適用空間：</p>
                    <p className="text-gray-700">15-20 坪</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">預期效果：</p>
                    <p className="text-gray-700">家庭和諧、運勢提升、正能量環境</p>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    預約諮詢
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Commercial Model */}
            <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50/50 to-white">
              <CardHeader className="bg-gradient-to-r from-purple-100/50 to-purple-50/50">
                <CardTitle className="text-2xl text-purple-700">商用型</CardTitle>
                <CardDescription>適合辦公室</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">適用空間：</p>
                    <p className="text-gray-700">20-30 坪</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">預期效果：</p>
                    <p className="text-gray-700">員工效率提升、正能量環境、創意激發</p>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    企業諮詢
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Professional Model */}
            <Card className="border-2 border-amber-300 bg-gradient-to-br from-amber-50/50 to-white">
              <CardHeader className="bg-gradient-to-r from-amber-100/50 to-amber-50/50">
                <CardTitle className="text-2xl text-amber-700">專業型</CardTitle>
                <CardDescription>適合 Spa/療癒中心</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">適用空間：</p>
                    <p className="text-gray-700">30+ 坪</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">預期效果：</p>
                    <p className="text-gray-700">療癒效果倍增、客戶滿意度提升、品牌價值提升</p>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    高端方案諮詢
                  </Button>
                </div>
              </CardContent>
            </Card>
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
            準備改變您的空間能量了嗎？
          </h2>
          <p className="text-lg mb-8 opacity-90">
            立即預約免費的空間能量檢測，了解您的空間如何受益於量子淨化儀。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              預約免費檢測
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              聯繫我們
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
