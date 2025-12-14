---
title: "新規投稿用のファイルを作成するやつ"
pubDate: "2022-06-05T03:04:17+09:00"
description: "新規投稿を作成するときの日付入力がめんどいので作った"
slag: "create_new_post"
---

## 新規投稿を作る場合

.md のファイルを作成するぐらいなんてことはないんだけど、日付文字列を ISO8601 形式で時刻は秒までみたいなフォーマットで書くのがめんどいので、以下の Node.js で動かす JS 書いた。

```js
const filename = process.argv[2];
const d = new Date(new Date(Date.now()).getTime() + 9 * 3600000);
const jst_date = d.toISOString().split('Z')[0].replace(/\.(\d{3})/, '') + '+09:00';

const out = `---
title: ""
pubDate: "${ jst_date }"
description: ""
slag: "${ filename }"
---

# ${ filename }

`;

const filepath = "./_posts/" + (filename ? filename : "new-post") + ".md";
require('fs').writeFile(filepath, out, function (err) {
    if (err) { throw err; }
    console.log(`Created: ${ filepath }`);
});
```

### JavaScriptで JST の ISO8601フォーマットに変換する

日付を`Date.now()`で取得するとUTCの基準時間で取得できるので、9時間ずらして、ミリ秒の`.000`の部分を削除して出来上がり。

1行でも書けるけど、複数行に分けたほうが可読性高いと思う。

```js
const jst_date = new Date(new Date(Date.now()).getTime() + 9 * 3600000).toISOString().split('Z')[0].replace(/\.(\d{3})/, '') + '+09:00';
```

### JSのテンプレートリテラル便利

まじ便利。
