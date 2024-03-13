import React, { useState } from "react";

export default function Question(props) {
    debugger;
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <section>
        <div className={isOpen ? 'open' : 'closed'}> 
        <h4>{props.question.title}</h4>
        <button onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
        </div>
        {isOpen && <p>{props.question.info}</p>}
      </section>
    </div>
  );
}
