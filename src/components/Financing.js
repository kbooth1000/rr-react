import React, { useCallback, useEffect } from 'react';

import './styles/shop.css';
import './styles/financing.css';
import './styles/info-page.css';

const Financing = props => {
  const setScrollRef = useCallback(node => {
    if (node !== null) {
      node.parentNode.parentNode.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [])

  useEffect(
    ()=>props.changeRoute('financing')
  )

  return <div className="Financing" ref={setScrollRef} style={{textAlign: 'center'}}>

    <div className="info-page">
      <h1 className="title">HVAC FINANCING 101</h1>
      <h2 style={{textAlign:'center'}}>RockRuth is the Easiest Way To Buy A New AC Unit TODAY </h2> <h3> WORRY &amp; HASSLE FREE!</h3>
      <div className="deck">
        <p>
          RockRuth is <i>NOT</i> like most other sites! We are <i>NOT</i> an E-Commerce Site where customers purchase online equipment and then are passed off to a 3rd-party company to install the equipment.
        </p>
        </div>
        <p><strong>
        RockRuth HVAC provides:</strong></p>
        <ul>
          <li>100% TRANSPARENT PRICING</li>
          <li>INSTALLATION INCLUDED</li>
          <li>10-YEAR WARRANTY</li>
        </ul>
        <i>ALL INCLUDED IN ONE PRICE BY ONE COMPANY!</i><br/>
        <p>Delivered &amp; Installed by our seasoned, licensed installation crews <br/>(who will present you with their legal certificate* on delivery)</p>
        <span style={{fontSize:'0.8rem'}}>*EPA &amp; NATE CERTIFIED<br/><br/></span>
    
      <div className="callouts">
        <aside>ONE COMPANY</aside>
        <aside>ONE INSTALLATION</aside>
        <aside>ONE LOW PRICE</aside>
      </div>
      <div className="callouts"> 
        <h4><br/>
        MAKING THE PROCESS SEAMLESS and ELIMINATING SURPRISES
        </h4></div>
      <div className="info-blurb">
      <div><br/>
      AND IF YOU don’t WANT TO PAY THAT DAY -- or for the next several years -- just pay when you wish with one of our options that have no pre-payment penalties
    
    </div>
      
      </div>

 <div className="mobile-finance-buttons">

<div className="cell finance-btn1">
  <div className="12-month-button">
    <a rel="noopener noreferrer" target="_blank" href="https://application.enerbank.com/#/link?spnum=8665104594&cid=10021&promo=RE468&loamt=" className="apply-button">12 Month <span>Same-As-Cash*</span>
      <aside className="hover-show">*Loans provided by EnerBank USA, Member FDIC, (1245 Brickyard Rd., Suite 600, Salt Lake City, UT 84106) on approved credit, for a limited time. Repayment terms vary from 24 to 132 months. Interest waived if repaid in 365 days. 18.58% fixed APR, effective as of August 1, 2019, subject to change. Interest starts accruing when the loan closes.</aside></a>
  </div>
</div>

<div className="cell finance-btn2">
  <div className="60-month-button">
    <a rel="noopener noreferrer" target="_blank" href="https://application.enerbank.com/#/link?spnum=8665104594&cid=10021&promo=ZRE78&loamt=" className="apply-button">0.00%<span>60-Month Loan*</span>
      <aside className="hover-show">*Loans provided by EnerBank USA, Member FDIC, (1245 Brickyard Rd., Suite 600, Salt Lake City, UT 84106) on approved credit, for a limited time. Repayment terms vary from 24 to 132 months. Interest waived if repaid in 365 days. 18.58% fixed APR, effective as of August 1, 2019, subject to change. Interest starts accruing when the loan closes.</aside></a>
  </div>
</div>

<div className="cell finance-btn1">
  <div className="12-month-button">
    <a rel="noopener noreferrer" target="_blank" href="https://application.enerbank.com/#/link?spnum=8665104594&cid=10021&promo=69910YRR69&loamt=" className="apply-button">6.99% <span>10-Year Loan*</span>
      <aside className="hover-show">**Loans provided by EnerBank USA, Member FDIC, (1245 Brickyard Rd., Suite 600, Salt Lake City, UT 84106) on approved credit, for a limited time. Repayment term is 120 months. 6.99% fixed APR. Minimum loan amounts apply. The first monthly payment will be due 30 days after the loan closes.</aside></a>
  </div>
</div>

</div>

<div className="info-blurb">
  <p><br/>
  <strong>
  At RockRuth Heating &amp; Air<br/></strong>
  we are changing the way customers view HVAC by making it more simple with multiple options on each aspect of the customer experience.
  </p><p>
The bottom line is that we make it affordable and easy without having a salesman in the middle. Our technicians and installers are not paid on commissions and don’t benefit off sales so its starts out with a more honest experience.
    </p><p>
Save thousands of dollars and avoid the time it takes calling around to different contractors and scheduling appointments just to get a quote. Here, you get the accurate quote including price, installation, equipment registered upon completion all by a licensed contractor. And all up front.
    </p>
    </div>
  </div>
</div>

}

export default Financing;