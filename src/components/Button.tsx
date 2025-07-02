import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
}) => {
  const baseClasses = 'button';
  const variantClasses = {
    primary: 'button--primary',
    secondary: 'button--secondary',
    outline: 'button--outline',
  };
  const sizeClasses = {
    small: 'button--small',
    medium: 'button--medium',
    large: 'button--large',
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled ? 'button--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; 