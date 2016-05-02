import React from 'react';
import { Row, Col } from 'react-bootstrap';
//import DocumentsList from '../containers/documents-list.js';
//import { AddDocument } from '../components/add-document.js';
import { SearchHistory } from '../components/search-history';

export const HistoryList = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">History List</h4>
      <SearchHistory />
    </Col>
  </Row>
);
