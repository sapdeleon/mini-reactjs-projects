import React from "react";

const Greeting = () => {
  let greeting = "Test";
  const hour = new Date().getHours();

  const customStyle = {
    color: "yellow",
  };

  if (hour < 12) {
    greeting = "Good Morning!";
    customStyle.color = "purple";
  } else if (hour < 18) {
    greeting = "Good Afternoon!";
    customStyle.color = "green";
  } else {
    greeting = "Good Evening!";
    customStyle.color = "blue";
  }

  return (
    <div className="heading">
      <h1 style={customStyle}>{greeting}</h1>
    </div>
  );
};

export default Greeting;
