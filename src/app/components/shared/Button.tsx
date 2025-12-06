import './Button.css';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  label,
  variant = 'primary',
  disabled = false,
  onClick,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
}

