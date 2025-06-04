import React from 'react'

const Button = ({child}) => {
  return (
    <div className="flex bg-amber-500 rounded-full py-2 px-4 cursor-pointer hover:bg-amber-600 text-white text-lg transition">
      {child}
    </div>
  );
}

export default Button