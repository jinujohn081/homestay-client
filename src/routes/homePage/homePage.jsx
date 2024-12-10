import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';
function HomePage() {
  return (
    <div className='homepage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>find real estate & get your dream place!!</h1>
          <SearchBar />
        </div>
      </div>
      <div className='imageContainer'>
        <img src='/bg2.jpeg' />
      </div>
    </div>
  );
}

export default HomePage;
