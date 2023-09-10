import { Component, useState } from "react";
import "./search-panel.scss";

const SearchPanel = (props) => {
    const [term, setTerm] = useState("");

    const updateHandler = (e) => {
        const term = e.target.value.toLowerCase();
        setTerm(term);
        props.updateHandler(term);
    }

    return (
        <div>
            <input type="text" onChange={updateHandler} value={term} name="movie" id="movie" className="form-control search-input" placeholder="Kinolarni qidirish" />
        </div>
    )
}



// ***********Class component*************

// class SearchPanel extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             term: "",
//         }
//     }

//     updateHandler = (e) => {
//         const term = e.target.value.toLowerCase();
//         this.setState({term});
//         this.props.updateHandler(term);
//     }

//     render(){
//         return (
//             <div>
//                 <input type="text" onChange={this.updateHandler} value={this.state.term} name="movie" id="movie" className="form-control search-input" placeholder="Kinolarni qidirish" />
//             </div>
//         )
//     }
// }


export default SearchPanel;