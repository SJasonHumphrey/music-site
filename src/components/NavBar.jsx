import React, {useState} from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBBtn,
    MDBInputGroup
  } from 'mdb-react-ui-kit';

const NavBar = () => {
  const [inputText, setInputText] = useState("")

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  console.log(inputText)

  return (
    <>
    <MDBNavbar dark bgColor='dark'>
          <MDBContainer fluid>
              <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
                  <input className='form-control' placeholder="Artist" aria-label="Search" type='Search' onChange={inputHandler} />
                  <MDBBtn outline className='text-light'>Search</MDBBtn>
              </MDBInputGroup>
              <h2 className='text-light'>The <span className='text-primary'>Music</span> Source</h2>
          </MDBContainer>
      </MDBNavbar>
      </>
  )
}

export default NavBar