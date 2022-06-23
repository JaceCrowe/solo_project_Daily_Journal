import React from 'react'
import Dates from './date'
import Tags from './tags'
import TakeAways from './takeAways'
import InDepth from './inDepth'
import TomorrowsFive from './tomorrowsFive'
import mongoose from 'mongoose'

// await mongoose.connect('mongodb:mongodb+srv://jacey:baby@cluster0.njkkogx.mongodb.net/?retryWrites=true&w=majority')

class MainContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            inDepthValue: '',
            formValues: [{memory: ''},],
            tomValue: ['','','','','']
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.addFormFields = this.addFormFields.bind(this);
    };
componentDidMount() {
    this.getDate();
    // this.handleChange();
    // this.handleSubmit();
    // this.addFormFields();
}

componentWillUnmount() {

}

handleChange(event) {
    const value = event.target.value;
    this.setState({...this.state, [event.target.name] : value});
}

handleSubmit(event) {
    alert('An entry was submitted');
    event.preventDefault();
    let databody = {
        'date' : this.state.date,
        'inDepthValue' : this.state.inDepthValue,
        'formValues': this.state.formValues,
        'tomValue' : this.state.tomValue,
    }
    fetch('/entry', {
        method: 'POST',
        body: JSON.stringify(databody),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

getDate = () => {
    let dated = new Date().toDateString();
    this.setState({ date: dated })
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

render() {
{
    return(
        <div>
            <div className='date'><Dates date={this.state.date}/></div>
            <div className='tags'><Tags/></div>
            <div className='takeAways'><TakeAways/></div>
            <div>
            <h2>Take Aways:</h2>
              <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <ol>
                 {this.state.formValues.map((element, index) => {
                             return <li key={index}><input className='takeAwayList' type="text" value={element.memory || ""} onChange={this.handleChange} placeholder="I tried"></input></li>
                  })}
                  <button className="addButton" onClick={() => this.addFormFields}>Another Memory?</button> 
                </ol>
              </form>
            </div>
            <div className="inDepth"><InDepth/></div> 
            <div className="tomorrowsFive" onChange={this.handleChange}><TomorrowsFive/></div>
            <button className="memButton" type='button' onClick={this.handleSubmit}>Send to Memory</button> 
        </div>
     
    )
}
}
}
export default MainContainer;