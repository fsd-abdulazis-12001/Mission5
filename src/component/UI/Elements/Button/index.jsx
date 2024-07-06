 
const index = (props) => {

   const {children, variant ,opacity ,hasLogo} = props
   console.log(hasLogo)
  return (
   
   <button type="submit" className={`w-full ${variant} hover:bg-gray-600 text-white py-2 rounded-full font-lato border border-gray-700 ${opacity} text-white py-2 px-4 rounded-full flex items-center justify-center w-full`}>
     {hasLogo && hasLogo[0] && <img src={hasLogo[0].img} alt={hasLogo[0].alt} className="w-5 mr-2" />}
     
     {children}</button>
            
    
  )
}

export default index
