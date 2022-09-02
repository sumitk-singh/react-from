const UserData = (prop) => {
  return (
    <>
      <h2>Name: {prop.name}</h2>
      <h2>City: {prop.city}</h2>
      <h2>Contact Number: {prop.contactNumber}</h2>
    </>
  );
};

export default UserData;
