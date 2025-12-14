---
title: 'ブログをNext.jsからAstroに移行した'
description: 'ブログをNext.jsからAstroに移行した話'
pubDate: '2025-12-14'
heroImage: '../../assets/blog-placeholder-3.jpg'
draft: false
---

このサイトはずっとNext.js (Pages Router) で動かしていたんですが、なんとなくAstroに移行してみました。

## なぜ移行したか

特に意味はないです。  
昨今のReact Server Componentの脆弱性とかそういったのとは特に関係ないです。

関連: https://www.ipa.go.jp/security/security-alert/2025/alert20251209.html

## やったこと

基本的にはMarkdownファイルを移動して、レイアウト周りをAstroコンポーネントで書き直しただけ。
ReactやSvelteなどで培った知識があるので、Astroのための学習コストもほとんどなく、スムーズに移行できました。

ページネーションの実装には一部Geminiにサポートお願いしてます。

## 感想

ビルドも早いし、生成されるHTMLも無駄なJSが含まれていないので軽量らしい。  
必要なところだけインタラクティブにできるのも良いのかな（このブログではほとんど使ってないけど）。

放置しないで書いて公開するのを継続できたらいいなーと。
まだ調整中なので、表示崩れがあったら見なかったことにしてください。

