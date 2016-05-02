import React from 'react';
import { Row, Col } from 'react-bootstrap';
//import DocumentsList from '../containers/documents-list.js';
//import { AddDocument } from '../components/add-document.js';
import { SearchReconcile } from '../components/search-reconcile.js';

export const ReconcileList = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Reconcile</h4>

      <SearchReconcile />
    </Col>
  </Row>
);
