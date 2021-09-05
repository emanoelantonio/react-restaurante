import React from 'react';
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';
import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = ({ restaurant }) => (
  <Restaurant>
    <RestaurantInfo>
      <Title>{restaurant.name}</Title>
      <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c"/>
      <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
    </RestaurantInfo>
    <RestaurantPhoto 
      src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
      alt="foto do restaurante" />
  </Restaurant>
);
export default RestaurantCard;