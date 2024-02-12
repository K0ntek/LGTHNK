import React from 'react'
import { categoriesBackgrounds } from './Men'
import { categoryImages } from './categoryProducts'

const StartImage = () => {

    for (let i = 0; i < categoryImages.length; i++) {
        const image = categoryImages[i];
          for (let i = 0; i < categoriesBackgrounds.length; i++) {
            const category = categoriesBackgrounds[i];
                if (category.id == image.id) {
                  const imageElement = image.startImage
                  console.log(imageElement)
                }
          }
      }

  return (
    <div>
        {categoriesBackgrounds.forEach(element => {
            
        })};
    </div>
  )
}

export default StartImage