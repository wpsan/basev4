import React from 'react';
import { Row, Col } from 'react-bootstrap';
//import DocumentsList from '../containers/documents-list.js';
//import { AddDocument } from '../components/add-document.js';
import { SearchMember } from '../components/search-member.js';

export const SupportList = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Support List</h4>
      <SearchMember />
      
    </Col>
  </Row>
);
