import React, { Component } from 'react';
import Banner from '../../components/banner/banner';
import TopWddingVendor from '../../components/vendorinfo/topweddingvendor';
import Errorboundry from '../../components/errorboundry/errorboundry';
import fetch from 'isomorphic-unfetch';

function HomePage (props) {
    // variables
    console.log(props,"HomePage")
        return (
                <div>
                    <Errorboundry>
                        <Banner/>
                    </Errorboundry>
                    <Errorboundry>
                        <TopWddingVendor data={props.showData}/>
                    </Errorboundry>
                </div>
        );
}
HomePage.getInitialProps = async function(){
    var resp = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    var data = await resp.json();
    console.log(data)
    return{
        showData: data
    }
}
export default HomePage;
