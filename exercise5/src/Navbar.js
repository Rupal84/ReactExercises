import React from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import ViewAll from './ViewAll';
import {AddBook} from './AddBook';
import {ContactUs} from './ContactUs';

class Navbar extends React.Component {
    render() {
       return (
         <div>
            <Router>
              <React.Fragment>
                <div>
                  <nav>
                    <p>Learning Portal</p>
                    <Link to={'/viewall'}> View All Books </Link>
                    <Link to={'/addbook'}> Add A Book </Link>
                    <Link to={'/contactus'}> Contact Us </Link>
                  </nav>
                  <div>
                      <Route exact path="/" render={() => (<Redirect to="/viewall"/>)} />
                      <Route path="/viewall" component={ViewAll}/>
                      <Route path="/addbook" component={AddBook}/>
                      <Route path="/contactus" component={ContactUs}/>
                  </div>
        </div>
          </React.Fragment>
        </Router>
         </div>
        )
    }
}

export default Navbar;