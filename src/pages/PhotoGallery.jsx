import React from 'react'
import photo from '../asset/Houses.svg'
const PhotoGallery = () => {
  const photoArr = [photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,]
  return (
    <div>
      <h1>Photo Gallery</h1>
      <div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 m-4'>
        {
          photoArr.map((p)=>{
            return <img src={p} alt='target' className='border-2 border-primary rounded-lg' />
          })
        }
      </div>
    </div>
  )
}

export default PhotoGallery