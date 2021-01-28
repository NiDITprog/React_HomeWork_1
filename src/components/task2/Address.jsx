import React from 'react';

const Address = ({ item }) => {
    return (
        <>
            <td>{item.location.country}</td>
            <td>{item.location.city}</td>
            <td>{`${item.location.street.name}, ${item.location.street.number}`}</td>
        </>
        );

}

export default Address;
