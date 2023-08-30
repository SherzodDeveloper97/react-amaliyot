import {Component} from "react";
import "./style.css";

class ClassComponentApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            age: "",
            isLogin: false,
            isDisplay: true,
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
        this.setState({
            age: e.target.value,
        })
    }

    onToggle = () => {
        this.setState(prevState => ({isLogin: !prevState.isLogin}))
    }

    clickDisplay = () => {
        this.setState({
            isDisplay: false,
        })
    }


    componentDidMount(){
        console.log("Mount");
        document.title = `Count: ${this.state.counter}`
    }

    componentDidUpdate(){
        console.log("Update");
        document.title = `Count: ${this.state.counter}`
    }

    componentWillUnmount() {
        console.log("Unmount");
    }

    render() {
        // console.log(this.props);
        const {name} = this.props;
        const {counter} = this.state;
        return (
            <>
            <div className="counter-box">
                <h1>{name}</h1>
                <div className="counter">
                    <h2>{`Counter: ${counter}`}</h2>
                    <button onClick={() => this.changeCounter("add")}>Add + 1</button>
                    <button onClick={() => this.changeCounter("delete")}>Delete - 1</button>
                    <br />
                    <button onClick={() => this.changeCounter("reset")}>Reset</button>
                </div>
                <form className="form">
                    <label htmlFor="age">
                        Yoshingiz:
                    </label>    
                    <input id="age" type="text" onChange={this.changeHandler} />
                    <p>{this.state.age}</p>
                </form>
                <div className="toggleIsLogin">
                   {this.state.isLogin ? <p>Login</p> : null}
                   <button onClick={this.onToggle}>Toggle</button>
                </div>
            </div>
            <button onClick={this.clickDisplay}>Click Display</button>
            </>
        )
    }
}

export default ClassComponentApp;