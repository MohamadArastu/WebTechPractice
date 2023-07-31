type StatusProps = {
  status: "1" | "2" | "3";
};

export const Status = (props: StatusProps) => {
  let msg;

  if (props.status === "1") msg = "Loading";
  else if (props.status === "2") msg = "Success";
  else if (props.status === "3") msg = "Error";
  else msg = "unknown";

  return <h2>Status: {msg}</h2>;
};
