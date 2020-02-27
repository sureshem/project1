import React from 'react'
import BreadCrumbs from '../../components/bredcrumbs/bredcrumbs'
import VendroTile from '../../components/vendorinfo__tile/vendortile'
import fetch from 'isomorphic-unfetch';
import IndividualCategory from '../../components/individual__category/individual__catinfo'
const vendorinfo = (props) => {
	return (
		<>
			<section className="container">
				<BreadCrumbs />
				<IndividualCategory />
				<section className="wdvendorinfo">
					<h4 className="wdvendorinfo__title">Bridal Wear in Chennai</h4>
					<p  className="wdvendorinfo__searchlist">Bridal Wear in Chennai <span className="wdvendorinfo__searchlist__count">106 results</span>  as per your search criteria</p>	
				</section>
				<section className="wdvendorinfo__tile">
				
					{/* <VendroTile showsdata={props.showData.data} />			 */}
				</section>
			</section>

			<style jsx>
				{
					`
						.wdvendorinfo__tile{display:grid;grid-template-columns:repeat(3,400px);grid-gap:25px;}
						.wdvendorinfo{padding:10px 0;}
						.wdvendorinfo__title{font-weight: 600;font-size:16px;}
						.wdvendorinfo__searchlist{font-size: 14px; font-weight: 400;padding:15px 0;}
						.wdvendorinfo__searchlist__count{font-weight: 600;}
					`
				}
			</style>
		</>
	)
}
vendorinfo.getInitialProps = async function(){
  let res = await fetch('https://www.wedmegood.com/api/v2/vendor/filter?version=2.0&source=1&filter=1&seo=1&offset=0&random=4981&city_slug=chennai&category_slug=mehendi-artists&filter_slug=chennai%2Fmehendi-artists%2F&token=5e4b81d6616385.40632759&filter_option=&page=1&device_type=1')
  let resData = await res.json()
  console.log(resData)
  return {
    showData: resData
  }

}

export default vendorinfo;