import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <>
      <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#ffa500"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#"><h5>Nivash Baba</h5></a></li>
                <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><i class="fas fa-user font-weight-bold"></i> <span className="ml-3">Overview</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Generate</span></a></li>

                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Analytics</span></a></li>
                 <hr/>
                 <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Login</span></a></li>
                 <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Logout</span></a></li>
                 <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Profile</span></a></li>

            </ul>
       </div>
    </>
  )
}

export default Sidebar
