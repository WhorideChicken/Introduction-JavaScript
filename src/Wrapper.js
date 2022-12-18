import React from "react";
//child 렌더링을 위한 {childere}
function Wrapper({ children }){
    const style = {
        border:'2px solid black',
        padding: '16px',
    };
    return(
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper;