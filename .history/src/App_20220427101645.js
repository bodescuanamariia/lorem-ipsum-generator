import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <>
      <section className="section-center">
        <h3>Tired of boring lorem ipsunm</h3>
        <form className="lorem-form" onSubmit={handleSubmit}></form>
        <label htmlFor="amount">paragraphs</label>
        <input type="number" name="amount" id="amount" />
      </section>
    </>
  );
}

export default App;
