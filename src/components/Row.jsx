import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies, popularMoviesSelector } from '../features/movie/movieSlice';
import Card from './Card';


function Row(props) {
  const dispatch = useDispatch();
  const popular = useSelector(popularMoviesSelector);
  useEffect(() => {
    dispatch(fetchPopularMovies());

  },[]);


  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={7}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          popular.status === "success" ?
            popular.data.results.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Card video={item.id} />
                </SwiperSlide>
              )
            }) : ""
        }

        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide> */}


      </Swiper>
    </div>
  );
}

export default Row;