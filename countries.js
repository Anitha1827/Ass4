const countriesReqest = new XMLHttpRequest();
countriesReqest.open('GET','https://restcountries.com/v3.1/all');
countriesReqest.send();
countriesReqest.onload = function(){
const contries = JSON.parse(countriesReqest.responseText);

contries.forEach(function displayCountryInfo(country) {
console.log('Country',country.name.common,country.flag,country.region,country.subregion,country.population);

});

}
