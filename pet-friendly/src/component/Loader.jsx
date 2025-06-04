import React from 'react'
import bg from '../assets/images/bg.png'
import pawIcon from '../assets/pawIcon.svg'

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 z-9 w-full h-screen overflow-hidden bg-black flex items-center justify-center space-x-8">
      <svg
        viewBox="0 0 400 600"
        preserveAspectRatio="xMidYMid meet"
        className="w-1/2 h-full"
      >
        <defs>
          <mask id="text-mask">
            <rect width="100%" height="100%" fill="black" />
            <text
              x="50%"
              y="45%"
              fontFamily="Helvetica"
              fontWeight="bold"
              fontSize="7rem"
              fill="white"
              textAnchor="middle"
            >
              PAWS
            </text>
          </mask>
        </defs>

        <image
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          xlinkHref={bg}
          mask="url(#text-mask)"
        />
      </svg>
      <div className="w-1/2 flex items-center justify-center">
        <img src={pawIcon} alt="Paw Icon" className="w-48 h-48" />
      </div>
    </div>
  )
}

export default Loader
