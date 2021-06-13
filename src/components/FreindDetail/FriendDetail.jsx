import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setFriend(data));
    },);
    return (
        <div style={{ marginLeft: "200px", paddingTop: "50px" }}>
            <p>
                <small>Here is Deatils {friendId}</small>
            </p>
            <h1>{friend.name}</h1>
            <p>
                <b>Email:</b> {friend.email}
            </p>
            <p>
                <b>Phone: </b> {friend.phone}
            </p>
            <p>
                <b>Website: </b>
                {friend.website}
            </p>
        </div>
    );
};

export default FriendDetail;
