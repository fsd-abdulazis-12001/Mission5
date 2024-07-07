import Header from '../../component/header'
import Footer from '../../component/footer'
import FormProfile from '../../component/UI/Fragments/FormProfile'
import DaftarSayaFragments from '../../component/UI/Fragments/DaftarSayaFragments'
import daftarSaya from '../../component/constants/daftarSaya';
import CardThumbnail from '../../component/UI/Elements/card/CardThumbnail'
const Profile = () => {
  return (
    <>
       <Header />

       <FormProfile height = "h-[850px]" title = "Profile Saya" />
       <DaftarSayaFragments>
            {daftarSaya.slice(0, 6).map((movie, index) => (
                 <CardThumbnail key={index} {...movie}/>
            ))}
       </DaftarSayaFragments>
        
       <Footer />
    </>
  )
}

export default Profile
