import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "../components/UserList";

function UserContainer() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getUsers = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get("https://reqres.in/api/users");
      const data = response.data;

      setUsers(data.data);
    } catch (error: unknown) {
      const err = error as Error;
      setIsLoading(false);
      setError(err?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <UserList users={users} loading={isLoading} error={error} />
    </div>
  );
}

export default UserContainer;
