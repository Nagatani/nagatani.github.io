---
title: "最近のCSSで使える新しい技術についてそろそろまとめておきたいという話"
date: "2023-04-29T02:47:26+09:00"
excerpt: "情報は追っかけているけど、実際にどういう場面で活用できるのかなどを自分のためにまとめたい気持ちがある"
slag: "talk-about-wanting-to-summarize-new-CSS-techniques"
---

## 浦島太郎化を防ぎたい

IEがなくなって久しく、Webの技術の中でもCSSに関しては本当に便利になっていると思う。

で、ぼちぼち新しい技術の追加状況に付いていけなくなりそうな予感がしている。

### とりあえず2022までのはなし

web.devの記事から、2つ。

- [Interop 2022: end of year update](https://web.dev/interop-2022-wrapup/)
- [State of CSS 2022](https://web.dev/state-of-css-2022/)

まとまっとるやんけ！ってなってしまうが、2022年時点で新たにすべてのブラウザで使用可能となった技術たち。

この中でも、2023年に入って使用可能になったものもある。
とくに以下のやつはちゃんとまとめたいし、自分でも使えるようになっておきたい。

- カスケードレイヤー[^1]
- コンテナクエリ
- 色の指定方法の追加分（Level4,5）
    + グラデーションの色空間、コントラストなども
- 疑似クラス（`:has()`,`:modal`,`:is()`,`:where()`）
- 三角関数
- メディアクエリの範囲構文[^2]
- ネスト可能
- `@scope`によるスタイルのスコープ


[^1]: 参考: [カスケードレイヤー - ウェブ開発を学ぶ | MDN](https://developer.mozilla.org/ja/docs/Learn/CSS/Building_blocks/Cascade_layers)
[^2]: 敢えて書くまでないかもしれんけど…… [メディアクエリーの使用 - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/Media_Queries/Using_media_queries#level_4_%E3%81%A7%E3%81%AE%E6%A7%8B%E6%96%87%E3%81%AE%E6%8B%A1%E5%BC%B5)


IEのサポートなんて前々からしてなかったけど、それでも正式にサポート切れたことで一気に新技術が広まっている感があり、とても良いと思う。
あとは僕が置いて行かれないように努力するだけだと思った。

以下はここで羅列しておくだけにして個別に書かなくても良いかなってやつ。

- [:any-link - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/:any-link)
- [conic-gradient() - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/gradient/conic-gradient)
- [filter - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/filter)
- [backdrop-filter - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/backdrop-filter)
- [background-clip - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/background-clip)
- [background-blend-mode - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/background-blend-mode)
- [env() - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/env)
- [CSS 封じ込め - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Containment)
- [font-display - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/@font-face/font-display)[^3]
- [:in-range - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/:in-range)
- [:out-of-range - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/:out-of-range)
- [:focus-within - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/:focus-within)
- [:focus-visible - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/:focus-visible)
- [initial - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/initial)
- [max-inline-size - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size)
- [margin-inline - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/margin-inline)
- [CSS math functions min(), max() and clamp() | Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/css-math-functions)
- [::marker - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/::marker)
- [caret-color - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/caret-color)[^4]

[^3]: そういえばこのサイトにこれ指定してないの気づいた
[^4]: いつ使えばいいのこれ……

以上、そのうち追加でなんか書く。