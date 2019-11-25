import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { gasSystems } from './data/gasSystems';
import { acCondenserOnly } from './data/acCondenserOnly';
import { evaporatorCoilOnly } from './data/evaporatorCoilOnly';
import { furnaceOnly } from './data/furnaceOnly';
import { heatPumpOnly } from './data/heatPumpOnly';
import { airHandlerOnly } from './data/airHandlerOnly';
import { electricSystems } from './data/electricSystems';

import './styles/info-page.css';

const ForSale = () => {
  const setScrollRef = useCallback(node => {
    if (node !== null) {
      node.parentNode.parentNode.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

    }
  }, [])

  const sysData = { gasSystems, electricSystems, acCondenserOnly, evaporatorCoilOnly, furnaceOnly, heatPumpOnly, airHandlerOnly };
  const tonnages = ['1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '5.0']

  let partsKeys = Object.keys(sysData);
  let partsValues = partsKeys.map(part => sysData[part]);
  console.log(partsValues.map(product => Object.keys(product)))

  let partsEntries = Object.entries(sysData);

  return (
    <div className="ForSale" ref={setScrollRef}>
      <main style={{ margin: '1rem 0' }}>
        <div className="info-page">
          <h1 className="title">HVAC EQUIPMENT FOR SALE</h1>
          <div className="info-blurb">
            <ul className="products">
              {partsEntries.map(([name, product], i) => (
                <li className="product-box" key={i}>
                  <div className="product-img">
                    <img src={product.defaultImgUrl} alt="" />
                  </div>
                  <h2>{product.mainTitle}</h2>

                  <ul className="product-options">
                    {
                      tonnages.map((tonnage, i) => <li key={i}> <Link
                        to={
                          `/replacement-parts?sysTypePm=${(name === 'electricSystems' || name === 'heatPumpOnly') ? 'electric' : 'gas'}&sysTonnagePm=${tonnage}&fullOrReplacePm=${name}`
                        }>{tonnage} ton <span className="pricing-link" style={{ fontWeight: '900', color: '#00AEEF' }}>(see pricing)</span></Link>
                      </li>
                      )
                    }
                  </ul>

                </li>

              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ForSale;