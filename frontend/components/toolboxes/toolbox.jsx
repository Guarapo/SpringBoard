import React from "react";

const Toolbox = ({NavBar, HeaderLeft, HeaderCenter, HeaderRight, Body}) => {
  // debugger
  return (
    <div className="toolbox-container">
      {NavBar ? <div className="toolbox-nav"><NavBar /></div> : null}
      <div className="toolbox-main">
        <div className="toolbox-header">
          <div className="toolbox-header-left">
            { HeaderLeft ? <HeaderLeft /> : null }
          </div>
          <div className="toolbox-header-center">
            { HeaderCenter ? <HeaderCenter /> : null }
          </div>
          <div className="toolbox-header-right">
            { HeaderRight ? <HeaderRight /> : null }
          </div>
        </div>
        <div className="toolbox-body">
          { Body ? <Body /> : null }
        </div>
      </div>
    </div>
  )
}

export default Toolbox;