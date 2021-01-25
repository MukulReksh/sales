import Menu from "./Menu";
import PurchaseOrder from "./Purchaseorder";
import Saleorder from "./Saleorder";
import Summary from "./Summary";
import { Switch, Route } from "react-router-dom";
import Signout from "./Signout";

function App() {
  return (
    <>
      <div className="ui container grid">
        <div className="four wide column">
          <Menu />
        </div>

        <div className="twelve wide column">
          <Switch>
            <Route exact path="/" component={Saleorder} />
            <Route exact path="/purchaseorder" component={PurchaseOrder} />
            <Route exact path="/summary" component={Summary} />
            <Route exact path="/signout" component={Signout} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
