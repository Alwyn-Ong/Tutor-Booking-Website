import logo from "./logo.svg";
// import "./App.css";
import routes from "./routes.js";
import { useRoutes } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./theme/GlobalStyles";
import { Toaster } from "react-hot-toast";

function App() {
  const routing = useRoutes(routes);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
