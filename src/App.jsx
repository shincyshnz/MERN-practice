import { Fragment, useState } from 'react'
import './App.css'
import { Title } from './components/Title'
import FormOne from './components/FormOne';
import FormSecond from './components/FormSecond';

function App() {

  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <div className="header">
        {toggle && <Title userName={'User'} />}
        <button onClick={()=>{setToggle((prev)=>!prev)}}>{!toggle ? "Show Title" : "Hide Title"}</button>
      </div>

      <div className="form-one">
        <h1>Form 1</h1>
        <FormOne />
      </div>

      <div className="form-two">
        <h1>Form 2</h1>
        <FormSecond />
      </div>
    </Fragment>
  );
};

export default App;
