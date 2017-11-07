function Button(props) {
  return <button id={'btn'+props.value} onClick={props.onClick} value={props.value}><i className={`fa fa-${props.fa}`} aria-hidden="true"></i>|{props.text}</button>;
}

export default Button;