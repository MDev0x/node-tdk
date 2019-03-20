var request = require("request"),
    cheerio = require("cheerio");

var tdkModel = new Object();

function tdk(word) {
    return new Promise(function (res, rej) {
        var uri = encodeURI(
            "http://www.tdk.gov.tr/index.php?option=com_gts&kelime=" + word
        );
        request(uri, function (error, response, body) {
            try {
                var $ = cheerio.load(body),
                    meaningElement = $("#hor-minimalist-a > tbody > tr"),
                    meaning = [];

                if (meaningElement.length > 0) {
                    tdkModel.word = word;

                    if (meaningElement.length > 1) {
                        meaningElement.each(function (ix, el) {
                            meaning.push(
                                meaningElement
                                    .eq(ix)
                                    .text()
                                    .trim()
                            );
                        });
                        tdkModel.meaning = meaning;
                    } else
                        tdkModel.meaning = meaningElement
                            .eq(0)
                            .text()
                            .trim();

                    res(tdkModel);
                } else {
                    rej(word + " not found");
                }
            } catch (err) {
                rej("[node-tdk] Check network connection");
            }
        });
    });
}

module.exports = tdk;