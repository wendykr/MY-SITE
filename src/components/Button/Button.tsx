import './Button.scss';

interface ButtonProps {
  link: string;
  text: string;
  style: string;
}

export const Button: React.FC<ButtonProps> = ({ link, text, style }) => {
  return (
    <a className="button__link" href={link}>
      <button className={`button ${style}`}
        >{text}</button>
    </a>
  )
}