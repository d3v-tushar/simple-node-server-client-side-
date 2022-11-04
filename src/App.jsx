import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/Routes/Routes';

function App() {


  return (
    <div className="App">
     <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}

export default App
