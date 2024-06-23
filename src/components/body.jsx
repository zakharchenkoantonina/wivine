import React from 'react'
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Home() {

    const slogan = "Unissez vos mains aux miennes pour un Congo revitalisé"
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '20%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Au Service du Peuple D'Abord 
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Dr. Wivine NGANDU
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            {slogan}
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Faites un don
            </Button>
            <Button rounded={'full'}>
            <Link to='/bio'>Biographie</Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://firebasestorage.googleapis.com/v0/b/wivinecampaign.appspot.com/o/revised_banner.png?alt=media&token=44e58ae3-1eea-40b3-8ce4-f1e157b00539'
          }
        />
      </Flex>
    </Stack>
  )
}

export default Home