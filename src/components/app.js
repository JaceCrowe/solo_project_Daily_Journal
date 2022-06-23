import React from 'react'
import MainContainer from './mainContainer'
// import Entries from './entries'


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    };

componentDidMount() {
}

componentWillUnmount() {
}

render() 
{
    return(
      <div className='row'>
        <div className='main'>
            <MainContainer/>
        </div>
        <div className='entries'>
            {/* <Entries/> */}
        </div>
      </div>
    )
}
}

export default App;