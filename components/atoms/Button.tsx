
import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface BaseButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

interface ButtonAsButton extends BaseButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface ButtonAsLink extends BaseButtonProps {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-bold rounded-lg transition-all inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-blue-900 text-white hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-yellow-500 text-blue-900 hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // Si tiene href, renderizar como Link
  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  // Si no tiene href, renderizar como button
  const { disabled = false, ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  
  return (
    <button
      className={classes}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
