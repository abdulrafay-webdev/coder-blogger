import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonOutline: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div
      className="w-fit border-2 border-indigo-500 text-indigo-500 px-6 py-2 flex justify-center items-center text-center sm:text-base text-sm rounded font-semibold transition-all duration-300 hover:bg-indigo-500 hover:text-white hover:scale-105"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ButtonOutline;