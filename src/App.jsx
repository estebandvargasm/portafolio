import Navbar from './navbar/navbar';
import Header from './header/header';
import Container from './container/container';
import './app.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-wrapper">
        <Header className="header" />
        <Container className="container" />
      </div>
    </div>
  );
}

export default App;