
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import RestaurantCard from './components/RestaurantCard';
import{createBrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Header/>
     <Body/>
     <RestaurantCard/>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path :"/",
    element:<App></App>
  },{
    path:"/about",
    element:<about/>
  }
])

export default App;
