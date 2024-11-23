# 星と氷をモチーフにしたポートフォリオ＆ホームページサイト

## 🪐 プロジェクト概要
このプロジェクトは、「星」と「氷」をテーマにしたモダンで動的なデザインのポートフォリオおよびサービス提供サイトです。  
Next.js と Framer Motion を使用し、スムーズなトランジションとインタラクションを実現しています。

## 🌟 特徴
- **ヒーローセクション**: 宇宙をイメージした背景アニメーションとキャッチーなCTAボタン。
- **提供サービス**: 受託開発、SES（技術派遣）などをカード形式で紹介。
- **ポートフォリオ**: スライダー形式でプロジェクトを動的に表示。
- **SNS最新情報**: Twitter、Instagram、YouTubeの最新投稿を自動取得。
- **ブログ機能**: カテゴリ・タグ・検索機能を備えた動的なブログ一覧。
- **フッター**: 宇宙と氷をイメージしたデザインで統一感を演出。

## 🚀 使用技術
- **フロントエンド**: [Next.js](https://nextjs.org/) + [Framer Motion](https://www.framer.com/motion/)
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/)
- **バックエンド**: [PostgreSQL](https://www.postgresql.org/) + Prisma
- **ホスティング**: [Vercel](https://vercel.com/)
- **API**: Twitter API、Instagram Graph API、YouTube Data API

## 📂 ディレクトリ構造
```
├── public/                # 静的ファイル（画像、フォントなど）
├── src/
│   ├── components/        # 再利用可能なReactコンポーネント
│   ├── pages/             # Next.jsの各ページ
│   ├── styles/            # Tailwind CSSのスタイル定義
│   ├── utils/             # ユーティリティ関数
│   └── animations/        # Framer MotionとGSAP用のアニメーション定義
├── prisma/                # データベーススキーマ定義
├── .env                   # 環境変数
└── README.md              # プロジェクト概要
```

## 💻 セットアップ手順
### 1. リポジトリのクローン
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. 依存関係のインストール
```bash
npm install
```

### 3. 環境変数の設定
`.env` ファイルを作成し、以下の内容を追加してください：
```
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
NEXT_PUBLIC_TWITTER_API_KEY=your-twitter-api-key
NEXT_PUBLIC_INSTAGRAM_API_KEY=your-instagram-api-key
```

### 4. データベースのセットアップ
```bash
npx prisma migrate dev --name init
```

### 5. 開発サーバーの起動
```bash
npm run dev
```
[http://localhost:3000](http://localhost:3000) でアプリケーションにアクセスできます。

## 📦 デプロイ
[Vercel](https://vercel.com/) を使用してデプロイ可能です。
```bash
vercel deploy
```

## 📄 ライセンス
MIT License
