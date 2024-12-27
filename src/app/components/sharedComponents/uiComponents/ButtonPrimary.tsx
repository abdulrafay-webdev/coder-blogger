import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonPrimary: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div
      className="w-fit bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-2 flex justify-center items-center text-center sm:text-base text-sm text-white rounded font-semibold transition-all duration-300 hover:scale-105 hover:text-yellow-400"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ButtonPrimary;

