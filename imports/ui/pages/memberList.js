import React from 'react';
import { Row, Col } from 'react-bootstrap';
//import DocumentsList from '../containers/documents-list.js';
//import { AddDocument } from '../components/add-document.js';
import { SearchMember } from '../components/search-member.js';

export const MemberList = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Member List</h4>
      <SearchMember />
      
    </Col>
  </Row>
);
