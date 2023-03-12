import logo from './logo.svg';
import { Navbar, Container, Nav, Button, Main } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data';
import data2 from './data2';
import data3 from './data3';
import data4 from './data4';
// import Header from './routes/Header';
import Footer from './routes/Footer';

import portfolio from './routes/portfolio.js';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import axios from 'axios'
import companyLogo from './logo.png';


function App() {


  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [count, setCount] = useState(1);

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
  const StyledLink = styled(Link)`
	float: left;
  margin-left: 4rem;
  font-size: 1.2rem;
  display: inline-block;
  line-height: 120px;
  font-weight: bold;
`;

  return (
    <div>
      <div className="mainwrap container">
       
          <div id="logo">
            <div className='logoimg'>
              <img src={companyLogo}></img>
            </div>
           
          </div>
          <nav>
            <ul>
              <StyledLink to="/"> About</StyledLink>
              <StyledLink to="/portfolio"> portfolio</StyledLink>
              <StyledLink to="/cantact"> Cantact</StyledLink>
            </ul>
          </nav>
       
      </div>
      <Routes>
        <Route path='/' element={
          <div className="title ">
            <h6 className='noto container'>새 인간에 크고 끓는 우리의 않는 사막이다. 만물은 간에 그들의 보이는 모래뿐일 품었기 고동을 부패뿐이다.
              새 동력은 뜨거운지라, 길지 속에 약동하다. 싹이 인생을 공자는 피는 미묘한 투명하되 천지는 것이다.
              꾸며 우리의 전인 청춘은 보라. </h6>
            <div className='subtitle'>
              <form action={"https://raw.githubusercontent.com/hyey00n/content/main/cv.jpg"} method="get">
                <button className="yellow underline noto " type="submit" >다운로드</button>
              </form>
            </div>
            <div className="mainimg ">
              <img src='https://github.com/hyey00n/content/blob/main/oda.jpg?raw=true' ></img>
            </div>
          </div>}>
        </Route>
        <Route path='/portfolio' element={

          <div className="container">
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
          </div>}>
        </Route>
        <Route path='/cantact' element={<div>
          <div className='c_bg'>
            <h1 className='noto'>서비스 준비중입니다. </h1>
          </div>
        </div>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}





export default App;
