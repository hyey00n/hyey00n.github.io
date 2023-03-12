import styled from 'styled-components';

let Footerstyle = styled.div`
padding : 80px 0 ;
background-color:  #ff3636;
width: 100%;

li h2{
    font-weight: bold;
}
li, p{
    color :white;
}
p{
    float: left; 
}
.magin{
    margin-right: 50px;
  }


`;



function Footer() {
    return (



            <Footerstyle>
                <div class="container">
                    <ul >
                        <li>
                            <h2>Cantact</h2>
                            <p className='magin'>E-mail. a20897479@gmail.com</p>
                            <p>Tel. +82 10 2089 7479</p>
                        </li>
                    </ul>
                </div>
            </Footerstyle>

    

    )
}


export default Footer;