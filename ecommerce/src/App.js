import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header-component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils';
import setCurrentUser from './redux/user/user.action';

class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
      
        })
      }

      setCurrentUser(userAuth);
    });    
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps)(App);
