import './slider.scss';
function Slider({images}) {
  return <div className='slider'>
    <div className="fullSlider">
      <div className="arrow">
        <img src='/arrow.png'/>
      </div>
      <div className="imageContainer">
        <img src={images[0]} alt=''/>
      </div>
      <div className="arrow">
      <img src='/arrow.png' className='right'/>
      </div>
      
    </div>
<div className="close">x</div>
    <div className="bigImage">
      <img src={images[0]} alt=''/>
    </div>
    <div className="smallImages">
      {images.slice(1).map((image,index)=>(
<img src={image} key={index}/>
      ))}
    </div>
  </div>;
}

export default Slider;
