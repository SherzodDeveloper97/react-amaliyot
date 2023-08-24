import { Component } from 'react';
import './movies-add-form.css';
import { v4 as uuidv4 } from 'uuid';

class MoviesAddForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			filmName: "",
			views: "",
		}
	}

	inputValueHandler = (e) => {
		this.setState({
			[e.target.name] : e.target.value,
		})
	}

	addFormHandler = (e) => {
		e.preventDefault();
		this.props.addForm({filmName:this.state.filmName,views: this.state.views, id: uuidv4(), favourite:false})
		this.setState({
			filmName: "",
			views: "",
		})
	}

	render() {
		const {filmName,views} = this.state;
		
		return (
			<div className='app-add-form'>
				<h3>Yangi kino qo'shish</h3>
				<form className='add-form d-flex' onSubmit={this.addFormHandler}>
					<input type='text' value={filmName} name="filmName" onChange={this.inputValueHandler} className='form-control new-post-label' placeholder='Qanday kino?' />
					<input type='number' value={views} name='views' onChange={this.inputValueHandler} className='form-control new-post-label' placeholder="Nechi marotaba ko'rilgan?" />
	
					<button type='submit' className='btn btn-outline-dark'>
						Qo'shish
					</button>
				</form>
			</div>
		)
	}
}

export default MoviesAddForm;
