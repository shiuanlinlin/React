import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HeadComponent from "./component/HeadComponent";
import NavComponent from "./component/NavComponent";
// import {HashRouter,Route,Switch,Link} from "react-router-dom";
//頁面
//import FormPage from "./screen/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
const showOne = true;
const styleArgument = { fontSize: '100px', color: 'red' };

//路由
// const reactApp = () =>{
//   return(
//       <HashRouter>
//         <Switch><Route exact={true} path="/" component={FormPage}/></Switch>
//       </HashRouter>
//   );
// }

//按鈕效果 props改變的方法，是在下方新增一行
const printMessage=()=>{
  document.getElementById('show-area').innerHTML="王美美變成王小華";
  document.getElementById('oldname').style.display = "none";
}

//模組化
// 在函式參數中加入props
function Atemplate(props)
{
  return(
    <div>
      <button id="oldname" onClick={props.handleClick}>{props.name}</button>
    </div>
  )
}


const getValue=(value)=>{
  console.log(value)
}

//建立元件 for迴圈
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
//建立元件 包元件
const testFunction =()=> {
  return(
    <div>
        <NavComponent>在index.js中設定文字</NavComponent>
        <Atemplate name="王美美" handleClick={printMessage}/>
        <HeadComponent/>
        <div id="show-area"></div>
       { testSd() }
        <h1 style = {{ fontSize: '20px', color: 'red' }}> 我好 </h1>
        <h1 style = { styleArgument }> Hello world!</h1>
        <h1> { (showOne === true) ? 1 : 0 } </h1>
        { multiButton() }
    </div>
  );
}

//主要框架
root.render(
  testFunction(),
  <React.StrictMode>
    <App> 在index.js中設定文字 </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
