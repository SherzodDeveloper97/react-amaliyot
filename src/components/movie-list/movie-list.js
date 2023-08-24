import "./movie-list.css";
import MovieListItem from "../movie-list-item/movie-list-item";
import { Component } from "react";

class MovieList extends Component {
	render(){
		const {data,onDelete} = this.props;
		return (
			<ul className='movie-list list-group'>
					{data.map((item) => {
						return <MovieListItem key={item.id} {...item} onDelete={() => onDelete(item.id)} />
					})}
				</ul>
		  )
	}
}

export default MovieList;
