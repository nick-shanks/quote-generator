
function changeQuote() {
  var xhr = new XMLHttpRequest()
  xhr.open("GET", "https://andruxnet-random-famous-quotes.p.mashape.com/", true);
  xhr.setRequestHeader("X-Mashape-Authorization", "bPB3LWtkZDmsh10m2wLeFCOzkCR5p1sc4XzjsncgJVwxESLMVs")
  xhr.onload = function() {

  var quote = xhr.responseText
  quote = JSON.parse(quote)
  // var newQuote = quote.quote

  document.getElementById("quote").innerHTML = '"' + quote.quote + '"'
  document.getElementById("author").innerHTML = quote.author

 var twtquote = quote.quote
 var twtauthor = quote.author


  //Set Tweet Contents

  document.getElementById('container').innerHTML=""

  twttr.widgets.createShareButton(
  '',
  document.getElementById('container'),
  {
    text: '"' + twtquote + '"' + " - " + twtauthor
  });

  }
  xhr.send()

}


window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));
// document.getElementById("button").setAttribute("data-text", "Quote Generator");
