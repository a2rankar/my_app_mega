import React from 'react';
import image2 from '../../assets/image2.svg';
import image4 from '../../assets/image4.svg';



export interface CardItem {
    id: number;
    image: string;
    title: string;
    rating: number;
    duration: string;
    price: string;
    date: string;
    placesLeft: number;
  }

export const CardData: CardItem[] = [
    {
      id: 1,
      image: image2,
      title: "Jety-Ogyz",
      rating: 4.9,
      duration: "3 days",
      price: "5000 som",
      date: "date of out",
      placesLeft: 63,
    },
    {
      id: 2,
      image: image4,
      title: "Jety-Ogyz",
      rating: 4.7,
      duration: "31 days",
      price: "5000 som",
      date: "date of out",
      placesLeft: 634,
    },
    {
    id: 3,
    image: image2,
    title: "Jety-Ogyz",
    rating: 4.7,
    duration: "30 days",
    price: "5000 som",
    date: "date of out",
    placesLeft: 65,
  },
  {
    id: 4,
    image: image4,
    title: "Jety-Ogyz",
    rating: 4.7,
    duration: "39 days",
    price: "5000 som",
    date: "date of out",
    placesLeft: 66,
  },
  {
    id: 5,
    image: image4,
    title: "Skazka",
    rating: 4.7,
    duration: "39 days",
    price: "5000 som",
    date: "date of out",
    placesLeft: 67,
  },
  {
    id: 6,
    image: image4,
    title: "Jety-Ogyz",
    rating: 4.7,
    duration: "39 days",
    price: "5000 som",
    date: "date of out",
    placesLeft: 68,
  },{
    id: 7,
    image: image4,
    title: "Jety-Ogyz",
    rating: 4.7,
    duration: "39 days",
    price: "5000 som",
    date: "date of out",
    placesLeft: 69,
  },
  {
    id: 8,
    image: image4,
    title: "Jety-Ogyz",
    rating: 4.7,
    duration: "39 days",
    price: "5000 som",
    date: "date of out",
    placesLeft: 69,
  },
  ];