// var quote = document.getElementsByClassName('quote')


var xhr = new XMLHttpRequest();
xhr.open("GET", "http://quotes.rest/qod.json", false);
xhr.onload = function() {
    if (xhr.status === 200) {
        document.getElementById("quote").innerHTML = xhr.responseText
    }

    else { alert('Request failed.  Returned status of ' + xhr.status);
  }
};
xhr.send();


console.log(xhr.status)
console.log(xhr.statusText)





// document.getElementById("quote").innerHTML = "TEST"
