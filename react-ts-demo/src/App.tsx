import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Award } from "./components/Award";
import { LearningLinks } from "./components/LearningLinks";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { LoggedIn } from "./components/state/LoggedIn";
import { useState, ChangeEvent, MouseEvent } from "react";
import "./App.css";
import {
  llinks,
  personName,
  personNames,
} from "./components/types/Custom.types";
import { User } from "./components/state/User";
import { Counter } from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { CounterClass } from "./components/class/CounterClass";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";

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
      <LoggedIn />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <DomRef />
      <MutableRef />
      <CounterClass message="Counter " />
      <Private isLoggedIn={true} component={Profile} />
      <List
        items={["Banana", "Peach", "Apple"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3, 4, 5]} onClick={(item) => console.log(item)} />
      <p>So far we came this far</p>
      <LearningLinks links={llinks} />
    </div>
  );
}

export default App;
