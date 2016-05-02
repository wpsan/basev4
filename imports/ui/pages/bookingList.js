import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BookingList } from '../components/booking.js';
import { SearchBooking } from '../components/search-booking.js';

//import { AddDocument } from '../components/add-document.js';

export const Booking = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Booking List</h4>
    <SearchBooking />  
    <BookingList />  
    </Col>
  </Row>
);
