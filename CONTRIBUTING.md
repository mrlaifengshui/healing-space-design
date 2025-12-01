# 貢獻指南

感謝您對療癒空間設計項目的興趣！我們歡迎各種形式的貢獻，包括 Bug 報告、功能建議、文檔改進和代碼貢獻。

## 行為準則

請遵守我們的[行為準則](CODE_OF_CONDUCT.md)。簡而言之：

- 尊重所有人
- 接受建設性批評
- 專注於對社區最有益的事情
- 表現出同情心

## 如何貢獻

### 報告 Bug

如果您發現了 Bug，請通過 GitHub Issues 報告。請包括：

- **清晰的標題** - 簡明扼要地描述 Bug
- **詳細的描述** - 解釋預期行為和實際行為
- **重現步驟** - 提供具體的步驟來重現 Bug
- **環境信息** - 包括您的操作系統、瀏覽器版本等
- **截圖或視頻** - 如果適用，附加視覺證據

### 提出功能建議

有好的想法？請提交 Issue 來討論：

- **清晰的標題** - 簡明扼要地描述功能
- **詳細的描述** - 解釋功能的目的和好處
- **用例** - 提供具體的使用場景
- **可能的實現方式** - 如果您有想法，可以分享

### 改進文檔

文檔改進總是受歡迎的：

- 修復拼寫錯誤或語法錯誤
- 澄清不清楚的說明
- 添加缺失的信息
- 改進示例代碼

### 貢獻代碼

#### 開發設置

1. Fork 本項目
2. 克隆您的 fork：
   ```bash
   git clone https://github.com/your-username/healing-space-design.git
   cd healing-space-design
   ```
3. 添加上游遠程：
   ```bash
   git remote add upstream https://github.com/original-owner/healing-space-design.git
   ```
4. 安裝依賴：
   ```bash
   pnpm install
   ```
5. 建立功能分支：
   ```bash
   git checkout -b feature/your-feature-name
   ```

#### 開發工作流

1. **確保代碼質量**
   ```bash
   # 運行類型檢查
   pnpm type-check
   
   # 運行 linter
   pnpm lint
   ```

2. **測試您的更改**
   ```bash
   # 啟動開發伺服器
   pnpm dev
   
   # 在瀏覽器中測試
   ```

3. **提交您的更改**
   - 使用清晰、簡潔的提交信息
   - 遵循 [Conventional Commits](https://www.conventionalcommits.org/) 規範
   - 示例：`feat: add quantum healing device page`

4. **推送到您的 fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **開啟 Pull Request**
   - 提供清晰的標題和描述
   - 參考相關的 Issue（如果有）
   - 解釋您的更改的目的和方法

#### 代碼風格指南

- **TypeScript** - 使用類型註解，避免 `any`
- **React** - 使用函數組件和 Hooks
- **Tailwind CSS** - 優先使用 Tailwind 工具類
- **命名** - 使用清晰、描述性的名稱
- **註釋** - 為複雜邏輯添加註釋
- **格式** - 使用 Prettier 格式化代碼

#### 組件開發最佳實踐

```typescript
// ✅ 好的做法
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CardProps {
  title: string;
  description: string;
  onAction?: () => void;
}

export function HealingCard({ title, description, onAction }: CardProps) {
  return (
    <Card className="p-6 card-hover-lift">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {onAction && (
        <Button onClick={onAction} className="w-full">
          了解詳情
        </Button>
      )}
    </Card>
  );
}
```

#### 提交 Pull Request 的檢查清單

- [ ] 代碼遵循項目的風格指南
- [ ] 我已經執行了本地類型檢查和 linting
- [ ] 我已經添加了必要的註釋和文檔
- [ ] 我的更改不會破壞現有功能
- [ ] 我已經測試了我的更改
- [ ] 提交信息清晰且有意義

## 審查流程

1. **自動檢查** - GitHub Actions 會運行類型檢查和 linting
2. **代碼審查** - 至少一名維護者會審查您的代碼
3. **反饋** - 我們可能會要求進行更改或改進
4. **合併** - 一旦批准，您的 PR 將被合併

## 社區

- **討論** - 在 GitHub Discussions 中提出想法和問題
- **Discord** - 加入我們的社區 Discord 伺服器（如果有）
- **郵件列表** - 訂閱我們的郵件列表以獲取更新

## 許可證

通過貢獻，您同意您的貢獻將根據項目的 MIT 許可證進行許可。

## 感謝

感謝您對療癒空間設計項目的貢獻！您的幫助使我們能夠創造更好的產品。

---

如有任何問題，請聯繫維護者或在 GitHub Issues 中提出。
