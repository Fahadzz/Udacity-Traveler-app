// TODO: create element with the data recived from the server
const mainContainer = document.getElementById("tripDetails")
exports.generateCardServer = (data) => {
    const innerContainer = document.createElement('div')
    innerContainer.classList.add("card");
    const currDate = new Date();
    const tripDate = new Date(data.date);
    const days = Client.calculateDate(tripDate, currDate)
    innerContainer.innerHTML = `
        <div class="card__img">
        <img src="${data.img}" alt="" /> 
        </div>
        <div class="card__text">
        <div class="card__text--main">
        <h1 class="idn heading__tertiary">${data.countryName} - ${data.city}</h1>
        
        <p class="card__text--main--date">${days} - Days left</p>
        </div>
        <p class="card__text--weather">Current temp :${data.temp} C</p>
        </div>
        <button class="btn--circle-remove">
        <ion-icon class="icon" name="remove-circle-outline"></ion-icon>
        </button>
    `

    mainContainer.appendChild(innerContainer)

    const btns = document.querySelectorAll(".btn--circle-remove")
    btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            let curr = e.currentTarget
            curr.parentElement.remove();
        })
    })

}



