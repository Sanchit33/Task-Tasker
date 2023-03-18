
import Button  from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
  
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button  color='black' text='Show' onClick={onAdd} />
    </header>
  )
}
Header.defaultProps ={
    title: "Task Tracker",
}

// const headerStyle = {
//     color:'black',
//     backgroundColor:'yellow'
// }
export default Header