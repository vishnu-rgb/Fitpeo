import React from 'react'
import Card  from './Card'
import UserActivity from './UserActivity'
function Overview() {
  return (
    <>
    <div class="d-flex align-items-start">
        <div class="card">
            <div class="card-body pb-0">
                <div class="d-flex align-items-start">
                    <div class="flex-grow-1">
                        <h5 class="card-title mb-3">Overview</h5>
                    </div>
                    <div class="flex-shrink-0">
                        <div class="dropdown">
                            <a class="dropdown-toggle text-reset" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="fw-semibold">Sort By:</span> <span class="text-muted">Yearly<i class="mdi mdi-chevron-down ms-1"></i></span>
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
                    <div class="row g-0">
                        <div class="col-sm-6">
                            <div class="border-bottom border-end p-3 h-100">
                                <p class="text-muted text-truncate mb-1">Orders</p>
                                <h5 class="text-truncate mb-0">5,643</h5>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="border-bottom p-3 h-100">
                                <p class="text-muted text-truncate mb-1">Sales</p>
                                <h5 class="text-truncate mb-0">16,273</h5>
                            </div>
                        </div>
                    </div>
                    <div class="row g-0">
                        <div class="col-sm-6">
                            <div class="border-bottom border-end p-3 h-100">
                                <p class="text-muted text-truncate mb-1">Order Value</p>
                                <h5 class="text-truncate mb-0">12.03 %</h5>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="border-bottom p-3 h-100">
                                <p class="text-muted text-truncate mb-1">Customers</p>
                                <h5 class="text-truncate mb-0">21,456</h5>
                            </div>
                        </div>
                    </div>
                    <div class="row g-0">
                        <div class="col-sm-6">
                            <div class="border-end p-3 h-100">
                                <p class="text-muted text-truncate mb-1">Income</p>
                                <h5 class="text-truncate mb-0">$35,652</h5>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="p-3 h-100">
                                <p class="text-muted text-truncate mb-1">Expenses</p>
                                <h5 class="text-truncate mb-0">$12,248</h5>
                            </div>
                        </div>
                    

                    </div>
                </div>
               
                </div>
                <Card />
                </div>
                
                <UserActivity />
            
                                                   
    </>
  )
}

export default Overview