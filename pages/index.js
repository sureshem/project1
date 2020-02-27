import Head from 'next/head'
import Banner from '../components/banner/banner';
import TopWddingVendor from '../components/vendorinfo/topweddingvendor';
import FindWeddingVendor from '../components/vendorinfo/findingvendorinfo';
import WeddingVendorTypes from '../components/vendorinfo/weddingvendortypes';
import AllvendorCategories from '../components/vendorinfo/allvendorcategories';
import Errorboundry from '../components/errorboundry/errorboundry';

import fetch from 'isomorphic-unfetch';

const Home = (props) => {
  console.log(props,'asdf')
  return (
  <div>
    <Head>
      <title>App</title>
      <link rel="icon" href="/static/images/favIcon/favicon.ico" />
    </Head>
    
    <main>      
      <Errorboundry>
          <Banner/>
      </Errorboundry>
      <Errorboundry>
          <TopWddingVendor data={props.showData.data}/>
      </Errorboundry>
      <Errorboundry>
          <FindWeddingVendor/>
      </Errorboundry>
      <Errorboundry>
          <WeddingVendorTypes/>
      </Errorboundry>
      <Errorboundry>
          <AllvendorCategories/>
      </Errorboundry>
    </main>

    <footer>
     
    </footer>

    <style jsx>{`
      
    `}</style>

    <style jsx global>{`
      
    `}</style>
  </div>
  );
}
Home.getInitialProps = async function(){
  let res = await fetch('https://www.wedmegood.com/api/v2/vendor/filter?version=2.0&source=1&filter=1&seo=1&offset=0&random=4981&city_slug=chennai&category_slug=mehendi-artists&filter_slug=chennai%2Fmehendi-artists%2F&token=5e4b81d6616385.40632759&filter_option=&page=1&device_type=1')
  let resData = await res.json()
  return {
    showData: resData
  }

}
export default Home
