import React from 'react';

const footer = () => {
    return (
        <>
        <section className="footer">
            <section className="container">
                <section className="wdfooter">
                    <section className="wdfooter__items">
                        <a  className="wdfooter__items__link" href="javascript:;">Privacy Policy</a>
                        <a  className="wdfooter__items__link" href="javascript:;">Terms of Use</a>
                        <a  className="wdfooter__items__link" href="javascript:;">Do Not Sell My Info</a>
                        <a  className="wdfooter__items__link" href="javascript:;">Customer Service</a>
                        <span className="wdfooter__items__link">&copy; 1997-2020 xxx Group Inc.</span>
                    </section>
                    <section className="wdfooter__socialshare">
                        <a target="_blank"  href="https://facebook.com/theknot" ><img src="/static/images/icons/icon2.svg" className="socialshare__img" /></a>
                        <a target="_blank"  href="https://facebook.com/theknot" ><img src="/static/images/icons/icon2.svg" className="socialshare__img" /></a>
                        <a target="_blank"  href="https://facebook.com/theknot" ><img src="/static/images/icons/icon2.svg" className="socialshare__img" /></a>
                    </section>
                </section>
            </section>
        </section>
        <style jsx>
            {
                `
                    .footer{}
                    .wdfooter{display:flex;justify-content:space-between;padding:15px 0;}
                    .wdfooter__items{display:flex;align-items:center}
                    .wdfooter__items__link{color: #000;display: block;font-size:14px; line-height:14px;padding:0 15px}
                    .wdfooter__socialshare{display:flex;align-items:center;}
                    .socialshare__img{width:30px;height:30px;margin:0 7px;}
                `
            }
        </style>
        </>
    );
}

export default footer;
