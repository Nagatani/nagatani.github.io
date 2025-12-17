const filename = process.argv[2];
const d = new Date(new Date(Date.now()).getTime() + 9 * 3600000);
const jst_date = d.toISOString().split('Z')[0].replace(/\.(\d{3})/, '') + '+09:00';

const out = `---
title: ""
description: ""
pubDate: "${jst_date}"
heroImage: ""
draft: false
---

## ${filename}

`;

const filepath = "./src/content/blog/" + (filename ? filename : "new-post") + ".md";
require('fs').writeFile(filepath, out, function (err) {
  if (err) { throw err; }
  console.log(`Created: ${filepath}`);
});