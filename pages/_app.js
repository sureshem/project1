import React from 'react';
import App from 'next/app';
import Layout from '../components/common__pages/layout';
class MyApp extends App {
    render(){
        const { Component, pageProps } = this.props;

        return (
            <>
                
                    <Layout>
                        <Component {...pageProps} />
                    </Layout> 
                
            </>
        );
    }
}

export default MyApp;
