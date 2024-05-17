import React from 'react';
import './Pfund.css';

function Pfund() {
    return (
      <>
      
      <section class="py-5 header">
    <div class="container py-4">
        <header class="text-center mb-5 pb-5 text-white">
            {/* <h1 class="display-4">Bootstrap vertical tabs</h1>
            <p class="font-italic mb-1">Making advantage of Bootstrap 4 components, easily build an awesome tabbed interface.</p>
            <p class="font-italic">Snippet by
                <a class="text-white" href="https://bootstrapious.com/">
                    <u>Bootstrapious</u>
                </a>
            </p> */}
        </header>


        <div class="row">
            {/* <div class="col-md-3">
                
                <div class="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link mb-3 p-3 shadow active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                        <i class="fa fa-user-circle-o mr-2"></i>
                        <span class="font-weight-bold small text-uppercase">Personal information</span></a>

                    <a class="nav-link mb-3 p-3 shadow" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                        <i class="fa fa-calendar-minus-o mr-2"></i>
                        <span class="font-weight-bold small text-uppercase">Bookings</span></a>

                    <a class="nav-link mb-3 p-3 shadow" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                        <i class="fa fa-star mr-2"></i>
                        <span class="font-weight-bold small text-uppercase">Reviews</span></a>

                    <a class="nav-link mb-3 p-3 shadow" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                        <i class="fa fa-check mr-2"></i>
                        <span class="font-weight-bold small text-uppercase">Confirm booking</span></a>
                    </div>
            </div> */}


            <div class="col-md-9">
               
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade shadow rounded bg-white show active p-5" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <div className="image">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                        </div>
                        <h4 class="font-italic mb-4">Autonomy</h4>
                        <p class="font-italic text-muted mb-2">The Forsage ecosystem is built around the technology of smart contracts and NFTs, which are completely autonomous and exclude the influence of the human factor.</p>
                    </div>
                    
                    <div class="tab-pane fade shadow rounded bg-white p-5" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <div className="image">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                        </div>                        <h4 class="font-italic mb-4">Unchanging conditions</h4>
                        <p class="font-italic text-muted mb-2">The algorithm is stored on the blockchain, so no one, even the authors of the idea, can intervene, cancel or change your transactions.</p>
                    </div>
                    
                    <div class="tab-pane fade shadow rounded bg-white p-5" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    <div className="image">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                        </div>                        <h4 class="font-italic mb-4">Transparency</h4>
                        <p class="font-italic text-muted mb-2">The smart contract code is stored in the public domain, and anyone can view the entire transaction history at any time. This ensures fair conditions and reliable statistics that you can rely on.</p>
                    </div>
                    
                    <div class="tab-pane fade shadow rounded bg-white p-5" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <div className="image">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                        </div>                        <h4 class="font-italic mb-4">Full automation</h4>
                        <p class="font-italic text-muted mb-2 ">All transactions between community members take place directly from one personal wallet to another. Participants do not have accounts within the system from which to withdraw funds, since Forsage does not store your assets</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                
                <div class="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link mb-3 p-3 shadow active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                        
                        <span class="font-weight-bold small text-uppercase">Autonomy</span></a>

                    <a class="nav-link mb-3 p-3 shadow" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                        
                        <span class="font-weight-bold small text-uppercase">Unchanging conditions</span></a>

                    <a class="nav-link mb-3 p-3 shadow" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                        
                        <span class="font-weight-bold small text-uppercase">Transparency</span></a>

                    <a class="nav-link mb-3 p-3 shadow" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                        
                        <span class="font-weight-bold small text-uppercase">Full automation</span></a>
                    </div>
            </div>
        </div>
    </div>
</section>  
      </>
      
    );
  }
  
  export default Pfund;
