import React from 'react';

class Mobile extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            show: false
        }
    }

    getLabel = ()=> {
        return this.state.show ? 'Hide details' : 'Show more'
    }
    render () {
        return (
            <div className="card">
            <p>{this.props.phone.model}</p>
            <p>{this.props.phone.price}</p>
            {this.state.show? this.getOtherDetails():''}
            <button onClick={()=>this.setState({show:!this.state.show})}>{this.getLabel()}</button>
        </div>
        )
    }

    getOtherDetails = () => {
        return (
            <div>
            <p>{this.props.phone.camera}</p>
            <p>{this.props.phone.ram}</p>
            <p>{this.props.phone.os}</p>
            <p>{this.props.phone.processor}</p>
            </div>
        )
    }
}


export default Mobile;