import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { LearningLinks } from "./components/LearningLinks";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Award } from "./components/Award";

import "./App.css";

function App() {
  const personName = {
    first: "Jack",
    last: "Daniel",
  };

  const personNames = [
    { first: "Leah Gotti", last: "Sara Thai" },
    { first: "Bruce Lee", last: "Iron Man" },
  ];
  // Mammad khare gave nare savaresh misham rah mibare ta dame isga mibare//
  // in dande o oon dande kosse nanat ranande//
  //cheers.🍺
  const llinks = [
    {
      link: "https://www.youtube.com/watch?v=zLyeWSfTMa8&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=5",
      linkName: "React TypeScript Tutorial - 5 - Advanced Props",
    },
  ];

  return (
    <div className="App">
      <h1>Welcome to our React ts practice</h1>
      <Greet name="Momo" msgcount={10} isLoggin={true} />
      <Greet name="Alison" isLoggin={false} />
      <Person name={personName} />
      <PersonList names={personNames} />
      <Status status="2" />
      <Heading>Placeholder</Heading>
      <Award>
        <Heading>The award will goes to ME !</Heading>
      </Award>
      <p>
        So far we came this farm <LearningLinks links={llinks} />
      </p>
    </div>
  );
}

export default App;
