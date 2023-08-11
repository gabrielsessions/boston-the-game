import { Card, CardHeader, CardBody, CardFooter, Heading, Button, Text } from '@chakra-ui/react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

export default function Login() {
  const [signIn] = useSignInWithGoogle(auth)
  const login = () => {
    signIn()
  }
  return (
    <>
      <Card align='center' style={{"margin": "20px"}}>
        <CardHeader>
          <Heading size='md'>Login</Heading>
        </CardHeader>
        <CardBody>
          <Text>To access team-specific data and log your progress, please sign in.</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme='blue' onClick={login}>Login with Google</Button>
        </CardFooter>
      </Card>
    </>
  )
}