import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} ></Route>
      <Route path="/about" component={About} ></Route>
    </HashRouter>
  );
}
export default App;







// import './App.css'; 
// import React from 'react';
// import axios from 'axios';
// import Movie from './components/Movie';
// class App extends React.Component {
//   state = {
//     isLoading: true,
//     movies: [],
//   };
//   getMovies = async () => {
//     //구조 분해 할당
//     const {
//       data: {
//         data: { movies },
//       },
//     } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
//     //console.log(movies.data.data.movies);
//     //this.setState({movies: movies});  //this.setState({이건 state: axions.get()중 구조 분해 할당으로 얻은 영화 데이터 있는 변수인 movies}); 
//     this.setState({ movies, isLoading: false }); //바로 윗줄의 축약 코드
//   }
//   componentDidMount() {
//     //영화 데이터 로딩
//     this.getMovies();
//   }
//   render() {
//     const { isLoading, movies } = this.state;
//     return (
//       <section className="container">
//         {isLoading ? (
//           <div className="loader">
//             <span className="loader__text">'  Loading . . .'</span>
//           </div>
//         ) : (
//             <div className="movies">
//               {movies.map(movie => (

//                 <Movie
//                   key={movie.id}
//                   id={movie.id}
//                   year={movie.year}
//                   title={movie.title}
//                   summary={movie.summary}
//                   poster={movie.medium_cover_image}
//                   genres={movie.genres}
//                 />
//               ))}
//             </div>
//           )}
//       </section>
//     );
//   }
// }
// export default App;
