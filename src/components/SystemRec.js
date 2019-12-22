import React, { useState, useCallback, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import RecommendedSystem from './RecommendedSystem';
import RecommendedReplacements from './RecommendedReplacements';

import './styles/shop.css';

import validZipcodes from './data/zipcodes';


const SystemRec = (props, { ...rest }) => {
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
  const [showHint, setShowHint] = useState(false);
  const [hintText, setHintText] = useState(`
  Lorem ipsum, dolor sit amet
  `);

  let hintTexts = [
    <section><h4>ELECTRIC/HEAT PUMP</h4><p>Straight AC units are basic air conditioning. Heat strips are added to give a system the ability to heat in the winter. On the other side of the token an <strong>Electric Heat Pump</strong> uses refrigerant to both cool and heat the home with what is called a reversing valve allowing refrigerant to pass back and forth through the air handler and heat pump.</p>
    <p>
    <h4>GAS FURNACE</h4>
    <strong>Gas systems</strong> burn natural gas for heat inside a furnace. If you receive a monthly gas bill, chances are you have a gas furnace.</p></section>,
    <section><h4>Choose what is the needed Tonnage / Square Footage?</h4>
<p>The square footage estimator is generally accurate to picking the correct unit size. Keep in mind, every purchase has a pre-install job site inspection where your contractor will be able to verify that you ordered the correct unit, or make any necessary changes to insure you are replacing the correct unit size, & in some cases show you why you DONT need to replace the unit which happens more times than not.
</p>
<p>
NOTE: If you have multiple AC unit on your home, you can use the same square footage estimator based on how much area each unit covers.</p></section>,
    <section>3 Number Three hint text</section>,
    <section>4 Number Four hint text</section>
  ]

  useEffect(
    () => props.changeRoute('shop')
  )

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

  const handleHintClick = e => {
    setShowHint(!showHint);
    // if (!showHint) setHintText('');
    // setHintText(e.target.dataset.hintText);
  }

  const fullOrReplaceComponent = (sysType, sysTon, fullOrReplace) => {
    if (fullOrReplace === 'full') {
      return <RecommendedSystem sysType={sysType} sysTonnage={sysTon} fullOrReplace={(sysType === 'gas') ? 'gasSystems' : 'electricSystems'} />
    } else return <RecommendedReplacements sysType={sysType} sysTonnage={sysTon} fullOrReplace={fullOrReplace} />
  }

  const setScrollRef = useCallback(node => {
    if (node !== null) {
      node.parentNode.parentNode.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

    }
  }, [])

  return (
    <div className="SystemRec" ref={(e) => setScrollRef(e)}>
      {/* {sysType} {sysTon} {fullOrReplace} {zipcode} */}

      <div className="main">


        <main style={{ margin: '1rem 0' }}>

          <aside className={`hint ${showHint ? 'show-hint' : ''} `} onClick={handleHintClick}>
            <span>
              {hintText}
            </span>
          </aside>

          <section className="recommendation-finder">
            <h1 className="title" style={{
              marginLeft: '50%',
              color: 'var(--main-blue)',
              fontSize: '2.5rem',
              fontWeight: '900',
              transform: 'translateX(-50%)',
              display: 'inline-block'
            }}>SHOP NOW</h1>
            <form onSubmit={handleZipSubmit} className={`step step1 ${(validZipcodes.includes(zipcode)) ? 'hide' : 'show'} active`}>

              <h3 style={{ textAlign: 'center', width: '90%', margin: 'auto' }}>To get a custom recommendation, just answer a few questions: <br /><br /> </h3>

              <fieldset className="fieldset">
                <legend>Location:</legend>
                <p>What is the <strong>zip code</strong> where the unit will be installed:</p>
                <input onChange={handleZipChange} value={zipcodeText} autoFocus type="text" name="zip-code" pattern="[0-9]*" inputMode="numeric" style={{ width: '60%' }} /><br />
                <input type="submit" value="Submit" className="submit-button" />
                <aside className="aside1">{'' === zipcode || !zipcode ? '' : !validZipcodes.includes(zipcode) ? `Sorry, we don't serve your area yet.` : `Great, we serve your area.`}</aside>
              </fieldset>

            </form>
            <img src="https://img1.wsimg.com/isteam/ip/ec3d7ae1-84c5-494d-939d-ab7eac153ebf/ac-systems-parts.jpg/:/"
              alt="Display of numerous AC units and accessories." className={`main-graphic ${(validZipcodes.includes(zipcode)) ? 'hide' : 'show'} active`} />


            <form onChange={e => {
              handleSysTypeSubmit(e);
              handleStepChange(e, 1);
            }
            }
              className={`step step2 ${validZipcodes.includes(zipcode) ? step2Show : ''} ${step2Active}`}>          <br />


              <fieldset className="fieldset">
                <aside className="hint-button" onClick={() => {
                  setHintText(hintTexts[0]);
                  handleHintClick();
                }} style={{ color: 'var(--hi-blue)', fontWeight: '900', cursor: 'pointer' }}>?</aside>
                <legend>Heat Source:</legend>
                <p>What is your current heat source:</p>
                <section>
                  <label htmlFor="gas-furnace" className={sysType === 'gas' ? 'selected' : ''}>
                    <input value="gas" type="radio" name="heat-source" id="gas-furnace" />
                    Gas Furnace
                </label>
                  <label className={sysType === 'electric' ? 'selected' : ''}
                    htmlFor="electric">
                    <input value="electric" type="radio" name="heat-source" id="electric" /> Electric / Heat Pump</label>
                </section>
              </fieldset>
            </form>
            <form className={`step step3 ${step3Show} ${step3Active}`}>
              <fieldset className="fieldset" style={{ display: 'flex' }}>
                <aside className="hint-button" onClick={() => {
                  setHintText(hintTexts[1]);
                  handleHintClick();
                }} style={{ color: 'var(--hi-blue)', fontWeight: '900', cursor: 'pointer' }}>?</aside>
                <legend>Square Footage/Tonnage:</legend>
                <div>
                  <div className="footage-dropdown">

                    <p>
                      Square footage of the home:

                  <em> or </em>

                      Tonnage of the existing system:
</p>
                    <section>
                      <select onChange={e => {
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

                      <select onChange={e => {
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
                    </section>
                  </div>
                </div>
              </fieldset>
            </form>

            <form className={`step step4 ${step4Show} ${step4Active}`}>
              <fieldset className="fieldset">
                <aside className="hint-button" onClick={() => {
                  setHintText(hintTexts[2]);
                  handleHintClick();
                }} style={{ color: 'var(--hi-blue)', fontWeight: '900', cursor: 'pointer' }}>?</aside>
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

              <div className="close-modal" value="" onClick={handleCloseModalClick}></div>

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