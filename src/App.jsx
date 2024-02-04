import { useEffect, useState } from "react";
import LayoutComponent from "./layout/LayoutComponent";
import Router from "./routes/Router";
import { CounterSettingContext } from "./store/counterContext";
import LoginContext from "./store/loginContext";
import SearchContext from "./store/searchContext";
import { ToastContainer } from "react-toastify";

function App() {
  const [counter, setCounter] = useState(0);
  const [login, setLogin] = useState(null);
  const [search, setSearch] = useState(null);

  return (
    <CounterSettingContext.Provider value={{ counter, setCounter }}>
      <SearchContext.Provider value={{ search, setSearch }}>
        <LoginContext.Provider value={{ login, setLogin }}>
          <ToastContainer />
          <LayoutComponent>
            <Router />
          </LayoutComponent>
        </LoginContext.Provider>
      </SearchContext.Provider>
    </CounterSettingContext.Provider>
  );
}

export default App;
