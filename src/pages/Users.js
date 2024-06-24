// src/pages/users.js

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:3000/users', { withCredentials: true });
        setUsers(res.data);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id} className="mb-4">
              <a href={`/users/${user.id}`} className="text-blue-600 hover:underline">
                {user.username}
              </a>
              <p className="text-gray-600">Emial: {user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
