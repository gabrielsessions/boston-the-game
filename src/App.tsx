import { Heading } from "@chakra-ui/react";
import { auth } from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

import "./App.css";
import Login from "./Login";
import LoggedIn from "./LoggedIn";
import ChallengeTable from "./ChallengeTable";
function App() {

  const [user] = useAuthState(auth)
  return (
    <>
      <Heading className="text-center my-1">Boston: The Game</Heading>
      {
        user ?
          <LoggedIn user={user} />
          :
          <Login />
      }
      <div className="my-1">
      <ChallengeTable />
      </div>
      
    </>
  )
}

export default App
