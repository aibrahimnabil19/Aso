import OutfitCard from '@/components/OutfitCard'
import React from 'react'
import outfits from '../../../data'



const CataloguePage = () => {
  return (
    <main className="max-w-6xl mx-auto p-4">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {outfits.map((o) => (
          <OutfitCard
            key={o.id}
            title={o.title}
            description={o.description}
            image={o.image}
            category={o.category}
            price={o.price}
          />
        ))}
      </div>
    </main>
  )
}

export default CataloguePage