const dollar=()=>{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);
    xmlhttp.send();
    xmlhttp.onload =()=>{
        const go=xmlhttp.response;
        //country which uses US Dollars as currency.
        let solution=go.filter(value=>value.currencies[0].symbol==="$");
        //filter by currency
        for(var key in solution)
     {
         console.log(solution[key].name);
         }  
    };
    };
    dollar();