// const eu = 'Vitor';

// console.log(months); // erro

/*

Um arquivo .js tem acesso a todos os arquivos .js declarados anteriormente a ele.

Ou seja, other.js não tem acesso à script.js, porém, script.js tem acesso à other.js,
pois script.js foi declarado depois no HTML

*/

// class App {
//   #map;
//   #mapEvent;

//   // constructor(distance, duration, coords, date, id) {
//   constructor() {
//     // this.distance = distance;
//     // this.duration = duration;
//     // this.coords = coords;
//     // this.date = date;
//     // this.id = id;
//     this.#getPosition();
//     form.addEventListener('submit', this.#newWorkout.bind(this));
//     inputType.addEventListener('change', this.#toggleElevationField);
//   }

//   #getPosition() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         this.#loadMap.bind(this),
//         error => alert('Could not get your position.')
//       );
//     }
//   }

//   #loadMap(position) {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;

//     const coords = [latitude, longitude];
//     console.log(...coords);

//     this.#map = L.map('map').setView(coords, 15); // Coordenadas e Zoom

//     L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//       // API utilizada para a aparência do mapa
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(this.#map);

//     // Handling clicks on map
//     this.#map.on('click', this.#showForm.bind(this));
//   }

//   #showForm(mapE) {
//     this.#mapEvent = mapE;
//     form.classList.remove('hidden');
//     inputDistance.focus();
//   }

//   #toggleElevationField() {
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//   }

//   #newWorkout() {
//     e.preventDefault();

//     // Clear input fields
//     inputDuration.value =
//       inputDistance.value =
//       inputCadence.value =
//       inputElevation.value =
//         '';

//     // Display marker
//     console.log(this.#mapEvent);
//     const { lat, lng } = this.#mapEvent.latlng;

//     L.marker([lat, lng])
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           maxWidth: 250,
//           minWidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: 'running-popup',
//         })
//       )
//       .setPopupContent('Workout')
//       .openPopup();
//   }
// }

// const app = new App();

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       const { latitude } = position.coords;
//       const { longitude } = position.coords;
//       // console.log(`https://www.google.com.br/maps/@${latitude},${longitude}`);

//       const coords = [latitude, longitude];
//       console.log(...coords);

//       map = L.map('map').setView(coords, 15); // Coordenadas e Zoom

//       L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//         // API utilizada para a aparência do mapa
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       // L.marker(coords)
//       //   .addTo(map)
//       //   .bindPopup('You.')
//       //   .openPopup();

//       // Handling clicks on map
//       map.on('click', function (mapE) {
//         mapEvent = mapE;
//         form.classList.remove('hidden');
//         inputDistance.focus();
//       });
//     },
//     error => alert('Could not get your position.')
//   );
// }

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   // Clear input fields
//   inputDuration.value =
//     inputDistance.value =
//     inputCadence.value =
//     inputElevation.value =
//       '';

//   // Display marker
//   console.log(mapEvent);
//   const { lat, lng } = mapEvent.latlng;

//   L.marker([lat, lng])
//     .addTo(map)
//     .bindPopup(
//       L.popup({
//         maxWidth: 250,
//         minWidth: 100,
//         autoClose: false,
//         closeOnClick: false,
//         className: 'running-popup',
//       })
//     )
//     .setPopupContent('Workout')
//     .openPopup();
// });

// inputType.addEventListener('change', function () {
//   inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//   inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
// });

