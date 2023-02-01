import React from 'react';

//元件
function Content()
{
  return(
    <div>
      我是Home
    </div>
  )
}

const Home = props => {
    return (
        <Content/>
    );
};

export default Home;