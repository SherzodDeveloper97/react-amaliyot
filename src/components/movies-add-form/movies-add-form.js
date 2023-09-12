import { Component, useState } from 'react';
import './movies-add-form.scss';
import { v4 as uuidv4 } from 'uuid';

const MoviesAddForm = ({addForm}) => {
	const [state, setState] = useState({
		name:"",
		views: "",
	})

	const inputValueHandler = (e) => {
		setState({...state, [e.target.name]: e.target.value})
	}

	const addFormHandler = (e) => {
		if(state.name === "" || state.views === "") return
		e.preventDefault();
		const data = {name: state.name, views: state.views, id: uuidv4(), favourite: false, like:false}
		addForm(data);
		setState({
			name: "",
			views: "",
		})
	}

	return (
		<div className='app-add-form'>
			<h3>Yangi kino qo'shish</h3>
			<form className='add-form d-flex' onSubmit={addFormHandler}>
				<input type='text' value={state.name} name="name" onChange={inputValueHandler} className='form-control new-post-label' placeholder='Qanday kino?' />
				<input type='number' value={state.views} name='views' onChange={inputValueHandler} className='form-control new-post-label' placeholder="Nechi marotaba ko'rilgan?" />

				<button type='submit' className='btn btn-outline-dark'>
					Qo'shish
				</button>
			</form>
		</div>
	)
}



// ***********Class component******************

// class MoviesAddForm extends Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			name: "",
// 			views: "",
// 		}
// 	}

// 	inputValueHandler = (e) => {
// 		this.setState({
// 			[e.target.name] : e.target.value,
// 		})
// 	}

// 	addFormHandler = (e) => {
// 		e.preventDefault();
// 		this.props.addForm({name:this.state.name,views: this.state.views, id: uuidv4(), favourite:false, like: false})
// 		this.setState({
// 			name: "",
// 			views: "",
// 		})
// 	}

// 	render() {
// 		const {name,views} = this.state;
		
// 		return (
// 			<div className='app-add-form'>
// 				<h3>Yangi kino qo'shish</h3>
// 				<form className='add-form d-flex' onSubmit={this.addFormHandler}>
// 					<input type='text' value={name} name="name" onChange={this.inputValueHandler} className='form-control new-post-label' placeholder='Qanday kino?' />
// 					<input type='number' value={views} name='views' onChange={this.inputValueHandler} className='form-control new-post-label' placeholder="Nechi marotaba ko'rilgan?" />
	
// 					<button type='submit' className='btn btn-outline-dark'>
// 						Qo'shish
// 					</button>
// 				</form>
// 			</div>
// 		)
// 	}
// }

export default MoviesAddForm;
