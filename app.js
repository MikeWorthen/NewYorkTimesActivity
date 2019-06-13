var apiUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=dg96Vx4FphtgeR2YjncVABWT3LnGyzdn&q=";

 $.ajax({
    url: apiUrl,
    method: "GET"
}).then(function(response){
console.log(response);


   
   

});
 $("#run-search").on("click",function(){
        debugger;
        var searchTerm = $("#search-term").val().trim();
        var searchUrl = apiUrl + searchTerm;
var option1 = $("#num-records-select");
var startYear = $("#start-year");
var endYear = $("#end-year");
        console.log(searchTerm);
        console.log(searchUrl);
        console.log(option1);
        console.log(startYear);
        console.log(endYear);
        console.log(apiUrl);
        debugger;
});