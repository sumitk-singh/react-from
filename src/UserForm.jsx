import { useState } from "react";
import UserData from "./UserData";

const UserForm = () => {
  //using useStae hook ot track the change of state
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  //  ------

  //  function to handle the form.
  const formHandler = () => {
    navigate("./UserData");
  };
  //  ------

  //functino to handle reset
  const resetHnadler = (e) => {
    setName("");
    setCity("");
    setContactNumber("");
  };
  //  ------
  return (
    <>
      <form action="S">
        <div className="user-form">
          <h2>User Form</h2>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Contact Number"
            onChange={(e) => setContactNumber(e.target.value)}
          />
          <input type="submit" onSubmit={formHandler} />
          <input type="reset" onClick={resetHnadler} />

          <h3>Name: {name}</h3>
          <h3>CIty: {city}</h3>
          <h3>Contact Number: {contactNumber}</h3>
        </div>
      </form>
    </>
  );
};

export default UserForm;
