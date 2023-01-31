import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const showOne = true;
const styleArgument = { fontSize: '100px', color: 'red' };

//模組化
function Atemplate()
{
  return(
    <div>
      component
    </div>
  )
}


const getValue=(value)=>{
  console.log(value)
}

//建立元件
const multiButton=()=>{
  var output=[];
  for(let i=0;i<4;++i)
      output.push(<button>我是第{i}個按鍵</button>)
  return output;
}

const testSd  =()=> {
  return(
    <div>
       <button className = "title"> 大家好 </button>
       <button value={true} onClick={(event)=>{getValue(event.target.value)}}>
            按下以取得數值
        </button>
    </div>
  );
}
const testFunction =()=> {
  return(
    <div>
        <Atemplate/>
       { testSd() }
        <h1 style = {{ fontSize: '20px', color: 'red' }}> 我好 </h1>
        <h1 style = { styleArgument }> Hello world!</h1>
        <h1> { (showOne === true) ? 1 : 0 } </h1>
        { multiButton() }
    </div>
  );
}

root.render(
  testFunction(),
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
