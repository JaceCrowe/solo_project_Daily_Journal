import React from 'react'

class TakeAways extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            formValues: [{Memory: ''}]
        };
        
    };
    
componentDidMount() {
}

componentWillUnmount() {
}


render() 
    
{
    return(
        <div>
        <h2>Take Aways:</h2>
           <form onSubmit={this.handleSubmit}>
           <ol>
               {this.state.formValues.map((element, index) => 
                              <li><input className='tomorrowList' type="text" value={this.props.value} onChange={this.handleChange} placeholder="Memory 1" /></li>

               )}
               <li><input className='tomorrowList' type="text" value={this.props.value} onChange={this.handleChange} placeholder="Memory 1" /></li>
               <li><input className='tomorrowList' type="text" value={this.props.value} onChange={this.handleChange} placeholder="Memory 2" /></li>
               <li><input className='tomorrowList' type="text" value={this.props.value} onChange={this.handleChange} placeholder="Memory 3" /></li>
               <button className="addButton" type='submit' onClick={() => this.addFormField()}>Another Memory?</button> 
           </ol>
           </form>
        </div>
    )
}
}

export default TakeAways;