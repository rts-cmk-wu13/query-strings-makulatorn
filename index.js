fetch("/data/destinations.json")
    .then(response => response.json())
    .then(data => {
        let sectionElm = document.createElement("section");
        sectionElm.classList.add("apartment-listings");

        let headingElm = document.createElement("h1");
        headingElm.textContent = "Apartments for rent";  

        sectionElm.innerHTML = `
            ${data.destinations.map(destination => `
                    <article>
                        <img src="/img/${destination.image}" alt="${destination.destination}">
                        <div class="apartment-listing">
                            <p style="text-align:left;" class="apartment-listing-txt">
                                &#9829;
                                <a href="destination.html?id=${destination.id}" style="float: right;" class="apartment-listing-txt">MORE</a>
                            </p>
                        </div>
                    </article>
            `).join("")}
        `;

        document.querySelector("#root").append(sectionElm);
        document.querySelector("#title").append(headingElm)
    })
