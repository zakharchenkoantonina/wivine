import React from 'react'
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function CandidateProfile() {
  return (
    <Center py={6} >
      <Box
        maxW={'640px'}
        w={'full'}
        h={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            'https://firebasestorage.googleapis.com/v0/b/wivinecampaign.appspot.com/o/portrait.jpg?alt=media&token=d8be4ccb-3555-4cdb-8646-5a0d9dc2164a'
          }
          mb={4}
          pos={'relative'}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'} py={2}>
          Dr. Wivine Ngandu
        </Heading>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={4}>
          Née à likasi le 4/6/1976 a fait ses études primaires a Uhuru école GCM, secondaire à Tutazamie Collège St François Xavier de Likasi en Biologie-Chimie
          Diplômé de la Faculté de Médecine de l'Université de Lubumbashi en 2003, 
          a suivi une spécialisation de l'Université Catholique de Louvain ainsi qu'un diplôme de l'Ecole de Santé Publique avec une spécialisation en épidémiologie. 
          Elle a été médecin à Lubumbashi pendant plusieurs années au service de plusieurs établissements de santé. 
          Elle a également conseillé plusieurs entreprises sur des questions liées aux soins de santé.{' '}
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #2023RDC
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #DrWivineNgandu
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #Elections2023
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Message
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            <Link to='/'>
            Suivre
            </Link>        
          </Button>
        </Stack>
      </Box>
    </Center>
  )
}