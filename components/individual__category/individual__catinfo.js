import React from 'react';
import Weportfolio from '../individual__category/weportfolio'
import WriteReviewForm from '../common__pages/writereview__form'
import BreadCrumbs from '../../components/bredcrumbs/bredcrumbs'
const individual__catinfo = (props) => {
    return (
        <>
        {/* <BreadCrumbs /> */}
            <section className="wdindividual__cateinfo">
                
                <section className="wdindividual__cateinfo__lftblock">
                    <figure className="wdindividual__cateinfo__profile">
                        <img src="/static/images/img1.webp"  className="wdindividual__cateinfo__profile__img" />
                    </figure>
                    <section  className="wdindividual__cateinfo__studioDetail">
                        <section  className="wdindividual__cateinfo__studioDetail__inner__info">
                            <p  className="wdindividual__cateinfo__studioDetail__inner">
                                <span className="wdindividual__cateinfo__studio__nameLocation">
                                    <span className="wdindividual__cateinfo__studio__name">Rolls & Reels</span>
                                    <span className="wdindividual__cateinfo__studio__location">Chennai, Bangalore</span>
                                </span>
                                <span  className="wdindividual__cateinfo__studio__ratingReviews">
                                    <span  className="wdindividual__cateinfo__studio__rating">5.0</span>
                                    <span  className="wdindividual__cateinfo__studio__reviews">11 Reviews</span>
                                </span>
                            </p>
                            <span className="wdindividual__cateinfo__studio__contactInfo">Contact</span>    
                        </section>                    
                            <section className="wdindividual__cateinfo__tabs">
                                <span className="wdindividual__cateinfo__list">Photo Count</span>
                                <span className="wdindividual__cateinfo__list">Wishlist</span>
                                <span className="wdindividual__cateinfo__list">Write Review</span>
                                <span className="wdindividual__cateinfo__list noborder">Share</span>
                            </section>
                        
                    </section>
                    <section className="wdindividual__reviewinfo">
                        <section className="wdindividual__reviewinfo__tabs">
                            <span className="wdindividual__reviewinfo__list">Projects</span>
                            <span className="wdindividual__reviewinfo__list">About</span>
                            <span className="wdindividual__reviewinfo__list noborder">Reviews</span>
                        </section>
                        <section className="wdindividual__reviewinfo__list__projectinfo">
                            <section className="wdindividual__reviewinfo__list__projectinfo__tabs">
                                <span className="wdindividual__reviewinfo__list__projectinfo__list">Portfolio (203)</span>
                                <span className="wdindividual__reviewinfo__list__projectinfo__list">Albums (8)</span>
                                <span className="wdindividual__reviewinfo__list__projectinfo__list">Videos (0)</span>
                            </section>
                            <section className="wdindividual__reviewinfo__list__projectinfo__albums">
                                <Weportfolio />
                            </section>
                        </section>
                        <section className="wdindividual__reviewinfo__about">
                            <h2 className="wdindividual__reviewinfo__about__title">About</h2>
                            <p className="wdindividual__reviewinfo__about__desc">The Naked is a swanky wedding couture boutique that has been designing outfits for brides to make them look stunning for their wedding celebrations. Having an eye for traditional and ethnic intricacy, the label started in 2017 offers one of the most stunning contemporary ethnic outfits suited for a festive season and weddings for all the occasions.</p>   
                            <h2 className="wdindividual__reviewinfo__about__subtitle">Location</h2>
                            <p>The Naked is a swanky wedding couture boutique that has been designing outfits for brides to make them look stunning for their wedding celebrations. Having an eye for traditional and ethnic intricacy, the label started in 2017 offers one of the most stunning contemporary ethnic outfits suited for a festive season and weddings for all the occasions.</p>   
                        </section>
                        <section className="wdindividual__reviewinfo__about">
                            <h2 className="wdindividual__reviewinfo__about__title">Reviews (4)</h2>
                            <section className="wdindividual__reviewinfo__ratingdetails">
                                <p>Rating</p>
                            </section>
                            <section className="wdindividual__reviewinfo__ratingdetails">
                                <WriteReviewForm />
                            </section>
                            {/* <section className="wdindividual__reviewinfo__details">
                                <img src="" />
                                <p></p>
                            </section> */}
                        </section>
                    </section>
                </section>
                <section className="wdindividual__cateinfo__rgtblock">
                    <p>Right</p>
                </section>
            </section>   
            <style jsx>
                {
                    `
                     .wdindividual__cateinfo{display:grid;grid-template-columns:60% 40%;grid-gap:20px;} 
                     .wdindividual__cateinfo__profile{position: relative; display: inline-flex;overflow-y: hidden; height: 375px; width: 100%;border-radius: 2px;box-shadow: 0 1px 2px rgba(0,0,0,.12);}  
                     .wdindividual__cateinfo__profile__img{width:100%;object-fit: cover; object-position: top;}
                     .wdindividual__cateinfo__studioDetail{box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);border-radius: 2px;margin:0 20px;position: relative; top: -25px; background: #fff;}
                     .wdindividual__cateinfo__studioDetail__inner__info{padding: 20px;}
                     .wdindividual__cateinfo__studioDetail__inner{display: flex;align-items:center;justify-content: space-between;}
                     .wdindividual__cateinfo__studio__ratingReviews{font-weight: 600;font-size:22px;line-height:22px;color: #4a4a4a;}
                     .wdindividual__cateinfo__studio__name{color: #4a4a4a;font-size: 22px;font-weight:600;display: block;line-height: 33px;}
                     .wdindividual__cateinfo__studio__location{color: #4a4a4a;font-size: 16px; font-weight: 400;display: block;line-height:22px;}
                     .wdindividual__cateinfo__studio__rating{background-color: #5ba829;border-radius: 2px; color: #fff;min-width: 80px; max-width: 80px; height: 40px;font-size: 22px;font-weight: 400;padding:10px;display: block;}
                     .wdindividual__cateinfo__studio__reviews{color: #4a4a4a;font-size: 16px; font-weight: 400;display: block;line-height:20px;}
                     .wdindividual__cateinfo__studio__contactInfo{color: #009a09;font-size: 16px; font-weight: 400;cursor:pointer;margin:10px 0 0;display:block;}
                     
                     .wdindividual__cateinfo__tabs{box-shadow: 0 1px 2px rgba(0,0,0,.12);display: flex;flex-direction: row;justify-content: space-between; background-color: #fbfbfb;padding-top: 10px; padding-bottom: 10px;}
                     .wdindividual__cateinfo__list{border-right: 1px solid #d7d7d7;flex: 1;margin: 0;padding: 0;display: flex;align-items: center;cursor: pointer;justify-content: center;}
                     .noborder{border:0;}
                     .wdindividual__reviewinfo__tabs{box-shadow: 0 1px 2px rgba(0,0,0,.12);display: flex;flex-direction: row;justify-content: space-between; background-color: #fbfbfb;padding-top: 10px; padding-bottom: 10px;margin:0 0 15px;}
                     .wdindividual__reviewinfo__list{border-right: 1px solid #d7d7d7;flex: 1;margin: 0;padding: 0;display: flex;align-items: center;cursor: pointer;justify-content: center;}
                     
                     .wdindividual__reviewinfo__list__projectinfo{box-shadow: 0 1px 2px 0 rgba(0,0,0,.2); border-radius: 2px;}
                     .wdindividual__reviewinfo__list__projectinfo__tabs{box-shadow: 0 1px 2px rgba(0,0,0,.12);display: flex;flex-direction: row;justify-content: space-between; background-color: #fbfbfb;padding-top: 10px; padding-bottom: 10px;margin:0 0 15px;}
                     .wdindividual__reviewinfo__list__projectinfo__list{border-right: 1px solid #d7d7d7;flex: 1;margin: 0;padding: 0;display: flex;align-items: center;cursor: pointer;justify-content: center;}
                     .wdindividual__reviewinfo__list__projectinfo__albums{padding:15px;}

                    .wdindividual__reviewinfo__list__projectinfo__albums{display:grid;align-items: center; grid-template-columns: repeat(4,auto);}

                     .wdindividual__reviewinfo__about{box-shadow: 0 1px 2px rgba(0,0,0,.12);padding-top: 10px; padding-bottom: 10px;}
                     .wdindividual__reviewinfo__about__title{font-size: 22px;font-weight: 400;line-height:40px;border-bottom: 1px solid #d7d7d7;}
                     .wdindividual__reviewinfo__about__desc{padding-top: 20px; padding-bottom: 20px;}
                    `
                }
            </style>
        </>
    );
}
export default individual__catinfo;
