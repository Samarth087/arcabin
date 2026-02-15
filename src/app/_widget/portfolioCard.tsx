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
      } relative flex-shrink-0 w-[80vw] h-[70vh]`}
    >
      <Image
        src={img}
        alt=""
        fill
        sizes="80vw"
        className="object-cover rounded-[32px]"
        priority={false}
      />
    </div>
  )
}

export default PortfolioCard
