import React,{useEffect,useState} from 'react';
import Link from 'next/link';

const vendorlist = () => {
    const [reviewPopup, setreviewPopup] = useState(false)
    useEffect(() =>{

    }, [])
    return (
        <div className="wevendorlist">
            <div className="container">
                <div className="wevendorlist__info">
                    <Link href="/vendorinfo"><a  className="wevendorlist__info__list">Bridal Makeup Artist</a></Link>
                    <Link href="/artist"><a  className="wevendorlist__info__list">Mehandi Artist</a></Link>
                    <Link href="/artist"><a  className="wevendorlist__info__list">Bridal Jewelry for rent</a></Link>
                    <Link href="/artist"><a  className="wevendorlist__info__list">Bridal Blouse</a></Link>
                    <Link href="/artist"><a  className="wevendorlist__info__list">Silk Saree</a></Link>
                    <Link href="/writereview"><a  className="wevendorlist__info__list wevendorlist__info__list--writereview"><img src="/static/images/write_a_review_new.webp" className="wevendorlist__info__list--img" />Write A Review</a></Link>
                    
                </div>

                
            </div>
            <style jsx>
                {
                    `
                    .wevendorlist{border: 1px solid #caccd0; border-width: 1px 0;}
                    .wevendorlist__info{display:flex;align-items:center;justify-content:space-between;padding:15px 20px;background:#fff;}
                    .wevendorlist__info__list{text-transform: capitalize;color: #061929;font-weight:400;font-size: 14px;}
                    .wevendorlist__info__list--writereview{display:flex;align-items:center;}
                    .wevendorlist__info__list--img{margin-right:5px;max-height: 20px;}
                    `
                }
            </style>
        </div>
    );
}

export default vendorlist;
