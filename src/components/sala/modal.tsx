import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { SalaCinema } from "./Sala";
import { useContext } from "react";
import { useMyContext } from "@/context/ticketContext";

interface ITicketModal{
    ing:number
}
export const TicketModal: React.FC<ITicketModal> = ({ing}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

 

  return (
    <>
      <Button onClick={onOpen}>Comprar ingresso R$ {ing},00 </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={'3xl'} >
        <ModalOverlay  />
        <ModalContent bgColor={'#49416D'} borderRadius={10}>  
          <ModalHeader color={'white'}>Selecione sua cadeira</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SalaCinema/>
          </ModalBody>
          <ModalFooter>
            <Button  style={{
                backgroundColor: "orange"
            }} _hover={{
                bg: "red.600"
            }} onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}


