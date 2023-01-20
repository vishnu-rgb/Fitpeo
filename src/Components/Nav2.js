import React from 'react'

function Nav2() {
  return (
    <div>
        <div class="row">
            <div class="col-xl-4 col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar">
                                    <div class="avatar-title rounded bg-primary bg-gradient">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-pie-chart-2 fill-white"><g data-name="Layer 2"><g data-name="pie-chart-2"><rect width="24" height="24" opacity="0"></rect><path d="M14.5 10.33h6.67A.83.83 0 0 0 22 9.5 7.5 7.5 0 0 0 14.5 2a.83.83 0 0 0-.83.83V9.5a.83.83 0 0 0 .83.83zm.83-6.6a5.83 5.83 0 0 1 4.94 4.94h-4.94z"></path><path d="M21.08 12h-8.15a.91.91 0 0 1-.91-.91V2.92A.92.92 0 0 0 11 2a10 10 0 1 0 11 11 .92.92 0 0 0-.92-1z"></path></g></g></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <p class="text-muted mb-1">Revenue</p>
                                <h4 class="mb-0">$21,456</h4>
                            </div>

                            <div class="flex-shrink-0 align-self-end ms-2">
                                <div class="badge rounded-pill font-size-13 badge-soft-success">+ 2.65%
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
            <div class="col-xl-4 col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar">
                                    <div class="avatar-title rounded bg-primary bg-gradient">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-shopping-bag fill-white"><g data-name="Layer 2"><g data-name="shopping-bag"><rect width="24" height="24" opacity="0"></rect><path d="M20.12 6.71l-2.83-2.83A3 3 0 0 0 15.17 3H8.83a3 3 0 0 0-2.12.88L3.88 6.71A3 3 0 0 0 3 8.83V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.83a3 3 0 0 0-.88-2.12zM12 16a4 4 0 0 1-4-4 1 1 0 0 1 2 0 2 2 0 0 0 4 0 1 1 0 0 1 2 0 4 4 0 0 1-4 4zM6.41 7l1.71-1.71A1.05 1.05 0 0 1 8.83 5h6.34a1.05 1.05 0 0 1 .71.29L17.59 7z"></path></g></g></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <p class="text-muted mb-1">Orders</p>
                                <h4 class="mb-0">5,643</h4>
                            </div>
                            <div class="flex-shrink-0 align-self-end ms-2">
                                <div class="badge rounded-pill font-size-13 badge-soft-danger">- 0.82%
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
            <div class="col-xl-4">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 me-3">
                                <div class="avatar">
                                    <div class="avatar-title rounded bg-primary bg-gradient">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-people fill-white"><g data-name="Layer 2"><g data-name="people"><rect width="24" height="24" opacity="0"></rect><path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"></path><path d="M17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3z"></path><path d="M21 20a1 1 0 0 0 1-1 5 5 0 0 0-8.06-3.95A7 7 0 0 0 2 20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1"></path></g></g></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <p class="text-muted mb-1">Customers</p>
                                <h4 class="mb-0">45,254</h4>
                            </div>
                            <div class="flex-shrink-0 align-self-end ms-2">
                                <div class="badge rounded-pill font-size-13 badge-soft-danger">- 1.04%
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Nav2