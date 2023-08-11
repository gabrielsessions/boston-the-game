import { Heading, Button, Center } from "@chakra-ui/react";
import { auth } from "./firebase";


export default function LoggedIn(props: any) {
  return (
    <>

      <Center>
        <Heading margin={"5"} as='h4' size='md'>
          Hello, {props.user ? props.user.displayName : "Player"}!
        </Heading>
        <Button colorScheme='blue' size='sm' onClick={() => auth.signOut()}>Logout</Button>
      </Center>

    </>

  )
}