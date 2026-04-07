'use client';

import { useEffect, useState } from 'react';
import { api } from '../libs/api';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export default function FetchClientSide() {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await api.get<User[]>('/users');
      setUsers(users.data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Fetch Client-Side</h1>
      <p className="text-gray-600">
        This component is rendered on the client side.
      </p>
      <p className="text-gray-600">API Response on Client Side Component</p>
      <ul>
        {users?.map((user) => (
          <li key={user.id} className="text-gray-800">
            <strong>Name:</strong> {user.name} <strong>Username:</strong> (
            {user.username}) - <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
