import React, { useCallback } from 'react';

import './styles/info-page.css';
import ductwork from './images/ductwork.webp';
import manWithFan from './images/manWithFan.webp';
import ductClean from './images/ductClean.webp';
import bigFan from './images/bigFan.webp';
import units from './images/units.webp';
import serviceGuy from './images/serviceGuy.webp';


const Cooling = () => {

    const setScrollRef = useCallback(node => {
        if (node !== null) {
            node.parentNode.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

        }
    }, [])

    return (
        <div className="Cooling" ref={setScrollRef}>

            <div className="info-page">
                <h1 className="title"> AIR CONDITIONING INSTALLATION & REPAIR</h1>
                <div className="info-blurb">

                    <h2>RockRuth Heating &amp; Air serving Atlanta</h2> <img src={
                        serviceGuy
                    }
                        alt="" />
                    <p><i>RockRuth Heating & Air has a history of serving the air conditioning
                        repair needs of those in the Atlanta Area. Our trained technicians have
                        the knowledge to address all heating & air issues that you'll encounter,
                        and because we realize that you depend on your air conditioning system
                        to maintain comfort in your home or business, our staff insists on punctual
                service. </i></p>
                    <p><strong>HIGH-QUALITY WORK</strong></p>
                    <p>Because we value your comfort, we'll arrive at your location with the
                        professional technicians and tools to diagnose the reasons behind your
                        HVAC system's problem. After we identify the problem's cause, we'll
                        generate an estimate that allows you to move forward with a better
                        understanding of the labor and materials that are required. If you'd like
                        to keep your system in optimal condition, we can provide routine service
                that may extend the life of your system.</p>
                </div>

                <div className="info-blurb">

                    <h2>HVAC Services for Residential &amp; Commercial</h2>
                    <img src={
                        units
                    }
                        alt="" />
                    <p><strong>RESIDENTIAL SERVICES</strong></p>
                    <ul>
                        <li>AC Installation</li>
                        <li>AC Repair & Service</li>
                        <li>AC Maintenance</li>
                        <li>Duct Cleaning</li>
                        <li>Heat Pump Service</li>
                        <li>Heating Installtion</li>
                        <li>Heating Repair & Service</li>
                        <li>Heating Installation</li>
                        <li>Furnace Services</li>
                        <li>Emergency HVAC Services</li>
                        <li>Thermostat Installation</li>
                        <li>Water Heaters</li>
                        <li>Indoor Air Quality Service</li>
                    </ul>
                    <p><strong>COMMERCIAL SERVICES:</strong></p>
                    <p><ul><li>Commercial Heating & Air Conditioning</li>
                        <li>Rooftop HVAC Service</li>
                        <li>Commercial Electric Repair & Maintenance</li></ul></p>
                </div>

                <div className="info-blurb">
                    <h2>Current Specials & Discounts</h2>
                    <img src={
                        bigFan
                    }
                        alt="" />
                    <p><strong>-FREE ESTIMATES!!!</strong>
                        <ul>
                            <li>Residential & Commercial - Free </li>
                            <li>Duct Cleaning with All Full System Replacements (Value $1000) - $69 </li>
                            <li>Service Call/Free With Repair - $79 </li>
                            <li>Heat Tune Up - 2 Ton Gas Furnace Special Starting @ $1398 (40,000 BTU)</li>
                            <li>2-Ton Full Heat & A/C System Starting @ $3750</li>
                        </ul>
                    </p>
                    <p><strong>DEPENDABLE SERVICE</strong></p>
                    <p><i>At RockRuth Heating And Air, we go out of our way to provide the
                          thorough, dependable repair work you deserve. When you bring us in
                          to fix your thermostat, you can rest assured that we'll take the time
                          to do the job right. We cater to commercial and residential customers
                  alike, and we work hard to complete our repairs quickly and efficiently.</i></p>
                </div>

                <div className="info-blurb">
                    <h2>Air Duct Cleaning</h2>
                    <img src={
                        ductClean
                    }
                        alt="" />
                    <p>The ductwork in your home or business is one of the most often ignored
                          and neglected part of any HVAC system. Your ductwork helps ensure that
                          good, clean air is piped into your home. It also ensures that the air is
                          free of contaminants and allergens has a major impact on overall performance.
                          We offer industry-leading technology to ensure your air duct cleaning gets
                  done right! We make a point to provide only the very best to our consumers.</p>
                </div>

                <div className="info-blurb">
                    <h2>At Your Service</h2>
                    <img src={
                        manWithFan
                    }
                        alt="" />
                    <p>Our workmanship is 100% guaranteed. We're a locally owned and operated
                          company, so you can rest assured that our technicians will perform your
                          repairs in accordance with industry standards and any building codes that
                          apply to your home or business. For your financial peace of mind, our
                          technicians are fully licensed and insured. We aim for cost-effective repairs,
                          and we always offer free estimates no matter what brand or type of equipment
                  you currently have.</p>
                </div>

                <div className="info-blurb">
                    <h2>FAQ's</h2>
                    <img src={
                        ductwork
                    }
                        alt="" />
                    <p>You have questions, we have answers...</p>
                </div>
            </div>
        </div>
    )
}

export default Cooling;