import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Award } from "./components/Award";
import { LearningLinks } from "./components/LearningLinks";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { useState, ChangeEvent, MouseEvent } from "react";

import "./App.css";
import { Container } from "./components/Container";

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
    link: "https://www.youtube.com/watch?v=2NKNjeB0WVs&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=9",
    linkName: "React TypeScript Tutorial - 9 - useState Hook",
  },
];

function App() {
  const [inputValue, setInputValue] = useState(""); // State to store the input value

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update the state with the current input value
  };

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("Input Value:", inputValue); // Log the input value from the state
  };

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
        <Heading>The award will go to ME !</Heading>
      </Award>
      <Button handleClick={handleButtonClick} />
      <Input value={inputValue} handleChange={handleInputChange} />
      <Container style={{ border: "2px solid black", padding: "1px" }} />
      <p>So far we came this far</p>
      <LearningLinks links={llinks} />
    </div>
  );
}

export default App;
