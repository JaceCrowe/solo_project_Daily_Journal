import React from 'react'
import Dates from './date'
import Tags from './tags'
import TakeAways from './takeAways'
import InDepth from './inDepth'
import TomorrowsFive from './tomorrowsFive'

class MainContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            inDepthValue: '',
            formValues: [{Memory: ''}]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    };
componentDidMount() {
    this.getDate();
}

componentWillUnmount() {

}

handleChange(event) {
    this.setState({value: event.target.value});
}

handleSubmit(event) {
    alert('An entry was submitted');
    event.preventDefault();
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

addFormFields() {
    this.setState(({
        formValues:[...this.state.formValues, { Memory: ''}]
    }))
}

render() {
{
    return(
        <div>
            <div className='date'><Dates date={this.state.date}/></div>
            <div className='tags'><Tags/></div>
            <div className='takeAways'><TakeAways/></div>
            <div className="inDepth"><InDepth/></div> 
            <div className="tomorrowsFive"><TomorrowsFive/></div>
            <button className="memButton" type='submit'>Send to Memory</button> 
        </div>
     
    )
}
}
}
export default MainContainer;