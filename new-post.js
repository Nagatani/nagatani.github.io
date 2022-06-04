const filename = process.argv[2];
const d = new Date(new Date(Date.now()).getTime() + 9 * 3600000);
const jst_date = d.toISOString().split('Z')[0].replace(/\.(\d{3})/, '') + '+09:00';

const out = `---
title: ""
date: "${ jst_date }"
excerpt: ""
slag: "${ filename }"
---

# ${ filename }

`;

const filepath = "./_posts/" + (filename ? filename : "new-post") + ".md";
require('fs').writeFile(filepath, out, function (err) {
    if (err) { throw err; }
    console.log(`Created: ${ filepath }`);
});