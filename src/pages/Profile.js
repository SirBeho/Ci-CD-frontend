// src/pages/profile.js (Nota: el nombre del archivo debe ser en minúsculas)

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get('http://localhost:3000/profile', { withCredentials: true });
        setUser(res.data);
      } catch (err) {
        console.error('Error fetching profile:', err);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Profile</h1>
        {user ? (
          <div>
            <p className="text-lg font-medium">Welcome, {user.username}!</p>
            <p className="text-gray-600">Email: {user.email}</p>
          </div>
        ) : (
          <p className="text-center">Loading profile...</p>
        )}
      </div>
    </div>
  );
}
