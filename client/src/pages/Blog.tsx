import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "科技公司如何透過企業冥想室設計，降低員工 Burnout 率 30%？",
    excerpt: "在高壓的科技產業中，員工身心健康已成為企業競爭力的關鍵。本文深入探討如何透過科學化的冥想室設計，有效降低員工職業倦怠率，提升工作效率與創造力。",
    category: "企業解決方案",
    date: "2025-11-20",
    author: "療癒空間設計團隊",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    keywords: "企業冥想室、辦公室減壓、員工 Wellness"
  },
  {
    id: 2,
    title: "香港小坪數單位也能實現：打造高功能性居家淨修室的 5 個秘訣",
    excerpt: "在寸土寸金的香港，打造一個私密的淨修空間似乎是奢侈。但透過科學化的空間規劃與設計，即使是小坪數單位也能擁有一個真正實現深度靜修的角落。",
    category: "家居設計",
    date: "2025-11-18",
    author: "療癒空間設計團隊",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    keywords: "小坪數、淨修室、家居設計"
  },
  {
    id: 3,
    title: "深度療癒的秘密：Spa 淨修室如何透過感官設計提升客戶回頭率？",
    excerpt: "感官設計不僅能創造沉浸式的療癒體驗，更能顯著提升客戶滿意度與重複消費率。本文揭示了如何在 Spa 和療癒中心應用感官設計的核心原理。",
    category: "療癒中心",
    date: "2025-11-16",
    author: "療癒空間設計團隊",
    image: "https://images.unsplash.com/photo-1600881333195-a0d0e5a5a7e0?w=600&h=400&fit=crop",
    keywords: "Spa 設計、感官療癒、療癒空間"
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(BLOG_POSTS.map(post => post.category)));
  
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <div className="border-b border-border bg-muted/30 py-12">
        <div className="container">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block">
            ← 返回首頁
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">療癒空間設計部落格</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            深入探討科學化靈性空間設計的知識、案例與行業趨勢
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="搜尋文章..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-11"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              size="sm"
            >
              全部
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-32">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">未找到符合條件的文章</p>
              <Button variant="outline" onClick={() => { setSearchTerm(""); setSelectedCategory(null); }}>
                清除篩選
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden border-0 hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3 gap-6 p-6">
                    <div className="md:col-span-2 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold hover:text-emerald-600 transition-colors cursor-pointer">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('zh-HK')}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                      </div>
                      <div className="pt-4">
                        <Button className="bg-emerald-600 hover:bg-emerald-700" size="sm">
                          閱讀全文 <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-full h-48 rounded-lg overflow-hidden bg-muted">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
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
