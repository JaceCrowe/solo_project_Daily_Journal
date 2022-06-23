import React from 'react'

class TakeAways extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            formValues: [{memory: ''}]
        };
        this.addFormFields = this.addFormFields.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    
componentDidMount() {
}

componentWillUnmount() {
}
handleChange(i,e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
}

addFormFields(event) {
    event.preventDefault();
    alert('added a new line');
    this.setState({
        formValues: [...this.state.formValues, { memory: ''}]
    })
}


render() 
    
{
    return(
        <div>
        <h2>Take Aways:</h2>
           <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
           <ol>
               {this.state.formValues.map((element, index) => 
                              <li><input className='tomorrowList' key={index} type="text" value={element.memory || ""} onChange={this.handleChange} placeholder="Memory 1" /></li>
               )}
               <button className="addButton" onClick={() => this.addFormFields}>Another Memory?</button> 
           </ol>
           </form>
        </div>
    )
}
}

export default TakeAways;