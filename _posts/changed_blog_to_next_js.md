---
title: "サイトをNext.jsで作り直した"
date: "2022-06-03T16:58:25+09:00"
excerpt: 'Next.jsをそこまで使っていなかったので、ここらでなんか作っておくか。という気持ち'
---

## きっかけ

誰だって適当な文章書きたいときあるよね

で、だらだらと適当な文章を書きたいときに使うちょうど良いサイトがなかったので、完全に放置されてたこのサイト、技術的な記事を書いていたものを思い切って作り直した。

## 使ったもの

- [next.js/examples/blog-starter-typescript at canary · vercel/next.js](https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript)


### 技術選定の話

要件としては、以下の通り。

1. Markdownで記事が書きたい
1. GitHub Pagesで公開したい
1. WordPress滅んでほしい
1. なんか技術的なことでプラスになるような構築できたら嬉しい

という感じ。

別に前のままで適当なの書けばいいじゃん。って言われるかもしれないんだけど、Hugoで構築されていた以前のこのサイト、まぁ悪くはなかった。  
だけど、最近まったくと言っていいほどGoを書いていないので、Goで書かれたシステムのメンテナンス辛いなーという気持ちもある。

最初は Facebookが開発元のドキュメント管理ツールみたいな Docusaurus がリリース楽にできた気がするので、これでブログだけ書くようにすればいっかなって思ってた。
でもいざ blog-only-mode にするかーってなったら、公式ドキュメントにある手順をやってもエラーで先に進めなくなった。
いろいろ調べたところ、エラーの原因となっている箇所がコアの部分にあって開発側も既知なんだけど、修正後回しになってるってIssueがあって、そっかーじゃあ使うのやめるかー回避策手間かかるっぽいしってなった次第。

ブログじゃなくて、ドキュメントを書くのは Docusaurus とても便利なのでおすすめ。  
残念ながら、今回は僕の要件にはマッチしなかった。

- [Build optimized websites quickly, focus on your content | Docusaurus](https://docusaurus.io/)

Docusaurus 見てて思ったのが、そういえば仕事以外で React 使ってないな。  
React 使ってるブログシステムだったらよさそうかな。  
そうだ、 Next.js でそういうのあったな。  
ということで、 Next.js を使おうってなった。

Next.jsのblog-starterテンプレートにはCSSフレームワークのTailwindが入ってたんだけど、正直CSSフレームワーク使うのは個人的にいやかな。という思いと、Tailwind ほぼ使ったことないし学習コストが見合わないかもな。って気持ちがあって、消した。

実際に最小構成になるよう変更しつつ、テンプレートのコード読んでたんだけど、Tailwind外して余計なコンポーネント削除して……ってやっていたら、だいたい分かった気になれた。そもそもテンプレート使わずに初めてもよかったかもしれない。

しばらくはこの構成で行きたいと思う。

## このサイトの今までの記事と、今後について

今までこのサイトは、Hexo -> Hugo とリニューアルしてきたんだけど、どちらも Markdown で書けるし、移行も容易だった記憶がある。

Next.jsで作ったこのサイトにも記事を移行しようと思えばできたんだけど、最後に記事書いたのがすでに４年前という状況なので、
時間の流れが早すぎることに絶望を感じながら、これいるか？という自問自答をした結果、技術的な内容でって縛りを設けずゆるく文章書くサイトにするか。  
という気持ちになり心機一転、全部記事消すことにした。

過去に書いた記事で、今後参考になりそうなものがそもそもなかったというのもある。

今後は、ゆるく適当な記事を書いていきたいし、新しいこといっぱいやってきたのにそれが残ってないので、そういうのも残せるようにしたいなーと思っている。

詳しいことはAboutページ作ってあるのでそっちを見てほしい

- [About | Memorandum](http://nagatani.github.io/posts/about)

以上