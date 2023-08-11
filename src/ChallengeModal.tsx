import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react';
import { DocumentData } from 'firebase/firestore/lite';

interface ChallengeObject {
  challenge: DocumentData
}

export default function ChallengeModal(props: ChallengeObject) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Details</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.challenge.Region}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{props.challenge.Challenge}</p>
            <br />
            <p>Points: {props.challenge.Points}</p>
            <p>Difficulty: {props.challenge.Difficulty}</p>
            <p>{props.challenge.completedBy === "" ? "Not Yet Completed" : "Completed By: " + props.challenge.completedBy}</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
            Mark as Complete
            </Button>
            <Button variant='ghost'>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}