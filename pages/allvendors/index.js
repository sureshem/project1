import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch'
const allvendors = (props) => {
        console.log(props,"allvendors")
        return (
            <>
                <section className="wdallvendors">
                    {props.showrespData.data.map((items,index) =>
                        <section className="wdallvendors__info">
                            <section className="wdallvendors__info__list">
                                <section  className="wdallvendors__info__listcontent">
                                    <h1 className="wdallvendors__info__title">{items.category_name}</h1>
                                    <p className="wdallvendors__info__subtitletitle">{items.name}</p>
                                </section>
                                <img src={items.original_pic_url}  className="wdallvendors__info__listimg"  />
                            </section>
                            <section className="wdallvendors__info__list__desc">
                                <p className="wdallvendors__info__list__desc__title">
                                    <a  className="wdallvendors__info__list__desc__link" href="javascript:;">{items.category_alias}</a>
                                </p>
                            </section>
                        </section>
                    )}                    
                </section>   
                <style jsx>
                        {
                            `
                            .wdallvendors{display:grid;grid-template-columns:50% 50%}
                            .wdallvendors__info{}
                            `
                        }
                </style>
            </>
        );
    }

allvendors.getInitialProps = async function(){
    var resp = await fetch('https://www.wedmegood.com/api/v2/vendor/filter?version=2.0&source=1&filter=1&seo=1&offset=0&random=4981&city_slug=chennai&category_slug=mehendi-artists&filter_slug=chennai%2Fmehendi-artists%2F&token=5e4b81d6616385.40632759&filter_option=&page=1&device_type=1');
    var respData = await resp.json();
    console.log(respData)
    return {
        showrespData:respData
    }
}
export default allvendors;
