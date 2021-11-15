import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function CustomSlider({timeSlider, setTimeSlider, header}) {


    return (
        <div className="row ">

            <div className="col-6 offset-3 mt-3 text-center">
              <h4> {header} </h4>
            </div>

            <div className="col-6 offset-3 timer">
              <Box sx={{ width: 300 }}>
                <Slider
                  color="secondary"
                  defaultValue={30}
                  valueLabelDisplay="auto"
                  value={timeSlider}
                  step={5} min={5} max={60} 
                  onChange={(e) => setTimeSlider(e.target.value)}/>
              </Box>
            </div>
          </div>
    )
}

export default CustomSlider;
