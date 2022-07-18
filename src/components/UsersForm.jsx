import React, { useEffect, useState } from "react";

const UsersForm = ({ addUsers, userEdit, updateUser, deselecUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    if (userEdit !== null) {
      setFirstName(userEdit.first_name);
      setLastName(userEdit.last_name);
      setEmail(userEdit.email);
      setPassword(userEdit.password);
      setBirthday(userEdit.birthday);
    } else {
      reset();
    }
  }, [userEdit]);

  const submit = (e) => {
    e.preventDefault();
    const newUsers = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      birthday: birthday,
    };
    if (userEdit !== null) {
      //actualizando
      newUsers.id = userEdit.id;
      updateUser(newUsers);
      deselecUser();
    } else {
      addUsers(newUsers);
      reset();
    }
  };

  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setBirthday("");
  };
  return (
    <form className="listForm" onSubmit={submit} id="modal">
      <div className="modalConteiner">
        <div className="topForm">
          <h1>New User</h1>
          <a href="#" className="modalToClose">
            X
          </a>
        </div>
        <div className="inputConteiner">
          <label htmlFor="firstName">Name</label>

          <input
            className="inputForm"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <br />
        <div className="inputConteiner">
          <label htmlFor="lastName">Last Name</label>

          <input
            className="inputForm"
            type="text"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <br />
        <div className="inputConteiner">
          <label htmlFor="email">Email</label>

          <input
            className="inputForm"
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <br />
        <div className="inputConteiner">
          <label htmlFor=" password"> password</label>

          <input
            className="inputForm"
            type="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <br />
        <div className="inputConteiner">
          <label htmlFor="birthday">Birthday</label>

          <input
            className="inputForm"
            type="date"
            id="birthday"
            onChange={(e) => setBirthday(e.target.value)}
            value={birthday}
          />
        </div>
        <br />
        <br />

        <button className="buttonForm">
          {userEdit !== null ? "Update" : "Add new user"}
        </button>
        {userEdit !== null && (
          <button className="buttonForm" onClick={deselecUser} type="button">
            {" "}
            clear
          </button>
        )}
      </div>
    </form>
  );
};

export default UsersForm;
