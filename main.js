// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(async (position) => {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;

//         const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&forecast_days=1`);
//         const record = await res.json();
//         document.querySelector(".temp-of-place").innerHTML = record.current.temperature_2m;
    
//         // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//     });
// } else {
//     console.log("Geolocation is not supported by this browser.");
// }


async function fetchData() {
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=22.3052&longitude=73.1972&current=temperature_2m&forecast_days=1");
    const record = await res.json();
    document.querySelector(".temp").textContent = `${record.current.temperature_2m}`;
}
fetchData();
