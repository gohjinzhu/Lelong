import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5" >
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="lg" pt="3" pb="3" color="gray.700" >{desc1}<br />{desc2}</Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <div>
      <Box>
        <Box width='100vw' height='500px' mb={5} textAlign='center' opacity='1'>
          <Text fontSize="48px" fontWeight='bold' fontFamily="Bright Sunshine Demo" zIndex='5' pt='225px' pr='300px'>Lowest Price at Lelong</Text>
        </Box>
        <Box backgroundImage="url(./advertisement.png)" bgSize='cover' bgRepeat="no-repeat" width='1880px' height='500px' opacity='0.4' mx='0' mb={5} position='absolute' top='85px' left='0px' right='0px'>

        </Box>
        <Flex flexWrap="wrap">
          {propertiesForRent.map(property => <Property property={property} key={property.id} />)}
        </Flex>
        <Banner
          purpose='BUY A HOME'
          title1='Find, Buy & Own Your'
          title2='Dream Home'
          desc1='Explore Apartments, Villas, Homes'
          desc2='and more'
          buttonText='Explore Buying'
          linkName="/search?purpose=for-sale"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
        />
        <Flex flexWrap="wrap">
          {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
        </Flex>

      </Box>
    </div>
  )
}

export async function getStaticProps() {
  const propertiesForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertiesForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertiesForSale?.hits,
      propertiesForRent: propertiesForRent?.hits,
    }
  }
}
