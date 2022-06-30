import React from 'react'
import './ProductList.css'

const Footer = () => {
  return (
    <div>
<div className="footer">
    <section className="pidePage"> 
       <div className="foooter1">
        <h3>Open Food Facts</h3>
        <p> A collaborative, free and open database of food products from around the world.</p>
          <ul className="foooterliste1">
          <li><a className="les-lifooter" href="">Legal </a></li>
          <li><a className="les-lifooter" href="">Terms of use </a></li>
          <li><a className="les-lifooter" href="">Data, API and SDKs</a></li>
          <li><a className="les-lifooter" href="">Donate to Open Food Facts </a></li>
          <li><a className="les-lifooter" href="">Producers </a></li>
                                       
          </ul>
      </div>
  
      <div className="foooter2">
        <h4>Install the app</h4>
        <ul className="foooterliste2">
          <li ><img src="/app-store-google-play.jpg" style="height: 150px; width:250px"></img></li>
          <li ><img src="/microsoft-01.png" style="height: 75px; width:250px"/></li>
          <li ><img src="/Android_icon.png"   style="height: 75px; width:150px" />Android apk</li>
                                      
          </ul>
      </div>
  
      <div className="foooter3">
        <h4>Discover the project</h4>
        <ul className="foooterliste3">
          <li ><a className="les-lifooter" href="">Who we are</a></li>
          <li ><a className="les-lifooter" href="">Vision, Mission, Values and Programs</a></li>
          <li><a className="les-lifooter" href="">Frequently asked questions</a></li>
          <li><a className="les-lifooter" href="">Open Food Facts blog</a></li>
          <li><a className="les-lifooter" href="">Press</a></li>
          <li><a className="les-lifooter" href="">Open Food Facts wiki (en)</a></li>
          <li><a className="les-lifooter" href="">Translators</a></li>
          <li><a className="les-lifooter" href="">Partners</a></li>
          <li><a className="les-lifooter" href="">Open Beauty Facts - Cosmétiques</a></li>
                                       
          </ul>
      </div>
  
      <div className="foooter4">
        <h4>Join the community</h4>
        <p><a className="les-lifooter" href="">Code of conduct</a></p>

        <span>Join us on <a className="les-lifooter" href="">Slack:</a>
         <p> and the <a className="les-lifooter" href="">Facebook group for contributors</a></p>
         <p>Follow us on  <a className="les-lifooter" href="">Twitter, Facebook  </a>  and</p>
         <p><a className="les-lifooter" href="">Instagram</a></p>
          

        </span>
      </div>
     </section>
   </div>


    </div>
  )
}

export default Footer