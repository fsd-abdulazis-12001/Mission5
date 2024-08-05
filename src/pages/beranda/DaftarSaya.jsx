
import DaftarSayaFragments from '../../component/UI/Fragments/DaftarSayaFragments';
import CardThumbnail from '../../component/UI/Elements/Card/CardThumbnail';
import Header from '../../component/header';
import { useEffect } from 'react';
import Footer from '../../component/footer';
import  useDaftarSayaStore  from '../../component/stores/daftarsaya/useDaftarSayaStore';

const DaftarSaya = () => {
  const listdaftarsaya = useDaftarSayaStore(state => state.listdaftarsaya);

  useEffect (() => {
  
    console.log(listdaftarsaya)
  },[listdaftarsaya])
  return (
    <div>
      <Header />
      <DaftarSayaFragments title="Daftar Saya">
      {listdaftarsaya.length > 0 ? (
        listdaftarsaya.map((movie, index) => ( 
          <CardThumbnail key={index} {...movie} id={movie.id}/>
        ))
      ) : (
        <p>Tidak ada film yang ditambahkan</p>
      )}
      </DaftarSayaFragments>
      <Footer />
    </div>
  );
};

export default DaftarSaya;
