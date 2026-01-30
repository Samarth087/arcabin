
import PortfolioCard from './portfolioCard'

const ProtfolioTrack = () => {
  return (
    <div className="portfolio-track flex gap-24 px-[10vw] h-full items-center">
      <PortfolioCard active img="/images/web-ui-2.webp" />
      <PortfolioCard img="/images/web-ui-4.webp" />
      <PortfolioCard img="/images/web-ui-9.webp" />
    </div>
  )
}

export default ProtfolioTrack
