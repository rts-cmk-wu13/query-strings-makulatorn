fetch("/data/destinations.json")
    .then(response => response.json())
    .then(data => {
        let sectionElm = document.createElement("section")
        sectionElm.innerHTML = data.destinations.map(destination => `
            <div class="apartment-container">
                <article>
                    <picture>
                        <img src="/img/${destination.image}" alt="${destination.destination}">
                    <div class="apartment-listing">
                        <p style="text-align:left;" class="apartment-listing-txt">
                            &#9829;
                            <a href="destination.html?id=${destination.id}">
                                more
                            </a>
                        </p>
                    </div>
                </article>
            </div>`).join("")
        document.querySelector("#root").append(sectionElm)
    })