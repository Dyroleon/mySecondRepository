if(typeof document !== "undefined"){

document.addEventListener("DOMContentLoaded", function(){
    const myForm = document.querySelector("#searchForm");
    myForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const myApiKey = "tc7136b38b44o4d0650eb9da742bc00f";
        const mySearch = document.querySelector("#searchInput").value;
        const myApi = `https://api.shecodes.io/weather/v1/current?query=${mySearch}&key=${myApiKey}`;

        axios.get(myApi)
            .then(response => {
                const temperature = response.data.temperature.current;
                const myDate = new Date();
                const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
                const day = days[myDate.getDay()];
                const date = myDate.getDate();
                const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
                const month = months[myDate.getMonth()];
                const year = myDate.getFullYear();
                let hours = myDate.getHours();
                let minutes = myDate.getMinutes();
                
                if (hours <= 10) {
                    hours = `0${hours}`;
                }
                if (minutes <= 10) {
                    minutes = `0${minutes}`;
                }
                let head1 = document.querySelector("#head1");
                head1.innerHTML=`${Math.round(temperature)}°C `

                const head2 = document.querySelector("h2");
                head2.innerHTML = `The weather in  ${mySearch}:`;

                const current = document.querySelector("#para2");
                current.innerHTML = `${day}: ${date} ${month} ${year} Time: ${hours}:${minutes}`;
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    })
})
};