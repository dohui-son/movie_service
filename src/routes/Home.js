import './Home.css';
import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    //구조 분해 할당
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    //console.log(movies.data.data.movies);
    //this.setState({movies: movies});  //this.setState({이건 state: axions.get()중 구조 분해 할당으로 얻은 영화 데이터 있는 변수인 movies}); 
    this.setState({ movies, isLoading: false }); //바로 윗줄의 축약 코드
  }
  componentDidMount() {
    //영화 데이터 로딩
    this.getMovies();
  }


  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text" >'  Loading . . .'</span>
          </div>
        ) : (
            <div className="movies">
              {movies.map(movie => (

                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
          )}
      </section>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Home;
