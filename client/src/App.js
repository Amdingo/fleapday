import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import axios from 'axios';
import Columns from 'react-bulma-components/lib/components/columns';
import Section from 'react-bulma-components/lib/components/section';
import { Route, Switch, withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';

// import UsersList from './components/UsersList';
import About from './components/About';
import NavBar from './components/NavBar';
import LeapInput from "./components/LeapInput";

export class App extends Component {
  state = {
    users: [],
    counter: 0,
    username: '',
    email: '',
    title: 'FleapDay',
    leapDay: '',
    isAuthenticated: false
  };

  getAllLeapYears = () => {
    axios
      .get(`${process.env.REACT_APP_FLEAP_SERVICE_URL}/api/get-all-leap-years`)
      .then(res => {
        this.setState({ users: res.data.data.allLeapYears });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleLeapInputSubmit = value => {
    const url = `${process.env.REACT_APP_FLEAP_SERVICE_URL}/api/get-leap-day`;
    axios
      .post(url, value)
      .then(res => {
        this.props.dispatch(reset('leap'));
        toast.success(res.data.message);
      })
      .catch(err => {
        toast.error(err.response.data.message);
      });
  };

  render() {
    return (
      <div>
        <NavBar
          title={this.state.title}
        />
        <ToastContainer />
        <Section>
          <Columns>
            <Columns.Column size={2}>
            </Columns.Column>
            <Columns.Column size={8}>
              <Columns>
                <Columns.Column size={12}>
                  <Switch>
                    <Route
                        exact
                        path={'/'}
                        render={() => (
                            <LeapInput
                                title={'Get Leap Day'}
                                formType={'leap'}
                                onSubmit={this.handleLeapInputSubmit}
                            />
                        )}
                    />
                    <Route exact path={'/about'} component={About} />
                  </Switch>
                </Columns.Column>
              </Columns>
            </Columns.Column>
          </Columns>
        </Section>
      </div>
    );
  }
}

// export default App;
export default withRouter(connect()(App));
// export default hot(module)(App);
