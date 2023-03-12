import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import styled from 'styled-components';


let YellowBtn = styled.button`
  background : yellow;
  color : black;
  padding : 10px;
`;


function Detail(props) {

  useEffect(()=>{
    for( var i=0; i<1000; i++ ){
      console.log(1);
    }



    setTimeout(()=> {alertCount(1)

    }, 1000)
  });

  let [count, setCount] = useState(0);
  let [alert, alertCount] = useState(0)
  let {id} = useParams();


    return (
        <div className="container">
         {
          alert ==0 ?
          <div className='alert alert-warning'>
          2초이내 구매시 할인
         </div>
         :null
         }
          {count}
          <button onClick={()=>{ setCount(count+1) }}>버튼 </button>
  <div className="row">
  

    <div className="col-md-6">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{props.shoes[id].title}</h4>
      <p>{props.shoes[id].content}</p>
      <p>{props.shoes[id].price}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
    )
}

export default Detail;
