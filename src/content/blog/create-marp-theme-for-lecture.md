---
title: "Marp用のスライドテーマCSSと変換のためのプロジェクト作った"
pubDate: "2023-04-22T12:55:02+09:00"
description: "パワポのファイルが壊れるのが耐えられなかったので、今までのパワポ資料をすべてMarkdownで書くように変換しているところ"
slag: "create-marp-theme-for-lecture"
---

## パワポ資料、壊れる

数年前に書いたパワポ資料、普通に壊れるんですよね。何もしてないのに。
（正確には古いMacBookの古いOfficeだったりで文字周りが怪しい気がするところまでは分かってる。何もしてなくはないけど何もしてない）

パワポ資料GitHubでDiff取れないしMarkdownで書きてぇなってなってたので、ここ数年はスライド資料をMarp（[Marp: Markdown Presentation Ecosystem](https://marp.app/)）で書いてる。

## Marpで装飾をちょっとだけ変えるには

用意されたテーマで普通に書けばいいのに、どうしても装飾を弄りたくなる性分なので、ちょこちょこと手を入れたい。

スライドMarkdownのYAML Front Matterのメタデータに下記のようにCSSをぶち込めば解決する。

```md
---
marp: true
theme: gaia
style: |
    section {
        color: red;
    }
---

または、スコープで書いたりする
<style scoped>
  a {
    color: red;
  }
</style>
```

今までこれで十分だったんだけど、やっぱりこだわり出すとMarkdownがスライドの文章以外のもので埋め尽くされてしまうようになった。

そこで、テーマ用のCSSを別途作って変換噛ませればいいや、と思っていた時期がぼくにもありました。

## VS CodeでMarp theme CSSの設定が効かない問題

`setting.json`に`"markdown.marp.themes"`の設定をちゃんとしたはずでも、なぜか反応してくれない状況だったりして原因を探っていたが分からず。
そもそもWindowsマシンにWSL2でUbuntu入れて動かしているので、その影響が大きいかもしれないと思いながら諦めた。

で、なんとかスライドのプレビューを確認しながら書けるようにならないかと思って、marp-cli（[marp-team/marp-cli: A CLI interface for Marp and Marpit based converters](https://github.com/marp-team/marp-cli)）に辿り着いて、下記リポジトリを作るに至った。

## 作成したもの

- [Nagatani/marp-theme-for-lecture: 講義資料として使う想定のスライドテーマ(use marp-cli)](https://github.com/Nagatani/marp-theme-for-lecture)

使い方にWSL2 Ubuntuのための話が書いてあるけど、これは単純にぼくの環境がそうだったからだけなのでメモ程度に残してある。

また、この文章書いてる時点では、一応こんなもんかなぁってデザインにしてるつもり。  
だけど、配布資料として手元で見てもらう想定の文字サイズなので字が細かいなと思う。  
プロジェクタで大きく映してしゃべる用のスライドテーマを新たに追加する予定なので、継続的にメンテナンスはしたい。

### スライドサンプル

リポジトリみればPDF入ってるけど、こちらに画像だけはサンプルで貼っておく。

![](/assets/create-marp-theme-for-lecture/my-presentation.001.png)
![](/assets/create-marp-theme-for-lecture/my-presentation.002.png)
![](/assets/create-marp-theme-for-lecture/my-presentation.003.png)
![](/assets/create-marp-theme-for-lecture/my-presentation.004.png)
![](/assets/create-marp-theme-for-lecture/my-presentation.005.png)
![](/assets/create-marp-theme-for-lecture/my-presentation.006.png)
![](/assets/create-marp-theme-for-lecture/my-presentation.007.png)
![](/assets/create-marp-theme-for-lecture/my-presentation.008.png)
![](/assets/create-marp-theme-for-lecture/my-presentation.009.png)
![](/assets/create-marp-theme-for-lecture/my-presentation.010.png)
![](/assets/create-marp-theme-for-lecture/my-presentation.011.png)
![](/assets/create-marp-theme-for-lecture/my-presentation.012.png)
![](/assets/create-marp-theme-for-lecture/my-presentation.013.png)
![](/assets/create-marp-theme-for-lecture/my-presentation.014.png)
![](/assets/create-marp-theme-for-lecture/my-presentation.015.png)
![](/assets/create-marp-theme-for-lecture/my-presentation.016.png)

