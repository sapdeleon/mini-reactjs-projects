import React from "react";
import Card from "./Cards";
import contacts from "../data/contacts";

// function createCards(card) {
//   return (
//     <Card
//       key={card.id}
//       name={card.name}
//       img={card.imgURL}
//       phone={card.phone}
//       email={card.email}
//     />
//   );
// }

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          img={card.imgURL}
          phone={card.phone}
          email={card.email}
        />
      ))}
    </div>
  );
}

export default App;
