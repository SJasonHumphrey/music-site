import React, { useState } from "react";

import {
  MDBContainer,
  MDBNavbar,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";

const NavBar = () => {
  const [artist, setArtist] = useState("");
  const [result,  setResult] = useState("")
const coldplay = 'coldplay'
  const fetchData = (value) => {
    fetch(`https://theaudiodb.com/api/v1/json/2/search.php?s=${value}`)
      .then(response => response.json())
      .then(data  =>  setResult(data))
  };
  console.log(result)
  const handleChange = (value) => {
    setArtist(value);
    fetchData(value);
  };
  // useEffect(()=> {
  //   fetch(`theaudiodb.com/api/v1/json/2/search.php?s=${inputText}`)
  //     .then((response) => response.json())
  //     .then((json) => setArtist(json));
  // }, []);

  return (
    <>
      <MDBNavbar dark bgColor="dark">
        <MDBContainer fluid>
          <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
            <input
              className="form-control"
              placeholder="Artist"
              aria-label="Search"
              type="Search"
              onChange={(e) => handleChange(e.target.value)}
            />
            <MDBBtn outline className="text-light">
              Search
            </MDBBtn>
          </MDBInputGroup>
          <h2 className="text-light">
            The <span className="text-primary">Music</span> Source
          </h2>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default NavBar;
