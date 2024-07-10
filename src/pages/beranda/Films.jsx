

import Header from '../../component/header';
import Footer from '../../component/footer';
import CardsLayouts from '../../component/UI/Layouts/CardsLayouts';
import MovieCard from '../../component/UI/Elements/Card/MovieCard';

import { SwiperSlide } from 'swiper/react';
import HeroLayouts from '../../component/UI/Layouts/HeroLayouts';

import resumeMovies from '../../component/constants/resumeMovies';
import seriesPersembahanChill from '../../component/constants/seriesPersembahanChill';
import topRatingFilmSeriesHariIni from '../../component/constants/topRatingFilmSeriesHariIni';
import seriesTrending from '../../component/constants/seriesTrending';
import rilisBaruMovies from '../../component/constants/rilisBaruMovies';
import genres from '../../component/constants/genres';

const Films = () => {
 

  return (
    <>
      <Header />
      <HeroLayouts bgimage = {{imgsrc : "/img/bg/avatar.png", alt : "Avatar" }} genres = {genres} title = "Avatar" description = 'Avatar 3 melanjutkan cerita konflik antara manusia dan Navi di planet Pandora. Dalam pertempuran untuk sumber daya dan kekuasaan, manusia dan sekutu Navi bersatu untuk melindungi tanah mereka. Film ini mengangkat tema persatuan dan perlawanan terhadap eksploitasi.'/>
      <CardsLayouts title="Melanjutkan Tonton Series" height="h-[309px]" amount = {4}>
          {resumeMovies.map((movie, index) => (
              <SwiperSlide key={index} className='hover:z-50'>
                  <MovieCard key={index} index={index} {...movie} />
              </SwiperSlide>
          ))}
      </CardsLayouts>  
     <CardsLayouts title="Series Persembahan Chill" height="h-[512px]" amount = {5}>
        {seriesPersembahanChill.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} />
            </SwiperSlide>
        ))}
      </CardsLayouts>  
      <CardsLayouts title="Top Rating Series Hari Ini" height="h-[512px]" amount = {5}>
        {topRatingFilmSeriesHariIni.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} />
            </SwiperSlide>
        ))}
      </CardsLayouts>  
      <CardsLayouts title="Series Trending" height="h-[512px]" amount = {5}>
        {seriesTrending.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} />
            </SwiperSlide>
        ))}
      </CardsLayouts>  
      <CardsLayouts title="Rilis Baru" height="h-[512px]" amount = {5}>
        {rilisBaruMovies.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} />
            </SwiperSlide>
        ))}
      </CardsLayouts>  

      <Footer />

    </>
  );
};

export default Films;
