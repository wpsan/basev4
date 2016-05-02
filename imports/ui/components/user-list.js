import React from 'react';
import { Row, Col, ListGroupItem, Table} from 'react-bootstrap';
// import { updateDocument, removeDocument } from '../../api/documents/methods.js';

// const handleUpdateDocument = (documentId, event) => {
//   const title = event.target.value.trim();
//   if (title !== '' && event.keyCode === 13) {
//     updateDocument.call({
//       _id: documentId,
//       update: { title },
//     }, (error) => {
//       if (error) {
//         Bert.alert(error.reason, 'danger');
//       } else {
//         Bert.alert('Document updated!', 'success');
//       }
//     });
//   }
// };

// const handleRemoveDocument = (documentId, event) => {
//   event.preventDefault();
//   if (confirm('Are you sure? This is permanent.')) {
//     removeDocument.call({
//       _id: documentId,
//     }, (error) => {
//       if (error) {
//         Bert.alert(error.reason, 'danger');
//       } else {
//         Bert.alert('Document removed!', 'success');
//       }
//     });
//   }
// };

export const UserList = ({ user }) => (
    <Row>
      <h3 className="text-thin text-din">User Admin List</h3>
      <Table striped hover responsive>
        <thead>
          <tr>
            <th>No.</th>
            <th>Inviter Name</th>
            <th>Email Invited</th>
            <th>Status</th>
            <th>Invited Date</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </Table>
    </Row>  
  );
