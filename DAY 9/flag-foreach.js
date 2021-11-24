const flag=()=>{
var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);
    xmlhttp.send();
    xmlhttp.onload =()=>{
    const go=xmlhttp.response; 
    //get the name,capital,flag by forEach function    
        let output=()=>go.forEach(element => {
            console.log("country:"+element.name +" Capital:"+ element.capital+" flag:" +element.flag);  
        });
        output();
    };
    };
    flag();