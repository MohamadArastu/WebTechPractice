type GreetProps = {
  name: string;
  msgcount: number;
  isLoggin: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>Welcome to our React ts practice</h1>
      <h2>
        {props.isLoggin
          ? `My name is ${props.name}, they are ${props.msgcount} unread messages`
          : "Welcome guest"}
      </h2>
    </div>
  );
};
