import React from 'react';
function Dummy2(props) {
    return (
        <div>
            <h1 class="display-3">CLICK COUNTER 2</h1>
            <button class="btn btn-outline-primary" onClick={props.plusHandler}>+</button>
            <h3 class="display-4">{props.clickCount}</h3>
            <button class="btn btn-outline-primary" onClick={props.minusHandler}>-</button>
            <br></br><br></br>
            <button class="btn btn-outline-danger" onClick={props.resetHandler}>RESET</button>
        </div>
    )
}
export default Dummy2