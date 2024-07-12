import DaftarSayaFragments from '../../component/UI/Fragments/DaftarSayaFragments';
import CardThumbnail from '../../component/UI/Elements/Card/CardThumbnail';
import daftarSaya from '../../component/constants/daftarSaya';
import Header from '../../component/header';
import Footer from '../../component/footer';
const DaftarSaya = () => {
  return (
    <div>
        <Header/>
     
        <DaftarSayaFragments title="Daftar Saya">
            { daftarSaya.map((movie, index)=>(
                <CardThumbnail key={index} {...movie}/>
            ))}
           
        </DaftarSayaFragments>
      <Footer/>
    </div>
  )
}

export default DaftarSaya
