import React, { useState, useEffect, useContext } from 'react';

import { Context } from '../Context/AuthContext';
import api from '../api';

export default function Users() {
  const [users, setUsers] = useState([]);

  const { handleLogout } = useContext(Context);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/users');

      setUsers(data);
    })();
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.website})</li>
        ))}
      </ul>

      <button type="button" onClick={handleLogout}>Sair</button>
    </>
  );
}
