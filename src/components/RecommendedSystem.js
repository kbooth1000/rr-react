import React from 'react';

import { gasSystems } from './data/gasSystems';
import { acCondenserOnly } from './data/acCondenserOnly';
import { evaporatorCoilOnly } from './data/evaporatorCoilOnly';
import { furnaceOnly } from './data/furnaceOnly';
import { heatPumpOnly } from './data/heatPumpOnly';
import { airHandlerOnly } from './data/airHandlerOnly';


import './styles/grid.css';

const RecommendedSystem = ({ sysType, sysTonnage, fullOrReplace }) => {

  const sysData = { gasSystems, acCondenserOnly, evaporatorCoilOnly, furnaceOnly, heatPumpOnly, airHandlerOnly };

  // if (sysType === 'gas' && fullOrReplace === 'full') {
  //   fullOrReplace = 'gasSystems';
  // }

  let { productTitle, productImage, pricingLevels, seers, levelDescriptions, levelFeatureLists, levelTotFinancings, levelTotPrices } = sysData[fullOrReplace][sysTonnage];

  if (sysType === '' || !sysType) {
    return <p>nothing here yet</p>
  } else if (sysType === 'electric') {
    return <div> <p>ELECTRIC UNIT</p>
      <p><i>needs data</i></p>
    </div>
  }

  return (

    <div className="RecommendedSystem">
      <div className="info-grid">
        <div className="cell title">{productTitle}</div>
        <div className="cell product-image">
          <img src={productImage} alt={`${productTitle}`} rel="noopener noreferrer" />

        </div>
        <div className="cell pricing-info">

          <div className="pricing-info-box">
            {pricingLevels.map((lvl, i) => (<section key={i} className={`pricing-info-row ${lvl.toLowerCase()}`}>
              <div className="cell level-name">
                <h3 className="pricing-level">{lvl}</h3>
                <p className="seer">{seers[i]}</p>
              </div>
              <div className="cell level-info">
                <div className="level-description">{levelDescriptions[i]}</div>
                <ul className="level-features">
                  {/* <!-- level feature list --> */}
                  {
                    levelFeatureLists[i].map(
                      (item, j) => <li key={j}>{item}</li>
                    )
                  }
                </ul>
              </div>
              <div className="cell level-price">
                <div className="price-month">${Math.floor(levelTotPrices[i] / 84)}/month</div>
                <div className="level-financing">{levelTotFinancings[i]}</div>
                <div className='level-tot-price'>${levelTotPrices[i]}</div>
              </div>
            </section>)
            )}
          </div>

        </div>
        <div className="cell finance-btn1">
          <div className="12-month-button">
            <a rel="noopener noreferrer" target="_blank" href="https://application.enerbank.com/#/link?spnum=8665104594&cid=10021&promo=RE468&loamt=" className="apply-button">12 Month <span>Same-As-Cash*</span></a>
            <aside className="hover-show">*Loans provided by EnerBank USA, Member FDIC, (1245 Brickyard Rd., Suite 600, Salt Lake City, UT 84106) on approved credit, for a limited time. Repayment terms vary from 24 to 132 months. Interest waived if repaid in 365 days. 18.58% fixed APR, effective as of August 1, 2019, subject to change. Interest starts accruing when the loan closes.</aside>
          </div>
        </div>
        <div className="cell brand-logos">
          <img src="images/brand-logos.png" alt="brand logos" />
        </div>
        <div className="cell finance-btn2">
          <div className="60-month-button">
            <a rel="noopener noreferrer" target="_blank" href="https://application.enerbank.com/#/link?spnum=8665104594&cid=10021&promo=ZRE78&loamt=" className="apply-button">0.00%<span>60-Month Loan*</span></a>
            <aside className="hover-show">*Loans provided by EnerBank USA, Member FDIC, (1245 Brickyard Rd., Suite 600, Salt Lake City, UT 84106) on approved credit, for a limited time. Repayment terms vary from 24 to 132 months. Interest waived if repaid in 365 days. 18.58% fixed APR, effective as of August 1, 2019, subject to change. Interest starts accruing when the loan closes.</aside>
          </div>
        </div>
        <footer className="cell footer">
          <img alt="Seal of the better business bureau" src="https://seal-utah.bbb.org/seals/darkgray-seal-200-65-bbb-22001531.png" />
          <img alt="Apply ##########" style={{ WebkitUserSelect: 'none', margin: 'auto' }} src="https://application.enerbank.com/content/images/MemberFDIC.png" />
          <img alt="Apply ##########" src="https://application.enerbank.com/content/images/e-b-logo.png" />
        </footer>
      </div>
    </div>
  )
}

export default RecommendedSystem;