async function fetchData() {
    const res=await fetch ("https://api.open-meteo.com/v1/forecast?latitude=22.3052&longitude=73.1972&current=temperature_2m&forecast_days=1");
    const record=await res.json();
    document.querySelector(".temp-of-place").innerHTML=record.current.temperature_2m;
    // document.getElementById("areaName").innerHTML=record.data[0].areaName;
    // document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
    // document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
}
fetchData();
