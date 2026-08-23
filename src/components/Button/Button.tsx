import "./Button.scss";

interface ButtonProps {
  link: string;
  text: string;
  style: "primary" | "secondary";
}

export const Button = ({ link, text, style }: ButtonProps) => {
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
