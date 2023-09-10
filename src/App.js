import { useState } from "react";
import './App.scss';
import AppInfo from "./components/app-info/app-info";
import SearchPanel from "./components/search-panel/search-panel";
import AppFilter from "./components/app-filter/app-filter";
import MovieList from "./components/movie-list/movie-list";
import MoviesAddForm from "./components/movies-add-form/movies-add-form";

const App = () => {
  const [data, setData] = useState(arr);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const onDelete = (id) => {
    const newArr = data.filter(c => c.id !== id);
    setData(newArr);
  }

  const addForm = (item) => {
    const newData = [...data, item];
    setData(newData);
  }

  const onToggleProp = (id,prop) => {
    const newArr = data.map(item => {
      if(item.id === id){
        return { ...item, [prop]:!item[prop]}
      }
      return item
    })
    setData(newArr);
  }

  const searchHandler = (arr, term) => {
    if(term === 0){
      return arr;
    }
    return arr.filter(item => item.filmName.toLowerCase().indexOf(term) > -1);
  }

  const filterHandler = (arr,filter) => {
    switch(filter){
      case "popular":
        return arr.filter(item => item.like);
      case "mostViewer": 
        return arr.filter(item => item.views > 800);
      default: 
        return arr;
    }
  }

  const updateHandler = (term) => {
    setTerm(term);
  }

  const updateFilterHandler = (filter) => {
    setFilter(filter);
  }
  
  return (
    <div className="App font-monospace">
      <div className="content">
        <AppInfo favouriteMovieCount={data.filter(c => c.favourite).length} allMoviesCount={data.length} />
        <div className="search-panel">
          <SearchPanel updateHandler={updateHandler} />
          <AppFilter filter={filter} updateFilterHandler={updateFilterHandler} />
        </div>
        <MovieList onToggleProp={onToggleProp} data={filterHandler(searchHandler(data,term),filter)} onDelete={onDelete} />
        <MoviesAddForm addForm={addForm} />
      </div>
    </div>
  );

}


// *********-----------**************
// Class componentlar asosida:

// class App extends Component {
//   state = { 
//     data : [
//       {
//         id: 1,
//         filmName: "Empire of Osman",
//         views: 811,
//         favourite:false,
//         like: false,
//       },
//       {
//         id: 2,
//         filmName: "Ertugrul",
//         views: 995,
//         favourite:false,
//         like: false,
//       },
//       {
//         id: 3,
//         filmName: "Omar",
//         views: 745,
//         favourite:false,
//         like: false,
//       },
//     ],
//     term: "",
//     filter: "all",
//    } 

//   searchHandler = (arr, term) => {
//     if(term.length === 0){
//       return arr;
//     }
//     return arr.filter(item => item.filmName.toLowerCase().indexOf(term) > -1);
//   } 

//   updateHandler = (term) => {
//     this.setState({term})
//   }

//   filterHandler = (arr,filter) => {
//     switch(filter){
//       case "popular":
//         return arr.filter(item => item.like);
//       case "mostViewer": 
//         return arr.filter(item => item.views > 800);
//       default: 
//         return arr;
//     }
//   }

//   updateFilterHandler = filter => this.setState({filter})

//   onDelete = (id) => {
//     this.setState(({data}) => {
//       // const index = data.findIndex((c) => (c.id) === id);
//       // console.log(index);
//       // data.splice(index, 1);
//       const newArr = data.filter(c => c.id !== id);
//       // console.log(newArr);

//       return {
//         data: newArr,
//       }
//     })
//   }

//   addForm = (item) => {
//     const {data} = this.state;
//     this.setState(({data}) => {
//       const newData = [...data, item]
//       // console.log(newData);
//       return {
//         data: newData,
//       }
//     })
//   }

//   onToggleProp = (id,prop) => {
//     // console.log(prop);
//     // console.log(`Favourite ${id}`)
//     this.setState(({data}) => {
//       const newArr = data.map(item => {
//         if(item.id === id){
//           return { ...item, [prop]:!item[prop]}
//         }
//         return item
//       })
//       // console.log(newArr);
//       return {
//         data: newArr,
//       }
//     })
//   }


//   render() { 
//     const {data,term,filter} = this.state;
//     const allMoviesCount = data.length;
//     const favouriteMovieCount = data.filter(c => c.favourite).length;
//     const visibileData = this.filterHandler(this.searchHandler(data,term),filter);

//     return (
//       <div className="App font-monospace">
//         <div className="content">
//           <AppInfo favouriteMovieCount={favouriteMovieCount} allMoviesCount={allMoviesCount} />
//           <div className="search-panel">
//             <SearchPanel updateHandler={this.updateHandler} />
//             <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler} />
//           </div>
//           <MovieList onToggleProp={this.onToggleProp} data={visibileData} onDelete={this.onDelete} />
//           <MoviesAddForm addForm={this.addForm} />
//         </div>
//       </div>
//     );
//   }
// }
 
export default App;


const arr = [
  {
    id: 1,
    filmName: "Empire of Osman",
    views: 811,
    favourite:false,
    like: false,
  },
  {
    id: 2,
    filmName: "Ertugrul",
    views: 995,
    favourite:false,
    like: false,
  },
  {
    id: 3,
    filmName: "Omar",
    views: 745,
    favourite:false,
    like: false,
  },
]