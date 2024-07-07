const bandSiteApi = new BandSiteApi("3c6412bd-6a41-4e5b-b0ec-dd57c144bf86");
const showsList = document.querySelector(".shows__container");

async function displayShows() {
    try {
        const showsArray = await bandSiteApi.getShows();
        console.log('Shows array:', showsArray);

        showsArray.forEach( (show) => {
            let shows = document.createElement("li");
            shows.classList.add("shows__list");

            let dividerDate = document.createElement("div");

            let labelDate = document.createElement("label");
            labelDate.classList.add("shows__list--label", "shows__list--hidden");
            labelDate.innerText = "DATE";

            let dateContent = document.createElement("p");
            dateContent.classList.add("shows__list--demi");
            dateContent.innerText = new Date(Number(show.date)).toDateString();

            let dividerVenue = document.createElement("div");

            let labelVenue = document.createElement("label");
            labelVenue.classList.add("shows__list--label", "shows__list--hidden");
            labelVenue.innerText = "VENUE";

            let venueContent = document.createElement("p");
            venueContent.innerText = show.place;

            let dividerLocation = document.createElement("div");

            let labelLocation = document.createElement("label");
            labelLocation.classList.add("shows__list--label", "shows__list--hidden");
            labelLocation.innerText = "LOCATION";

            let locationContent = document.createElement("p");
            locationContent.innerText = show.location;

            let button = document.createElement("button");
            button.classList.add("shows__list--button");
            button.innerText = "BUY TICKETS";

            showsList.appendChild(shows);
            shows.appendChild(dividerDate);
            dividerDate.appendChild(labelDate);
            dividerDate.appendChild(dateContent);
            shows.appendChild(dividerVenue);
            dividerVenue.appendChild(labelVenue);
            dividerVenue.appendChild(venueContent);
            shows.appendChild(dividerLocation);
            dividerLocation.appendChild(labelLocation);
            dividerLocation.appendChild(locationContent);
            shows.appendChild(button);
        });
    } catch (error) {
        console.error('Error displaying shows:', error);
    }
}

displayShows();