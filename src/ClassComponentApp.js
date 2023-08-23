import {Component} from "react";

class ClassComponentApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            age: "",
        }
    }

    changeCounter(btn) {
        const {counter} = this.state;
        if(btn === "add"){
            this.setState({
                counter: counter + 1
            })
        }else if(btn === "delete"){
            this.setState({
                counter: counter - 1
            })
        }else if(btn === "reset"){
            this.setState({
                counter: 0,
            })
        }
    }

    changeHandler = (e) => {
        // console.log(e.target.value);
        this.setState({
            age: e.target.value,
        })
    }

    render() {
        // console.log(this.props);
        const {name} = this.props;
        const {counter} = this.state;
        return (
            <div>
                <h1>{name}</h1>
                <div className="counter">
                    <button onClick={() => this.changeCounter("add")}>Add + 1</button>
                    <h2>{`Counter: ${counter}`}</h2>
                    <button onClick={() => this.changeCounter("delete")}>Delete - 1</button>
                    <br /><br />
                    <button onClick={() => this.changeCounter("reset")}>Reset</button>
                </div>
                <form className="form">
                    <span>
                        Yoshingiz:
                    </span>    
                    <input type="text" onChange={this.changeHandler} />
                    <p>{this.state.age}</p>
                </form>
            </div>
        )
    }
}

export default ClassComponentApp;