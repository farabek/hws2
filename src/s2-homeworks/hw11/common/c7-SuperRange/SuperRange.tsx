import React from 'react';
import { Slider, SliderProps } from '@mui/material';

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        width: '200px',
        margin: '0 10px',
        color: '#4caf50',
        '& .MuiSlider-thumb': {
          backgroundColor: '#ffffff',
          border: '2px solid #4caf50',
        },
        '& .MuiSlider-rail': {
          backgroundColor: '#000',
        },
        '& .MuiSlider-track': {
          backgroundColor: '#4caf50',
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;

//
