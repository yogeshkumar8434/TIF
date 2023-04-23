import { Inter } from 'next/font/google'
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';
import CardSlider from '../Component/CardSlider';
import { Icon, Link} from "@chakra-ui/react";
// import { AiOutlineInstagram } from 'react-icons/AiOutlineInstagram';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* Add the nav bar logo */}

      <Box display="flex" alignItems="center" height="83px" width="107px" >
        <Image src="/logo.png" alt="Logo" boxSize="40px" mt="33px" ml="100px" />
      </Box>

      {/* Add the text */}
      <Box position="absolute" width="345px" height="207px" left="100px" top="227px">
        <Text fontFamily="Source Sans Pro" fontStyle="normal" fontWeight="700" fontSize="62px" lineHeight="69px" color="#0E2368" style={{ lineHeight: '111%' }}>
          Discover the <Text as="span" color="#E23744">Best</Text> Food and Drinks
        </Text>
      </Box>

      {/* Add the text */}
      <Box position="absolute" width="345px" height="55px" left="100px" top="460px">
        <Text fontFamily="Open Sans" fontStyle="normal" fontWeight="400" fontSize="16.4447px" lineHeight="27px" color="#444957" style={{ lineHeight: '111%' }}>
          Naturally made Healthcare Products for the better care & support of your body.
        </Text>
        <Button borderRadius='21px' colorScheme='red' mt="21">
          Explore Now!
        </Button>
      </Box>

      {/* Add the Image */}
      <Box zIndex="1" position="absolute" width="752px" height="839px" left="688px" top="0px" backgroundImage="url('/Vector1.png')"></Box>
      <Box
        position="absolute"
        width="735px"
        height="804px"
        left="688px"
        top="0px"

        backgroundImage="url('/pizza.png')"
        borderRadius="0px 0px 0px 198.902px"
      ></Box>
    
      <Box position="absolute" width="1440px" height="467px" left="0px" top="989px" backgroundColor="#E5E5E5">
        <Image src="/1.png" alt="Img" width="384px" height="468px" ml="205px" top="989px" />


      </Box>
      <Box position="absolute" width="447px" height="254px" left="789px" top="1096px" >
        <Text fontFamily="Open Sans" fontStyle="normal" fontWeight="600" fontSize="45px" lineHeight="27px" color="#0E2368" >
          About Us
        </Text>
        <Text mt="10" fontFamily="Open Sans" fontStyle="normal" fontWeight="400" fontSize="15px" lineHeight="27px" color="#444957" >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
        </Text>
        <Button borderRadius='21px' colorScheme='red' mt="21">
          Read More
        </Button>
      </Box>
     
      {/* Add the card  */}
      <Box position="absolute" width="1225px" height="679px" left="60px" top="1614px">
        <Flex justifyContent="space-between">
          <CardSlider></CardSlider>
        </Flex>
      </Box>

      {/* Footer Part */}
      <Box position="absolute" width="1440px" height="362px" left="1px" top="2300px" backgroundColor="#F8F8F8">
      <Flex py={10}>
        {/* Logo */}
        <Box display="flex" alignItems="center">
        <Image src="/logo.png" alt="Logo" mt="33px" ml="100px" />
      </Box >
        {/* Company Info */}
        <Box ml={200}>
          <Text fontWeight="bold" mb={2}>Contact Us</Text>
          <Text mb={1}>Lorem Ipsum Pvt Ltd.5/1, Magalton</Text>
          <Text mb={1}>Road, Phartosh Gate near YTM </Text>
          <Text mb={5}>Market, XYZ-343434</Text>
          <Text mb={5}>example2020@gmail.com</Text>
          <Text>(904) 443-0343</Text>
        </Box>
        {/* Links */}
        <Box ml={170}>
          <Text mb={5} fontWeight="bold" mb={2}>More</Text>
          <Link mb={5} href="#">About Us</Link>
          <br /><br />
          <Link mb={5} href="#">Products</Link>
          <br /><br />
          <Link mb={5} href="#">Career</Link>
          <br /><br />
          <Link mb={5} href="#">Contact Us</Link>
        </Box>
        {/* Social Icons */}
        <Box ml={200}>
          <Text fontWeight="bold" mb={2}>Follow Us</Text>
          <Flex>
            <Link href="#" mx={2}>
            <Icon as={FaInstagram} boxSize={6} />
            {/* <AiOutlineInstagram/> */}
            </Link>
            <Link href="#" mx={2}>
            <Icon as={FaTwitter} boxSize={6} />
            </Link>
            <Link href="#" mx={2}>
            <Icon as={FaFacebook} boxSize={6} />
            </Link>
           
          </Flex>
          <Text mt={150} mr={100} >© 2022 Food Truck Example</Text>
        </Box>
      </Flex>
      </Box>

    </>
  )
}
