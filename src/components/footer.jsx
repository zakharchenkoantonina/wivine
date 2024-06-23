import React from 'react'
import {
  Box,
  Container,
  Stack,
  Button,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { MdEmail, MdCall } from 'react-icons/md'


function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      pb={0}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2023 Dr. Wivine Ngandu. Tous droits réservés</Text>
        <Stack direction='row' spacing={4}>
          <Button leftIcon={<MdEmail />} colorScheme='teal' variant='solid'>
            Email
          </Button>
          <Button rightIcon={<MdCall />} colorScheme='teal' variant='outline'>
            Appelez 
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer