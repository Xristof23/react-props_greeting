import React from "react";
import "./styles.css";

function Sum({ valueA, valueB }) {
  const sumAB = Number(valueA) + Number(valueB);
  return (
    <div>
      {valueA} + {valueB} = {sumAB}{" "}
    </div>
  );
}
export default function App() {
  return (
    <>
      <Sum valueA={1} valueB={2} />
    </>
  );
}
