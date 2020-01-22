import React, {useState, useEffect} from 'react';
import axios from 'axios';


function Background() {
// SETTING STATE
  const [img, setImg] = useState([]);

// SETTING UP USEEFFECT & GETTING API DATA THROUGH AXIOS
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log(res.data);
        setImg(res.data.url);
      });
  }, []);

// SETTING UP BACKGROUND STYLE
  const STYLE = {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    background: `url('${img}')`
  };

  return (
    <div style={STYLE}></div>
  );
}

export default Background;
