---
title: "npmプロジェクトのライブラリバージョンアップメモ"
date: "2023-04-30T00:29:53+09:00"
excerpt: "毎回忘れるので備忘録"
slag: "version-up-procedure-for-lib-managed-by-npm"
---

## 毎回忘れるのでメモ

`npm-check-updates`[^1]をグローバルにインストール

[^1]: [raineorshine/npm-check-updates: Find newer versions of package dependencies than what your package.json allows](https://github.com/raineorshine/npm-check-updates)

```bash
$ npm i -g npm-check-updates
```

`npm outdated`で状況確認する

```bash
$ npm outdated
```


`ncu`コマンドで、マイナーバージョンのアップデートを行う

```bash
$ ncu -u --target minor
```

`npm ci`ではなく`npm install`する

```bash
$ npm install
```

`npm ls`で一応現在のライブラリのバージョンを確認しておくと良い

```bash
$ npm ls
```

おわり。

### 脆弱性のあれこれ

- `npm audit`
- `npm audit fix --force`