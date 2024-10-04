'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

///////////////////////////////
// How to Plan a Web Project?

/*
  1. User Stories

User Story: Description of the application's functionaliy from the user's perspective.

Utilizar um formato descritivo (frase) para entender o que é necessário no projeto.

Esse formato deve atender aos princípios de WHO - WHAT - WHY. 

Exemplo: As a [type of user], I want [an action] so that [a benefit]

*/

/*
  2. Features

Baseado nos User Stories, vamos definir quais as features que nosso projeto terá.

Tais features devem suprir as necessidades dos User Stories da maneira 
acharmos melhor, mais amigável, eficiente e etc.

*/

/*
  3. Flowchart

Baseado agora nas features, colocaremos no Flowchart tudo que precisamos fazer
no projeto, todas as implementações e a ordem em que tudo vai acontecer.
  
É sempre uma boa ideia começar o Flowchart com events. Normalmente com o
page loads, que será o primeiro event da página.

Utilizaremos cores diferentes para: 

events - Async - Render - Storage

Não é necessário fazer um Flowchart perfeitamente detalhado logo no 
início do projeto. Com mais e mais prática, podemos melhorar nesse quesito.
Porém, por agora, não perca muito tempo com isso.

*/

/*
  4. Architecture

Assim como no Flowchart, não precisamos ter a Architecture perfeita
antes de inicar nossa implementação.

Por conta disso, no projeto Mapty App, vamos primeiro começar a codificar
e depois, quando precisarmos de mais organização, pensaremos na parte de Architecture.

*/

/////////////////////////////
// Using the Geolocation API

/*
navigator.geolocation.watchPosition()

  Essa função é usada para monitorar continuamente a posição geográfica do dispositivo. 
Ela "observa" mudanças na posição e executa um callback (função de retorno) sempre que 
há uma alteração. Ou seja, ela rastreia a posição ao longo do tempo e atualiza o aplicativo 
com a nova localização.
*/

// const watchId = navigator.geolocation.watchPosition(
//   successCallback,
//   errorCallback,
//   options
// );

/*
SUMMARY:

successCallback: Função chamada sempre que há uma nova posição.
errorCallback (opcional): Função chamada se ocorrer um erro ao tentar obter a posição.
options (opcional): Um objeto com configurações opcionais, como intervalo de tempo entre 
verificações, precisão, etc.
 */

/*
navigator.geolocation.clearWatch()

  Essa função é usada para parar o monitoramento iniciado com watchPosition(). 
Ela cancela a observação contínua da posição, interrompendo as atualizações 
automáticas de localização.
*/

// navigator.geolocation.clearWatch(watchId);

///

// FLOWCHART - WHAT TO IMPLEMENT (high level overview)
// ARCHITECTYRE - HOW TO IMPLEMENT (more details)

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10); // Normalmente nunca criamos ID's nós mesmos, deixamos isso para outras bibliotecas fazerem
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // Serve para o prettier ignorar a linha abaixo
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
    // this.type = 'cycling';
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

////////////////////////////
// AAPLICATION ARCHITECTURE
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapEvent;
  #mapZoomLevel = 15;
  #workouts = [];

  constructor() {
    // Get user's position
    this.#getPosition();

    // Get data from local storage
    this.#getLocalStorage();

    // Attach event handlers
    form.addEventListener('submit', this.#newWorkout.bind(this));
    inputType.addEventListener('change', this.#toggleElevationField);
    containerWorkouts.addEventListener('click', this.#moveToPopup.bind(this));
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
      .openPopup();
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
          <span class="workout__value"${workout.cadence}</span>
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

    const workoutEl = e.target.closest('.workout');

    if (!workoutEl) return; // Guard Class

    // Aqui o ID faz toda a diferença, pois utilizamos o fato de ele ser dinâmico para diferenciar um workout do outro.
    // Pense assim, como cada ID representa um workout, podemos manipulá-los conforme seus próprios ID's
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // using the public interface
    // workout.click();
  }

  #setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  // Quando convertemos nossos objetos em uma String e depois voltamos eles para objetos com o código abaixo, eles perdem seus prototypes :(
  // É possível contornar isso utilizando loops...
  #getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach(work => {
      this.#renderWorkout(work);
    });
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload(); // location é um objeto com vários métodos e propriedades do navegador
  }
}

const app = new App();

//////////////////
// Architecture
/*
O diagrama de arquitetura se baseia em:

  1. Ter os dados necessários do projeto (location, distance, time, pace, steps/minute or elevation gain);
  2. Como queremos utilizar OOP, vamos criar uma classe pai para os dados que serão herdados posteriormente;
  3. Agora, criaremos as classes filhas com suas peculiaridades dependendo do necessário;
  4. Após lidar com os dados, queremos organizar as funcionalidades do projeto, seprando tudo por functions;
  5. Essas mesmas functions serão métodos da classe global que inicia junto com o load da página (ter uma classe global é uma
  boa prática para projetos pequenos/médios, grandes projetos precisam de mais, por exemplo, 1 - interface e 2- funcionalidade)

  No nosso caso o método principal é o de submit do form, pois ele que decidirá qual classe filha será utilizada
  dependendo do tipo de treino escolhido.

*/
