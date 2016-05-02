import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { NavItem } from 'react-bootstrap';

//import { Row, Col, ListGroupItem, Input, Button } from 'react-bootstrap';
//import { updateDocument, removeDocument } from '../../api/documents/methods.js';

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

export const SearchSettlement =React.createClass({
  render (){
    return (
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div class="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-form">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand text-din visible-xs">Settlement</a>
            </div>
            <div id="navbar-collapse-form" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                <form name="searchForm" className="navbar-form navbar-left" >
                        <div className="form-inline">
                            <div className="form-group">
                                <label for="status">Settlement Status </label>
                                <select name="status" className="form-control settlementStatus">                
                                    <option value="undefined">All</option>
                                    <option value="authorize">Authorize</option>
                                    <option value="challenge">Challenge</option>
                                    <option value="approve">Approve</option>
                                    <option value="cancel">Cancel</option>
                                    <option value="success">Success</option>
                                    <option value="settlement">Settlement</option>
                                </select>
                      </div>
                             <div className="form-group">
                              <label for="fromDate">&nbsp;&nbsp;Transaction From</label>
                                <div className="form-group">
                          <div className='input-group date' id='fromDate'>
                            <input type='text' placeholder="DD/MM/YYYY" size="13" className="form-control fromDate" name="fromDate"/>
                            <span className="input-group-addon">
                              <span className="glyphicon glyphicon-calendar"></span>
                            </span>
                          </div>
                        </div>
                            </div>
                            <div className="form-group">
                              <label for="thruDate">&nbsp;&nbsp;Thru</label>
                                 <div className="form-group">
                          <div className='input-group date' id='thruDate'>
                            <input type='text' placeholder="DD/MM/YYYY" size="13" className="form-control thruDate" name="thruDate"/>
                            <span className="input-group-addon">
                              <span className="glyphicon glyphicon-calendar"></span>
                            </span>
                          </div>
                        </div>
                            </div>
                            <div className="form-group">
                              <label for="keyword">&nbsp;&nbsp;Search </label>
                                 <input id="keyword" type="text" className="form-control" placeholder="Enter Keywords" />
                            </div>
                          </div>
                      </form>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      );
  }
});