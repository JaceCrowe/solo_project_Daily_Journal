import React from 'react'

class InDepth extends React.Component{
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
        <div>
         <form onSubmit={this.handleSubmit}>
             <label>Daily In Depth:
                 <textarea className='textbox' value={this.props.inDepthValue} onChange={this.handleChange} wrap="soft" placeholder="Want to talk about it?"/>
             </label>
         </form> 
        </div>
    )
}
}

export default InDepth;