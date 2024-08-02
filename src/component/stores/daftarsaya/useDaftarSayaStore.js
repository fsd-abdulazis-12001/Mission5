import { create } from "zustand";
import { Notification } from "../../UI/Elements/Notification";
 
const useDaftarSayaStore = create((set) => {

  const storedList = JSON.parse(localStorage.getItem('daftarSayaList')) || [];

  return {
    listdaftarsaya: storedList,
    addDaftarSaya: (title, image, neweps, top10) => {
      set((state) => {
        const exists = state.listdaftarsaya.some(item => item.id === image);
        if (exists) {
        
         Notification('Sudah Ada di list daftar kamu','error' );
          return state;
        } else {
          const updatedList = [...state.listdaftarsaya, { id: image, title, image, neweps, top10 }];
          localStorage.setItem('daftarSayaList', JSON.stringify(updatedList));
          Notification(`Berhasil Menambahkan ${title} ke Daftar Kamu`, 'success')
          return { listdaftarsaya: updatedList };
        }
      });
    },
    removeDaftarSaya: (id) => {
      set((state) => {
        const updatedList = state.listdaftarsaya.filter(daftarsaya => daftarsaya.id !== id);
        localStorage.setItem('daftarSayaList', JSON.stringify(updatedList));
        Notification(`Berhasil Menghapus ${updatedList.title} dari Daftar Kamu`,'success')
        return { listdaftarsaya: updatedList };
      });
    }
  };
});

export default useDaftarSayaStore;
