import React, { useState, useCallback } from 'react';
// import { Link } from 'react-router-dom';
import RecommendedSystem from './RecommendedSystem';
import RecommendedReplacements from './RecommendedReplacements';

import './styles/shop.css';

import validZipcodes from './data/zipcodes';


const SystemRec = () => {
  const [zipcode, setZipcode] = useState('');
  const [zipcodeText, setZipcodeText] = useState('');
  const [sysType, setSysType] = useState('');
  const [sysTon, setSysTon] = useState('2.0');
  const [fullOrReplace, setFullOrReplace] = useState('gasSystems');
  const [aside1Show, setAside1Show] = useState('');
  const [step2Show, setStep2Show] = useState('');
  const [step2Active, setStep2Active] = useState('');
  const [step3Show, setStep3Show] = useState('');
  const [step3Active, setStep3Active] = useState('');
  const [step4Show, setStep4Show] = useState('');
  const [step4Active, setStep4Active] = useState('');
  const [tonDropdownSelect, setTonDropdownSelect] = useState('');
  const [recShow, setRecShow] = useState(false);
  const [fullOrReplaceSelected, setFullOrReplaceSelected] = useState('');
  const [stepNum, setStepNum] = useState(0);



  const handleZipChange = e => {
    e.preventDefault();
    setZipcodeText(e.target.value);
  }
  const handleZipSubmit = e => {
    e.preventDefault();
    setZipcode(zipcodeText);
    setStep2Active('active');
    setStep2Show('show');
    setAside1Show('show');
  }
  const handleStepChange = (e, stepNum) => {
    e.preventDefault();
    setStepNum(stepNum);
  }

  const handleSysTypeSubmit = e => {
    // e.preventDefault();
    e.target.checked = 'checked';
    setSysType(e.target.value);
    setStep3Active('active');
    setStep3Show('show');
    setFullOrReplace('');
  }

  const handleSysTonSubmit = e => {
    // e.preventDefault();
    setSysTon(e.target.value);
    setStep4Active('active');
    setStep4Show('show');
    setTonDropdownSelect(e.target.value);
    setFullOrReplace('');
  }

  const handleFullOrReplaceSubmit = e => {
    setFullOrReplace(e.target.value);
    setFullOrReplaceSelected(e.target.value);
    setRecShow(true);
  }

  const handleCloseModalClick = e => {
    setRecShow(!recShow)
  }

  const fullOrReplaceComponent = (sysType, sysTon, fullOrReplace) => {
    if (fullOrReplace === 'full') {
      return <RecommendedSystem sysType={sysType} sysTonnage={sysTon} fullOrReplace={(sysType === 'gas') ? 'gasSystems' : 'electricSystems'} />
    } else return <RecommendedReplacements sysType={sysType} sysTonnage={sysTon} fullOrReplace={fullOrReplace} />
  }

  const setScrollRef = useCallback(node => {
    if (node !== null) {
      node.parentNode.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

    }
  }, [])

  return (
    <div className="SystemRec" ref={(e)=>setScrollRef(e)}>
      {/* {sysType} {sysTon} {fullOrReplace} {zipcode} */}

      <div className="main">

        <main style={{ margin: '1rem 0' }}>

          <section className="recommendation-finder">

            <h1 className="title" style={{ fontWeight: '700', color: '#000', fontSize: '2rem', float: 'right', marginRight: '5rem' }}>SHOP NOW</h1>

            <form onSubmit={handleZipSubmit} className={`step1 ${(validZipcodes.includes(zipcode)) ? 'hide' : 'show'} active`}>
              <img src="https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/ac-systems-parts.jpg/:/"
                alt="Display of numerous AC units and accessories." className="main-graphic" />
              <fieldset className="fieldset">
                <legend>Location:</legend>
                <p>Enter zip-code where the unit will be installed:</p>
                <input onChange={handleZipChange} value={zipcodeText} autoFocus type="text" name="zip-code" pattern="[0-9]*" inputMode="numeric" /><br />
                <input type="submit" value="Submit" className="submit-button" />
                <aside className="aside1">{'' === zipcode || !zipcode ? '' : !validZipcodes.includes(zipcode) ? `Sorry, we don't serve your area yet.` : `Great, we serve your area.`}</aside>
              </fieldset>

            </form>


            <form onChange={e=>{
                handleSysTypeSubmit(e);
                handleStepChange(e, 1);
              }
            }
              className={`step2 ${validZipcodes.includes(zipcode) ? step2Show : ''} ${step2Active}`}>          <br />

              <fieldset className="fieldset">
                <legend>Heat Source:</legend>
                <p>Is your heat source a:</p>
                <label htmlFor="gas-furnace" className={sysType === 'gas' ? 'selected' : ''}>
                  <input value="gas" type="radio" name="heat-source" id="gas-furnace" />
                  Gas Furnace
                </label>
                <label className={sysType === 'electric' ? 'selected' : ''}
                  htmlFor="electric">
                  <input value="electric" type="radio" name="heat-source" id="electric" /> Electric / Heat Pump</label>
                <br />
              </fieldset>
            </form>
            <form className={`step3 ${step3Show} ${step3Active}`}>
              <fieldset className="fieldset" style={{ display: 'flex' }}>
                <legend>Square Footage/Tonnage:</legend>
                <div>
                  <div className="footage-dropdown">
                    <p>
                      Square footage of the home:
                            </p>
                    <select onChange={e=>{
                handleSysTonSubmit(e);
                handleStepChange(e, 2);
              }} value={tonDropdownSelect} name="footage" className="footage">
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
                    <select onChange={e=>{
                      handleSysTonSubmit(e);
                      handleStepChange(e, 3);
                    }
                    } value={tonDropdownSelect} name="tonnage" className="tonnage">
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

            <form className={`step4 ${step4Show} ${step4Active}`}>
              <fieldset className="fieldset">
                <legend>Full System or Replacement Parts:</legend>
                <p>
                  Do you need a full system installed or are you looking for replacement
                  parts?
                    </p>
                <label className={fullOrReplace === 'full' ? 'selected' : ''}
                  htmlFor="full-sys" >
                  <input onChange={handleFullOrReplaceSubmit} type="radio" name="system-or-replacements" value="full" id="full-sys" checked={(fullOrReplace === 'full') ? true : false} />Full System</label>

                <label className={fullOrReplace === 'replacement' ? 'selected' : ''}
                  htmlFor="replacement">
                  <input onChange={handleFullOrReplaceSubmit} type="radio" name="system-or-replacements" value="replacement" id="replacement" checked={(fullOrReplace === 'replacement') ? true : false} />Replacement Parts</label>
                <br />

              </fieldset>
            </form>

            <div className={`recommendation ${recShow ? 'show' : ''}`}>

              <button className="close-modal" value="" onClick={handleCloseModalClick}>X</button>

              {/* FULL SYSTEM BOX   ##################### */}

              {fullOrReplaceComponent(sysType, sysTon, fullOrReplace)}

            </div>

            {/* END recommendation  */}
          </section>
        </main>

      </div>

    </div >
  )
}

export default SystemRec;