import React, { Component } from 'react';
import Link from 'next/link';

export class nav extends Component {
    render() {
        const onreload = () => {
            window.location.reload
        }
        return (
            <>
            <div className="wdnavigation">
                <Link href="/"><a  className="wdnavigation__link" onClick={() => onreload()}>Home</a></Link>
                <Link href="/community" prefetch><a  className="wdnavigation__link">Search Vendors</a></Link>
                <Link href="/community" prefetch><a  className="wdnavigation__link">Location</a></Link>
                <Link href="/community" prefetch><a  className="wdnavigation__link">Real Wedding</a></Link>
                <Link href="/blog" prefetch><a  className="wdnavigation__link">Blogs</a></Link>
                <Link href="/community" prefetch><a  className="wdnavigation__link">Community</a></Link>
                <Link href="/community" prefetch><a  className="wdnavigation__link">Contact Us</a></Link>                
            </div>
            <style jsx>
                    {
                        `
                        .wdnavigation{display:flex;align-items:center;justify-content:space-between;margin-left:25px;}                        
                         .wdnavigation__link{text-transform: uppercase;color: #061929;font-weight: 500;font-size: 14px;margin:0 10px;}

                        `
                    }
                </style>
            </>
        );
    }
}

export default nav;
