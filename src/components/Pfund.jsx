import React from 'react';
import './Pfund.css';

function Pfund() {
    return (
        <>
            <section className="py-5 header">
                <div className="container py-4">
                    <header className="text-center mb-5 pb-5 text-white">
                        {/* <h1 className="display-4">Bootstrap vertical tabs</h1>
                        <p className="font-italic mb-1">Making advantage of Bootstrap 4 components, easily build an awesome tabbed interface.</p>
                        <p className="font-italic">Snippet by
                            <a className="text-white" href="https://bootstrapious.com/">
                                <u>Bootstrapious</u>
                            </a>
                        </p> */}
                    </header>


                    <div className="row">
                        {/* <div className="col-md-3">
                            
                            <div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link mb-3 p-3 shadow active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <i className="fa fa-user-circle-o mr-2"></i>
                                    <span className="font-weight-bold small text-uppercase">Personal information</span></a>

                                <a className="nav-link mb-3 p-3 shadow" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                    <i className="fa fa-calendar-minus-o mr-2"></i>
                                    <span className="font-weight-bold small text-uppercase">Bookings</span></a>

                                <a className="nav-link mb-3 p-3 shadow" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                    <i className="fa fa-star mr-2"></i>
                                    <span className="font-weight-bold small text-uppercase">Reviews</span></a>

                                <a className="nav-link mb-3 p-3 shadow" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                    <i className="fa fa-check mr-2"></i>
                                    <span className="font-weight-bold small text-uppercase">Confirm booking</span></a>
                                </div>
                        </div> */}


                        <div className="col-md-9">
                            
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade shadow rounded bg-white show active p-5" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <div className="image">
                                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Icon" />
                                    </div>
                                    <h4 className="font-italic mb-4">Autonomy</h4>
                                    <p className="font-italic text-muted mb-2">The Forsage ecosystem is built around the technology of smart contracts and NFTs, which are completely autonomous and exclude the influence of the human factor.</p>
                                </div>
                                
                                <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <div className="image">
                                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Icon" />
                                    </div>                        <h4 className="font-italic mb-4">Unchanging conditions</h4>
                                    <p className="font-italic text-muted mb-2">The algorithm is stored on the blockchain, so no one, even the authors of the idea, can intervene, cancel or change your transactions.</p>
                                </div>
                                
                                <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    <div className="image">
                                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Icon" />
                                    </div>                        <h4 className="font-italic mb-4">Transparency</h4>
                                    <p className="font-italic text-muted mb-2">The smart contract code is stored in the public domain, and anyone can view the entire transaction history at any time. This ensures fair conditions and reliable statistics that you can rely on.</p>
                                </div>
                                
                                <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                    <div className="image">
                                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Icon" />
                                    </div>                        <h4 className="font-italic mb-4">Full automation</h4>
                                    <p className="font-italic text-muted mb-2 ">All transactions between community members take place directly from one personal wallet to another. Participants do not have accounts within the system from which to withdraw funds, since Forsage does not store your assets</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            
                            <div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link mb-3 p-3 shadow active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    
                                    <span className="font-weight-bold small text-uppercase">Autonomy</span></a>

                                <a className="nav-link mb-3 p-3 shadow" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                    
                                    <span className="font-weight-bold small text-uppercase">Unchanging conditions</span></a>

                                <a className="nav-link mb-3 p-3 shadow" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                    
                                    <span className="font-weight-bold small text-uppercase">Transparency</span></a>

                                <a className="nav-link mb-3 p-3 shadow" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                    
                                    <span className="font-weight-bold small text-uppercase">Full automation</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    );
}

export default Pfund;
