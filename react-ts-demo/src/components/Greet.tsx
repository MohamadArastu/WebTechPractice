type GreetProps = {
  name: string;
  msgcount?: number;
  userCount?: number;
  isLoggin: boolean;
};

export const Greet = (props: GreetProps) => {
  const { msgcount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggin
          ? `Greeting ${props.name}, they are ${msgcount} unread messages`
          : "Welcome guest"}
      </h2>
      <p>Number of users: {props.userCount}</p>
    </div>
  );
};
