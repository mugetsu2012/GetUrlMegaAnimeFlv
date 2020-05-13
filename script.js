var $rows = $("table tr");

$.each($rows, function(index, value){
    

    var textoProbar = $(value).find("td:first")[0];

    if(textoProbar != undefined && textoProbar.innerHTML === "MEGA"){
        var url = $(value).find("a")[0].href;
        var finalUrl = decodeURIComponent(url.split("s=")[1]);
        console.log(finalUrl);
    }
})
