import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';


let YellowBtn = styled.button`
  background : yellow;
  color : black;
  padding : 10px;
`;


function profile(props) {
  return (
    <div className='white-box' >
                        <div className='row'>
                            <div className='col-md-8'>

                                <h3>ddddd</h3>
                                <p>22222</p>
                            </div>

                            <div className='col-md-4'>

                                <div className="row">
                                    <div className="col-6">
                                        <p>Location</p>
                                    </div>
                                    <div className="col-6">
                                        <p>Location</p>
                                    </div>
                                    <div className="col-6">
                                        <p>Location</p>
                                    </div>
                                    <div className="col-6">
                                        <p>Location</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
  )
}

export default profile;
