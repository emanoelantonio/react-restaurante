import React from 'react';
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';
import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = () => 
    <Restaurant>
        <RestaurantInfo>
            <Title>
                Nome do Restaurante
            </Title>
            
            <ReactStars 
              count={5}
              isHalf
              value={4}
              edit={false}
              activeColor="#e7711c"
            />
            <Address>Rua do Porto, 74 A</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurante} alt="foto do restaurante" />
    </Restaurant>;

export default RestaurantCard;