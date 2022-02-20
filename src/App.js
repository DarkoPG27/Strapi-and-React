import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from "./contexts/auth";
import { UserContextProvider } from "./contexts/userContext";
import { PrivateRoute } from "./PrivateRoute";

//components
import NavbarComponent from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/admin/Dashboard';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pets from './pages/Pets';
import PetDetails from './pages/PetDetails';
import Category from './pages/Category';
import SiteHeader from './components/SiteHeader';

function App() {
  return (
    <UserContextProvider>
      <AuthContextProvider>
        <Router>
          <div className="App">
            <div className="content">
              <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/about"><NavbarComponent /> <About /></Route>
                <Route path="/contact"><NavbarComponent /> <Contact /></Route>
                <Route path="/pets"><NavbarComponent /> <SiteHeader /> <Pets /></Route>
                <Route path="/details/:id"><NavbarComponent /> <SiteHeader /> <PetDetails /></Route>
                <Route path="/category/:id"><NavbarComponent /> <Category /></Route>
                <Route path="/login"><NavbarComponent /><Login /> </Route>
                <Route path="/registration"><NavbarComponent /> <Register /></Route>

                <PrivateRoute path="/admin"><NavbarComponent /> <Dashboard /></PrivateRoute>

                {/*   <Route path="/admin"><Admin /></Route> */}


              </Switch>
            </div>
          </div>
        </Router>
      </AuthContextProvider>
    </UserContextProvider>
  );
}

export default App;