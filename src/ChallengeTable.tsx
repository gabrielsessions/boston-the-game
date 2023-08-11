import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from './firebase';
import ChallengeModal from './ChallengeModal';

export default function ChallengeTable() {
  const [value] = useCollection(
    collection(db, 'challenges'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (!value) {
    return <></>
  }

  console.log(value.docs)
  const keys = ["Region", "Points"];

  return (
    <>
      <TableContainer>
        <Table variant='simple' size='sm'>
          <Thead>
            <Tr>
              {
                keys.map((key, index) => {
                  return <Th key={index}>{key}</Th>
                })
              }
              <Th>Challenge</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              value.docs.map((rowSnap) => {
                return rowSnap.data()
              }).map((rowData, index) => {
                return (
                  <Tr key={index}>
                    {
                      keys.map((key, index) => {
                        if (!isNaN(rowData[key])) {
                          return <Td key={index} isNumeric>{rowData[key]}</Td>
                        }
                        return <Td key={index}>{rowData[key].toString().substr(0, Math.min(rowData[key].length, 25))}</Td>
                      })
                    }
                    <Td><ChallengeModal challenge={rowData} /></Td>
                  </Tr>
                )
              })
            }
          </Tbody>

        </Table>
      </TableContainer>
    </>
  )
}