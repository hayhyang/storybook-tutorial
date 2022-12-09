import { Provider } from "react-redux";

import TaskList from "./components/TaskList";
import store from "./lib/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
