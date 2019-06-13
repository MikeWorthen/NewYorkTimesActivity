var apiUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news-desk('Foreign')&api-key=dg96Vx4FphtgeR2YjncVABWT3LnGyzdn";
 console.log(apiUrl);
 $.ajax({
    url: apiUrl,
    method: "GET"
}).then(function(response){
console.log(response);
var searchTerm = $("#search-term")
var option1 = $("#num-records-select")
var startYear = $("#start-year")
var endYear = $("#end-year")
});
