// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import "./App.css";
import axios from "axios";
import UserContainer from "./containers/UserContainer";

function App() {
  // const [id, setId] = useState(1);
  // const [on, setOn] = useState(true);

  // const { data, isPending, refetch, error } = useQuery({
  //   queryKey: ["todos", id],
  //   queryFn: () => getTodos(id),
  //   enabled: on,
  // });

  // if (error) {
  //   alert(error.message);
  // }

  return (
    <>
      {/* <h3>
        {isPending ? <div>Loading...</div> : JSON.stringify(data?.slice(0, 5))}
      </h3>
      <button onClick={() => refetch()}>Refetch</button>
      <button onClick={() => setId((prev) => prev - 1)}>Decrement Id</button>
      <button onClick={() => setId((prev) => prev + 1)}>Increment Id</button> */}

      <h2 className="text-2xl font-semibold">Users (Container / Presentation Pattern)</h2>
      <UserContainer />
    </>
  );
}

// type Todo = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };

// async function getTodos(id: number): Promise<Todo[]> {
//   const res = await axios.get(
//     `https://jsonplaceholder.typicode.com/comments?postId=${id}`
//   );
//   return res.data;
// }

export default App;
