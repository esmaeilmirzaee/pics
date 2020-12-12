import React from 'react';
import ImageCard from './ImageCard';
import './imagelist.css';

const ImageList = (props) => {
  console.log(props.images);
  const imageList = props.images.map((image) => {
    return <ImageCard image={image} key={image.id} />;
  });

  return <div className='image-list'>{imageList}</div>;
};

export default ImageList;
{
  /* <Image url={image.urls.regular} key={idx} alt={image.alt_description} /> */
}
