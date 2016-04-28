import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BookingList } from '../components/booking.js';
//import { AddDocument } from '../components/add-document.js';

export const Booking = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Booking List</h4>
      
    <BookingList />  
    </Col>
  </Row>
);
