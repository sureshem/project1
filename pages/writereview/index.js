import React from 'react'
import WriteReviewForm from '../../components/common__pages/writereview__form'
const contactus = (props) => {
	return (
		<>
			<section className="wdwritereview__headingblock">
				<section className="container">
					<h3 className="wdwritereview__headingblock__title">Write a Review for your Wedding Vendors</h3>
					<p className="wdwritereview__headingblock__subtitle">Had a great experience with your wedding photographer? Or the food at the venue left you disappointed? Please tell us your experience below. Your reviews help other engaged couples in making informed decisions.</p>
					<WriteReviewForm />
				</section>
			</section>
			
			<style jsx>
				{
					`
					.wdwritereview__headingblock{background-color: #fff; height: 300px;box-shadow: rgba(0,0,0,.05) 0 1px 5px 0, 0 1px 2px rgba(0,0,0,.05);}
					.wdwritereview__headingblock__title{font-size:24px; line-height:28px;margin-top:16px; text-align: center;}
					.wdwritereview__headingblock__subtitle{margin:8px 0; text-align: center;font-size:16px;line-height:20px;}
					`
				}
			</style>
		</>
	);
}

export default contactus