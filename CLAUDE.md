# ミダクル — Claude Code 作業ルール

> **正本は `SPEC.md`。** サイト構成・テキスト・配色・広告・ロードマップ・運用情報など、すべての仕様は `SPEC.md` に集約されています。編集前に必ず参照してください。

## 編集時の必須遵守
- 電話番号 `093-931-0040`、受付時間 `6:00〜23:00`、料金アンカー `#price-funeral` / `#monto` / `#faq` / `#area` / `#contact` / `#reasons` は変更禁止（変更する時は `SPEC.md` §18 の手順を辿る）
- 価格・受付時間など複数箇所に書かれている値を変える時は `SPEC.md` §18 の同時更新ルールに従う
- ファイル全体読み込みは避け、Serena で必要な範囲だけ読む

## トーン
- 「和の品格 × 現代的な明朗さ」
- ゴールド `#b8963e` ブランドカラーを一貫使用
- LINE 対応なし（CTA は電話のみ）
- 画像差し替え不要（現状確定済）

## デプロイ
- `git push origin main` → Netlify 自動デプロイ（`statuesque-cupcake-1dea15`）
- 反映まで通常 1〜2分

## 計測
- GTM `GTM-PJLS8CJ9` / GA4 `G-Y7WQJVZDSZ`
- CV: `phone_click`（全 tel: リンク）／ `sticky_cta_click`（スティッキーCTA電話のみ）
