import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBBtn,
    MDBInputGroup
  } from 'mdb-react-ui-kit';

const NavBar = () => {
  return (
    <>
    <MDBNavbar dark bgColor='dark'>
          <MDBContainer fluid>
              <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
                  <input className='form-control' placeholder="Artist" aria-label="Search" type='Search' />
                  <MDBBtn outline className='text-light'>Search</MDBBtn>
              </MDBInputGroup>
              <h2 className='text-light'>The <span className='text-primary'>Music</span> Source</h2>
          </MDBContainer>
      </MDBNavbar>
      </>
  )
}

export default NavBar