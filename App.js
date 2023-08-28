import { useState} from 'react';
import React from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
    const [usersList, setUserList] = useState([]);

    const addUserHandler = (uName, uAge, cName) => {
        setUserList((prevUsersList) => {
            return [...prevUsersList, {name: uName, age: uAge, collegename:cName, id:Math.random().toString() }]
        })
    }
  return (
    <>
        <AddUser onAddUser={addUserHandler}/>
        <UsersList users={usersList}/>
    </>
  );
}

export default App;
