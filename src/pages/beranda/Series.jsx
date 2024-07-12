import Header from '../../component/header';
import Footer from '../../component/footer';
import CardsLayouts from '../../component/UI/Layouts/CardsLayouts';
import MovieCard from '../../component/UI/Elements/Card/MovieCard';

import { SwiperSlide } from 'swiper/react';
import HeroLayouts from '../../component/UI/Layouts/HeroLayouts';

import resumeSeries from '../../component/constants/resumeSeries';
import seriesPersembahanChill from '../../component/constants/seriesPersembahanChill';
import topRatingFilmSeriesHariIni from '../../component/constants/topRatingFilmSeriesHariIni';
import seriesTrending from '../../component/constants/seriesTrending';
import rilisBaruMovies from '../../component/constants/rilisBaruMovies';
import genres from '../../component/constants/genres';

const Series = () => {
 

  return (
    <>
      <Header />
      <HeroLayouts bgimage = {{imgsrc : "/img/bg/happiness.png", alt : "Happiness" }} genres = {genres} title = "Happiness" description = 'Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen.'/>
      <CardsLayouts title="Melanjutkan Tonton Series" height="h-[309px]" amount = {4}>
          {resumeSeries.map((movie, index) => (
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

export default Series;
