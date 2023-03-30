import logo from '../logo.svg';
import { Navbar, Container, Nav, Button, Main ,Form } from 'react-bootstrap';
import '../App.css';
import { useState } from 'react';
import data from '../data';
import data2 from '../data2';
import data3 from '../data3';
import data4 from '../data4';
// import Header from './routes/Header';
import Footer from './Footer';


import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import axios from 'axios'
import companyLogo from '../logo.png';
import { useMediaQuery } from "react-responsive"


function Mobile(){

    
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
    width: 100%;
    margin: 0 auto;
    font-size: 1.2rem;
    display: block;
    line-height: 50px;
    font-weight: bold;
    text-align: center;
  
  
  
  `;



  return (
    <>

<div className="mainwrap container">
       
       <div id="logo">
         <div className='logoimg'>
           <img src={companyLogo}></img>
         </div>
        
       </div>
       <nav>
         <ul>
           <StyledLink to="/" id='menu_styled'> About</StyledLink>
           <StyledLink to="/portfolio" id='menu_styled'> Portfolio</StyledLink>
           
           <StyledLink to="/cantact" id='menu_styled'> Cantact</StyledLink>
         </ul>
       </nav>
    
   </div>
   <Routes>
     <Route path='/' element={
       <div className="title ">
         <h6 className='noto container'>신규 쇼핑몰 및 플랫폼에 필요한 상품 정보 및 디자인 등 주요 기능 기획 프로젝트 <br></br>
문제를 즐기는 디자이너, 정혜윤입니다. 문제를 마주하고 함께 해결하는 과정을 통해 늘 단기적이고<br></br>작은 목표라도구체적인 계획을 가진 디자이너로 성장하고 있습니다. </h6>
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
           <br></br>
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
           <br></br>
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
     <Route path='/wedportfolio' element={<div>




       
     </div>
      
     }>
     </Route>
     <Route path='/cantact' element={
     
     <div className='c_bg'>
       <Form className=' formwrap container'>
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Email address</Form.Label>
     <Form.Control type="email" placeholder="Enter email" />
     <Form.Text className="text-muted">
       We'll never share your email with anyone else.
     </Form.Text>
   </Form.Group>

   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={6} placeholder="내용을 적어주세요" />
      </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicCheckbox">
   </Form.Group>
   <Button variant="primary" type="submit">
     Submit
   </Button>
 </Form>

     </div>}>




     </Route>
   </Routes>
   <Footer></Footer>
    </>
  )
}

export default Mobile;
