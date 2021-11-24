const totalpop=()=>{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);
    xmlhttp.send();
    xmlhttp.onload =()=>{
        const go=xmlhttp.response;
        //total population of countries using reduce function
        const totalpopulation=go.reduce((sum,val)=>sum+val.population,0);
        console.log("totalPopulation:" +totalpopulation);
    };
    };
    totalpop();