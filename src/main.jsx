

import React from 'react'
import ReactDOM from 'react-dom/client'
// import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
{/* <ThemeProvider> */}
<App />
{/* </ThemeProvider> */}


  
    
    </BrowserRouter>
 

)


