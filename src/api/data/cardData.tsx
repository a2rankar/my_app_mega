import React, { useEffect, useState } from 'react';
import axios from 'axios';
import image from '../../assets/Image2.svg';
import image2 from '../../assets/image4.svg';
import tour_img from '../../assets/tours_image.svg';

// export interface TourApiInterface {
//   id: number;
//   image: string;
//   title: string;
//   rating: number;
//   description: string;
//   duration: number;
//   price: number;
//   collection_point: string;
//   start_date: string;
//   level: string;
//   avarage_rating: number;
//   departures: any[];
//   author: string;
//   place: number | string;
// }

export interface CardItem {
  id: number;
  image: string;
  title: string;
  rating: number | null;
  price: number;
  duration: number;
  date: string;
  place: number;
  level: string;
  gid: boolean;
  camp: boolean;
  group: number;
  tours_img: string;
  collection_point: string;
  allowed_age: number;
}
export const mockData: CardItem[] = [
  {
    id: 1,
    group: 14,
    image: image,
    title: 'ArslanBob',
    rating: 4.5,
    collection_point: 'Manas str. 42',
    price: 12000,
    duration: 3,
    date: '01.07.2025',
    place: 5,
    level : 'easy tour',
    camp: true,
    gid : false,
    tours_img: tour_img,
    allowed_age: 16
  },
  {
    id: 2,
    image: image2,
     group: 14,
    title: 'Иссык-Куль',
    collection_point: 'Manas str. 42',
    rating: 4.8,
    price: 15000,
       allowed_age: 16,
    duration: 2,
    date: '10.07.2025',
    place: 3,
      level : 'easy tour',
      camp: true,
      gid : false,
      tours_img: tour_img
  },
  {
    id: 3,
     group: 14,
    image: image2,
       allowed_age: 10,
    collection_point: 'Manas str. 42',
    title: 'Арсланбоб',
    rating: 4.2,
    price: 18000,
    duration: 5,
    date: '20.07.2025',
    place: 1,  
      level : 'easy tour',
      camp: true,
      gid : false,
      tours_img: tour_img
  },
  {
    id: 4,
    image: image2,
           allowed_age: 16,
    title: 'Арсланбоб',
    rating: 4.2,
    price: 18000,
    camp: true,
     group: 14,
    gid : false,
    duration: 5,
    collection_point: 'Manas str. 42',
    date: '20.07.2025',
    place: 4,  
      level : 'easy tour',
      tours_img: tour_img
  },
  {
    id: 5,
    image: image2,
     group: 14,
    title: ' Арсланбоб',
    rating: 4.2,
    price: 18000,
           allowed_age: 11,
    collection_point: 'Manas str. 42',
    duration: 5,
    date: '20.07.2025',
    place: 12,  
      level : 'easy tour',
      camp: true,
      gid : false,
      tours_img: tour_img
  },
  {
    id: 6,
    image: image2,
    title: ' Арсланбоб',
    rating: 4.2,
    price: 18000,
     group: 14,
           allowed_age: 24,
    duration: 5,
    collection_point: 'Manas str. 42',
    date: '20.07.2025',
    place: 2,  
      level : 'easy tour',
      camp: true,
      gid : false,
      tours_img: tour_img
  },
  {
    id: 7,
    image: image2,
    title: ' Арсланбоб',
     group: 14,
    collection_point: 'Manas str. 42',
    rating: 4.2,
           allowed_age: 20,
    price: 18000,
    duration: 9,
        level : 'medium',
    date: '20.07.2025',
    place: 9,  
      camp: true,
    gid : false,
    tours_img: tour_img

  },
  {
    id: 8,
    image: image2,
    title: 'new',
    rating: 4.2,
    collection_point: 'Manas str. 42',
    price: 18000,
           allowed_age: 16,
    duration: 1 ,
     group: 14,
    date: '20.07.2025',
    place: 8,  
      level : 'medium',
      camp: true,
      gid : false,
      tours_img: tour_img
  },
  {
    id: 9,
    image: image2,
    title: 'test2',
     group: 14,
    rating: 4.2,
           allowed_age: 18,
    price: 18000,
    duration: 1 ,
    date: '20.07.2025',
    place: 8,  
    collection_point: 'Manas str. 42',
      level : 'difficult',
      camp: true,
      gid : false,
      tours_img: tour_img
  }

];

export const useCardData = (): CardItem[] => {
  const [tours, setTours] = useState<CardItem[]>([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        // const response = await axios.get('http://807f-46-251-213-130.ngrok-free.app/tour/');
        // const data = response.data;

        // console.log("typeof data:", typeof data);
        // console.log("actual data:", data);


        // const toursArray = Array.isArray(data) ? data : data.results || [];

        // const formatted: CardItem[] = toursArray.map((tour: any, index: number) => ({
        //   id: index + 1,
        //   image: tour.image,
        //   title: tour.title,
        //   rating: tour.rating ?? null,
        //   duration: `${tour.duration_days}`,
        //   price: tour.price,
        //   date: new Date(tour.start_date).toLocaleDateString(),
        //   place: tour.collection_point,
        // }));

        //setTours(formatted);
        setTours(mockData);
      } catch (error) {
        console.error("Error fetching tour data:", error);
      }
    };

    fetchTours();
  }, []);

  return tours;
};


 
