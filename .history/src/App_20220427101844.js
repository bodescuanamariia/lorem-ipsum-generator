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
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">paragraphs</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="btn" type="submit">
            generate
          </button>
        </form>
        <article className="lorem-text">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            adipisci ut, ipsam sunt, modi voluptatum libero nihil possimus,
            molestias suscipit doloremque odio dolorem quasi officiis
            voluptatibus molestiae velit sit ducimus.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            adipisci ut, ipsam sunt, modi voluptatum libero nihil possimus,
            molestias suscipit doloremque odio dolorem quasi officiis
            voluptatibus molestiae velit sit ducimus.
          </p>
        </article>
      </section>
    </>
  );
}

export default App;
