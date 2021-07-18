import "./SelectButton.css"

const Button = (props) => {
  return (
    <button onClick={props.handleClick}
            className={`header__button` + (props.big ? " header__button--big" : '')}>{props.title}</button>
  )
}

export default Button;
