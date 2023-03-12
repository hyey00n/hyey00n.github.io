
import data from './data';
import data2 from './data2';
import data3 from './data3';
import data4 from './data4';
import styled from 'styled-components';

let portfoliostyle  =styled.div`


.slider{

  margin:  80px 0;
  /* border: 1px solid red; */
}

.slick-slide >div{
  margin: 0 10px;

}

.slick-list{
  margin: 0 -10px;
}
.card{
  
  border: 1px solid #c2c2c2;
  background: white;
  border-radius: 3px;
  overflow: hidden;
  height: 400px;

}

  .card-top{
    width: 100%;
    /* height: 200px; */
  color: #000;
  }

  .card-top h1{
    font-size: 1rem;
    margin: 10px 20px;
  }

.card-top img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-bottom{
  margin: 10px 20px;
  color: 000;
}
.card-bottom p{
  color: 000;
}
`
function portfolio(){
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
        return (
          <div className="container ">
          <Slider  {...settings} className="slider">
            {data.map(item => (
              <div className='card'>
                <div className='card-top'>
                  <img src={item.url} alt={item.title} />
                  <h1>{item.term}</h1>
                </div>
                <div className='card-bottom'>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </Slider>
          <Slider  {...settings} className="slider">
            {data2.map(item => (
              <div className='card'>
                <div className='card-top'>
                  <img src={item.url} alt={item.title} />
                  <h1>{item.title}</h1>
                </div>
                <div className='card-bottom'>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </Slider>
          <Slider  {...settings} className="slider">
            {data3.map(item => (
              <div className='card'>
                <div className='card-top'>
                  <img src={item.url} alt={item.title} />
                  <h1>{item.title}</h1>
                </div>
                <div className='card-bottom'>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </Slider>
          <Slider  {...settings} className="slider">
            {data4.map(item => (
              <div className='card'>
                <div className='card-top'>
                  <img src={item.url} alt={item.title} />
                  <h1>{item.title}</h1>
                </div>
                <div className='card-bottom'>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        );
      }

export default portfolio();