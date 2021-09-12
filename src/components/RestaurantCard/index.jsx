import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import Skeleton from '../Skeleton';

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';
import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return(
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c"/>
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto 
        imagLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
        onLoad={() => setImageLoaded(true)}
        alt="foto do restaurante" 
      />
      {!imageLoaded && <Skeleton width="100px" />}
    </Restaurant>
  );
};

export default RestaurantCard;