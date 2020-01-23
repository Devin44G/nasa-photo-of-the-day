import React, {useState, useEffect} from 'react';
import Tile from './InfoTile';
import axios from 'axios';


function Background() {
// SETTING STATE
  const [data, setData] = useState([]);

// SETTING UP USEEFFECT & GETTING API DATA THROUGH AXIOS
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

// SETTING UP BACKGROUND STYLE
  const STYLE = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: `url('${data.url}') no-repeat center center fixed`
  };

  return (
    <div style={STYLE}>
      <Tile tile={data} />
    </div>
  );
}

export default Background;
