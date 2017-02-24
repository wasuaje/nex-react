

import React from 'react';
import ReactDOM from 'react-dom';


class Referrals  extends React.Component  {

  render () { 
    return (
    <div> 
        <div className="page-header">
          <h1>
            BTC <small> Referrals </small>
          </h1>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel panel-default  visible-sm visible-xs">                
                </div>
          <div className="table-responsive visible-md visible-lg ">
            <table className=" table-hover table-condensed col-lg-12">
              <tbody><tr className="table-order">
                <th>Partial phone</th>
                <th>Confirmed orders count</th>
                <th>Turnover</th>
                <th>Revenua</th>
                <th>Last seen</th>
                <th>Id</th>
              </tr>                        
                <tr>
                  <td colSpan="10">
                    <h3>No referrals found</h3>
                    </td>
                </tr>                          
            </tbody></table>
          </div>
          </div>
        </div>
    </div>
    );
     }
  }

export default Referrals;