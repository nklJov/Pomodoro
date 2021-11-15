import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function BreakSlider({breakSlider, setBreakSlider}) {


    return (
        <div className="row ">

            <div className="col-6 offset-3 mt-3 text-center timer">
              <h2> Break time </h2>
            </div>

            <div className="col-6 offset-3 timer">
              <Box sx={{ width: 300 }}>
                <Slider
                  defaultValue={30}
                  valueLabelDisplay="auto"
                  value={breakSlider}
                  step={1} marks min={5} max={60} 
                  onChange={(n) => setBreakSlider(n.target.value)}/>
              </Box>
            </div>
          </div>
    )
}

export default BreakSlider;