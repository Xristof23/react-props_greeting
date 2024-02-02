import "./styles.css";

function Greeting({ name }) {
  return <h1>Hello, {name === "Feline" ? "Coach" : name} !</h1>;
}

// function GreetingCoaches({ firstName }) {
//   const coaches = [{ firstName: "Feline" }, { firstName: "Pete" }];
//   return (
//     <h1>Hello, {coaches.includes({ firstName }) ? "Coach" : firstName} !</h1>
//   );
// }
export default function App() {
  return (
    <>
      <Greeting name="Christof" />
      <Greeting name="Feline" />
      {/* <GreetingCoaches firstName="Jan" />
      <GreetingCoaches firstName="Pete" /> */}
    </>
  );
}
