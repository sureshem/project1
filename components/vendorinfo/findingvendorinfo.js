import React from 'react';

const findingvendorinfo = () => {
    return (
        <>
        <section className="wdfindingvendorinfo">
            <h2 className="wdfindingvendorinfo__title">Finding a Wedding Vendor</h2>
            <p className="wdfindingvendorinfo__subtitle">Advice From The Knot</p>
            <section className="wdfindingvendorinfo__item">
                <section className="wdfindingvendorinfo__advice">
                    <img src="/static/images/icons/icon2.svg"  className="wdfindingvendorinfo__advice__img" />
                    <h3  className="wdfindingvendorinfo__advice__heading wdfindingvendorinfo__advice--startstyle">Understand the Options</h3>
                    <p className="wdfindingvendorinfo__advice__desc">Remember that every vendor is unique and that no two wedding vendors' services, packages or pricing structures are exactly the same.</p>
                </section>
                <section className="wdfindingvendorinfo__advice">
                    <img src="/static/images/icons/icon2.svg"  className="wdfindingvendorinfo__advice__img" />
                    <h3  className="wdfindingvendorinfo__advice__heading wdfindingvendorinfo__advice--options">Understand the Options</h3>
                    <p className="wdfindingvendorinfo__advice__desc">Remember that every vendor is unique and that no two wedding vendors' services, packages or pricing structures are exactly the same.</p>
                </section>
                <section className="wdfindingvendorinfo__advice">
                    <img src="/static/images/icons/icon2.svg"  className="wdfindingvendorinfo__advice__img" />
                    <h3  className="wdfindingvendorinfo__advice__heading wdfindingvendorinfo__advice__heading--conversation">Understand the Options</h3>
                    <p className="wdfindingvendorinfo__advice__desc">Remember that every vendor is unique and that no two wedding vendors' services, packages or pricing structures are exactly the same.</p>
                </section>
            </section>
        </section>
        
        <style jsx>
            {
                `
                    .wdfindingvendorinfo{text-align:center;border:1px solid #ddd;border-width:1px 0;padding:30px 0 10px;}
                    .wdfindingvendorinfo__item{display:grid;grid-template-columns: repeat(3,400px);grid-gap: 1.25rem;justify-content:center;align-items:center;text-align:center;padding:25px 0;}
                    .wdfindingvendorinfo__title{font-weight: 500;font-size:28px; line-height:30px;margin:0;padding:0 0 10px;}
                    .wdfindingvendorinfo__subtitle{font-size:20px; line-height:22px;;}
                    .wdfindingvendorinfo__advice__img{height:44px;width:44px;}
                    .wdfindingvendorinfo__advice--startstyle{color:#dc5899}
                    .wdfindingvendorinfo__advice--options{color:#518ad7}
                    .wdfindingvendorinfo__advice__heading--conversation{color:#75cdc0}
                    .wdfindingvendorinfo__advice__heading{font-size:20px; line-height:22px;padding:10px 0;font-weight: 500;}
                    .wdfindingvendorinfo__advice__desc{font-size:16px; line-height:20px;padding:0 0 10px;color: #6d7179;text-align:left;}
                `
            }
        </style>
        </>
    );
}

export default findingvendorinfo;
