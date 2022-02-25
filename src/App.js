import "./App.css";
import Header from "./app/core/components/layouts/Header";
import Footer from "./app/core/components/layouts/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useEffect } from "react";
import { loadUser } from "./app/auth/actions/authActions";
import { Routers } from "./routing/Routers";
import Alert from "./app/core/components/Alert";
import { getProfiles } from "./app/profile/actions/profileActions";
function App() {
  useEffect(() => {
    if (localStorage.token) {
      store.dispatch(loadUser());
      store.dispatch(getProfiles());
    }
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Alert />
          <Routers />
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
