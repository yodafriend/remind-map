import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../../../util/cn';
import { cva } from 'class-variance-authority';
export const ButtonVariants = cva(
  `flex items-center justiy-center min-w-fit max-w-fit md:max-w-none rounded-md bg-main-color text-white w-full shadow-md transition-all p-2 text-center hover:bg-main-hover cursor-pointer`,
  {
    variants: {
      bg: {
        default: `bg-main-color`,
        hover: `bg-main-hover`,
      },
      text: {
        white: `text-white`,
        black: 'text-black',
      },
      size: {
        wfull: `w-full`,
        sm: `w-10 h-6 text-sm`,
        md: ``,
        lg: ``,
      },
      position: {
        default: ``,
        inInput: `absolute right-1 bottom-1.5`,
      },
    },
    defaultVariants: {
      variants: 'default',
      size: 'default',
    },
  },
);
export default function GroupButton({ text, type, url, onClick, bg, size, position }) {
  return (
    <div className={cn(ButtonVariants({ bg, size, position }))}>
      {type === 'Link' && (
        <Link className="w-full" to={url}>
          {text}
        </Link>
      )}
      {type === 'Button' && (
        <button className="w-full" type="button" onClick={onClick}>
          {text}
        </button>
      )}
    </div>
  );
}
