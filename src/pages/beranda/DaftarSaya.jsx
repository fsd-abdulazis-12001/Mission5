
import DaftarSayaFragments from '../../component/UI/Fragments/DaftarSayaFragments';
import CardThumbnail from '../../component/UI/Elements/Card/CardThumbnail';
import Header from '../../component/header';
import Footer from '../../component/footer';
import  useDaftarSayaStore  from '../../component/stores/daftarsaya/useDaftarSayaStore';

const DaftarSaya = () => {
  const listdaftarsaya = useDaftarSayaStore(state => state.listdaftarsaya);
  const removeDaftarSaya = useDaftarSayaStore(state => state.removeDaftarSaya);

  return (
    <div>
      <Header />
      <DaftarSayaFragments title="Daftar Saya">
        {listdaftarsaya.map((movie, index) => (
          <CardThumbnail key={index} {...movie} removeDaftarSaya={removeDaftarSaya} />
        ))}
      </DaftarSayaFragments>
      <Footer />
    </div>
  );
};

export default DaftarSaya;
