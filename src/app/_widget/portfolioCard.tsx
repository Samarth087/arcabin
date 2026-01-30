import Image from 'next/image'
import React from 'react'

type Props = {
  img: string;
  active?: boolean;
};

const PortfolioCard = ({ img, active }: Props) => {
  return (
    <div
      className={`portfolio-card ${
        active ? "active" : ""
      } flex-shrink-0 w-[80vw] h-[70vh]`}
    >
      <img
        src={img}
        className="w-full h-full object-cover rounded-[32px]"
        alt=""
      />
    </div>
  )
}

export default PortfolioCard
