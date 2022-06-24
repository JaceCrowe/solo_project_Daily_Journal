import React from 'react'
// import { db } from '../../server/models/journalModel';

class Entries extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            entries: ["June 22 2022",],
        };
        this.renderEntryList = this.renderEntryList.bind(this);
    };
    
componentDidMount() {
    this.renderEntryList();
}

componentWillUnmount() {
    
}

renderEntryList(event) {
    fetch('/', {
        method: 'GET',
    })
    .then(res => JSON.parse(res))
    .then(data => console.log("this is the" +data))
    .then(data => {
      this.setState(this.state.entries = [...this.state.entries, data])
    })
   
}

render() 
{
    return(
        <div>
            <h2>Entries</h2>
                {this.state.entries.map((element,index) => {
                     return <button key={index} ><li className='entryList'> {element} </li></button>
                })}
        </div>
    )
}
}

export default Entries;
