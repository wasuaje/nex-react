

import React from 'react';
import ReactDOM from 'react-dom';

class MyOrders  extends React.Component {
  render () { 
    return (
<div>
    <div className="page-header">
        <h1>
            BTC<small> Orders Main </small>
        </h1>
        <div className="line-order">
            ----------------------
        </div>
    </div>
    <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6">
            <a href="/en/">
                <button type="button" className="btn-success new-order"> New</button>
            </a>
        </div>

        <div className="visible-xs"> &nbsp;</div>
        
        <div className="col-xs-12 col-sm-6 col-md-6">
            <form method="post" className="form form-search">
                <button type="submit" className="btn btn-default search-order pull-right"><i className="fa fa-search" aria-hidden="true"></i>&nbsp;</button>
                <div className="form-group col-xs-10 nopadding pull-right">
                <label className="sr-only control-label" htmlFor="id_date">Search by Date</label>
                <input className="form-control hasDatepicker" id="id_date" name="date" placeholder="Search by Date" 
                title="" type="text"/></div>

                <input type="hidden" name="csrfmiddlewaretoken" value="ia5N4UYUc3rWJTCH3ATYVdt8bB9Okhx7"/>
            </form>
        </div>
    </div>


<div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

            <div className="panel panel-default  visible-sm visible-xs">
              
                  <div id="qY1pa" className="headers-mobile panel-heading">Thu 06 Oct 2016
                        <a className="pull-right" data-toggle="collapse" data-parent="qY1pa" href="#body-qY1pa" 
                        aria-expanded="true">
                            details
                        </a>
                  </div>

                  <div id="body-qY1pa" className="panel-body panel-collapse collaps collapse in" 
                       aria-expanded="true">

                      <div>
                          <div className="headers-mobile header-text">Reference</div>
                          qY1pa
                      </div>

                      <div>
                            <div className="headers-mobile header-text">Currency</div>
                            RUB
                        </div>

                      <div>
                            <div className="headers-mobile header-text">Amount</div>
                            3000.00
                        </div>
                      <div>
                            <div className="headers-mobile header-text">BTC</div>
                            0.07655375
                      </div>


                          <span id="spin_confirming_1" style={{display:'none'}}>
                            <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp;
                               Setting as paid...
                        </span>

                       <div className="headers-mobile header-text">
                            Paid
                       </div>

                        <label className="checkbox-inline">
                            <div className="toggle btn btn-danger off" data-toggle="toggle" disabled="disabled" 
                                style={{width: 90, height: 0}}>
                             <input type="checkbox" data-url="/en/order/payment_confirmation/1/" data-pk="1" 
                                    data-offstyle="danger" data-onstyle="success" disabled="" data-toggle="toggle" 
                                    data-on="Paid" data-width="90px" data-off="Not Paid"/>
                                    <div className="toggle-group">
                                        <label className="btn btn-success toggle-on">Paid</label>
                                        <label className="btn btn-danger active toggle-off">Not Paid</label>
                                        <span className="toggle-handle btn btn-default"></span>
                                    </div>
                            </div>
                        </label>


                      <div className="headers-mobile">
                        Released
                            <img src="icons/close_16.png" />
                      </div>
                      <div className="headers-mobile">
                        Completed
                            <img src="icons/close_16.png" />
                      </div>

                      <div className="headers-mobile header-text">
                        Withdraw Address
                      </div>

                        <div className="header-text" id="td-frozen-withdraw-1">

                            <span className="frozen">
                                Not Defined
                            </span>
                        </div>

                        <div className="header-text" id="td-withdraw-1" style={{display:'none'}}>
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            <span className="withdraw_address" id="span-withdraw-1" data-toggle="popover" 
                                  title="" data-html="true" data-container="body" data-placement="top" data-pk="1" 
                                  data-url-update="/en/order/update_withdraw_address/1/" 
                                  data-url-create="/en/profile/create_withdraw_address/" 
                                  data-original-title="Set Withdraw Address">
                                Not Defined
                            </span>
                        </div>
                  </div>
            </div>

            <div className="table-responsive visible-md visible-lg ">
              <table className=" table-hover table-condensed col-lg-12">
                <tbody>
                <tr className="table-order">
                    <th>Date</th>
                    <th>Reference</th>
                    <th>Currency</th>
                    <th>Amount</th>
                    <th>BTC</th>
                    <th>Paid</th>
                    <th>Released</th>
                    <th>Completed</th>
                    <th>Withdraw Address</th>
                </tr>
                    <tr>
                        <td>Thu 06 Oct 2016</td>
                        <td>qY1pa</td>
                        <td>RUB</td>
                        <td>3000.00</td>
                        <td>0.07655375</td>
                        <td>
                            <span id="spin_confirming_1" style={{display:'none'}}>
                                <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>&nbsp;
                                Setting as paid...
                            </span>

                            <label className="checkbox-inline">
                                <div className="toggle btn btn-danger off" data-toggle="toggle" disabled="disabled" 
                                style={{width: 90, height: 0}}>
                                  <input type="checkbox" data-url="/en/order/payment_confirmation/1/" data-pk="1" 
                                  data-offstyle="danger" data-onstyle="success" disabled="" data-toggle="toggle" 
                                  data-on="Paid " data-width="90px" data-off="Not Paid "/>
                                  <div className="toggle-group">
                                   <label className="btn btn-success toggle-on">Paid </label>
                                   <label className="btn btn-danger active toggle-off">Not Paid </label>
                                   <span className="toggle-handle btn btn-default"></span>
                                  </div>
                                 </div>
                            </label>
                        </td>                                   
                        <td><img src="icons/close_16.png" /></td>
                        <td><img src="icons/close_16.png" /></td>
                            <td id="td-frozen-withdraw-1">
                                <span className="frozen">
                                    Not Defined
                                </span>
                            </td>
                            <td id="td-withdraw-1" style={{display:'none'}}>
                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                <span className="withdraw_address" id="span-withdraw-1" data-toggle="popover" title="" data-html="true" 
                                  data-container="body" data-placement="top" data-pk="1" data-url-update="/en/order/update_withdraw_address/1/"
                                  data-url-create="/en/profile/create_withdraw_address/" data-original-title="Set Withdraw Address">
                                    Not Defined
                                </span>
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

export default MyOrders;