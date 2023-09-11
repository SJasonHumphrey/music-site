import React, { useEffect, useState } from 'react'

const Api = (props) => {

    const [artist, setArtist]= useState("")


    useEffect(() => {
        fetch(`theaudiodb.com/api/v1/json/2/search.php?s=${props}`)
          .then((response) => response.json())
          .then((json) => setArtist(json));
      }, []);
     console.log(artist)
  return (
    <div>Api</div>
  )
}

export default Api