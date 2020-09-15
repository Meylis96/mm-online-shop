import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import './Slider.scss';
import SliderContent from '../../components/SliderContent/SliderContent';
import firstSlide from './img/1.jpg';
import secondSlide from './img/2.jpg';
import thirdSlide from './img/3.jpg';
import btnArr from './img/btn_arr.svg';
import Loader from '../../components/UI/Loader/Loader';


let sliderArr = [
        <SliderContent key="first" btnArr={btnArr} bgImg={firstSlide} title={'Лучшие цены в Туркменистане'} subtitle={'Вся наша продукция по самым доступным ценам, как оптом, так и в розницу.'}/>,
        <SliderContent key="secon" btnArr={btnArr} bgImg={secondSlide} title={'Толькая самая лучшая продукция в Туркменистане'} subtitle={'Мы предоставляем только самую лучшую, отборную продукцию.'}/>,
        <SliderContent key="third" btnArr={btnArr} bgImg={thirdSlide} title={'Широкий ассортимент товаров'} subtitle={'Мы предлагаем широкий ассортимент качественных продуктов.'}/>
];


function loaderSpinner(){
  return new Promise((resolve) => setTimeout(() => resolve(), 1500));
}

class Corousel extends Component{
      state = {
        loader: true
    }
    componentDidMount(){
        loaderSpinner().then(() => this.setState({loader: false}));
    }

    render(){
      const {loader} = this.state;

      if(loader) { 
          return <Loader/>;
      }
  
      const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return (
      
      <div className="slider">
        <Slider {...settings}>
          {sliderArr.map((item, index)=>{
              return (
                  <div key={index} className="slider__slide">
                      {item}
                  </div>
              )
          })}
        </Slider>
      </div>
      )
    }
}

  export default Corousel;



// import React, {useState} from 'react';
// import './Slider.scss';
// import firstSlide from './img/1.jpg';
// import secondSlide from './img/2.jpg';
// import thirdSlide from './img/3.jpg';
// import SliderContent from '../../components/SliderContent/SliderContent';
// import btnArr from './img/btn_arr.svg';
// import Dots from '../../components/UI/Dots/Dots';

// const Slide = () => {

//     let sliderArr = [
//         <SliderContent key="first" btnArr={btnArr} bgImg={firstSlide} title={'Лучшие цены в Туркменистане'} subtitle={'Вся наша продукция по самым доступным ценам, как оптом, так и в розницу.'}/>,
//         <SliderContent key="secon" btnArr={btnArr} bgImg={secondSlide} title={'Толькая самая лучшая продукция в Туркменистане'} subtitle={'Мы предоставляем только самую лучшую, отборную продукцию.'}/>,
//         <SliderContent key="third" btnArr={btnArr} bgImg={thirdSlide} title={'Широкий ассортимент товаров'} subtitle={'Мы предлагаем широкий ассортимент качественных продуктов.'}/>
//     ];

//     const [x, setX] = useState(0);


//     const goLeft = () => {
//         x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
//     };
//     const goRight = () => {
//         x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
//     };

//     return(
//         <div className="slider">
//             {
//                 sliderArr.map((item, index)=>{
//                     return (
//                         <div key={index} className="slider__slide" style={{transform: `translateX(${x}%)`}}>
//                             {item}
//                         </div>
                        
//                     )
//                 })
//             }
//             <button id="prev" onClick={goLeft}></button>
//             <button id="next" onClick={goRight}></button>
//         </div>
//     )
// };

// export default Slide;