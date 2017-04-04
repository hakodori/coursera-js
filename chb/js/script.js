// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {

    function parsePhrase (event) {
      //console.log(event);

      var str =
       document.getElementById("name").value;

      var res = {};

       parseString(str, res);

       var message = "Success!";
       console.log(res);

      document
        .getElementById("content")
        .innerHTML = message;

    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", parsePhrase);

  }
);

function parseString(str, res){

    splitArr = str.split(' ', 50);
    console.log(splitArr);

    splitArr.forEach(function(item, i, splitArr) {
      analyzeText(item, res);
    });

}

function analyzeText(text, res){

    //console.log(res);

    if (text == "за") {
      res.readPeriodPo = false;
      res.readPeriodS = false;
      res.readPeriodZa  = true;
    } else if (text == 'с') {
      res.readPeriodPo = false;
      res.readPeriodS = true;
      res.readPeriodZa  = false;
    } else if (text == 'по') {
      res.readPeriodPo = true;
      res.readPeriodS = false;
      res.readPeriodZa  = false;
    }

    if ((text == 'прошлый') || (text == 'прошлого') || (text == 'прошлой') || (text == 'прошлую')) {
      res.readPastPeriod = true;
    }

    if (text == 'продажи') {
      res.intent = 'Sales';
    }

    if (res.readPeriodZa || res.readPeriodS || res.readPeriodPo) {
      readPeriod(text, res);
    }

}

function readPeriod(text, res){

    if (text == 'январь' || text == 'января'){
      res.month = 1;
    } else if (text == 'февраль' || text == 'февраля'){
      res.month = 2;
    } else if (text == 'март' || text == 'марта'){
      res.month = 3;
    } else if (text == 'апрель' || text == 'апреля'){
      res.month = 4;
    } else if (text == 'мая' || text == 'мая'){
      res.month = 5;
    } else if (text == 'июнь' || text == 'июня'){
      res.month = 6;
    } else if (text == 'июль' || text == 'июля'){
      res.month = 7;
    } else if (text == 'август' || text == 'августа'){
      res.month = 8;
    } else if (text == 'сентябрь' || text == 'сентября'){
      res.month = 9;
    } else if (text == 'октябрь' || text == 'октября'){
      res.month = 10;
    } else if (text == 'ноябрь' || text == 'ноября'){
      res.month = 11;
    } else if (text == 'декабрь' || text == 'декабря'){
      res.month = 12;
    }

}

// document.querySelector("button")
//   .onclick = sayHello;
