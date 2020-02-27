import React from 'react'

const popup = (props) => {
	 // var inputPlaceholder=["Email","Password (6 or more characters)"];
	 if(!props.isOpen){
		 return ""
	 }
	return(
		<>
			<section className="wdpopup">
				<section className="wdpopup__inner">
					<span className="wdpopupClose" onClick={() => props.onClose()}></span>
					<h2 className="wdpopup__title">Your personal wedding plan starts now</h2>
					<p className="wdpopup__subtitle">Advice, tools, and the best local vendors to have a wedding that's uniquely you (cue the confetti!)</p>
					{props.children}
			    </section>
			</section>
			<style jsx>
			{
				`
					.wdpopup{position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 5;}
					.wdpopup__inner{position: absolute; top: 50%; left: 50%; background: #fff; z-index: 6; max-width: 600px; width: 100%; transform: translate(-50%, -50%); padding:25px 35px; border-radius: 5px;}
					.wdpopupClose{position:absolute;top:30px;right:15px;transform: rotate(45deg);transition:0.5s all;cursor:pointer;}
					//.wdpopupClose:hover{transform: rotate(180deg)}
					.wdpopupClose:after{position:absolute;content:'';top:0;right:0;background:#ddd;height:2px;width:20px;}
					.wdpopupClose:before{position:absolute;content:'';top:0;right:0;background:#ddd;height:2px;width:20px;transform: rotate(90deg);}


					.wdpopup__title{font-size:24px; line-height:28px;margin-top:16px; text-align: center;}
					.wdpopup__subtitle{margin:8px 0; text-align: center;font-size:14px;line-height:18px;}
					.wdpopup__signup__agree{font-size:14px; line-height:18px; text-align: center;margin:12px 0;display: flex; justify-content: center;}
					.wdpopup__signup__agree__link{font-weight: 600;color: #1A1A1A;}
					.wdmatchbanner__detail__info__submitBtn{text-align:center}
				`
			}
			</style>
		</>
	)
}

export default popup;