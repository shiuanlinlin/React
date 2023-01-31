import React from 'react';

function Atemplate()
{
  return(
    <div>
      我是Header
    </div>
  )
}

const HeadComponent = props => {
    return (
        <Atemplate/>
    );
};

export default HeadComponent;