import Navbar from './navbar/navbar';
import Header from './header/header';
import Container from './container/container';
import './app.css'; // Importa tu archivo CSS si tienes uno

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Header />
      <Container />
    </div>
  );
};

export default App;