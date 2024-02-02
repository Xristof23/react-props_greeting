import React from "react";
import "./styles.css";

function Smiley({ isHappy }) {
  return <p> {isHappy ? <span>😀</span> : <span>🙁</span>}</p>;
}
export default function App() {
  return (
    <>
      <Smiley isHappy={true} />
      <Smiley />
    </>
  );
}
