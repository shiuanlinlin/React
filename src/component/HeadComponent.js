import React from 'react';

//元件
function Content()
{
  return(
    <div>
      我是Header
    </div>
  )
}

const HeadComponent = props => {
    return (
        <Content/>
    );
};

export default HeadComponent;