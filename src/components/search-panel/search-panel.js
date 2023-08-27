import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: "",
        }
    }

    updateHandler = (e) => {
        const term = e.target.value.toLowerCase();
        this.setState({term});
        this.props.updateHandler(term);
    }

    render(){
        return (
            <div>
                <input type="text" onChange={this.updateHandler} value={this.state.term} name="movie" id="movie" className="form-control search-input" placeholder="Kinolarni qidirish" />
            </div>
        )
    }
}
export default SearchPanel;