import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CustomRoute from './routes/CustomRoute'


function App() {

  return (
      <BrowserRouter>
        <CustomRoute />
      </BrowserRouter>
  );
}

export default App
