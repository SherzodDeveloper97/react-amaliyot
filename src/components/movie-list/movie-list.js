import "./movie-list.css";
import MovieListItem from "../movie-list-item/movie-list-item";
import { Component } from "react";

class MovieList extends Component {
	render(){
		const {data} = this.props;
		return (
			<ul className='movie-list list-group'>
					{data.map((item,index) => {
						return <MovieListItem key={index} {...item} />
					})}
				</ul>
		  )
	}
}

export default MovieList;
