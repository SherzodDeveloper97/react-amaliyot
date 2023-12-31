import "./movie-list.scss";
import MovieListItem from "../movie-list-item/movie-list-item";
// import { Component } from "react";

const MovieList = ({data, onDelete, onToggleProp}) => {
  return (
    <ul className="movie-list list-group">
      {data.map((item) => {
        return (
          <MovieListItem
            favourite={item.favourite}
            like={item.like}
            onToggleProp={(e) =>
              onToggleProp(item.id, e.currentTarget.getAttribute("data-toggle"))
            }
            key={item.id}
            {...item}
            onDelete={() => onDelete(item.id)}
          />
        );
      })}
    </ul>
  );
};


// *****Class component*******:

// class MovieList extends Component {
//   render() {
//     const { data, onDelete, onToggleProp } = this.props;
//     return (
//       <ul className="movie-list list-group">
//         {data.map((item) => {
//           return (
//             <MovieListItem
//               favourite={item.favourite}
//               like={item.like}
//               onToggleProp={(e) =>
//                 onToggleProp(
//                   item.id,
//                   e.currentTarget.getAttribute("data-toggle")
//                 )
//               }
//               key={item.id}
//               {...item}
//               onDelete={() => onDelete(item.id)}
//             />
//           );
//         })}
//       </ul>
//     );
//   }
// }

export default MovieList;
