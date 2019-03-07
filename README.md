# NODE-TDK
node-tdk get words data from tdk.gov.tr search engine.

## How it works?
GET html from tdk.gov.tr search engine page with request module. And scraping elements with cheerio

## Installation
> npm i node-tdk

## Quick Start
first, include in your project
```javascript
const nodetdk = require("node-tdk");
```

You can use node-tdk in 2 ways.

### Promise
``` javascript
nodetdk("fiil").then((data) => {
    if (Array.isArray(data.meaning))
        data.meaning.forEach(element => {
            console.log(element);
        });
    else
        console.log(data.meaning);
})
```

### Async / Await
``` javascript
(async () => {
    const fiil = await nodetdk("fiil")
    if (Array.isArray(fiil.meaning))
        fiil.meaning.forEach(element => {
            console.log(element);
        });
    else
        console.log(fiil.meaning);
})()
```
## Docs
### node-tdk
- data - JSON
  - word - String
  - meaning - if a word has more than one meaning String[] but if there is only one meaning String

## ToDo

 - Add united words to model
- Add Proverb, idioms and compound verbs to model