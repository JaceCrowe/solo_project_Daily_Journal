import React from 'react'

class Dates extends React.Component{
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
        <div className='dated'>
            <h2>Today is {this.props.date}</h2>
        </div>
     
    )
}
}

export default Dates;