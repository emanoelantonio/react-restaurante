import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import logo from '../../assets/logo.png';
import restaurante from '../../assets/restaurante-fake.png';

import Slider from "react-slick";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { Container, Search, Logo, Wrapper, CarouselTitle } from './styles';
import { Card, RestaurantCard, Modal, Map } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(true);
  const{ restaurants } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(event) {
    if(event.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  return(

    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do buscador" />
          <TextField
            label="Pesquisar Restaurante"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search"/>}
          >
            <Input 
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(event) => setInputValue(event.target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Slider {...settings}>
            {restaurants.map((restaurant) => 
            <Card 
              key={restaurant.place_id} 
              photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
              title={restaurant.name}
            />
            )}  
          </Slider> 
        </Search>
        {restaurants.map((restaurant) => <RestaurantCard restaurant={restaurant}/>)}
      </Container>
      <Map query={query} />
      {/* <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/> */}
    </Wrapper>
  );
};

export default Home;