const button=document.getElementById('search-button');
const loc_button=document.getElementById('loc-search-button');
const ele=document.getElementById('city-name');
const cityName=document.getElementById('d-name');
const cityTime=document.getElementById('d-time');
const cityTemp=document.getElementById('d-temp');
async function getData(lat,long){
   const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=9a523c7e3b1f4d2fa91111510242406&q=${lat},${long}&aqi=yes
`);
return await promise.json()
}
async function gotlocation(position){
const data=await getData(position.coords.latitude,position.coords.longitude);
console.log(data);

}
function FailtoGetLoc(){
   console.log('There was some Error getting the location');
}
button.addEventListener('click',async () =>{
const value=ele.value;
//For user entered location
// const result= await getData(value);
// console.log(result);
// cityName.innerText=`${result.location.name},${result.location.region}-${result.location.country}`
// cityTime.innerText=result.location.localtime;
// cityTemp.innerText=result.current.temp_c;

// cityName.style.background='blue';

});
loc_button.addEventListener('click',async()=>{
   navigator.geolocation.getCurrentPosition(gotlocation,FailtoGetLoc);
});