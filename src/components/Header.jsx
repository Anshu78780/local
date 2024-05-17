import React from 'react';
import './Header.css';

function Header() {
    return (
     <>
     <div class="how-section1">
                    <div className="row">
                        <div class="col-md-6 how-img">
                            <img src="https://images.ctfassets.net/c5bd0wqjc7v0/5oEZBTPlhzKLA5OrNpRmsl/5164ee267cc2942f22b8cff329f933fb/hero_3x.png?fm=webp&q=100&w=1180"  alt="Intro Image"/>
                        </div>
                        <div className="col-md-6">
                            <h2>The future of money is here</h2>
                        <p className="text">We're the most trusted place for people and businesses to buy, sell, and manage crypto.</p>
                        <div className="button">                           
                        <a href="#"><button type="button" class="btn btn-primary">Registration</button></a>
                        <a href="#"></a><button type="button" class="btn btn-primary"> &ensp; Patner &ensp; </button>
                        </div>
                        </div>
                        
                    </div>
                    
      </div>

      </>
    );
  }
  
  export default Header;
