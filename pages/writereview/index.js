import React from 'React'
import PrimaryBtn from '../../components/buttons/primaryButton';
import SecondaryBtn from '../../components/buttons/secondaryBtn';
const contactus = (props) => {
	return (
		<>
			<section className="wdwritereview__headingblock">
				<section className="container">
					<h3 className="wdwritereview__headingblock__title">Write a Review for your Wedding Vendors</h3>
					<p className="wdwritereview__headingblock__subtitle">Had a great experience with your wedding photographer? Or the food at the venue left you disappointed? Please tell us your experience below. Your reviews help other engaged couples in making informed decisions.</p>
				</section>
			</section>
			<section className="wdwritereview__formBlock">
				<section className="form__group">
					<label className="form__group__labl">Select a Vendor*</label>
					<span className="form__group__vendorsearch">
						<input type="text" className="form__control" placeholder="" />
					</span>
				</section>
				<section className="wdwritereview__formBlock__ratevendor">
					<section className="wdwritereview__formBlock__ratevendor__opt">
						<label className="form__group__labl">Rate Vendor*</label>
						<span className="form__group__rateoption">
							<input type="text" className="rateform__control" />
							<input type="text" className="rateform__control" />
							<input type="text" className="rateform__control" />
							<input type="text" className="rateform__control" />
							<input type="text" className="rateform__control" />
							<input type="text" className="rateform__control" />
						</span>
					</section>
				</section>
				<section className="form__group">
					<label className="form__group__labl">Select a Vendor*</label>
					<textarea className="form__control txtarea"></textarea>
				</section>
				<section className="form__group">					
					<input type="text" className="form__control" placeholder="" />
				</section>
				<section className="wdmatchbanner__detail__info__submitBtn">
                            <SecondaryBtn />
                            <PrimaryBtn />
				</section>
			</section>
			<style jsx>
				{
					`
					.wdwritereview__headingblock{background-color: #fff; height: 300px;box-shadow: rgba(0,0,0,.05) 0 1px 5px 0, 0 1px 2px rgba(0,0,0,.05);}
					.wdwritereview__headingblock__title{font-size:24px; line-height:28px;margin-top:16px; text-align: center;}
					.wdwritereview__headingblock__subtitle{margin:8px 0; text-align: center;font-size:16px;line-height:20px;}
					.wdwritereview__formBlock{min-width: 60%;display: flex; padding-left: 45px;background:#fff; padding-right: 45px; padding-top: 20px; padding-bottom: 20px; margin-top: -123px;flex-direction: column; width: 800px;box-shadow: rgba(0,0,0,.05) 0 1px 5px 0, 0 1px 2px rgba(0,0,0,.05);margin:-123px auto 50px;} 

					.wdmatchbanner__detail__info__submitBtn{display:flex;justify-content:flex-end}
					.form__group__rateoption{display:flex;align-items:center;font-size: 16px; font-weight: 600;color:#4a4a4a;padding:0 0 10px;}
					.wdwritereview__formBlock__ratevendor__opt{padding:20px 0}
					.rateform__control{background: #fff;cursor: pointer; border: 1px solid rgb(215, 215, 215);align-self: center; height: 20px; width: 20px;margin-right: 10px; border-radius: 2px}
					.form__group{margin:0 0 15px;}
					.txtarea{height:170px;}
	                .form__group__labl{font-size: 16px; text-transform: capitalize; font-weight:600; padding: 0 0 10px; display: block;color:#4a4a4a}
	                .form__control{ align-items: center; background-color: hsl(0,0%,98%); border-color: hsl(0,0%,80%);border-style: solid; border-width: 1px;display: flex; flex-wrap: wrap; justify-content: space-between; min-height: 38px; outline: 0; position: relative; transition: all 100ms; box-sizing: border-box;width: 100%;padding:0 10px;color: hsl(0,0%,50%);cursor:pointer}
	                .form__control{ align-items: center; background-color: hsl(0,0%,98%); border-color: hsl(0,0%,80%);border-style: solid; border-width: 1px;display: flex; flex-wrap: wrap; justify-content: space-between; min-height: 38px; outline: 0; position: relative; transition: all 100ms; box-sizing: border-box;width: 100%;padding:0 10px;color: hsl(0,0%,50%);cursor:pointer}

					`
				}
			</style>
		</>
	);
}

export default contactus