import React from 'react';
import { Form, FormInput, Button } from 'shards-react';
import axios from 'axios';
import './Searchbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

export default class Searchbar extends React.Component {
  state = {};

  async componentDidMount() {
    let flights = await axios.get(
      `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${this.state.from}/${this.state.to}/anytime?inboundpartialdate=2019-12-01`,
      {
        headers: {
          'x-rapidapi-host':
            'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
          'x-rapidapi-key': '2af310b5cdmsh1c31ad22fd7f891p12ea9ajsnc23675835443'
        }
      }
    );
    console.log(flights.data);
    this.setState(prevState => {
      return {
        flights: JSON.stringify(flights.data)
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <Form className='search-bar'>
          <FormInput id='#from' placeholder='Where From?' />
          <FormInput id='#to' placeholder='Where To?' />
        </Form>
        <Button />
      </React.Fragment>
    );
  }
}
