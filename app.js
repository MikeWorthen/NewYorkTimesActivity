var apiUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=weather&api-key=dg96Vx4FphtgeR2YjncVABWT3LnGyzdn";
 console.log(apiUrl);
 $.ajax({
    url: apiUrl,
    method: "GET"
}).then(function(response){
console.log(response);
});
