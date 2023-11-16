import MyComponent from "./components/MyComponents";
import MyButton from "./components/MyButton";
import MyCounter from "./components/MyCounter";
import MyList from "./components/MyList";
import TaskList from "./components/TaskList";
import StylizedCounter from "./components/stylizedCounter";
import "./style.css"

function App() {
  return (
    <div>
      <h1>Hello World, React! </h1>
      <MyComponent />
      <MyComponent />

      <MyButton content="Clicke Me" />
      <MyButton content="Then Here" />
      <MyButton content="And Finally Here!" />

      <br />
      <br />
      <br />

      <h1>Estados e Eventos</h1>
      <MyCounter />

      <br />
      <br />
      <br />

      <h1>Listas no React</h1>
      <MyList />

      <br />
      <br />
      <br />

      <h1>Buscando Dados</h1>
      <TaskList />

      <br />
      <br />
      <br />

      <h1>Meu Contador Estilizado</h1>
      <StylizedCounter />
    </div>
  );
}

export default App;
