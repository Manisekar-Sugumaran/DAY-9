const asia=()=>{
var xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);
xmlhttp.send();
xmlhttp.onload =()=>{
    const go=xmlhttp.response;
    // countries from asia continent using filter function 
  let solution=go.filter(value=>value.region=="Asia");
    //filter by region
    for(var key in solution)
    {
    console.log(solution[key].name);
    }
};
};
asia();