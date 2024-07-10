

import Header from '../../component/header';
import Footer from '../../component/footer';
import CardsLayouts from '../../component/UI/Layouts/CardsLayouts';
import MovieCard from '../../component/UI/Elements/Card/MovieCard';

import { SwiperSlide } from 'swiper/react';
import HeroLayouts from '../../component/UI/Layouts/HeroLayouts';

import resumeMovies from '../../component/constants/resumeMovies';
import topRatingFilmAndMovies from '../../component/constants/topRatingFilmAndMovies';
import filmTrandingMovies from '../../component/constants/filmTrandingMovies';
import rilisBaruMovies from '../../component/constants/rilisBaruMovies';


const Index = () => {


  return (
    <>
      <Header />
      <HeroLayouts bgimage = {{imgsrc : "/img/bg/duty-afterschool.png", alt : "Duty After School" }} title = "Duty After School" description = 'Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.'/>
      <CardsLayouts title="Melanjutkan Tonton Film" height="h-[309px]" amount = {4}>
          {resumeMovies.map((movie, index) => (
              <SwiperSlide key={index} className='hover:z-50'>
                  <MovieCard key={index} index={index} {...movie} />
              </SwiperSlide>
          ))}
      </CardsLayouts>  
     <CardsLayouts title="Top Rating Film dan Series Hari ini" height="h-[512px]" amount = {5}>
        {topRatingFilmAndMovies.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} />
            </SwiperSlide>
        ))}
      </CardsLayouts>  
      <CardsLayouts title="Film Trending" height="h-[512px]" amount = {5}>
        {filmTrandingMovies.map((movie, index) => (
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

export default Index;
