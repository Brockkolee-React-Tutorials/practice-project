import React from 'react';
import UserInput from './components/UserInput';
import UserList from './components/UserList';

function App() {

  const [userArray, setuserArray] = React.useState([])

  function addUser(userData) {
    setuserArray((prev) => (
      [...prev,
        userData]
    ))


  }
  return (
    <div>
      <UserInput
        sendData={addUser}
      ></UserInput>
      {}
      {userArray.length > 0 && <UserList
        inputlist={userArray}
      ></UserList>}
    </div>
  );
}

export default App;
