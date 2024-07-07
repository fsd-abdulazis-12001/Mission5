/* eslint-disable no-unused-vars */
import React from 'react'

import googleIcon from '../../../assets/img/icon/google.png';
import InputForm from '../Elements/InputAuth';
import Button from '../Elements/Button';
const FormLogin = () => {
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
            <div className="flex justify-between items-center mb-4">
            <p className="font-lato text-sm text-gray-500">Belum punya akun? <a href="#" className="text-white">Daftar</a></p>
            <a href="#" className="font-lato text-sm white">Lupa kata sandi?</a>
            </div>
            <Button variant ="bg-btn-gray" opacity="bg-opacity-50" hasLogo={null}>Masuk</Button>
        
            </form>
            <div className="text-center pt-2">

            <p className="font-lato text-gray-500">atau</p>
            </div>
            <Button variant ="bg-black" opacity="bg-opacity-0" hasLogo={[{img:googleIcon,alt:"Google Logo"}]}>Masuk dengan Google</Button>
        
    </div>
  )
}

export default FormLogin
