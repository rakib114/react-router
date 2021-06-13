import React from "react";
import { Link, useHistory } from "react-router-dom";
const Friend = (props) => {
  const { name, email, id } = props.friend;
  const friendStyle = {
    border: "1px solid purple",
    padding: "20px",
    margin: "20px",
    borderRadius: "20px",
  };
  const history = useHistory();
  const handleClick = (friendId) =>{
    const url = `/friend/${friendId}`
    history.push(url);
  }
  return (
    <div style={friendStyle}>
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      <p>
        <small>ID: {id}</small>{" "}
        <Link to={`/friend/${id}`}>
          <button style={{cursor:'pointer'}}>Shoe His Details</button>
        </Link>{" "}
      </p>
      <button onClick={()=> handleClick(id)}>Another Way</button>
    </div>
  );
};

export default Friend;
