import React from 'react';
import Select from 'react-select';
import InputType from '../form__inputs/inputtype';
import PrimaryBtn from '../buttons/primaryButton';
const banner = (props) => {
      
    var inputPlaceholder=["one"];
    var inputs=[];
    for(var i=0;i<inputPlaceholder.length;i++){
        inputs.push(<InputType  placeholder={inputPlaceholder[i]} />);
    }
    const vendorSearch = [
        { label: "Alligators", value: 1 },
        { label: "Crocodiles", value: 2 },
        { label: "Sharks", value: 3 },
        { label: "Small crocodiles", value: 4 },
        { label: "Smallest crocodiles", value: 5 },
        { label: "Snakes", value: 6 },
    ]
   
    return (
        <>
            <section className="wdmatchbannerHeight">
                <span className="wdmatchbanner__bg">
                    <img src="/static/images/banner/banner.jpg" className="wdmatchbanner__bg__img" />
                </span>
                <section className="wdmatchbanner__detail">
                    <section className="wdmatchbanner__detail__info">
                        <h1 className="wdmatchbanner__detail__info__hedding">Meet Your Wedding Vendor Team</h1>
                        <p className="wdmatchbanner__detail__info__subheading">Find and book the best wedding vendors with help from The Knot.</p>
                        <section className="wdmatchbanner__detail__info__selectDropdown">
                            <Select className="" options={vendorSearch} /> 
                        </section>
                        {inputs}
                        <section className="wdmatchbanner__detail__info__submitBtn">
                            <PrimaryBtn />
                        </section>
                    </section>
                </section>
            </section>
            <style jsx>
                {
                    `
                    .wdmatchbannerHeight{display: flex; position: relative; background: gray;}
                    .wdmatchbanner__bg{padding: 0; position: relative; overflow: hidden; flex: 1 1;}
                    .wdmatchbanner__bg__img{position: absolute; left: 0; top: 0; min-width: 100%; min-height: 100%; width: auto; height: auto; max-width: 100%; object-fit: cover; object-position: top;}
                    .wdmatchbanner__detail{margin-left: -100%; z-index: 1; flex: 1 1;display:flex;padding:50px 0;justify-content:flex-start;align-items:center;}
                    .wdmatchbanner__detail__info{width: 450px; margin-left: 10%; padding: 25px 30px;background: #fff; border-radius:5px;}
                    .wdmatchbanner__detail__info__selectDropdown{margin:0 0 15px 0;}
                    .wdmatchbanner__detail__info__submitBtn{margin:0 0 10px 0;}
                    .wdmatchbanner__detail__info__hedding{letter-spacing: 0; font-weight: 500;font-size:32px; line-height:38px;}
                    .wdmatchbanner__detail__info__subheading{font-size:16px;line-height:20px;margin:16px 0;}
                    `
                }
            </style>
        </>
    );
}

export default banner;
