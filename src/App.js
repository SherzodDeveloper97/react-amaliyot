import {Component} from "react";
import './App.css';
import AppInfo from "./components/app-info/app-info";
import SearchPanel from "./components/search-panel/search-panel";
import AppFilter from "./components/app-filter/app-filter";
import MovieList from "./components/movie-list/movie-list";
import MoviesAddForm from "./components/movies-add-form/movies-add-form";

class App extends Component {
  state = {  } 

  data = [
    {
      name: "Empire of Osman",
      views: 811,
      favourite:false,
    },
    {
      name: "Ertugrul",
      views: 995,
      favourite:false,
    },
    {
      name: "Omar",
      views: 745,
      favourite:true,
    },
  ];

  render() { 
    return (
      <div className="App font-monospace">
        <div className="content">
          <AppInfo />
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList data={this.data} />
          <MoviesAddForm />
        </div>
      </div>
    );
  }
}
 
export default App;


