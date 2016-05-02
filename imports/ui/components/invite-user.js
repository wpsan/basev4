import React from 'react';
// import { Input } from 'react-bootstrap';
// import { insertDocument } from '../../api/documents/methods.js';

// const handleInsertDocument = (event) => {
//   const target = event.target;
//   const title = target.value.trim();

//   if (title !== '' && event.keyCode === 13) {
//     insertDocument.call({
//       title,
//     }, (error) => {
//       if (error) {
//         Bert.alert(error.reason, 'danger');
//       } else {
//         target.value = '';
//         Bert.alert('Document added!', 'success');
//       }
//     });
//   }
// };

export const InviteUser = React.createClass({
  render() {
    return (
            <div className="section page-header">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-3 col-md-4"></div>
                  <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="premier">
                      <div className="bucket">
                        <h4 className="lead">Invite User Admin</h4>
                        
                          <form className="form-simple" id='inviteUserAdmin' name="inviteUserAdmin">
                            <div className="form-group">
                              <label for="email" className="sr-only">Email</label>
                              <input type="email" className="form-control" id="emailAddress" name="emailAddress" placeholder="Masukkan alamat email"  autofocus required/>
                            </div>
                            <div className="form-group">
                              <label for="active">Status: &nbsp;&nbsp;</label>
                              <label className="radio-inline">
                                <input type="radio" className="userStatus" id="admin" value="administrator" /> Admin
                              </label>
                              <label className="radio-inline">
                                <input type="radio" name="userStatus" id="operator" value="operator" /> Operator
                              </label>
                            </div>
                            <div className="row">
                              <div className="col-xs-6">
                                
                              </div>
                              <div className="col-xs-6">
                                <button type="submit" className="btn btn-block btn-black btn-loading">
                                  <span>SUBMIT</span>
                                  <div className="spinner">
                                    <div className="bounce1"></div>
                                    <div className="bounce2"></div>
                                    <div className="bounce3"></div>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </form>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

      );
    }
  });  

