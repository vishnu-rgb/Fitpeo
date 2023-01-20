import React from 'react'
import "./User.css";
import CR from '../Img/circle.PNG';
import CU from '../Img/curve.PNG';
function UserActivity() {
  return (
    <>
    <div class="d-flex align-items-start">
        <div class="card-body">
            <div class="d-flex align-items-start">
                <div class="flex-grow-1">
                    <h5 class="card-title mb-3">User Activity</h5>
                </div>
                <div class="flex-shrink-0">
                    <div class="dropdown">
                        <a class="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Weekly<i class="mdi mdi-chevron-down ms-1"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">Yearly</a>
                            <a class="dropdown-item" href="#">Monthly</a>
                            <a class="dropdown-item" href="#">Weekly</a>
                            <a class="dropdown-item" href="#">Today</a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p class="text-muted mb-1">This Month</p>
                <h4>16,543</h4>
            </div>
            <img src={CU}></img>
    </div>
    <div class="card-body">
            <div class="d-flex align-items-start">
                <div class="flex-grow-1">
                    <h5 class="card-title mb-3">Order Status</h5>
                </div>
                <div class="flex-shrink-0">
                    <div class="dropdown">
                        <a class="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            ...<i class="mdi mdi-chevron-down ms-1"></i>
                        </a>

                       
                    </div>
                </div>
            </div>
            <img src={CR}></img>
    </div>
    <div class="card-body">
            <div class="d-flex align-items-start">
                <div class="flex-grow-1">
                    <h5 class="card-title mb-3">Top products</h5>
                </div>
                <div class="flex-shrink-0">
                    <div class="dropdown">
                        <a class="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Monthly<i class="mdi mdi-chevron-down ms-1"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">Yearly</a>
                            <a class="dropdown-item" href="#">Monthly</a>
                            <a class="dropdown-item" href="#">Weekly</a>
                            <a class="dropdown-item" href="#">Today</a>
                        </div>
                    </div>
                </div>
            </div>
{/* 
            
            <img src={CR}></img> */}
    </div>
    </div>                              
    </>

  )
}

export default UserActivity