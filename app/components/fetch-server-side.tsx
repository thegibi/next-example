'use server';

import { api } from '../libs/api';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export default async function FetchServerSide() {
  const users = await api.get<User[]>('/users');
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Fetch Server-Side</h1>
      <p className="text-gray-600">
        This component is rendered on the server side.
      </p>
      <p className="text-gray-600">API Response on Server Side Component</p>
      <ul>
        {users.data.map((user) => (
          <li key={user.id} className="text-gray-800">
            <strong>Name:</strong> {user.name} <strong>Username:</strong> (
            {user.username}) - <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
