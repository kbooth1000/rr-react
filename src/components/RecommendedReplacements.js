import React, { useState } from 'react';
import RecommendedSystem from './RecommendedSystem';

import { gasSystems } from './data/gasSystems';
import { acCondenserOnly } from './data/acCondenserOnly';
import { evaporatorCoilOnly } from './data/evaporatorCoilOnly';
import { furnaceOnly } from './data/furnaceOnly';
import { heatPumpOnly } from './data/heatPumpOnly';
import { airHandlerOnly } from './data/airHandlerOnly';


import './styles/grid.css';

const RecommendedReplacements = ({ sysType, sysTonnage, fullOrReplace }) => {

  const sysData = { gasSystems, acCondenserOnly, evaporatorCoilOnly, furnaceOnly, heatPumpOnly, airHandlerOnly };

  const [replacementPart, setReplacementPart] = useState('');
  const [priceGridShow, setPriceGridShow] = useState('hide');

  if (sysType === '' || !sysType) {
    return <p>nothing here yet</p>
  } else if (sysType === 'electric') {
    return <div> <p>ELECTRIC UNIT</p>
      <p><i>needs data</i></p>
    </div>
  }

  const handleChoosePart = e => {
    setReplacementPart(e.target.value);
    setPriceGridShow('show');
  }

  return (

    <div className="RecommendedReplacements">

      <form className={`step4 show`}>
        <fieldset className="fieldset">
          <p>Choose which replacement part you need:</p>
          <span className="nowrap">
            <label className={replacementPart === 'acCondenserOnly' ? 'selected' : ''}
              htmlFor="acCondenserOnly">
              <input onChange={handleChoosePart} type="radio" name="system-or-replacements" value="acCondenserOnly" id="acCondenserOnly" checked={(replacementPart === 'acCondenserOnly') ? true : false} />AC Condenser</label></span>
          <wbr></wbr>
          <span className="nowrap">
            <label className={replacementPart === 'airHandlerOnly' ? 'selected' : ''}
              htmlFor="airHandlerOnly">
              <input onChange={handleChoosePart} type="radio" name="system-or-replacements" value="airHandlerOnly" id="airHandlerOnly" checked={(replacementPart === 'airHandlerOnly') ? true : false} />Air Handler</label></span>
          <wbr></wbr>
          <span className="nowrap">
            <label className={replacementPart === 'evaporatorCoilOnly' ? 'selected' : ''}
              htmlFor="evaporatorCoilOnly">
              <input onChange={handleChoosePart} type="radio" name="system-or-replacements" value="evaporatorCoilOnly" id="evaporatorCoilOnly" checked={(replacementPart === 'evaporatorCoilOnly') ? true : false} />Evaporator Coil</label></span>
          <wbr></wbr>
          <span className="nowrap">
            <label className={replacementPart === 'furnaceOnly' ? 'selected' : ''}
              htmlFor="furnaceOnly">
              <input onChange={handleChoosePart} type="radio" name="system-or-replacements" value="furnaceOnly" id="furnaceOnly" checked={(replacementPart === 'furnaceOnly') ? true : false} />Furnace</label></span>
          <wbr></wbr>
          <span className="nowrap">
            <label className={replacementPart === 'heatPumpOnly' ? 'selected' : ''}
              htmlFor="heatPumpOnly">
              <input onChange={handleChoosePart} type="radio" name="system-or-replacements" value="heatPumpOnly" id="heatPumpOnly" checked={(replacementPart === 'heatPumpOnly') ? true : false} />Heat Pump</label></span>
          <br />

        </fieldset>
      </form>
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