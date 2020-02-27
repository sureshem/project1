import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
const layout = (props) => {
    return (
        <>
          <Header/>
            {props.children}
          <Footer/>
        </>
    );
}

export default layout;
