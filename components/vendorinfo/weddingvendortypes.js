import React from 'react';
import PrimaryBtn from '../buttons/primaryButton'
const weddingvendortypes = () => {
    return (
        <>
        <section className="wdfindvendortypes">
            <section className="wdfindvendortypes__info">
                <img src="https://media-api.xogrp.com/images/f7bb8803-24aa-456b-921f-b599132518da~sc_406.406"  className="wdfindvendortypes__info__img" />
                <section className="wdfindvendortypes__info__inner">
                    <img src="https://media-api.xogrp.com/images/f1b6c328-9085-419e-a565-e18c384afb34~rs_212.212" className="wdfindvendortypes__info__inner__img" />
                    <h4 className="wdfindvendortypes__info__inner__title">The Best-Rated Vendors of 2020</h4>
                    <p className="wdfindvendortypes__info__inner__subtitle">As voted by couples like you, these vendors have officially been crowned The Knot Best of Weddings.</p>
                    <PrimaryBtn />
                </section>
            </section>
            <section className="wdfindvendortypes__info">
                <img src="https://media-api.xogrp.com/images/813e66d4-f481-4c51-bed9-4723a68f2c26~sc_406.406"  className="wdfindvendortypes__info__img" />
                <section className="wdfindvendortypes__info__inner">
                    <img src="https://media-api.xogrp.com/images/f1b6c328-9085-419e-a565-e18c384afb34~rs_212.212" className="wdfindvendortypes__info__inner__img" />
                    <h4 className="wdfindvendortypes__info__inner__title">Find Local Wedding Events</h4>
                    <p className="wdfindvendortypes__info__inner__subtitle">Wedding planning at home is fun. Wedding planning in person? On another level.</p>
                    <PrimaryBtn />
                </section>
            </section>
            <section className="wdfindvendortypes__info">
                <img src="https://media-api.xogrp.com/images/a6c605c0-33ac-4f4f-bb41-86dec9073f74~sc_406.406"  className="wdfindvendortypes__info__img" />
                <section className="wdfindvendortypes__info__inner">
                    <img src="https://media-api.xogrp.com/images/f1b6c328-9085-419e-a565-e18c384afb34~rs_212.212" className="wdfindvendortypes__info__inner__img" />
                    <h4 className="wdfindvendortypes__info__inner__title">Join The Knot Pro Community</h4>
                    <p className="wdfindvendortypes__info__inner__subtitle">As voted by couples like you, these vendors have officially been crowned The Knot Best of Weddings.</p>
                    <PrimaryBtn />
                </section>
            </section>
        </section>
        <style jsx>
            {
                `
                    .wdfindvendortypes{display:grid;grid-template-columns: repeat(3,400px);grid-gap: 1.25rem;justify-content:center;align-items:center;text-align:center;padding:30px 0;border-bottom:1px solid #ddd;}
                    .wdfindvendortypes__info__img{}
                    .wdfindvendortypes__info{position:relative}
                    .wdfindvendortypes__info__inner{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width: 100%;}
                    .wdfindvendortypes__info__inner__img{display: block;margin: 0 auto 12px; height: 106px; justify-content: center; align-items:center}
                    .wdfindvendortypes__info__inner__title{font-size: 25px; margin-bottom:12px;font-weight: 500;line-height:30px;}
                    .wdfindvendortypes__info__inner__subtitle{font-size:16px; line-height:20px;padding:0 0 10px;}
                `
            }
        </style>
        </>
    );
}

export default weddingvendortypes;
