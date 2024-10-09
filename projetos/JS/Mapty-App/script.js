'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', ];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.click++;
  }
}

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// DOM Varibles
const form = document.querySelector('.form');
// const workoutDisplay = document.querySelector('.workout');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const copyright = document.querySelector('.copyright');
const buttons = document.querySelector('.btns');
const editButton = document.querySelector('.edit');
const deleteButton = document.querySelector('.delete');
const deleteAllButtons = document.querySelector('.delete-all');

// Main Application Class
class App {
  #map;
  #mapEvent;
  #mapZoomLevel = 15;
  #workouts = [];
  _workoutEl;
  _markers = [];

  constructor() {
    // Get user's position
    this.#getPosition();

    // Get data from local storage
    this.#getLocalStorage();

    // Attach event handlers
    form.addEventListener('submit', this.#newWorkout.bind(this));
    inputType.addEventListener('change', this.#toggleElevationField);
    containerWorkouts.addEventListener('click', this.#moveToPopup.bind(this));
    editButton.addEventListener('click', this.edit.bind(this));
    deleteButton.addEventListener('click', this.delete.bind(this));
    deleteAllButtons.addEventListener('click', this.deleteAll.bind(this));
  }

  #getPosition() {
    /*** navigator.geolocation.getCurrentPosition() ***/
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.#loadMap.bind(this),
        error => alert('Could not get your position.')
      );
    }
  }

  #loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel); // Coordenadas e Zoom
    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      // API utilizada para a aparência do mapa
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling clicks on map
    this.#map.on('click', this.#showForm.bind(this));

    this.#workouts.forEach(work => {
      this.#renderWorkoutMarker(work);
    });
  }

  #showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  #hideForm() {
    // Empty inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  #toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  #newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If activity running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // Check if dat is valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If activity cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      // Check if dat is valid
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to workout array
    this.#workouts.push(workout);

    // Render workout on map as maker
    this.#renderWorkoutMarker(workout);

    // Render workout on list
    this.#renderWorkout(workout);

    // Hide form + clear input fields
    this.#hideForm();

    // Set local storage to all workouts
    this.#setLocalStorage();
  }

  #renderWorkoutMarker(workout) {
    this._markers.push(
      L.marker(workout.coords)
        .addTo(this.#map)
        .bindPopup(
          L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`,
          })
        )
        .setPopupContent(
          `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
        )
        .openPopup()
    );
    inputDistance.focus();
  }

  #renderWorkout(workout) {
    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
          <input type="text" id="nameInput" value="km" style="display:none;">
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;

    if (workout.type === 'running')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
    `;

    if (workout.type === 'cycling')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰️</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li> 
    `;

    form.insertAdjacentHTML('afterend', html);
  }

  #moveToPopup(e) {
    // BUGFIX: When we click on a workout before the map has loaded, we get an error. But there is an easy fix:
    if (!this.#map) return; // Guard Class

    this._workoutEl = e.target.closest('.workout');

    if (!this._workoutEl) return; // Guard Class

    this._workout = this.#workouts.find(
      work => work.id === this._workoutEl.dataset.id
    );

    this.#map.setView(this._workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    this.#showButtons();

    // using the public interface
    // workout.click();
  }

  #setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  #getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach(work => {
      this.#renderWorkout(work);
    });
  }

  #showButtons() {
    copyright.style.opacity = '0';

    setTimeout(() => {
      copyright.style.display = 'none';
    }, 500);

    setTimeout(() => {
      buttons.style.display = 'block';
      buttons.style.opacity = '0';

      setTimeout(() => {
        buttons.style.opacity = '1';
      }, 10);
    }, 500);
  }

  edit() {
    const latlng = this.getWorkoutCoords();
    const newLatlng = { latlng };
    this.#showForm(newLatlng);
    this.delete();
  }

  delete() {
    const curWorkoutId = this._workoutEl.dataset.id;
    const latlng = this.getWorkoutCoords();

    this.removeMarker(latlng);
    this.updateLocalStorage(curWorkoutId);
    this.deleteAnimation(this._workoutEl);
  }

  deleteAll() {
    this._markers.forEach(marker => this.#map.removeLayer(marker));
    this.updateLocalStorage(this.#workouts);

    const allWorkouts = containerWorkouts.querySelectorAll('li');
    
    allWorkouts.forEach(work => work.classList);

    this.deleteAnimation(allWorkouts);
  }

  getWorkoutCoords() {
    const workout = this.#workouts.find(
      el => el.id === this._workoutEl.dataset.id
    );
    return {
      lat: workout.coords[0],
      lng: workout.coords[1],
    };
  }

  removeMarker(latlng) {
    const markerIndex = this._markers.findIndex(
      mark => mark._latlng.lat === latlng.lat && mark._latlng.lng === latlng.lng
    );

    if (markerIndex !== -1) {
      const markerToRemove = this._markers[markerIndex];
      this.#map.removeLayer(markerToRemove);
      this._markers.splice(markerIndex, 1);
    }
  }

  updateLocalStorage(curWorkoutId) {
    console.log(typeof curWorkoutId);
    let workouts = JSON.parse(localStorage.getItem('workouts')) || [];

    if (typeof curWorkoutId === 'string')
      workouts = workouts.filter(work => work.id !== curWorkoutId);

    if (typeof curWorkoutId === 'object') workouts = [];

    localStorage.setItem('workouts', JSON.stringify(workouts));
  }

  deleteAnimation(el) {
    if (el.length > 1) el.forEach(cur => cur.classList.add('clean-remove'));
    else el.classList.add('clean-remove');

    el.addEventListener('animationend', () => el.remove());
  }
}

const app = new App();
