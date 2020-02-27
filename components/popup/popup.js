import React from 'React'
import { parseBody } from 'next/dist/next-server/server/api-utils'
const popup = (props) => {
	 // var inputPlaceholder=["Email","Password (6 or more characters)"];
	 
	 if(!props.isOpen){
		return ''
	}
	return(
		<>
		{props.isOpen ?
			<section className="wdpopup">
				<section className="overly" onClick={()=>{props.onClose()}} />
				<section className="wdpopup__inner">
					<span className="wdpopupClose" onClick={() => props.onClose()}></span>
					<h2 className="wdpopup__title">Your personal wedding plan starts now</h2>
					<p className="wdpopup__subtitle">Advice, tools, and the best local vendors to have a wedding that's uniquely you (cue the confetti!)</p>
					{props.children}						
			    </section>
			</section>
			: ""}			
			<style jsx>
			{
				`
					.overly{position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); z-index: 5;}
					.wdpopup__inner{position: absolute; top: 50%; left: 50%; background: #fff; z-index: 6; max-width: 600px; width: 100%; transform: translate(-50%, -50%); padding:25px 35px; border-radius: 5px;}					
					.wdpopup__title{font-size:24px; line-height:28px;margin-top:16px; text-align: center;}
					.wdpopup__subtitle{margin:8px 0; text-align: center;font-size:14px;line-height:18px;}

					.wdpopupClose{cursor:pointer;position: absolute; top:5px; right:5px; z-index: 999;width: 20px; height: 20px;transition: all .3s ease;}
					.wdpopupClose:before{position: absolute; left:10px; content: ' '; width:2px; background-color:#999;transform: rotate(45deg);}
					.wdpopupClose:before{height: 20px;top:0;}
					.wdpopupClose:after{height: 20px;top:0;}
					.wdpopupClose:after{position: absolute; left: 10px; content: ' '; width:2px; background-color:#999;transform: rotate(-45deg);}
					.wdpopupClose:hover{transform: rotate(90deg); }
				`
			}
			</style>
		</>
	)
}

export default popup;