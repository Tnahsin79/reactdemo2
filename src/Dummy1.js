import React, {Component} from 'react';
import Dummy2 from './Dummy2.js'
class Dummy1 extends Component {
    render() {
        const {clickCount,plusHandler,minusHandler,resetHandler}=this.props;
        return (
            <div>
                <Dummy2
                count={clickCount}
                plusHandler={plusHandler}
                minusHandler={minusHandler}
                resetHandler={resetHandler}
                />
            </div>
        )
    }
}
//export default Dummy1
export default Dummy1