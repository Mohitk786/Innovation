import React from 'react'
import { cardData } from './data/data'
import Card from './Card'

const Gallery = () => {
  return (
    <div>
        <div className="m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {cardData.map((card, index) => (
            card.id  && <Card id={card.id} imageUrl={card.imageUrl} key={index} />
          ))}
        </div>
    </div>
  )
}

export default Gallery