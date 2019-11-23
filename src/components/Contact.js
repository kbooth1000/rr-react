import React, { useCallback } from 'react';

import './styles/shop.css';
import './styles/info-page.css';

const Contact = () => {
  const setScrollRef = useCallback(node => {
    if (node !== null) {
      node.parentNode.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [])

  return <div className="Contact" ref={setScrollRef}>

    <div className="info-page">
      <h1 className="title"> HVAC FINANCING 101</h1>
      <div className="deck">
        <p><i>For most people, HVAC contact is a large expense, and can be challenging
              for anyone, especially a new homeowner. While paying out of pocket is the
              best option, there are plenty of options to finance the HVAC system that
              is right for you.</i></p>
        <p>The cost to install a new HVAC system can vary based on:
<ul>
            <li>The type of equipment being installed (full system or replacement parts);</li>
            <li>The existing equipment (age and location);</li>
            <li>And the type of install (new install or replace existing)</li>
          </ul>
        </p>
      </div>

      <div className="info-blurb">
        <h2>What to Know Before You Buy</h2>
        <p><strong>Home Equity</strong></p>
        <p>
          Borrowing against the equity in your home can often be a good way to
          finance home improvements. This option has less interest and is tax-deductible,
          but there are risks. Falling behind on your payment could cost you not only
            your HVAC system but your home.</p>

        <p><strong>Private Lenders</strong></p>
        <p>You can also borrow from private lenders, such as banks or credit unions.
    The interest rates and max amounts available to borrow will vary, but many banks
        have low-interest rates for these types of loans.</p>

        <p><strong>Loan Programs</strong></p>
        <p>There are loan programs, such as the Federal Housing Administration’s (FHA)
        PowerSaver Loan Program, that allow you to borrow up to $7,500 without putting
        up your home as collateral. However, you must have home equity to participate.</p>

        <p><strong>Credit Card Companies</strong></p>
        <p>Talk to your credit card company about charging this large of a purchase to
        your card. Know that there is a possibility of higher interest rates.</p>

        <p><strong>Utility Companies</strong></p>
        <p>Utility companies can also help by charging monthly payments for your new HVAC
        system on your electric bill. They often provide low-interest rates if you choose
              energy-efficient systems.</p>
        <div className="finance-buttons" style={{ marginTop: '4rem', width: '100%', display: 'flex', justifyContent: 'space-around' }}>
          <div class="cell finance-btn1" style={{ width: '9rem', textAlign: 'center' }}>
            <div class="12-month-button">
              <a rel="noopener noreferrer" target="_blank" href="https://application.enerbank.com/#/link?spnum=8665104594&amp;cid=10021&amp;promo=RE468&amp;loamt="
                class="apply-button">12 Month <span>Same-As-Cash*</span><aside class="hover-show">*Loans provided by EnerBank USA, Member FDIC, (1245 Brickyard Rd.,
                Suite 600, Salt Lake City, UT 84106) on approved credit, for a limited time. Repayment terms vary from 24 to 132 months. Interest waived if repaid
                      in 365 days. 18.58% fixed APR, effective as of August 1, 2019, subject to change. Interest starts accruing when the loan closes.</aside></a>
            </div>
          </div>
          <div class="cell finance-btn2" style={{ width: '9rem', textAlign: 'center' }}>
            <div class="60-month-button">
              <a rel="noopener noreferrer" target="_blank" href="https://application.enerbank.com/#/link?spnum=8665104594&amp;cid=10021&amp;promo=ZRE78&amp;loamt="
                class="apply-button">0.00%<span>60-Month Loan*</span><aside class="hover-show">*Loans provided by EnerBank USA, Member FDIC, (1245 Brickyard Rd.,
                Suite 600, Salt Lake City, UT 84106) on approved credit, for a limited time. Repayment terms vary from 24 to 132 months. Interest waived if repaid
                      in 365 days. 18.58% fixed APR, effective as of August 1, 2019, subject to change. Interest starts accruing when the loan closes.</aside></a>
            </div>
          </div>
        </div>
      </div></div>
  </div>
}

export default Contact;