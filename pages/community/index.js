import React from 'react';
import BreadCrumbs from '../../components/bredcrumbs/bredcrumbs'
const community = () => {
    return (
            <>
			<section className="container">
				<BreadCrumbs />
                <section className="wdcommunity">
                	<section className="wdcommunity__info">
                		<section className="wdcommunity__info__comments">
                			<img src="/static/images/icon.jpg"  className="wdcommunity__info__comments__img"/>
                			<section className="wdcommunity__info__details">
                				<h2 className="wdcommunity__info__comments__title"> Couples getting married on November 20, 2021 ...</h2>
                				<span className="wdcommunity__info__comments__subtitle">Sally</span>
                				<span className="wdcommunity__info__comments__count">3 days ago</span>
                			</section>
                		</section>
                		<section className="wdcommunity__info__comments">
                			<img src="/static/images/icon.jpg"  className="wdcommunity__info__comments__img"/>
                			<section className="wdcommunity__info__details">
                				<h2 className="wdcommunity__info__comments__title"> Couples getting married on November 20, 2021 ...</h2>
                				<span className="wdcommunity__info__comments__subtitle">Sally</span>
                				<span className="wdcommunity__info__comments__count">3 days ago</span>
                			</section>
                		</section>
                		<section className="wdcommunity__info__comments">
                			<img src="/static/images/icon.jpg"  className="wdcommunity__info__comments__img"/>
                			<section className="wdcommunity__info__details">
                				<h2 className="wdcommunity__info__comments__title"> Couples getting married on November 20, 2021 ...</h2>
                				<span className="wdcommunity__info__comments__subtitle">Sally</span>
                				<span className="wdcommunity__info__comments__count">3 days ago</span>
                			</section>
                		</section>
                	</section>
                	<section className="wdcommunity__info wdcommunity--question">
			            <h1 className="wdcommunity__info__title">Community</h1>
			            <p className="wdcommunity__info__subtitle">Ask questions and get answers with the help of other engaged couples</p>
			            <div className="search">
	                        <input type="text" className="app__community__input" autocomplete="off" placeholder="Search for" />
	                        <button type="submit" className="searchicon"></button>
	                    </div>
                	</section>
                	<section className="wdcommunity__info">
                		<section className="wdcommunity__info__comments">
                			<img src="/static/images/icon.jpg"  className="wdcommunity__info__comments__img"/>
                			<section className="wdcommunity__info__details">
                				<h2 className="wdcommunity__info__comments__title"> Couples getting married on November 20, 2021 ...</h2>
                				<span className="wdcommunity__info__comments__subtitle">Sally</span>
                				<span className="wdcommunity__info__comments__count">3 days ago</span>
                			</section>
                		</section>
                		<section className="wdcommunity__info__comments">
                			<img src="/static/images/icon.jpg"  className="wdcommunity__info__comments__img"/>
                			<section className="wdcommunity__info__details">
                				<h2 className="wdcommunity__info__comments__title"> Couples getting married on November 20, 2021 ...</h2>
                				<span className="wdcommunity__info__comments__subtitle">Sally</span>
                				<span className="wdcommunity__info__comments__count">3 days ago</span>
                			</section>
                		</section>
                		<section className="wdcommunity__info__comments">
                			<img src="/static/images/icon.jpg"  className="wdcommunity__info__comments__img"/>
                			<section className="wdcommunity__info__details">
                				<h2 className="wdcommunity__info__comments__title"> Couples getting married on November 20, 2021 ...</h2>
                				<span className="wdcommunity__info__comments__subtitle">Sally</span>
                				<span className="wdcommunity__info__comments__count">3 days ago</span>
                			</section>
                		</section>
                	</section>
                </section>
            </section>
            <style jsx>
            	{

            		`
            			.wdcommunity{display:grid;grid-template-columns:repeat(3,400px);grid-gap:25px;margin:25px 0}
            			.wdcommunity__info__comments{display:flex;align-items:center;margin: 0 0 35px;}
            			.wdcommunity__info__details{padding-left:15px;}
            			.wdcommunity__info__comments__title{font-size:17px; line-height: 22px; font-weight: 600;color: #222;cursor:pointer;}
            			.wdcommunity__info__comments__subtitle{font-weight:400;padding:10px 0;display:block;}
            			.wdcommunity__info__comments__count{font-size: 13px; line-height: 19px; color: #8c8c8c;}
            			.wdcommunity__info__comments__img{box-shadow: 2px 2px 20px 0 rgba(0,0,0,.2);    height: 95px;}

	        			.wdcommunity--question{background:#f5f5f5;padding:20px;text-align:center;}
	        			.wdcommunity__info__title{font-size: 32px; line-height: 40px; font-weight: 300; background: #f5f5f5}
	        			.wdcommunity__info__subtitle{font-size: 18px; line-height: 28px; margin-bottom: 15px;}
	        			.search{margin-left: 0; margin-top: 10px; position: relative;background: #fff; border-radius: 4px; display: flex;box-shadow: 0 1px 0 0 rgba(0,0,0,.05);}
	        			.app__community__input{outline: 0; margin: 0; border: 0; padding: 10px 0 10px 10px; width: 85%; box-sizing: border-box; background: 0 0; height: 46px;}
	        			.searchicon{background-color: #19b5bc; padding: 10px 10px; border: 0; cursor: pointer;text-align: center; width: 15%; box-sizing: border-box; height: 46px;}
            		`
            	}
            </style>
            </>
    );
}

export default community;
