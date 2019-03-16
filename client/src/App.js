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
    const options = {
      url: `${process.env.REACT_APP_FLEAP_SERVICE_URL}/api/get-leap-day/${value.year}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    axios(options)
      .then(res => {
        this.props.dispatch(reset('leap'));
        this.setState({leapDay: res.data});
        toast.success(`In the year ${value.year} leap day falls on a ${res.data.data.leap_day}`);
      })
      .catch(err => {
        this.setState({leapDay: ''});
        toast.error(`${value.year} is not a leap year`);
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
                                leapDay={this.state.leapDay}
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
