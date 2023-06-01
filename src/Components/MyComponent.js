import React from "react";
import {render} from "react-dom";

class MyComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            color:'red'
        }
    }

    /*static getDerivedStateFromProps(props, state){
        return (color:props.color);
    }*/

    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }*/

    /*changeColor=() => {
        this.setState({color:"grey"})
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        return document.getElementById("div1").innerHTML=prevState.color;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        document.getElementById("div2").innerHTML=this.state.color;
    }*/

    render(){
        return (
            <>
                My Favorite color is: {this.state.color}
                <button onClick={this.changeColor}>Change Color</button>
                <di id="div1"></di>
                <di id="div2"></di>
            </>
        )
    }

    /*componentDidMount() {
        setTimeout(()=>{
            this.setState({
                color:'Black'
            })
        }, 2000)
    }*/
}

export default MyComponent;