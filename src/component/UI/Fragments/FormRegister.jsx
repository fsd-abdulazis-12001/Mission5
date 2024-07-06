/* eslint-disable no-unused-vars */
import React from 'react'

import googleIcon from '../../../assets/img/icon/google.png';
import InputForm from '../Elements/Input';
import Button from '../Elements/Button';
const FormRegister = () => {
  return (
    <div>
        <form action=''>
            <InputForm
            htmlFor ="username"
            placeholder ="Masukkan username" 
            label = "Username"
            type = "text"
            />
            <InputForm
            htmlFor ="pasword"
            placeholder ="Masukkan kata sandi" 
            label = "Kata Sandi"
            type = "password"
            />
               <InputForm
            htmlFor ="pasword"
            placeholder ="Konfirmasi kata sandi" 
            label = "Kata Sandi"
            type = "password"
            />
            <div className="flex justify-between items-center mb-4">
            <p className="font-lato text-sm text-gray-500">Sudah punya akun? <a href="#" className="text-white">Masuk</a></p>
          
            </div>
            <Button variant ="bg-btn-gray" opacity="bg-opacity-50" hasLogo={null}>Daftar</Button>
        
            </form>
            <div className="text-center pt-2">

            <p className="font-lato text-gray-500">atau</p>
            </div>
            <Button variant ="bg-black" opacity="bg-opacity-0" hasLogo={[{img:googleIcon,alt:"Google Logo"}]}>Daftar dengan Google</Button>
        
    </div>
  )
}

export default FormRegister
