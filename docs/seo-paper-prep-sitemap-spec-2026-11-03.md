# Paper prep · Sitemap peers + guide↔spec checklist

Date: 2026-11-03 PT · Room: SEO 出海网站 · Role: Cooper · 情报简报 (+ Product paper sync)  
Site: https://seo-gefei-scaffold.vercel.app · tip `2f30992`  
Status: **纸面 only** — 浇水关 · 不上第 5 页 · 不埋 Analytics · 不点 GSC 编入 · 不推 git · 不发外链

Refs: `gefei-kb/2026-10-18-sitemap-monitor-new-keywords.md` · `gefei-scaffold-guidance-from-wechat-2026-10-30.md` · watering list 仅作品类对照、**不开闸**

---

## 1. Sitemap baseline peers（建议盯 2 个）

方法门槛（哥飞 10/18）：持续上新工具/内容页、同簇、能拿到搜索流量；从 robots 或常见路径找 Sitemap；**两次 URL 清单 diff 只看新增**，lastmod 不当新词证明。

> **2026-11-03 Jarvis 认（产品建议）：** 第一对基线 = **edit-tool.com + imagecropkit.com**（OG 1200×630 同簇、好 diff）。iLoveIMG / iLovePDF → **观察名单**。CSV 仍等「已编入」再落盘。

### Peer A — edit-tool.com（对 OG / PNG / resize / crop 簇）

| 项 | 值 |
|----|-----|
| Site | **edit-tool.com** |
| Homepage | https://edit-tool.com |
| robots.txt | https://edit-tool.com/robots.txt（明示 `Sitemap:`） |
| Sitemap | **https://edit-tool.com/sitemap.xml**（2026-11-03 抽验 HTTP 200） |
| Why peer | 同簇小站、OG/图片编辑意图近；Sitemap 体量适合第一轮人工/半自动 diff（相对 iLove 千级+多语噪声低） |
| How we diff later | 存全量或 EN 工具 `<loc>` 作基线 → 下次同表只标新增 slug → Trends/SERP/可交付三检。**不**据此上第 5 页 |

### Peer B — imagecropkit.com（对 crop / 1200×630 簇）

| 项 | 值 |
|----|-----|
| Site | **imagecropkit.com** |
| Homepage | https://imagecropkit.com |
| robots.txt | https://imagecropkit.com/robots.txt（明示 `Sitemap:`） |
| Sitemap | **https://imagecropkit.com/sitemap.xml**（2026-11-03 抽验 HTTP 200） |
| Why peer | 明确 crop/尺寸工具向，贴近 N1/S1「1200×630」；体量小、好做第一对基线 |
| How we diff later | 同 A；编入前只记账，不开浇水 |

### 观察名单（本轮不建基线）

| 站 | Sitemap | 备注 |
|----|---------|------|
| iLoveIMG | https://www.iloveimg.com/sitemap.xml（~1.6k，多语） | 原候选；噪声高，作观察 |
| iLovePDF | https://www.ilovepdf.com/sitemap.xml（~1.4k） | 原候选；PDF/OCR 簇观察 |
| Smallpdf | https://smallpdf.com/sitemap.xml（巨型） | 难 diff |
| TinyPNG | https://tinypng.com/sitemap.xml | 偏 compress |
| Convertio | https://convertio.co/sitemap.xml（index） | 运维重 |

**浇水目录**（Peplio / Dialegein / dir.im 等）**不是** Sitemap 同行基线对象——那些是外链候选，闸仍关。

---

## 2. Guide ↔ tool / spec 一致性清单

对照源：`/workspace/Projects/seo-gefei-scaffold` tip `2f30992` + 现网 200 抽验（四 listed + 一 unlisted）。

### 页面盘点

| Slug | Cluster | Listed / sitemap | On-page tool | Key numbers in copy |
|------|---------|------------------|--------------|---------------------|
| `resize-png-to-1200x630` | og | yes | **none**（文内写 guide-only） | **1200×630** · ≈**1.91:1** · export **under ~1 MB** |
| `resize-png-to-1200x630-for-facebook` | og | yes | **none** | **exactly 1200×630** · ≈**1.91:1** · file size “reasonable” |
| `make-scanned-pdf-searchable` | pdf | yes | **none** | 无固定像素/MB 上限；强调 OCR 文本层 / 语言包 / 勿意外几百 MB |
| `keyword-density-analyzer` | keyword | yes | **`keyword-density`**（浏览器内） | 公式 `(occurrences ÷ total words) × 100`；短语连续、大小写不敏感；无「理想 %」硬阈值 |
| `create-opengraph-image-from-png` | og | **no**（可达但未进 home/sitemap） | **none** | **at least 1200×630** · ≈**1.91:1** · **under ~1 MB** |

首页 “Coming next” 仍写 **Optional PNG→OG converter** — 现网**未实现** → 规格项标 N/A。

### 勾选清单

- [x] **OG 三页尺寸锚点一致**：均指向 **1200×630** 与 **≈1.91:1**（N1 / S1 / 未列表 #3）
- [x] **OG 体积建议一致（有写的地方）**：N1 与 unlisted #3 均为 **under ~1 MB**；S1 写 “reasonable” 未给 MB — **软 gap，非数字打架**
- [ ] **OG 措辞微差（记账，非 FAIL）**：N1「about 1200×630」· S1 checklist「exactly 1200×630」· unlisted「at least 1200×630」— 同意图、严格字面不完全相同；**若日后上 resize 工具，须统一成一种口径**
- [x] **PNG/PDF 指南无上传工具**：与文案 “no upload / guide only” 一致 → 工具侧数字 **N/A**
- [x] **Keyword density 文案 ↔ 表单**：公式、短语匹配、浏览器-only / 不上传 与 `KeywordDensityForm` 行为一致；无「推荐密度 %」硬数可冲突
- [x] **现网 sitemap 仅 4 listed guides + home**（与 `listed: true` 一致）；unlisted OG 壳不进 sitemap
- [x] **无站内规格表/计算器与指南数字对不上**（除 density 外无第二套数字源）
- [ ] **未来 PNG→OG 工具（首页预告）**：上线前必须锁死输出尺寸 **1200×630**、比例 **1.91:1**、体积建议与 checklist 同一套；否则会变成指南/工具双口径 — **现在 N/A**

### Spec 结论

**PASS（现闸）** — 无「指南说 A、工具算 B」的硬冲突；唯一 live 工具（keyword density）与正文一致。  
**Gaps（纸面记账，不派开发）**：

1. OG 三页对 1200×630 的 *about / exactly / at least* 措辞未完全统一  
2. S1 未写死 ~1 MB（N1 / #3 有）  
3. PNG→OG 工具仍为 Coming next → 规格绑定 **N/A until built**  
4. PDF 指南无工具可对表 → **N/A**

---

## 3. 边界 / 未做

- 未提交任何目录、未发外链、未改站、未推仓、未请求 GSC 编入、未开 Analytics  
- 未落盘同行 URL 基线 CSV（本文件只提名 + 怎么 diff）；真存基线等 Jarvis 另拍  
- Smallpdf / Convertio 仅备胎记录

---

## 4. 给群的一句

Peers（Jarvis 认）：**edit-tool.com** + **imagecropkit.com**；iLove 进观察。规格 **PASS**，OG 措辞软 gap + 未来工具 N/A。CSV 等编入；下一窗仍 **11/5 10:00 PT**；浇水关。
