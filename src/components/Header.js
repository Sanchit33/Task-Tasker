
import Button  from "./Button"

const Header = ({title}) => {
    const onClick = () =>{
        console.log("Hello")
    }
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button  color='black' text='Click Here' onClick={onClick} />
    </header>
  )
}
Header.defaultProps ={
    title: "Sanchit",
}

// const headerStyle = {
//     color:'black',
//     backgroundColor:'yellow'
// }
export default Header