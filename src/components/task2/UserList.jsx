import React from 'react';

import User from './User';
import Address from "./Address";

const UserList = ({ users }) => {
    return (
      <fieldset>
          <legend>Завдання 2</legend>

          <table border={1}>
              <thead>
                  <tr>
                      <th colSpan={2}>Користувач</th>
                      <th colSpan={3}>Адрес</th>
                  </tr>
                  <tr>
                      <th>Ім'я</th>
                      <th>Прізвище</th>
                      <th>Країна</th>
                      <th>Місто</th>
                      <th>Вулиця</th>
                  </tr>
              </thead>
              <tbody>
                  {users.map(item => (
                      <tr key={item.id.value} bgcolor={item.active ? 'white' : 'lightgray'}>
                        <User item={item}/>
                        <Address item={item}/>
                      </tr>
                  ))}
              </tbody>
          </table>
      </fieldset>
    );
}

export default UserList;
