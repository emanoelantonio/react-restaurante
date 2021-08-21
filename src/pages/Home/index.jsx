import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import restaurante from '../../assets/restaurante-fake.png';

import Slider from "react-slick";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { Container, Search, Logo, Wrapper, CarouselTitle } from './styles';
import { Card, RestaurantCard } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

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
              onChange={(event) => setInputValue(event.target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Slider {...settings}>
            <Card photo={restaurante} title="Restaurante"/>
            <Card photo={restaurante} title="Restaurante"/>
            <Card photo={restaurante} title="Restaurante"/>
            <Card photo={restaurante} title="Restaurante"/>
            <Card photo={restaurante} title="Restaurante"/>
            <Card photo={restaurante} title="Restaurante"/>
            <Card photo={restaurante} title="Restaurante"/>
            <Card photo={restaurante} title="Restaurante"/>
            
          </Slider>
        </Search>
        <RestaurantCard />
      </Container>
    </Wrapper>
  );
};

export default Home;