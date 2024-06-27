const showsArray = [
    {
        date:"Mon Sept 09 2024",
        venue:"Ronald Lane",
        location:"San Francisco, CA"
    },
    {
        date:"Tue Sept 17 2024",
        venue:"Pier 3 East",
        location:"San Francisco, CA"
    },
    {
        date:"Sat Oct 12 2024",
        venue:"View Lounge",
        location:"San Francisco, CA"
    },
    {
        date:"Sat Nov 16 2024",
        venue:"Hyatt Agency",
        location:"San Francisco, CA"
    },
    {
        date:"Fri Nov 29 2024",
        venue:"Moscow Center",
        location:"San Francisco, CA"
    },
    {
        date:"Wed Dec 18 2024",
        venue:"Press Club",
        location:"San Francisco, CA"
    },
];

const showsList = document.querySelector(".shows__container");

function showsDisplay(showsArray) {
    showsArray.forEach(show => {
        let shows = document.createElement("li");
        shows.classList.add("shows__list");

        // date
        let dividerDate = document.createElement("div");
        dividerDate.classList.add("shows__list--label", "shows__list--hidden");
        dividerDate.innerText = "DATE";
        let dateContent = document.createElement("p");
        dateContent.classList.add("shows__list--demi");
        dateContent.innerText = show.date;

        // venue
        let dividerVenue = document.createElement("div");
        dividerVenue.classList.add("shows__list--label", "shows__list--hidden");
        dividerVenue.innerText = "VENUE";
        let venueContent = document.createElement("p");
        venueContent.innerText = show.venue;

        // location
        let dividerLocation = document.createElement("div");
        dividerLocation.classList.add("shows__list--label", "shows__list--hidden");
        dividerLocation.innerText = "LOCATION";
        let locationContent = document.createElement("p");
        locationContent.innerText = show.location;

        // button
        let button = document.createElement("button");
        button.classList.add("shows__list--button");
        button.innerText = "BUY TICKETS";

        shows.appendChild(dividerDate);
        shows.appendChild(dateContent);
        shows.appendChild(dividerVenue);
        shows.appendChild(venueContent);
        shows.appendChild(dividerLocation);
        shows.appendChild(locationContent);
        shows.appendChild(button);

        showsList.appendChild(shows);
    });
}

showsDisplay(showsArray);