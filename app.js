var search = "dogs"; //tie to text box
var page = 1;
var startYear; //tie to text box
var endYear; //tie to text box
var apiKey = "n9ESeJrx4h7KGIl4CyewismUhUohXfhO";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?query="+search+"&page="+page+"&api-key="+apiKey;

function searchTimes(){
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(find){
        var limit = 10; // tie to dropdown
        var results = find.response.docs;
        console.log(results);
        for(var i = 0; i < limit; i++){
            console.log(results[i]);
            var hed = results[i].headline.main;
            var snip = results[i].snippet;
            var bye = results[i].byline.original;
            var snipBox = $("<p>");
            var byeBox = $("<p>");
            snipBox.append(snip);
            byeBox.append(bye);
            $("#response-box").prepend("<strong>"+hed+"</strong>", byeBox, snipBox, "<hr>");
        }
    })
}

searchTimes(); // display in list element