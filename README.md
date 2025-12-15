# Nagatani's Memorandum

[Astro](https://astro.build/) で構築された個人ブログです。

## 始め方

### 前提条件

- Node.js v20以上
- npm

### インストール

```bash
npm ci
```

### 開発

以下のコマンドでローカル開発サーバーを起動します：

```bash
npm run dev
```

http://localhost:4321/ にアクセスして確認できます。

## 記事の書き方

ブログ記事は `src/content/blog/` ディレクトリに配置されています。
新しい Markdown ファイル (例: `my-new-post.md`) を作成し、以下のようなフロントマターを記述してください：

```markdown
---
title: '記事のタイトル'
description: 'リスト表示やSEO用の短い説明'
pubDate: '2025-12-14'
heroImage: '../../assets/placeholder.jpg'  # 任意。ヒーロー画像およびサムネイルとして表示されます。
draft: false                               # trueにするとビルドから除外されます（下書き）。
---

ここに本文を書きます...
```

通常の Markdown 記法が使用できます。

## デ゙プロイ

このプロジェクトは、`main` ブ゙ランチにプ゙ッシュされると、GitHub Actions を使用して自動的に **GitHub Pages** にデプロイされるように設定されています。

設定の詳細は `.github/workflows/deploy.yml` を参照してください。
