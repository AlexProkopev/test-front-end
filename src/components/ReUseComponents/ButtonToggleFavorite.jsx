
const ButtonToggleFavorite = ({children, handleClick ,id}) => {
  return (
    <button type='button' className="absolute top-[16px] right-[16px]"onClick={()=> handleClick(id)}>{children}</button>
  )
}

export default ButtonToggleFavorite