import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./routes";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
