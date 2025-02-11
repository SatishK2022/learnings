import React from "react";

interface UserListProps {
  users: any[];
  loading: boolean;
  error: string | null;
}

function UserList({ users, loading, error }: UserListProps) {
  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  console.log("USER: ", users);

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id} className="flex items-center gap-5 py-5">
          <img src={user.avatar} alt={user.first_name} className="h-20 w-20 rounded-full"/>
          <div>
            <p>
              {user.first_name} {user.last_name}
            </p>
            <p>{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
