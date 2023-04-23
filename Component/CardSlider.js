import { useState } from 'react';
import { Box,Card,Image,Text,CardBody,Stack,Heading,Divider,CardFooter,ButtonGroup,Button, Flex, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
const cardData = [
  {
    id: 1,
    title: 'Card 1',
    description: 'Grilled Tomatoes at Home',
    imageUrl: '/c1.png',
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'Snacks for Travel',
    imageUrl: '/c2.png',
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'Description for card 3',
    imageUrl: '/c3.png',
  },
  {
    id: 4,
    title: 'Card 4',
    description: 'Description for card 3',
    imageUrl: '/c4.png',
  },
  {
    id: 5,
    title: 'Card 5',
    description: 'Description for card 5',
    imageUrl: '/c5.png',
  },
  {
    id: 6,
    title: 'Card 6',
    description: 'Description for card 6',
    imageUrl: '/c6.png',
  },
];
const CardSlider = () => {
  const [count, setcount] = useState(1)
  const [onOff, setonOff] = useState('off')
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrevClick = () => {
    setcount(1)
    if(onOff==="on"){
      setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
    setonOff("off");
    }
    
  };
  const handleNextClick = () => {
    setcount(2)
    if(onOff==="off"){
      setCurrentIndex((prevIndex) =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
    setonOff("on");
    }
    
  };
  return (
    <Box position="relative">
      <Flex
        width="100%"
        transform={`translateX(-${currentIndex * 100}%)`}
        transition="transform 0.5s"
      >
        {cardData.map((card) => (
          <Box
            key={card.id}
            flex="0 0 25%"
            width="35%"
            paddingRight="2rem"
            boxSizing="border-box"
          >
            <Card maxW='sm'>
            <CardBody>
              <Image
                src={card.imageUrl}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque inspired
                  spaces, earthy toned spaces and for people who love a chic design with a
                  sprinkle of vintage design.
                </Text>
               
              </Stack>
            </CardBody>
          
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='outline' colorScheme='blue' borderRadius='20.94'>
                  Read More
                </Button>
                <Button colorScheme='white'>
                  Add tocar
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          
          </Box>
          
        ))}
      </Flex>
      <IconButton
        position="absolute"
        top="100%"
        left="30%"
        transform="translateY(100%)"
        aria-label="Previous"
        icon={<ChevronLeftIcon />}
        onClick={handlePrevClick}
        variant="outline"
        sx={{ border: "1px solid #D9D9D9",
        width: "29px",
        height: "28px", }}
      />
      <Box position="absolute" left="34%" top="105%">
          {count}/2
      </Box>
      <IconButton
        position="absolute"
        top="100%"
        right="60%"
        transform="translateY(100%)"
        aria-label="Next"
        icon={<ChevronRightIcon />}
        onClick={handleNextClick}
        variant="outline"
        sx={{ border: "1px solid #D9D9D9",
        width: "29px",
        height: "28px" }}
      />
    </Box>
  );
};
export default CardSlider;