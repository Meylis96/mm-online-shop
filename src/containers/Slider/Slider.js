import React from 'react';
import Carousel from "react-elastic-carousel";
import './Slider.scss';
import SliderContent from '../../components/SliderContent/SliderContent';
import firstSlide from './img/1.jpg';
import secondSlide from './img/2.jpg';
import thirdSlide from './img/3.jpg';
import btnArr from './img/btn_arr.svg';


let sliderArr = [
        <SliderContent key="first" btnArr={btnArr} bgImg={firstSlide} title={'Лучшие цены в Туркменистане'} subtitle={'Вся наша продукция по самым доступным ценам, как оптом, так и в розницу.'}/>,
        <SliderContent key="secon" btnArr={btnArr} bgImg={secondSlide} title={'Толькая самая лучшая продукция в Туркменистане'} subtitle={'Мы предоставляем только самую лучшую, отборную продукцию.'}/>,
        <SliderContent key="third" btnArr={btnArr} bgImg={thirdSlide} title={'Широкий ассортимент товаров'} subtitle={'Мы предлагаем широкий ассортимент качественных продуктов.'}/>
];

const Slider = () => {
    return (
      <div className="slider">
        <Carousel>
        {
                sliderArr.map((item, index)=>{
                    return (
                        <div key={index} className="slider__slide">
                            {item}
                        </div>
                        
                    )
                })
            }
        </Carousel>
      </div>
    );
  }

  export default Slider;



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