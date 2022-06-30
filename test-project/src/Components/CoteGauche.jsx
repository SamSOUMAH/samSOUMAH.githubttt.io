import React from 'react'

const CoteGauche = () => {
  return (
    <div>
         <div className='corpsducote'>
                      <section  className="navCote">
                        <div className="navCote">
                            <nav className="tab-bar">
                             <div>
                                <p>Open Food Facts gathers information and data on food products from around the world.</p>
                             </div>
                           </nav>
                    
                        <aside className="left">
                          
                               <div className="blockside">
                                        <h3  className="block_title">Sign in</h3>
                                            <div className="block_content">
                                                   <p>Sign-in to add or edit products.</p>
                                                    <form method="post">
                                                         <div className="row">
                                                                         <div className="mails">
                                                                            <label for="user_id">Username or e-mail address:
                                                                                <input type="text" name="user_id" id="user_id">
                                                                            </label>
                                                                          </div>
                                                                                <div className="mails">
                                                                                   <label for="password" >Password
                                                                                    <input type="password" name="password" id="password">
                                                                                  </label>
                                                                                 </div>
                    
                                                                          <div cclassName="small-12 columns">
                                                                                 <label for="remember_me_checkbox">
                                                                              <input type="checkbox" name="remember_me" id="remember_me_checkbox" checked>Remember me
                                                                               </label>
                                                                          </div>
                                                           </div>
                                                     <input type="submit" name=".submit" value="Sign in" className="button-small">
                                                   </form> 
                    
                                                   <div>
                                                     <span> Not registered yet? <a href="#"> your account.
                                                       Forgotten password?</a>   
                                                     </span>
                                                   </div>
                                                   
                                                   <div className="codebardiv">
                                                     <span> Add a product     
                                                       <input  name="Picture_with_barcode" id="barcode" value="Picture with barcode">
                                                     </span>
                                                   </div>
                    
                                                <form method="post" >
                    
                                                     <div className="row-collapse">
                                                       <div className="small-columns">
                                                            <input type="text" name="code" placeholder="or Barcode"className="Orbacode">
                                                                </div>
                                                                    <div className="small-3 columns">
                                                                           <input type="submit" value="Add" className="button-postfix">
                                                                    </div>
                                                                 </div>
                                                            <input type="submit" value="Product without barcode" className="button-tiny">
                                                       </div>
                                                       </div>
                                                </form>
                    
                                        <div className="block">
                                          <h3 className="block_title">Donate to support our work</h3>
                                        <div className="block_content">
                                         <a href="https://world.openfoodfacts.org/donate-to-open-food-facts"><img src="https://static.openfoodfacts.org/images/svg/donate-icon.svg" alt="Donate to Open Food Facts" /></a><p>Open Food Facts is made by a non-profit association, independent from the industry. It is made for all, by all, and it is funded by all. You can support our work by <a href="https://world.openfoodfacts.org/donate-to-open-food-facts">donating to Open Food Facts</a> and also by <a href="https://www.lilo.org/fr/open-food-facts/?utm_source=open-food-facts">using the Lilo search engine</a>.<br/><b>Thank you!</b></p>
                              </div>
                           </aside>
                       </div>
                   </section>

                </div>
    </div>
  )
}

export default CoteGauche