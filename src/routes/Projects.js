import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'



let YellowBtn = styled.div`
display: inline-block;
border: 1px solid lightgray;
border-radius: 100px;
padding: 3px 12px 5px 12px;
margin: 0 5px 0 0  ;
  
`;



let ProjectBtn = styled.button`
line-height: 1.2;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 3em;
  font-weight: 700;
  background-image: linear-gradient(transparent calc(100% - 3px), #000 3px);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  transition: background-size 0.8s;
  color: #000;
  cursor: pointer;
  
`;




function Projects(props) {
  return (
    <div className="col-md-12">
      <div className='container'>
        <div className='row row_m'>
          <div className="col-md-5">

            <h6>{props.shoes.term}</h6>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <YellowBtn>{props.shoes.exper1}</YellowBtn>
            <YellowBtn>{props.shoes.exper2}</YellowBtn>
            <YellowBtn>{props.shoes.exper3}</YellowBtn>
            <YellowBtn>{props.shoes.exper4}</YellowBtn>
           
           <div className='underline_m'>
           <button className='underline yellow' onClick={()=>{
              window.open(props.shoes.url, '_blank');
            }}  >   
              자세히보기
              
             </button>
           </div>
          </div>
          <div className="col-md-2"></div>
          
          <div className="col-md-5 mt-4 mt-md-1 imgwrap">
            <img src={'https://raw.githubusercontent.com/hyey00n/content/main/design' + (props.i + 1) + '.jpg'} width="80%"></img>
          </div>
        </div>


      </div>




    </div>
  )
}

export default Projects;
