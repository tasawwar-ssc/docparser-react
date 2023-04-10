import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeftNav from "./Components/LeftNav";
import TopNav from "./Components/TopNav";
import PageOne from "./Pages/PageOne";
import PageTwo from "./Pages/PageTwo";

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <div id="content_area" className="vertical_content_top">
          <div className="content_wrapper_sidebar">
            <LeftNav />
          </div>
        </div>

        <Switch>
          <Route path="/page1" component={PageOne} />
          <Route path="/page2" component={PageTwo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
