---
title: "いつも使ってるブックマークレット(過去記事の再掲)"
date: "2022-06-09T22:13:02+09:00"
excerpt: "以前のサイトで書いていたChromeのブックマークレットの記事を再掲します"
slag: "talk-about-bookmarklet"
---

## 見ているサイトを共有するためのブックマークレット

***Chromeでしか動作確認してません。***

ブックマークレットでできることはできる限りやるようにすると、余計なChrome拡張機能を追加しなくて済むのでおすすめ。  
ブックマークレットの作り方をわざわざ説明するのめんどいので使いたいひとは調べよう。

### 今見ているWebサイトをTwitterで共有するブックマークレット

TwitterへのWebページ共有はコレを使ってる。「見てる」ってのは、「見てる」のであって読んではいないんですよ。

```js
javascript: ( function() { window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent("見てる / " + document.title) + "&url=" + encodeURIComponent(document.location)); })();
```

1行で書いたやつを整形したコード: 

```js
( function() {
  window.open(
    "https://twitter.com/intent/tweet?text="
    + encodeURIComponent("見てる / " + document.title)
    + "&url=" + encodeURIComponent(document.location)
  );
})();
```


### Markdownで見てるサイトのURLを取得する
資料作成はほぼMarkdownで書いてるので、これは必須。

```js
javascript: ( function() { window.prompt("Link Created! - Markdown", '[' + document.title + '](' + document.location + ')'); })();
```

### HTMLのAタグで見てるサイトのURLを取得する(target="\_blank"付き)
資料書いてる時にどうしても`target="\_blank"`を使いたい時に使う。

```js
javascript: ( function() { window.prompt("Link Created! - html", '<a href="' + document.location + '" target="_blank">' + document.title + "</a>"); })();
```

### Amazonの商品ページのURLをきれいにするやつ

Amazonの商品ページのURL、遷移元なんかの余計なクエリ文字列がくっついてくることがほとんどで、それを共有するのは気が引ける。  
そんな時はこれ。

```js
javascript: ( function() { var r = document.querySelector('link[rel="canonical"]').href.replace(/amazon.co.jp\/.*\/dp/, 'amazon.co.jp/dp'); location.href = r;})();
```

Amazonの商品ページ、canonicalなリンクを取得するだけでは、商品名もURLに含まれる。本当に必要なデータは`/dp/`以降だけで良いので正規表現で商品名を取っ払うようにしている。

関数内をあえて2行にしてるのは、ついでに機能載せたいからですね。

#### ついでにつぶやくやつ
こういうのとか。

```js
javascript: ( function() { var r = document.querySelector('link[rel="canonical"]').href.replace(/amazon.co.jp\/.*\/dp/, 'amazon.co.jp/dp'); location.href = r; window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent("見てる / " + document.title) + "&url=" + encodeURIComponent(r)); })();
```

#### ついでにMarkdown取得

```js
javascript: ( function() { var r = document.querySelector('link[rel="canonical"]').href.replace(/amazon.co.jp\/.*\/dp/, 'amazon.co.jp/dp'); location.href = r; window.prompt("Link Created! - Markdown", '[' + document.title + '](' + r + ')'); })();
```

### ついでにHTML Anchor取得

```js
javascript: ( function() { var r = document.querySelector('link[rel="canonical"]').href.replace(/amazon.co.jp\/.*\/dp/, 'amazon.co.jp/dp'); location.href = r; window.prompt("Link Created! - html", '<a href="' + r + '" target="_blank">' + document.title + "</a>"); })();
```

### 余談だけど

`document.querySelector('link[rel="canonical"]')`でcanonicalなリンクを取得できるの覚えておくとかなり便利。

`querySelector`で書く以前は、以下のようなコード書いてたけど、`querySelector`で行けると知ってから、ブックマークレットの大幅なダイエットに成功しました。


```js
(function() {
  [].forEach.call(
    document.getElementsByTagName("link"),
    function(el) {
      if (el.rel && el.rel.toLowerCase() == "canonical") {
        return el.href;
      }
    }
  );
  return location.href;
})()
```

Chromeの場合だけなのか未検証だけど、`document.getElementsByTagName`で返ってくるのがなぜか`HTMLCollection`なので、`[].forEach.call`なんてのを使うトリッキーさ。(わかってればそこまでトリッキーではないかも)

### Amazon以外

単純にcanonicalなURLに置き換えるようにするだけ。見ているページが読み込みし直されてしまうので、一応注意はした方がいい。

```js
javascript: ( function() { var r = document.querySelector('link[rel="canonical"]').href; location.href = r;})();
```

`document.querySelector('link[rel="canonical"]')`が取得できない場合、ページ遷移は発生しない。

こちらのブックマークレットは使用頻度が低いため、つぶやきたい場合やMarkdown取得したい場合などは個別のブックマークレットと併用している。

### 見てるページをPDF化する

これもあまり使用頻度が高くないため、以下のサイトで公開されているブックマークレットをそのまま使用して、PDFに印刷する。という手順を行っている。

- [The Printliminator Demo](https://css-tricks.github.io/The-Printliminator/)

使い方などは割愛。

## JavaScript書けるなら

ブックマークレットで遊ぶと楽しい。

以上


