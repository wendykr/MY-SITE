import './Button.scss';

export const Button = ({ link, text, style }) => {
  return (
    <a className="button__link" href={link}>
      <button className={`button ${style}`}
        >{text}</button>
    </a>
  )
}