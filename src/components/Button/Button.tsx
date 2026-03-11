import "./Button.scss";

interface ButtonProps {
  link: string;
  text: string;
  style: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ link, text, style }) => {
  return (
    <a
      className={`button ${style}`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};
