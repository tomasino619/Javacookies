import React, { Fragment } from 'react'


const Footer = () => {
  return (
    <Fragment>
        <footer>
                <div id="divider-foot">
                    <hr class="solid"></hr>
                </div>

                <div class="row" id="footrow1">

                    <div class="col-sm" id="footerRow1Col1">
                    </div>

                    <div class="col-sm">
                        <div class="col-sm" id="footerRow1Col2-1">
                            <img
                                src="rcpdlogo.png"
                                width="80"
                                height="80"
                                alt="placeholder"
                            />
                        </div>
                        
                        <div class="col-sm" id="footerRow1Col2-2">
                            <h9>Copyright ©2022 All rights Reserved. 
                                No parts of this publication may be reproduced, copied, or transmitted save with written permission or in accordance with the provisions...
                                Any person who does any unauthorized act in relation to this publication may be liable to criminal prosecution and civil claims for damages
                            </h9>
                        </div>

                    </div>

                    <div class="col-sm" id="footerRow1Col3">
                    </div>

                </div>

                <div class="row" id="footrow2">

                    <div class="col-sm" id="footerRow2Col1" >
                        <a href='https://www.facebook.com/rcpdfab' target="_blank">
                            <img src="facebook.png"  alt='facebook' id='facebook'></img>
                        </a>
                    </div>

                    <div class="col-sm" id="footerRow2Col2">
                        <a href='https://gmail.com/' target="_blank">
                            <img src="email.png"  alt='email' id='email'></img>
                        </a>
                    </div>

                    <div class="col-sm" id="footerRow2Col3">
                        <a href='https://www.facebook.com/rcpdfab' target="_blank">
                            <img src="phone.png"  alt='phone' id='phone'></img>
                        </a>
                    </div>
                </div>
        </footer>
    </Fragment>
  )
}

export default Footer