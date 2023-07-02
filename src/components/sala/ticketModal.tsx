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
  import { useContext, useEffect } from "react";
  import { useMyContext } from "@/context/ticketContext";
import IngressoAnos80 from "./ticketMovie";
  
  interface ITicketModal{
      ing:number,
      name: string,
      only: boolean
  }
  export const ModalTick: React.FC<ITicketModal> = ({ing, name, only}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {salaCadeira, setSalaCadeira} = useMyContext()
    
    function open () {
        onOpen()
    }
    useEffect(()=>{
        open()
    },[only === true])
    
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} size={'3xl'} >
          <ModalOverlay  />
          <ModalContent bgColor={'#49416D'} borderRadius={10}>  
            <ModalHeader color={'white'}>Selecione sua cadeira</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <IngressoAnos80 ing={ing} name={name}  />
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
  