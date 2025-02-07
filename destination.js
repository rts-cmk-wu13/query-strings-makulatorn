// Get the 'id' from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const destinationId = urlParams.get('id');  // e.g., "5"

// Fetch the destinations JSON data
fetch("/data/destinations.json")
    .then(response => response.json())
    .then(data => {
        // Find the specific destination based on the id
        const destination = data.destinations.find(dest => dest.id == destinationId);

        // If a destination is found, display the details
        if (destination) {
            const rootElement = document.querySelector("#root");

            const destinationHtml = `
        <section class="destination">
        <div class="destination-img-con">
        <img class="destination-img" src="/img/${destination.image}" alt="${destination.destination}"/>
        </div>
        <div class="destination-txt-con">
        <h1 class="destination-title">${destination.title}</h1>
        <h2 class="destination-subtitle">${destination.subtitle}</h2>
        <p class="destination-txt">${destination.text}</p>
        <h3 style="margin:1em;">Facilities:</h3>
        <ul class="destination-list">
          ${destination.facilities.map(facility => `<li class="destination-list-item">${facility}</li>`).join('')}
        </ul>
        </div>
        </section>
      `;

            rootElement.innerHTML = destinationHtml;  // Insert the generated HTML into #root
        }
    })