import { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import {BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(messege ,type)=>{
         setAlert({
          msg:messege,
          type:type
         })
         setTimeout(()=>{
          setAlert(null);
         },1500);
  }
  
    const toggleMode=()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#042743';
        showAlert("Dark Mode has been Enabled","success");
      
      }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");

    }
    }
 
  return (
    <>
    <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
       <div className="container my-3">
        <Routes>
          <Route exact  path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils-Word counter,Character counter,Remove extra Spaces" mode={mode}/>}/>
            
           
           </Routes>
  </div>
  </Router>
  </>
  );
}

export default App;
