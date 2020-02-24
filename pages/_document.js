// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>					
					<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
					<meta name="theme-color" content="#000000" />
					<style dangerouslySetInnerHTML={{
						__html: `					
						* { -webkit-box-sizing: border-box; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
						img { max-width: 100% }
						input, textarea, button, a { -webkit-tap-highlight-color: transparent; }
						a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video { margin: 0; padding: 0; border: 0; font: inherit; vertical-align: baseline }
						a { text-decoration: none }
						a,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{ display: block;outline:none; }
						body {outline:none;overflow-x: hidden; font-size:14px;line-height:14px;color:#1A1A1A;; user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; }
						html,body{ height: 100%; width: 100%; box-sizing: border-box; -webkit-overflow-scrolling: touch; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
							Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
							-webkit-font-smoothing: antialiased;
							-moz-osx-font-smoothing: grayscale;}
						ol,ul { list-style: none }
						blockquote,q { quotes: none }
						blockquote:after,blockquote:before,q:after,q:before { content: ""; content: none }
						.img-responsive{max-width:100%;width:100%;display:block;}
						table { border-collapse: collapse; border-spacing: 0 }
						input[type=number]::-webkit-outer-spin-button, 
						input[type=number]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
						input[type="search"]::-webkit-search-cancel-button { -webkit-appearance: none; }
						input[type="text"]::-webkit-text-cancel-button { -webkit-appearance: none; }
						input[type="number"]::-webkit-number-cancel-button { -webkit-appearance: none; }
						input[type="email"]::-webkit-email-cancel-button { -webkit-appearance: none; }
						input[type=number] { -moz-appearance:textfield; }
						.mag__details__error{color: rgb(0, 0, 0); text-align: center; display: block; font: 18px/21px hind; padding: 15px; position: absolute; top: 50%; left: 50%; width:100%; transform: translate(-50%,-50%);}
                        select, option{background:#fff}
						
						.txtRight{text-align:right}
						.txtleft{text-align:left}

						.container{padding-left:15px;padding-right:15px;margin-right:auto;margin-left:auto}
                        @media(min-width:1280px){
                            .container{width: 1296px; max-width: 100%;}
                        }
						
						`
					}

					}></style>

				</Head>
				<body>
					<noscript>You need to enable JavaScript to run this app.</noscript>
					<Main />
					<NextScript />					
				</body>
			</Html>
		);
	}
}

export default MyDocument;
