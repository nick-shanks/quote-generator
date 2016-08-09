var xhr = new XMLHttpRequest()
xhr.open("GET", "https://andruxnet-random-famous-quotes.p.mashape.com/", false);
xhr.setRequestHeader("X-Mashape-Authorization", "bPB3LWtkZDmsh10m2wLeFCOzkCR5p1sc4XzjsncgJVwxESLMVs")
xhr.onload = function() {
    // if (xhr.status === 200) {
        document.getElementById("quote").innerHTML = xhr.responseText
    // }

//     else { alert('Request failed.  Returned status of ' + xhr.status);
//   }
}
xhr.send()


console.log(xhr.status)
console.log(xhr.statusText)





// document.getElementById("quote").innerHTML = "TEST"
