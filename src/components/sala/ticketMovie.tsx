import { useMyContext } from "@/context/ticketContext";
import { Text,Box, Center } from "@chakra-ui/react";


interface IingressoAnos80 {
    ing: number,
    name: string
}

const IngressoAnos80: React.FC<IingressoAnos80> = ({ing, name}) => {
  const {indicet, setIndice} = useMyContext()
  
  return (
<Center height="100vh">
      <Box
        p={8}
        maxWidth="400px"
        width="100%"
        borderWidth={2}
        borderRadius="md"
        boxShadow="lg"
        bg="white"
        color="black"
      >
        <Box
          bg="black"
          color="white"
          mb={4}
          fontWeight="bold"
          fontSize="lg"
          textAlign="center"
          borderRadius="md"
          p={2}
        >
          TICKET
        </Box>
        <Box mb={4}>
          <Box fontWeight="bold">Filme:</Box>
          <Box>{name}</Box>
        </Box>
        <Box mb={4}>
          <Box fontWeight="bold">Horario:</Box>
          <Box>7:30</Box>
        </Box>
        <Box mb={4}>
          <Box fontWeight="bold">Cinema:</Box>
          <Box>CineNext</Box>
        </Box>
        <Box mb={4}>
          <Box fontWeight="bold">Banco:</Box>
          <Box>{indicet?.indice}</Box>
        </Box>
        <Box textAlign="center">
          <Box fontWeight="bold">Valor:</Box>
          <Box mt={4} fontWeight="bold" fontSize="xl">
            R$ {ing},00
          </Box>
        </Box>
      </Box>
    </Center>
  )
    
};
  
  export default IngressoAnos80;

  
  
  
  
  
  