
const Button = ({color, text, onClick}) => {
  return (
    <button onClick={onClick} style={{backgroudColor:{color}}} className='btn'>{text}</button>
  )
}
export default Button
