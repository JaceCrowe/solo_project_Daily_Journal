import React from 'react'

class TomorrowsFive extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tomValue: ['','','','','']
        
        };
    };
    
componentDidMount() {
}

componentWillUnmount() {
}

handleChange(event) {
    const value = event.target.value;
    this.setState({...this.state, [event.target.name] : value});
}

render() 
{
    return(
        <div>
           <h2>Tomorrow's Five:</h2>
           <form onSubmit={this.handleSubmit}>
           <ol>
               <li><input className='tomorrowList' type="text" value={this.state.tomValue[0]} onChange={this.handleChange} placeholder="Task 1" /></li>
               <li><input className='tomorrowList' type="text" value={this.state.tomValue[1]} onChange={this.handleChange} placeholder="Task 2" /></li>
               <li><input className='tomorrowList' type="text" value={this.state.tomValue[2]} onChange={this.handleChange} placeholder="Task 3" /></li>
               <li><input className='tomorrowList' type="text" value={this.state.tomValue[3]} onChange={this.handleChange} placeholder="Task 4" /></li>
               <li><input className='tomorrowList' type="text" value={this.state.tomValue[4]} onChange={this.handleChange} placeholder="Task 5" /></li>
           </ol>
           </form>
        </div>
    )
}
}

export default TomorrowsFive;