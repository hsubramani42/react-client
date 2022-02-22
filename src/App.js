import "./App.css";
import Header from "./app/core/components/layouts/Header";
import Footer from "./app/core/components/layouts/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useEffect } from "react";
import { loadUser } from "./app/auth/actions/authActions";
import setAuthToken from "./utils/setAuthToken";
import { Routers } from "./routing/Routers";
function App() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuthToken(localStorage.getItem("token"));
      store.dispatch(loadUser());
    }
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Routers />
        </Router>
        <Footer></Footer>
      </Provider>
    </div>
  );
}

export default App;
