/* eslint-disable react/prop-types */
import Input from "./Input"
import Label from "./Label"

 
const Index = (props) => {
    const { htmlFor, placeholder ,label, type } = props
  return (
    <div className="mb-4">
      <Label htmlFor={htmlFor}/>{label}<Label/>
      <Input placeholder={placeholder} type={type} />
      
    </div>
  )
}

export default Index
