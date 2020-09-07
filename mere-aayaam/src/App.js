import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
	    <Switch>
          <Route exact path="/recipe">
	    <Recipe/>
	  </Route>

          <Route path="/mandala">
	    <Mandala/>
	  </Route>
	    <Route path="/">
            <Home />
        <Container>
        <Row className='show-grid'>
            <Col className="text-center" md={6}>
                <Link to="/recipe"><img src="./recipe.png" /></Link>
            </Col>
            <Col className="text-center" md={6}>
                <h1 className="options-text">Recipes</h1>
            </Col>
        </Row>
        <Row>
            <Col className="text-center" md={6}>
                <h1 className="options-text">Mandala</h1>
            </Col>
            <Col className="text-center" md={6}>
                <Link to="/mandala"><img src="./mandala.png"/></Link>
            </Col>
        </Row>
        </Container>

          </Route>

	    </Switch>
        </div>
      </HashRouter>
    );
  }
}

class Home extends Component {
	render() {
	return (
	<header className="App-header">
       		<img className="header-img" src="./header.png"/>
      	</header>
	);
	}
}

class About extends Component {
	render() {
		return (<div><h2>About</h2></div>);
	}
}

class Recipe extends Component {
        render() {
                return (<div><h2 className="text-center" style={{padding: '70px;'}}>Waiting for tasty recipes to be shared !</h2></div>);
        }
}
class Mandala extends Component {
        render() {
                return (<div><h2 className="text-center" style={{padding: '70px;'}}>Waiting For some Exciting Art !</h2></div>);
        }
}

export default App;
