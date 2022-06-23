import React from 'react'
import { db } from '../../server/models/journalModel';

class Entries extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            entries: [],
        };
        this.renderEntryList = this.renderEntryList.bind(this);
    };
    
componentDidMount() {
    // this.renderEntryList();
}

componentWillUnmount() {
    
}

renderEntryList(event) {
    // fetch('/entry', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    // })
    // .then(res => JSON.parse(res))
    // .then(data => console.log(data))
    // .then(data => {
    //     const { date } = data;
    //     this.state.entries.map((entries,index) => {
    //         return(
    //             <div key={index}>{date}</div>
    //         )
    //    })
    // })
   
}

render() 
{
    return(
        <div>
            <h2>Entries</h2>
            <ul>
                {/* {this.renderEntryList()} */}
            </ul>
        </div>
    )
}
}

export default Entries;
