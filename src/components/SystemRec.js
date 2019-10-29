import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import RecommendedSystem from './RecommendedSystem';

import './styles/shop.css';

import validZipcodes from './data/zipcodes';
// import './data/electricUnits';
// import './data/gasUnits';
// import './data/replacementParts';

const SystemRec = () => {
  const [zipcode, setZipcode] = useState('');
  const [zipcodeText, setZipcodeText] = useState('');
  const [sysType, setSysType] = useState('gas');
  const [sysTon, setSysTon] = useState('2.0');
  const [fullOrReplace, setFullOrReplace] = useState('gasSystems');
  const [step2Show, setStep2Show] = useState('');
  const [step2Active, setStep2Active] = useState('');
  const [step3Show, setStep3Show] = useState('');
  const [step3Active, setStep3Active] = useState('');
  const [step4Show, setStep4Show] = useState('');
  const [step4Active, setStep4Active] = useState('');
  const [tonDropdownSelect, setTonDropdownSelect] = useState('');
  const [recShow, setRecShow] = useState(false);


  const handleZipChange = e => {
    e.preventDefault();
    setZipcodeText(e.target.value);
  }
  const handleZipSubmit = e => {
    e.preventDefault();
    setZipcode(zipcodeText);
    setStep2Active('active');
    setStep2Show('show');
  }
  const handleSysTypeSubmit = e => {
    // e.preventDefault();
    e.target.checked = 'checked';
    setSysType(e.target.value);
    setStep3Active('active');
    setStep3Show('show');
  }

  const handleSysTonSubmit = e => {
    // e.preventDefault();
    setSysTon(e.target.value);
    setStep4Active('active');
    setStep4Show('show');
    setTonDropdownSelect(e.target.value);
  }

  const handleFullOrReplaceSubmit = e => {
    setFullOrReplace(e.target.value);
    setRecShow(true);
  }

  const handleCloseModalClick = e => {
    setRecShow(!recShow)
  }


  return (
    <div className="SystemRec">
      {/* {sysType} {sysTon} {fullOrReplace} {zipcode} */}

      <div className="main">



        <main style={{ margin: '1rem 0' }}>
          <section className="recommendation-finder">
            <form onSubmit={handleZipSubmit} className={`step1 ${(validZipcodes.includes(zipcode)) ? 'hide' : 'show'} active`}>
              <img src="https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/ac-systems-parts.jpg/:/"
                alt="Display of numerous AC units and accessories." className="main-graphic" />
              <fieldset className="fieldset">
                <legend>Location:</legend>
                <p>Enter zip-code where the unit will be installed:</p>
                <input onChange={handleZipChange} value={zipcodeText} autoFocus type="text" name="zip-code" pattern="[0-9]*" inputMode="numeric" /><br />
                <input type="submit" value="Submit" className="submit-button" />
              </fieldset>
            </form>
            <aside className="aside1">{validZipcodes.includes(zipcode) ? 'Great, we serve your area.' : '' === zipcode ? '' : `Sorry, we don't serve your area yet.`}</aside>
            <form onChange={handleSysTypeSubmit} className={`step2 ${validZipcodes.includes(zipcode) ? step2Show : ''} ${step2Active}`}>
              <fieldset className="fieldset">
                <legend>Heat Source:</legend>
                <p>Is your heat source a:</p>
                <input value="gas" type="radio" name="heat-source" id="gas-furnace" />
                <label htmlFor="gas-furnace">
                  Gas Furnace
                </label>
                <br />
                <input value="electric" type="radio" name="heat-source" id="electric" /><label
                  htmlFor="electric">Electric/Heat Pump</label> <br />
              </fieldset>
            </form>
            <aside className="aside2"></aside>
            <form className={`step3 ${step3Show} ${step3Active}`}>
              <fieldset className="fieldset" style={{ display: 'flex' }}>
                <legend>Square Footage/Tonnage:</legend>
                <div>
                  <div className="footage-dropdown">
                    <p>
                      Square footage of the home:
                            </p>
                    <select onChange={handleSysTonSubmit} value={tonDropdownSelect} name="footage" className="footage">
                      <optgroup label="Square Footage">
                        <option name="nochoice" value="0">Choose square footage</option>
                        <option name="800sf" value="1.5">700-800 Sq. Ft.</option>
                        <option name="1000sf" value="2.0">800-1000 Sq. Ft.</option>
                        <option name="1200sf" value="2.5">1000-1200 Sq. Ft.</option>
                        <option name="1400sf" value="3.0">1200-1400 Sq. Ft.</option>
                        <option name="1700sf" value="3.5">1500-1700 Sq. Ft.</option>
                        <option name="2000sf" value="4.0">1800-2000 Sq. Ft.</option>
                        <option name="2500sf" value="5.0">2100-2500+ Sq. Ft.</option>
                      </optgroup>
                    </select>
                  </div>
                  <div><em>or</em></div>
                  <div className="tonnage-dropdown">
                    <p>
                      Tonnage of the existing system:
                            </p>
                    <select onChange={handleSysTonSubmit} value={tonDropdownSelect} name="tonnage" className="tonnage">
                      <optgroup label="Tonnage">
                        <option name="nochoice" value="0">Choose tonnage...</option>
                        <option name="1_5t" value="1.5">1.5 tons</option>
                        <option name="2_0t" value="2.0">2 tons</option>
                        <option name="2_5t" value="2.5">2.5 tons</option>
                        <option name="3_0t" value="3.0">3 tons</option>
                        <option name="3_5t" value="3.5">3.5 tons</option>
                        <option name="4_0t" value="4.0">4 tons</option>
                        <option name="5_0t" value="5.0">5 tons</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
              </fieldset>
            </form>

            <aside className="aside3"></aside>


            <form className={`step4 ${step4Show} ${step4Active}`}>
              <fieldset className="fieldset">
                <legend>Full System or Replacement Parts:</legend>
                <p>
                  Do you need a full system installed or are you looking for replacement
                  parts?
                    </p>
                <input onChange={handleFullOrReplaceSubmit} type="radio" name="system-or-replacements" value="full" id="full-sys" /><label
                  htmlFor="full-sys">Full System</label>
                <br />
                <br />

                <strong>Replacement Parts:</strong>
                <br />
                <input onChange={handleFullOrReplaceSubmit} type="radio" name="system-or-replacements" value="acCondenserOnly" id="acCondenserOnly" /><label
                  htmlFor="acCondenserOnly">AC Condenser Only</label>
                <br />
                <input onChange={handleFullOrReplaceSubmit} type="radio" name="system-or-replacements" value="airHandlerOnly" id="airHandlerOnly" /><label
                  htmlFor="airHandlerOnly">Air Handler Only</label>
                <br />
                <input onChange={handleFullOrReplaceSubmit} type="radio" name="system-or-replacements" value="evaporatorCoilOnly" id="evaporatorCoilOnly" /><label
                  htmlFor="evaporatorCoilOnly">Evaporator Coil Only</label>
                <br />
                <input onChange={handleFullOrReplaceSubmit} type="radio" name="system-or-replacements" value="furnaceOnly" id="furnaceOnly" /><label
                  htmlFor="furnaceOnly">Furnace Only</label>
                <br />
                <input onChange={handleFullOrReplaceSubmit} type="radio" name="system-or-replacements" value="heatPumpOnly" id="heatPumpOnly" /><label
                  htmlFor="heatPumpOnly">Heat Pump Only</label>
                <br />
              </fieldset>
            </form>

            <aside className="aside4"></aside>

            <div className={`recommendation ${recShow ? 'show' : ''}`}>
              <button className="close-modal" onClick={handleCloseModalClick}>X</button>
              {/* FULL SYSTEM BOX   ##################### */}
              <RecommendedSystem sysType={sysType} sysTonnage={sysTon} fullOrReplace={(sysType === 'gas' && fullOrReplace === 'full') ? 'gasSystems' : fullOrReplace} />

            </div>
            {/* REPLACEMENT PARTS BOX   ############### */}
            <div className="replacement-parts-box">

            </div>

            {/* END recommendation  */}
          </section>
        </main>

      </div>

    </div >
  )
}

export default SystemRec;