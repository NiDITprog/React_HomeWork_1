import React from 'react';

const User = ({ item }) => {
    return (
            <>
                <td>{item.name.first}</td>
                <td>{item.name.last}</td>
            </>
        );


}

export default User;
