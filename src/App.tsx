import React, { useState } from "react";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const onDragStart = (event, input) => {
    event.dataTransfer.setData("input", input);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event, targetInput) => {
    event.preventDefault();

    const draggedInput = event.dataTransfer.getData("input");

    if (draggedInput === "input1" && targetInput === "input2") {
      setInput2(input1);
      setInput1("");
    } else if (draggedInput === "input1" && targetInput === "input3") {
      setInput3(input1);
      setInput1("");
    } else if (draggedInput === "input2" && targetInput === "input1") {
      setInput1(input2);
      setInput2("");
    } else if (draggedInput === "input2" && targetInput === "input3") {
      setInput3(input2);
      setInput2("");
    } else if (draggedInput === "input3" && targetInput === "input1") {
      setInput1(input3);
      setInput3("");
    } else if (draggedInput === "input3" && targetInput === "input2") {
      setInput2(input3);
      setInput3("");
    }
  };

  return (
    <div>
      <div
        onDragOver={onDragOver}
        onDrop={(event) => onDrop(event, "input2")}
        style={{
          width: "200px",
          height: "200px",
          border: "1px solid black",
        }}
      >
        <input
          type="text"
          value={input1}
          onDragStart={(event) => onDragStart(event, "input1")}
          draggable
        />
      </div>

      <div
        onDragOver={onDragOver}
        onDrop={(event) => onDrop(event, "input3")}
        style={{
          width: "200px",
          height: "200px",
          border: "1px solid black",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          value={input2}
          onDragStart={(event) => onDragStart(event, "input2")}
          draggable
        />
        <input
          type="text"
          value={input3}
          onDragStart={(event) => onDragStart(event, "input3")}
          draggable
        />
      </div>
    </div>
  );
}

export default App;
