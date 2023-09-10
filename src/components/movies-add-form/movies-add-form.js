import { Component, useState } from 'react';
import './movies-add-form.scss';
import { v4 as uuidv4 } from 'uuid';

const MoviesAddForm = ({addForm}) => {
	const [state, setState] = useState({
		filmName:"",
		views: "",
	})

	const inputValueHandler = (e) => {
		setState({...state, [e.target.name]: e.target.value})
	}

	const addFormHandler = (e) => {
		if(state.filmName === "" || state.views === "") return
		e.preventDefault();
		const data = {filmName: state.filmName, views: state.views, id: uuidv4(), favourite: false, like:false}
		addForm(data);
		setState({
			filmName: "",
			views: "",
		})
	}

	return (
		<div className='app-add-form'>
			<h3>Yangi kino qo'shish</h3>
			<form className='add-form d-flex' onSubmit={addFormHandler}>
				<input type='text' value={state.filmName} name="filmName" onChange={inputValueHandler} className='form-control new-post-label' placeholder='Qanday kino?' />
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
// 			filmName: "",
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
// 		this.props.addForm({filmName:this.state.filmName,views: this.state.views, id: uuidv4(), favourite:false, like: false})
// 		this.setState({
// 			filmName: "",
// 			views: "",
// 		})
// 	}

// 	render() {
// 		const {filmName,views} = this.state;
		
// 		return (
// 			<div className='app-add-form'>
// 				<h3>Yangi kino qo'shish</h3>
// 				<form className='add-form d-flex' onSubmit={this.addFormHandler}>
// 					<input type='text' value={filmName} name="filmName" onChange={this.inputValueHandler} className='form-control new-post-label' placeholder='Qanday kino?' />
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
