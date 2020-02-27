import React from 'react'
const BreadCrumbs = () => {
	return (
		<>
		<div className="BreadCrumbs"><span className="crumb">
		<a href="/"  className="BreadCrumbs__link">Home -</a> </span> <span className="crumb">
		<a  className="BreadCrumbs__link" href="/vendors/all">Vendors -</a> </span>
		<span className="crumb"><a  className="BreadCrumbs__link" href="/vendors/all/bridal-wear/">Bridal Wear -</a>
		</span><span className="crumb"><span  className="BreadCrumbs__link">Chennai</span></span></div>
		<style jsx>
			{
				`
					.BreadCrumbs{display:flex;align-items:center;margin:10px 0;border-bottom: 1px solid #ddd; padding: 20px 0;}
					.crumb{display:flex;align-items:center;margin:0 2px}
					.BreadCrumbs__link{color: #909090;}
				`
			}
		</style>
		</>
	)
}

export default BreadCrumbs;