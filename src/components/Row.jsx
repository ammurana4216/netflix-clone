import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';


function Row(props) {
  const { title, selector , action} = props;
  const dispatch = useDispatch();
  const popular = useSelector(selector);
  useEffect(() => {
    dispatch(action());
  }, []);


  return (
    <div className="py-3 video-row text-white">
      <h3 className='mb-2' >{title}</h3>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={5}

      >

        {

          popular?.status === "success" ?
            popular.data.results.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Card video={item} />
                </SwiperSlide>
              )
            }) : ""
        }




      </Swiper>
    </div>
  );
}

export default Row;