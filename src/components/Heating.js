import React, { useCallback, useEffect } from 'react';

import './styles/info-page.css';
import heatingUnitImg from './images/heating-unit-ceiling.jpg';
import furnaceRepairs from './images/furnace_repairs.jpg';
import ductwork from './images/ductwork.jpg';
import livingRoom from './images/living_room.jpg';
import hvacFans from './images/hvac_fans.jpg';
import acCondenser from './images/ACCondenser.jpg';

const Heating = props => {

      const setScrollRef = useCallback(node => {
            if (node !== null) {
                  node.parentNode.parentNode.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                  });
            }
      }, [])
 
    useEffect(
      ()=>props.changeRoute('cooling')
    )

  return <div className="Heating" ref={setScrollRef}>

            <div className="info-page">
                  <h1 className="title"> HEATING INSTALLATION & REPAIR </h1>
                  <div className="info-blurb">
                        <h2> DON&apos;T NEGLECT YOUR HEATING SYSTEM</h2> <img src={
                              heatingUnitImg
                        }
                              alt="" />
                        <p> <i> Heating systems don&apos;t tend to break down during the summer;
                  they tend to stop working during the heart of winter, when the weather is at its coldest.Don&apos;t risk your comfort and property
                  by putting off the heating system service you need.We can thoroughly inspect your equipment and
                  let you know of any problems(or potential problems) we find.This way, you can nip your heating
      system issues in the bud before the cold sets in . </i></p> </div>

                  <div className="info-blurb">
                        <h2> FURNACE HEATERS & REPAIR </h2> <img src={
                              furnaceRepairs
                        }
                              alt="" />
                        <p> <i> Need a heating solution
                  for your home? Is your current furnace in
                        total disrepair? At RockRuth Heating & Air in Atlanta, GA, our team provides the highest level of quality in furnace installations and replacements.When you hire us, you can rest assured that all jobs are performed by knowledgeable technicians.Our experienced staff is dedicated to serving your needs, and we&apos;re ready to put our knowledge
                  to work
      for you. </i></p> </div>

                  <div className="info-blurb">
                        <h2> FURNACE REPAIR </h2> <img src={
                              acCondenser
                        }
                              alt="" />
                        <p> <i> Many people tend to ignore or forget about their furnaces until they s top working.When your furnace stops functioning properly, you&apos;ll want
                  an experienced professional&apos;s help to make sure the problem doesn'
                  t quickly get worse.That&apos;s where RockRuth Heating &amp; Air comes in. As an
      established HVAC company in Atlanta, GA, we have the tools and skills to provide you with accurate, cost - effective furnace repair service </i></p> </div>

                  <div className="info-blurb">
                        <h2> HOW WE CAN HELP </h2> <img src={
                              livingRoom
                        }
                              alt="" />
                        <p> <i> By having your furnace serviced on a regular basis, you may be able to avoid more extensive problems down the line. At RockRuth HVAC we&apos;re
                  equipped to
                  catch furnace problems early on, ongoing maintenance from RockRuth Heating And Air could mean preventing a total malfunction at a later point in time.To learn more about our furnace service packages,
            call Today &amp; also check out our Service Maintenance Plan! </i>
                        </p> </div>

                  <div className="info-blurb">
                        <h2> WE&apos;LL KEEP YOU WARM</h2> <img src={
                              hvacFans
                        }
                              alt="" />
                        <p> <i> At RockRuth Heating And Air, we provide the highest level of quality in
            all of our heating system installation or repair projects, and all jobs are performed by highly - experienced HVAC contractors you can trust.We also aim to keep our prices reasonable and affordable, and we offer a variety heating systems to suit your needs and budget whether its heating repair or a furnace installation. </i></p>
                  </div>

                  <div className="info-blurb">
                        <h2> DEPENDABLE SERVICE </h2> <img src={
                              ductwork
                        }
                              alt="" />
                        <p> <i> At RockRuth Heating And Air, we go out of our way to provide the thorough,
                        dependable repair work you deserve.When you bring us in to fix your thermostat, you can rest assured that we&apos;ll take the time to do the job
      right.We cater to commercial and residential customers alike, and we work hard to complete our repairs quickly and efficiently.We provide heating repair, maintence plans to keep you system running efficiently to extend the life of the system and total system installation. </i></p>
                  </div>

            </div>

      </div>


}

export default Heating;