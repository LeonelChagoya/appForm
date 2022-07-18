import React from "react";

const UsersList = ({ users, editUser, deleteUser }) => {
  console.log(users);
  return (
    <ul className="usersList">
      <div className="usersTop">
        <h1>Users</h1>
        <a href="#modal" className="open">
          + Add new user
        </a>
      </div>
      <br />
      <div className="userConteiner">
        {users.map((user) => (
          <li className="userCard" key={user.id}>
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <span>Email</span>

            <h5>{user.email}</h5>
            <span>Birthday</span>

            <strong>
              <time>{user.birthday}</time>
            </strong>
            <div className="buttonCard">
              <a
                href=""
                className="buttonDelete"
                onClick={() => deleteUser(user.id)}
              >
                <i className="fi fi-rs-trash"></i>
              </a>
              <a
                href="#modal"
                className="buttonEdit"
                onClick={() => editUser(user)}
              >
                <i className="fi fi-rs-edit"></i>
              </a>
            </div>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default UsersList;
