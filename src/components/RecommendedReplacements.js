import React, { useState } from 'react';
import RecommendedSystem from './RecommendedSystem';

import { gasSystems } from './data/gasSystems';
import { acCondenserOnly } from './data/acCondenserOnly';
import { evaporatorCoilOnly } from './data/evaporatorCoilOnly';
import { furnaceOnly } from './data/furnaceOnly';
import { heatPumpOnly } from './data/heatPumpOnly';
import { airHandlerOnly } from './data/airHandlerOnly';
import { electricUnits } from './data/electricUnits';

import acCondenserOnlyPic from './images/replacement-parts/ac-condenser.webp';
import evaporatorCoilOnlyPic from './images/replacement-parts/evaporator-coil.png';
import furnaceOnlyPic from './images/replacement-parts/furnace.webp';
import heatPumpOnlyPic from './images/replacement-parts/heat-pump.webp';
import airHandlerOnlyPic from './images/replacement-parts/air-handler.png';


import './styles/grid.css';

const RecommendedReplacements = ({ sysType, sysTonnage, fullOrReplace }) => {

  const sysData = { gasSystems, electricUnits, acCondenserOnly, evaporatorCoilOnly, furnaceOnly, heatPumpOnly, airHandlerOnly };

  const [replacementPart, setReplacementPart] = useState('');
  const [priceGridShow, setPriceGridShow] = useState('hide');

  const handleChoosePart = e => {
    setReplacementPart(e.target.value);
    setPriceGridShow('show');
  }

  return (

    <div className="RecommendedReplacements">

      <form className={`step4 show`}>
        <fieldset className="fieldset">
          <p>Which replacement part do you need:</p>
          <div style={{display: 'flex', justifyContent: 'center', flexWrap:'wrap'}}>
          <span className="nowrap">
            <label className={replacementPart === 'acCondenserOnly' ? 'selected' : ''}
              htmlFor="acCondenserOnly">
              <input onChange={handleChoosePart} type="radio" name="system-or-replacements" value="acCondenserOnly" id="acCondenserOnly" checked={(replacementPart === 'acCondenserOnly') ? true : false} />AC Condenser<br />
              <img className="thumb-pic" src={
                acCondenserOnlyPic
              }
                alt="" />
            </label></span>
          <wbr></wbr>
          <span className="nowrap">
            <label className={replacementPart === 'airHandlerOnly' ? 'selected' : ''}
              htmlFor="airHandlerOnly">
              <input onChange={handleChoosePart} type="radio" name="system-or-replacements" value="airHandlerOnly" id="airHandlerOnly" checked={(replacementPart === 'airHandlerOnly') ? true : false} />Air Handler<br />
              <img className="thumb-pic" src={
                airHandlerOnlyPic
              }
                alt="" />
            </label></span>
          <wbr></wbr>
          <span className="nowrap">
            <label className={replacementPart === 'evaporatorCoilOnly' ? 'selected' : ''}
              htmlFor="evaporatorCoilOnly">
              <input onChange={handleChoosePart} type="radio" name="system-or-replacements" value="evaporatorCoilOnly" id="evaporatorCoilOnly" checked={(replacementPart === 'evaporatorCoilOnly') ? true : false} />Evaporator Coil<br />
              <img className="thumb-pic" src={
                evaporatorCoilOnlyPic
              }
                alt="" />
                </label></span>
          <wbr></wbr>
          <span className="nowrap">
            <label className={replacementPart === 'furnaceOnly' ? 'selected' : ''}
              htmlFor="furnaceOnly">
              <input onChange={handleChoosePart} type="radio" name="system-or-replacements" value="furnaceOnly" id="furnaceOnly" checked={(replacementPart === 'furnaceOnly') ? true : false} />Furnace
             <br />
              <img className="thumb-pic" src={
                furnaceOnlyPic
              }
                alt="" />
            </label></span>
          <wbr></wbr>
          <span className="nowrap">
            <label className={replacementPart === 'heatPumpOnly' ? 'selected' : ''}
              htmlFor="heatPumpOnly">
              <input onChange={handleChoosePart} type="radio" name="system-or-replacements" value="heatPumpOnly" id="heatPumpOnly" checked={(replacementPart === 'heatPumpOnly') ? true : false} />Heat Pump
             <br />
              <img className="thumb-pic" src={
                heatPumpOnlyPic
              }
                alt="" />
            </label></span>
            </div>
          <br />

        </fieldset>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={`price-grid  ${priceGridShow}`}>
        <RecommendedSystem sysType={sysType} sysTonnage={sysTonnage} fullOrReplace={(sysType === 'gas' && replacementPart === 'full') ? 'gasSystems' : replacementPart} />
      </div>

    </div>
  )
}

export default RecommendedReplacements;