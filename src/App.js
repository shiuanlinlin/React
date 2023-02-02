import React from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
    useLocation,
    useParams,
    useSearchParams,
} from 'react-router-dom'

//首頁顯示頁面
const Home = () => {
    return (
        <div>
            <ul>
                <li>HOME</li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/list'>List</Link>
                </li>
            </ul>
        </div>
    )
}
//About頁面顯示
const About = () => {
    const navigate = useNavigate()
    //做某些事情的時候切換頁面
    const onClickBack = () => {
        navigate('/')
    }
    //頁面顯示
    return (
        <div>
            <button onClick={onClickBack}>BACK</button>
        </div>
    )
}

const Child1 = () => {
    const navigate = useNavigate()
    return (
        <div>
            <p>Child1</p>
            <button
                onClick={() => {
                    navigate('/list/child2/666')
                }}
            >
                Go To child2
            </button>
        </div>
    )
}
const Child2 = () => {
    //設置參數
    const [getParams, setParam] = useSearchParams()
    //取得name
    const name = getParams.getAll('name')
    console.log('name', name)
    return (
        <div>
            <p>Child2</p>
            <button
                onClick={() => {
                    setParam({ name: 'molly', age: 18 })
                }}
            >
                設置參數
            </button>
            <p>{name}</p>
        </div>
    )
}

const List = () => {
    const location = useLocation()
    console.log(location)
    const params = useParams()
    console.log(params, 'params')

    return (
        <div>
            <p>list 頁面</p>
            <Menus1 />
            <Container />
            <br />
        </div>
    )
}
const Container = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}
const Menus1 = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/list/child1'}> one </Link>
                </li>
                <li>
                    <Link to={'/list/child2/:id'}> two </Link>
                </li>
            </ul>
        </div>
    )
}

function App() {
    return (
        <div className='App'>
            <Router>
                {/* <Index /> */}
                <Routes>
                    <Route element={<Home />} path={'/'}></Route>
                    <Route element={<About />} path='/about'></Route>
                    <Route element={<List />} path='/list'>
                        <Route element={<Child1 />} path='/list/child1'></Route>
                        <Route
                            element={<Child2 />}
                            path='/list/child2/:id'
                        ></Route>
                    </Route>
                    <Route
                        path='*'
                        element={
                            <main style={{ padding: '1rem' }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </Router>
        </div>
    )
}
export default App