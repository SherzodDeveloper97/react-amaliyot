import "./movie-list-item.scss";
import { Component, useState } from "react";

const MovieListItem = ({name,views,onDelete,onToggleProp,favourite,like}) => {
	const [favouriteState, setFavourite] = useState(false);
	const [likeState, setLike] = useState(false);


	return (
		<li className={`list-group-item d-flex justify-content-between ${favourite && "favourite"} ${like && "like"}`}>
				<span data-toggle="like" onClick={onToggleProp} className='list-group-item-label'>{name}</span>
				<input type='number' className='list-group-item-input' defaultValue={views} />
				<div className='d-flex justify-content-center align-items-center'>
					<button type='button' data-toggle="favourite" className='btn-cookie btn-sm ' onClick={onToggleProp}>
						<i className='fas fa-cookie'></i>
					</button>
	
					<button type='button' onClick={onDelete} className='btn-trash btn-sm '>
						<i className='fas fa-trash'></i>
					</button>
					<i className='fas fa-star'></i>
				</div>
		</li>
	  )
}



// *******Class component**********

// class MovieListItem extends Component{
// 	constructor(props) {
// 		super(props);
// 		this.state = {favourite: false, like: false}
// 	}

// 	// onFavourite = () => {
// 	// 	this.setState(({favourite}) => ({
// 	// 		favourite: !favourite,
// 	// 	}))
// 	// }

// 	// onLike = () => {
// 	// 	this.setState(({like}) => (
// 	// 		{
// 	// 			like: !like,
// 	// 		}
// 	// 	))
// 	// }

// 	render() {
// 		const {name,views,onDelete,onToggleProp,favourite,like} = this.props;
// 		return (
// 			<li className={`list-group-item d-flex justify-content-between ${favourite && "favourite"} ${like && "like"}`}>
// 					<span data-toggle="like" onClick={onToggleProp} className='list-group-item-label'>{name}</span>
// 					<input type='number' className='list-group-item-input' defaultValue={views} />
// 					<div className='d-flex justify-content-center align-items-center'>
// 						<button type='button' data-toggle="favourite" className='btn-cookie btn-sm ' onClick={onToggleProp}>
// 							<i className='fas fa-cookie'></i>
// 						</button>
		
// 						<button type='button' onClick={onDelete} className='btn-trash btn-sm '>
// 							<i className='fas fa-trash'></i>
// 						</button>
// 						<i className='fas fa-star'></i>
// 					</div>
// 			</li>
// 		  )
// 	}
// } 

export default MovieListItem
