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
            <input onChange={handleChoosePart} type="radio" name="system-or-replacements" value="acCondenserOnly" id="acCondenserOnly" checked={(replacementPart === 'acCondenserOnly') ? true : false} /><label
              htmlFor="acCondenserOnly">AC Condenser</label></span>
          <wbr></wbr>
          <span className="nowrap">
            <input onChange={handleChoosePart} type="radio" name="system-or-replacements" value="airHandlerOnly" id="airHandlerOnly" checked={(replacementPart === 'airHandlerOnly') ? true : false} /><label
              htmlFor="airHandlerOnly">Air Handler</label></span>
          <wbr></wbr>
          <span className="nowrap">
            <input onChange={handleChoosePart} type="radio" name="system-or-replacements" value="evaporatorCoilOnly" id="evaporatorCoilOnly" checked={(replacementPart === 'evaporatorCoilOnly') ? true : false} /><label
              htmlFor="evaporatorCoilOnly">Evaporator Coil</label></span>
          <wbr></wbr>
          <span className="nowrap">
            <input onChange={handleChoosePart} type="radio" name="system-or-replacements" value="furnaceOnly" id="furnaceOnly" checked={(replacementPart === 'furnaceOnly') ? true : false} /><label
              htmlFor="furnaceOnly">Furnace</label></span>
          <wbr></wbr>
          <span className="nowrap">
            <input onChange={handleChoosePart} type="radio" name="system-or-replacements" value="heatPumpOnly" id="heatPumpOnly" checked={(replacementPart === 'heatPumpOnly') ? true : false} /><label
              htmlFor="heatPumpOnly">Heat Pump</label></span>
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