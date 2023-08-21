// https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=cb981c2a3f9ebeb5cb2f53931bbf7bcb&units=metric

// api.openweathermap.org/data/2.5/weather?q=tehran&appid=edc228562ac0a8aa3116d41c0687cf56&units=metric
// https://icons8.com/icon/krXU1tw0Uy9o/icon
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css
let form = document.querySelector(".top-banner form");
let input = document.querySelector(".top-banner input");
let btn = document.querySelector("button");
let msg = document.querySelector(".top-banner .msg");
let list = document.querySelector(".ajax-section .cities");
let keyup = "edc228562ac0a8aa3116d41c0687cf56";
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let inputvalue = input.value;
//   console.log(inputvalue);
//   let p = fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=${keyup}&units=metric`
//   );
//   p.then((response) => {
//     return response.json();
//   })
//     .then((data) => {
//       console.log(data);
//       let { main, name, sys, weather } = data;
//       const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
//       let li = document.createElement("li");
//       li.classList.add("city");
//       let makeup = `
//       <h2 class="city-name ata-name=${name},${sys.country}>
//       <span>${name}</span>
//     <span>${sys.country}</span></h2>

//     <div class="city-temp>${Math.round(main.temp)}</div>
//     <figure>
//          <img class='city-icon' src='${icon}' alt ='city' >
//     <figcaption class="figcaption">${weather[0]["description"]}</figcaption>
//     </figure>`;
//       li.innerHTML = makeup;
//       list.appendChild(li);
//       msg.innerHTML = "";
//     })
//     .catch(() => {
//       msg.innerText = "Search for a valid city";
//     });
//   input.value = "";
// });
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let inputVal = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${keyup}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { main, name, sys, weather } = data;
      let icon = "";
      if (weather[0].main == "Rain") {
        icon = "./img/rain_2469994.png";
      } else if (weather[0].main == "Clear") {
        icon = "./img/brightness_6821241.png";
      } else if (weather[0].main == "Clouds") {
        icon = "./img/cloudy_1163661.png";
      }

      const li = document.createElement("li");

      li.innerHTML = document.querySelector(".city-name .name").innerHTML =
        name;
      document.querySelector(".city-name .sys").innerHTML = sys.country;

      document.querySelector(".city-temp").innerHTML = Math.round(main.temp);
      document.querySelector(".city-icon").src = icon;
      document.querySelector(".caption").innerHTML = weather[0].description;

      msg.innerText = "";
    })
    .catch(() => {
      msg.innerText = "Search for a valid city";
    });
  input.value = "";
});
