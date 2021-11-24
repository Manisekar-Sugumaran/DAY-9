const populazion=()=>{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);
    xmlhttp.send();
    xmlhttp.onload =()=>{
        const go=xmlhttp.response;
//countries with a population less than 2 lakhs using filter function
let solution=go.filter(value=>value.population<200000);
//filter by a population
for(var key in solution)
        {
        console.log(solution[key].name);
        }
    };
    };
    populazion();