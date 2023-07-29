import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import "./App.css";
import { PersonList } from "./components/PersonList";
import { LearningLinks } from "./components/LearningLinks";

function App() {
  const personName = {
    first: "Jack",
    last: "Daniel",
  };

  const personNames = [
    { first: "Leah Gotti", last: "Sara Thai" },
    { first: "Bruce Lee", last: "Iron Man" },
  ];

  const llinks = [
    {
      link: "https://www.youtube.com/watch?v=zLyeWSfTMa8&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=5",
      linkName: "React TypeScript Tutorial - 5 - Advanced Props",
    },
  ];

  return (
    <div className="App">
      <Greet name="Momo" msgcount={10} isLoggin={false} />
      <Person name={personName} />
      <PersonList names={personNames} />
      <p>
        So far we came this farm <LearningLinks links={llinks} />
      </p>
    </div>
  );
}

export default App;
