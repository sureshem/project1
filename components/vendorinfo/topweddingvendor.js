import React from 'react';
// import VendorTile from '../components/vendorinfo/topweddingvendor__tile'
// import SecondaryBtn from '../components/buttons/secondaryBtn'
import VendorTile from '../vendorinfo/topweddingvendor__tile'
import SecondaryBtn from '../buttons/secondaryBtn'
const topweddingvendor = (props) => {
    return (
        <>
            <section className="container"> 
                <section className="wdtopweddingvendor"> 
                    <section className="wdtopweddingvendor__titleblock"> 
                        <h2 className="wdtopweddingvendor__title">Top Wedding Vendor Categories</h2> 
                        <span><SecondaryBtn /></span>
                    </section>
                    <VendorTile showvendorDetails={props.data}/>
                </section>
            </section>
            <style jsx>
                    {
                        `
                        .wdtopweddingvendor{padding:40px 0;margin-left: -10px;}
                        .wdtopweddingvendor__title{font-size:28px; line-height:30px;margin:0;font-weight: 500;margin-bottom:28px;flex:1;}
                        .wdtopweddingvendor__titleblock{display:flex;}

                        `
                    }
            </style>
        </>
    );
}

export default topweddingvendor;
