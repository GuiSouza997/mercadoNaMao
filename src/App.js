//import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
//import CardDefault from "./components/Card/index";
import imageDefault from './images/prato1.jpg';
import NavBarBase from './components/NavBar/index';
import SectionDefault from './components/Sections/Default/index';
import FormLogin from "./components/Forms/Login/index";
import './libs/bootstrap.min.css';
import './libs/bootstrap.min.css';

function App() {

  return (
    <>
      <article>
        <Header />
        <NavBarBase />
        <body>
          <SectionDefault name="Login" title="Formulário de Login" component={FormLogin}>
          </SectionDefault>
        </body>
        <Footer />
      </article>
    </>
  );
}

export default App;
