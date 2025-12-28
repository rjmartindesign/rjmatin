(function () {
    var quotes = [
        {
          "author": "Bobby Cole <br/> Catch22Media",
          "text": "'Richard goes above and beyond, working with you every step of the way. He developed my website from creation to completion and was extremely professional and easy to work with.'"
        },
        {
          "author": "Dee Alkusairy <br/> Arch Angelz ltd",
          "text": "'Richard was a pleasant, professional candidate who responded to instruction very well, and was generally a very positive addition to our office.'"
        },
        {
          "author": "Matthew Sandles <br/> M.Sandles",
          "text": "'I was able to put my input into the whole design.  Richard showed me how to use all the templates created.'"
        },
        {
          "author": "Ming-Horng Michael Shyu <br/> Edeng Inc.",
          "text": "'Richard was compitant and efficient with his design work, and able to quickly adapt to the different design trends of China'"
        }
      ];

     function loadQuotes() {
         //console.log("In Load Quotes"); //check function entered
         var xmlHttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
         xmlHttp.onreadystatechange = function () {
             //console.log(xmlHttp.readyState);
             if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                 //console.log(xmlHttp.responseText); check to see the data has imported.
                 var json = xmlHttp.responseText;
                 quotes = JSON.parse(json);
                 console.log(quotes); //check json has been parsed to array.
                 console.log(quotes[0].author); //check frst index.
                 displayQuote(quotes);
                 setInterval(displayQuote, 15000);
             }
         }
         xmlHttp.open("GET", "js/testimonies.json", true);
         xmlHttp.send();
     }
     loadQuotes();
    console.log(quotes); //check json has been parsed to array.
    console.log(quotes[0].author); //check frst index.
  

    function displayQuote() {
      console.log("in Display Quote Function");
        var index = Math.floor(Math.random() * quotes.length);
        var quote = quotes[index];
        console.log(quotes[index]);// check index  /////This is not workking throwing quotes not defined error.
        var textElement = document.getElementById("text");
        var authorElement = document.getElementById("author");

        textElement.innerHTML = ""; // this is throwing an error in the console.
        textElement.innerHTML = quote.text;
        authorElement.innerHTML = ""; // this is throwing an error in the console.
        authorElement.innerHTML = quote.author;
    }
    //displayQuote();
})();

