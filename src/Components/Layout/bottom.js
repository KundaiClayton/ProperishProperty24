import React from 'react'
import StickyFooter from 'react-sticky-footer'

var style = {
    backgroundColor: "#cfd3db",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}
var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
  }

const Bottom=()=>{
  return (
        <div>
            <div style={phantom} />
            <div style={style}>
                
            </div>
        </div>
    )
    
}
export default Bottom