import React from 'react';
import { Row, Col } from 'react-bootstrap';
//import DocumentsList from '../containers/documents-list.js';
//import { AddDocument } from '../components/add-document.js';
import { SearchFare } from '../components/search-fare.js';
export const FareList = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Fare List</h4>
      <SearchFare />
    </Col>
  </Row>
);
