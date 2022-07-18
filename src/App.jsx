import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const [userEdit, setUserEdit] = useState(null);

  useEffect(() => {
    axios
      .get(`https://users-crud1.herokuapp.com/users/`)
      .then((res) => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get(`https://users-crud1.herokuapp.com/users/`)
      .then((res) => setUsers(res.data));
  };

  const addUsers = (newUsers) => {
    alert("Añadiendo");
    console.log(newUsers);
    axios
      .post("https://users-crud1.herokuapp.com/users/", newUsers)
      .then(() => getUsers())
      .catch((error) => console.log(error.response));
  };

  const editUser = (user) => {
    setUserEdit(user);
  };

  const deleteUser = (id) => {
    alert("eliminando");
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  };
  const deselecUser = () => setUserEdit(null);
  const updateUser = (userUpdated) => {
    alert("actualizando");
    axios
      .put(
        `https://users-crud1.herokuapp.com/users/${userUpdated.id}/`,
        userUpdated
      )
      .then(() => getUsers());
  };

  return (
    <div className="App">
      <UsersForm
        addUsers={addUsers}
        userEdit={userEdit}
        updateUser={updateUser}
        deselecUser={deselecUser}
      />
      <UsersList users={users} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
