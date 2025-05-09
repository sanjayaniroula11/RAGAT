import React from 'react';

function Button({ children, onClick }) {
  return (
    <button
    onClick={onClick}
      className="bg-white border-2 text-[#D32F2F] py-3 px-12 font-bold rounded hover:bg-[#D32F2F] hover:text-white transition-colors duration-300"
    >
      {children}
    </button>
  );
}

export default Button;