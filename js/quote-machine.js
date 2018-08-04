var tweetLink, newRColor;
//Choosing initial background random color
var bgColors = ["#E13580", "#58B686", "#7B7C80", "#8B0A50", "#3E5A85", "#6B00C7", "#F4814E", "#3F0424", "#6B00C7", "#511417"];
var randomColor = bgColors[(Math.floor(Math.random() * bgColors.length))];
$("body, button").css("background-color", randomColor);
$("#container").css("color", randomColor);

//Getting data from Api and First quote and updating twitter button
$.getJSON("https://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en", function(data) {
    $("#quote").html(data.quoteText);
    $("#author").html("- " + data.quoteAuthor);
    tweetLink = 'https://twitter.com/intent/tweet?text=' + $("#quote").html() + "  " + $("#author").html();
    $("#tweet").attr("href", tweetLink);
  });

//On click actions: choosing new quote and changing background color
$("#new_quote").on("click", function() {
  $.getJSON("https://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en", function(data) {
    $("#quote").html(data.quoteText);
    if (data.quoteAuthor === "") {
      $("#author").html("- Annonymous");
    tweetLink = 'https://twitter.com/intent/tweet?text=' + $("#quote").html() + "  " + $("#author").html();
    $("#tweet").attr("href", tweetLink);
    } else {
    $("#author").html("- " + data.quoteAuthor);
    tweetLink = 'https://twitter.com/intent/tweet?text=' + $("#quote").html() + "  " + $("#author").html();
    $("#tweet").attr("href", tweetLink);
    }
    tweetLink = 'https://twitter.com/intent/tweet?text=' + $("#quote").html() + "  " + $("#author").html();
    $("#tweet").attr("href", tweetLink);

    var newRColor = bgColors[(Math.floor(Math.random() * bgColors.length))];
    while (randomColor === newRColor) {
      newRColor = bgColors[(Math.floor(Math.random() * bgColors.length))];
    }
    randomColor = newRColor;
    $("body, button").css("background-color", randomColor);
    $("#container").css("color", randomColor);
  });
});
