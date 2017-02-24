import React from 'react';
import ReactDOM from 'react-dom';

class Footer  extends React.Component {
  render () { 
    return (

        <div className="supported-payments col-lg-12 col-md-12 col-sm-12 col-xs-12 greypanel">
            <div className="supporetd_payment">
            
                
                <div className="footerpay col-xs-4 col-sm-2">
                    
                        <div className="payment-type-trigger-footer" data-type="WebMoney.ru">
                            <div className="col col-xs-12">
                                <a href="https://www.webmoney.ru" target="_blank">
                                    <img src="icons/footer-logoWebMoney.ru.png" alt="WebMoney.ru" className="btn"/>
                                </a>
                            </div>
                        </div>
                    
                </div>
                
                <div className="footerpay col-xs-4 col-sm-2">
                    
                        <div className="payment-type-trigger-footer" data-type="AlfaBank.ru">
                            <div className="col col-xs-12">
                                <a href="https://www.alfabank.ru" target="_blank">
                                    <img src="icons/footer-logoAlfaBank.ru.png" alt="AlfaBank.ru" className="btn"/>
                                </a>
                            </div>
                        </div>
                    
                </div>
                
                <div className="footerpay col-xs-4 col-sm-2">
                    
                        <div className="payment-type-trigger-footer" data-type="Sberbank.ru">
                            <div className="col col-xs-12">
                                <a href="https://www.sberbank.ru" target="_blank">
                                    <img src="icons/footer-logoSberbank.ru.png" alt="Sberbank.ru" className="btn"/>
                                </a>
                            </div>
                        </div>
                    
                </div>
                
                <div className="footerpay col-xs-4 col-sm-2">
                    
                        <div className="payment-type-trigger-footer" data-type="Qiwi.ru">
                            <div className="col col-xs-12">
                                <a href="https://www.qiwi.ru" target="_blank">
                                    <img src="icons/footer-logoQiwi.ru.png" alt="Qiwi.ru" className="btn"/>
                                </a>
                            </div>
                        </div>
                    
                </div>
                
                <div className="footerpay col-xs-4 col-sm-2">
                    
                        <div className="payment-type-trigger-footer" data-type="VTB24.ru">
                            <div className="col col-xs-12">
                                <a href="https://www.vtb24.ru" target="_blank">
                                    <img src="icons/footer-logoVTB24.ru.png" alt="VTB24.ru" className="btn"/>
                                </a>
                            </div>
                        </div>
                    
                </div>
                
                <div className="footerpay col-xs-4 col-sm-2">
                    
                        <div className="payment-type-trigger-footer" data-type="Skrill.com">
                            <div className="col col-xs-12">
                                <a href="https://www.skrill.com" target="_blank">
                                    <img src="icons/footer-logoSkrill.com.png" alt="Skrill.com" className="btn"/>
                                </a>
                            </div>
                        </div>
                    
                </div>
                
            
            </div>
        </div>
             
        );
     }
  }

export default Footer;

