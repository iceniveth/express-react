import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom'
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';
import PrivateRoute from './components/PrivateRoute';
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));


export default function App() {
  return <React.Fragment>
    <ErrorBoundary>
      <h2>Sample App</h2>
      <Router>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>

        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={AboutUs} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </ErrorBoundary>
  </React.Fragment>
    
}
