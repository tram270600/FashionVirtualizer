import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import UploadItem from './screens/UploadItem'
import UploadAndDisplayImage  from './screens/UploadAndDisplayImage'
import ProductDetailScreen  from './screens/ProductDetailScreen'
import EditItemScreen from './screens/EditItemScreen'
import VirtualLookScreen from './screens/VirtualLookScreen'
import SetDetailScreen from './screens/SetDetailScreen'
// import HomePage from './components/HomePage/JavaScript/HomePage'

const App = () => {
  return (
    <>
    <Switch>
        <Route path="/" component = {HomeScreen} exact></Route>
        <Route path="/look" component={VirtualLookScreen}></Route>
        <Route path="/upload" component={UploadItem}></Route>
        <Route path="/profile" component={ProfileScreen}></Route>
        <Route path="/product/:product_id" component={ProductDetailScreen}></Route>
        <Route path="/editpost/:product_id" component={EditItemScreen}></Route>
        <Route path="/set/:id" component={SetDetailScreen}></Route>
        {/* <Route path="/HomePage" component={HomePage}></Route> */}
    </Switch>
      <>
      {/* <NavBar /> */}
   
      {/* <UploadItem /> */}
      {/* <Footer /> */}
    </>
    </>
     

  );
}

export default App;

