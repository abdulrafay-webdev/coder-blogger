import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonSecondary: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div
      className="w-fit bg-gray-700 px-6 py-2 flex justify-center items-center text-center sm:text-base text-sm text-white rounded font-semibold transition-all duration-300 hover:bg-gray-600 hover:scale-105"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ButtonSecondary;
