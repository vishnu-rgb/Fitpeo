import React from 'react'

function Sidebar() {
  return (
    <>
        <ul class="metismenu list-unstyled" id="side-menu">
                            <li class="menu-title" data-key="t-menu">Menu</li>

                            <li class="mm-active">
                                <a href="javascript: void(0);" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-grid-outline icon nav-icon"><g data-name="Layer 2"><g data-name="grid"><rect width="24" height="24" opacity="0"></rect><path d="M9 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM5 9V5h4v4z"></path><path d="M19 3h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-4 6V5h4v4z"></path><path d="M9 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-4 6v-4h4v4z"></path><path d="M19 13h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-4 6v-4h4v4z"></path></g></g></svg>
                                    <span class="menu-item" data-key="t-dashboards">Dashboards</span>
                                    <span class="badge rounded-pill bg-primary">3</span>
                                </a>
                                <ul class="sub-menu mm-collapse mm-show" aria-expanded="false">
                                    <li class="mm-active"><a href="index.html" data-key="t-ecommerce" class="active">Ecommerce</a></li>
                                    <li><a href="dashboard-saas.html" data-key="t-saas">Saas</a></li>
                                    <li><a href="dashboard-crypto.html" data-key="t-crypto">Crypto</a></li>
                                </ul>
                            </li>

                            <li class="menu-title" data-key="t-applications">Applications</li>

                            <li>
                                <a href="apps-calendar.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-calendar-outline icon nav-icon"><g data-name="Layer 2"><g data-name="calendar"><rect width="24" height="24" opacity="0"></rect><path d="M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM6 6h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1v4H5V7a1 1 0 0 1 1-1zm12 14H6a1 1 0 0 1-1-1v-6h14v6a1 1 0 0 1-1 1z"></path><circle cx="8" cy="16" r="1"></circle><path d="M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"></path></g></g></svg>
                                    <span class="menu-item" data-key="t-calendar">Calendar</span>
                                </a>
                            </li>

                            <li>
                                <a href="apps-chat.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-message-circle-outline icon nav-icon"><g data-name="Layer 2"><g data-name="message-circle"><circle cx="12" cy="12" r="1"></circle><circle cx="16" cy="12" r="1"></circle><circle cx="8" cy="12" r="1"></circle><path d="M19.07 4.93a10 10 0 0 0-16.28 11 1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09 10 10 0 0 0 11-16.28zm.83 8.36a8 8 0 0 1-11 6.08 3.26 3.26 0 0 0-1.25-.26 3.43 3.43 0 0 0-.56.05l-2.82.57.57-2.82a3.09 3.09 0 0 0-.21-1.81 8 8 0 0 1 6.08-11 8 8 0 0 1 9.19 9.19z"></path><rect width="24" height="24" opacity="0"></rect></g></g></svg>
                                    <span class="menu-item" data-key="t-chat">Chat</span>
                                    <span class="badge rounded-pill badge-soft-danger" data-key="t-hot">Hot</span>
                                </a>
                            </li>

                            <li>
                                <a href="apps-file-manager.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-archive-outline icon nav-icon"><g data-name="Layer 2"><g data-name="archive"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"></rect><path d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-2 5.22V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.22A3 3 0 0 0 21 6zM6 5h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm12 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h12z"></path><rect x="9" y="12" width="6" height="2" rx=".87" ry=".87"></rect></g></g></svg>
                                    <span class="menu-item" data-key="t-filemanager">File Manager</span>
                                </a>
                            </li>

                            <li>
                                <a href="javascript: void(0);" class="has-arrow" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-shopping-bag-outline icon nav-icon"><g data-name="Layer 2"><g data-name="shopping-bag"><rect width="24" height="24" opacity="0"></rect><path d="M20.12 6.71l-2.83-2.83A3 3 0 0 0 15.17 3H8.83a3 3 0 0 0-2.12.88L3.88 6.71A3 3 0 0 0 3 8.83V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.83a3 3 0 0 0-.88-2.12zm-12-1.42A1.05 1.05 0 0 1 8.83 5h6.34a1.05 1.05 0 0 1 .71.29L17.59 7H6.41zM18 19H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1z"></path><path d="M15 11a1 1 0 0 0-1 1 2 2 0 0 1-4 0 1 1 0 0 0-2 0 4 4 0 0 0 8 0 1 1 0 0 0-1-1z"></path></g></g></svg>
                                    <span class="menu-item" data-key="t-ecommerce">Ecommerce</span>
                                </a>
                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                    <li><a href="#" data-key="t-products">Products</a></li>
                                    <li><a href="#" data-key="t-product-detail">Product Detail</a></li>
                                    <li><a href="#" data-key="t-orders">Orders</a></li>
                                    <li><a href="#" data-key="t-customers">Customers</a></li>
                                    <li><a href="#" data-key="t-cart">Cart</a></li>
                                    <li><a href="#" data-key="t-checkout">Checkout</a></li>
                                    <li><a href="#" data-key="t-shops">Shops</a></li>
                                    <li><a href="#" data-key="t-add-product">Add Product</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);" class="has-arrow" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-email-outline icon nav-icon"><g data-name="Layer 2"><g data-name="email"><rect width="24" height="24" opacity="0"></rect><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"></path></g></g></svg>
                                    <span class="menu-item" data-key="t-email">Email</span>
                                </a>
                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                    <li><a href="email-inbox.html" data-key="t-inbox">Inbox</a></li>
                                    <li><a href="email-read.html" data-key="t-read-email">Read Email</a></li>
                                    <li>
                                        <a href="javascript: void(0);" aria-expanded="false">
                                            <span class="menu-item" data-key="t-email-templates">Templates</span>
                                            <span class="badge rounded-pill badge-soft-success" data-key="t-new">New</span>
                                        </a>
                                        <ul class="sub-menu mm-collapse" aria-expanded="true">
                                            <li><a href="email-template-basic.html" data-key="t-basic-action">Basic Action</a></li>
                                            <li><a href="email-template-alert.html" data-key="t-alert-email">Alert Email</a></li>
                                            <li><a href="email-template-billing.html" data-key="t-bill-email">Billing Email</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);" class="has-arrow" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-book-outline icon nav-icon"><g data-name="Layer 2"><g data-name="book"><rect width="24" height="24" opacity="0"></rect><path d="M19 3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7 5h11v10H7a3 3 0 0 0-1 .18V6a1 1 0 0 1 1-1zm0 14a1 1 0 0 1 0-2h11v2z"></path></g></g></svg>
                                    <span class="menu-item" data-key="t-invoices">Invoices</span>
                                </a>
                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                    <li><a href="invoices-list.html" data-key="t-invoice-list">Invoice List</a></li>
                                    <li><a href="invoices-detail.html" data-key="t-invoice-detail">Invoice Detail</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);" class="has-arrow" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-briefcase-outline icon nav-icon"><g data-name="Layer 2"><g data-name="briefcase"><rect width="24" height="24" opacity="0"></rect><path d="M19 7h-3V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-4 2v10H9V9zm-5-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4zM4 18v-8a1 1 0 0 1 1-1h2v10H5a1 1 0 0 1-1-1zm16 0a1 1 0 0 1-1 1h-2V9h2a1 1 0 0 1 1 1z"></path></g></g></svg>
                                    <span class="menu-item" data-key="t-projects">Projects</span>
                                </a>
                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                    <li><a href="projects-grid.html" data-key="t-p-grid">Projects Grid</a></li>
                                    <li><a href="projects-list.html" data-key="t-p-list">Projects List</a></li>
                                    <li><a href="projects-create.html" data-key="t-create-new">Create New</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);" class="has-arrow" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-wifi-outline icon nav-icon"><g data-name="Layer 2"><g data-name="wifi"><rect width="24" height="24" opacity="0"></rect><circle cx="12" cy="19" r="1"></circle><path d="M12 14a5 5 0 0 0-3.47 1.4 1 1 0 1 0 1.39 1.44 3.08 3.08 0 0 1 4.16 0 1 1 0 1 0 1.39-1.44A5 5 0 0 0 12 14z"></path><path d="M12 9a9 9 0 0 0-6.47 2.75A1 1 0 0 0 7 13.14a7 7 0 0 1 10.08 0 1 1 0 0 0 .71.3 1 1 0 0 0 .72-1.69A9 9 0 0 0 12 9z"></path><path d="M21.72 7.93a14 14 0 0 0-19.44 0 1 1 0 0 0 1.38 1.44 12 12 0 0 1 16.68 0 1 1 0 0 0 .69.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.03-1.41z"></path></g></g></svg>
                                    <span class="menu-item" data-key="t-contacts">Contacts</span>
                                </a>
                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                    <li><a href="contacts-grid.html" data-key="t-user-grid">User Grid</a></li>
                                    <li><a href="contacts-list.html" data-key="t-user-list">User List</a></li>
                                    <li><a href="contacts-profile.html" data-key="t-user-profile">Profile</a></li>
                                </ul>
                            </li>

                            <li class="menu-title" data-key="t-layouts">Layouts</li>
                
                            <li>
                                <a href="layouts-horizontal.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-browser-outline icon nav-icon"><g data-name="Layer 2"><g data-name="browser"><rect width="24" height="24" opacity="0"></rect><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7h14zM5 9V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3z"></path><circle cx="8" cy="7.03" r="1"></circle><circle cx="12" cy="7.03" r="1"></circle></g></g></svg>
                                    <span class="menu-item" data-key="t-horizontal">Horizontal</span>
                                </a>
                            </li>

                            <li class="menu-title" data-key="t-pages">Pages</li>

                            <li>
                                <a href="javascript: void(0);" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-person-done-outline icon nav-icon"><g data-name="Layer 2"><g data-name="person-done"><rect width="24" height="24" opacity="0"></rect><path d="M21.66 4.25a1 1 0 0 0-1.41.09l-1.87 2.15-.63-.71a1 1 0 0 0-1.5 1.33l1.39 1.56a1 1 0 0 0 .75.33 1 1 0 0 0 .74-.34l2.61-3a1 1 0 0 0-.08-1.41z"></path><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path><path d="M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"></path></g></g></svg>
                                    <span class="menu-item" data-key="t-authentication">Authentication</span>
                                    <span class="badge rounded-pill bg-info">8</span>
                                </a>
                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                    <li><a href="auth-login.html" data-key="t-login">Login</a></li>
                                    <li><a href="auth-register.html" data-key="t-register">Register</a></li>
                                    <li><a href="auth-recoverpw.html" data-key="t-recover-password">Recover Password</a></li>
                                    <li><a href="auth-lock-screen.html" data-key="t-lock-screen">Lock Screen</a></li>
                                    <li><a href="auth-logout.html" data-key="t-logout">Logout</a></li>
                                    <li><a href="auth-confirm-mail.html" data-key="t-confirm-mail">Confirm Mail</a></li>
                                    <li><a href="auth-email-verification.html" data-key="t-email-verification">Email Verification</a></li>
                                    <li><a href="auth-two-step-verification.html" data-key="t-two-step-verification">Two Step Verification</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);" class="has-arrow" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-cube-outline icon nav-icon"><g data-name="Layer 2"><g data-name="cube"><rect width="24" height="24" opacity="0"></rect><path d="M20.66 7.26c0-.07-.1-.14-.15-.21l-.09-.1a2.5 2.5 0 0 0-.86-.68l-6.4-3a2.7 2.7 0 0 0-2.26 0l-6.4 3a2.6 2.6 0 0 0-.86.68L3.52 7a1 1 0 0 0-.15.2A2.39 2.39 0 0 0 3 8.46v7.06a2.49 2.49 0 0 0 1.46 2.26l6.4 3a2.7 2.7 0 0 0 2.27 0l6.4-3A2.49 2.49 0 0 0 21 15.54V8.46a2.39 2.39 0 0 0-.34-1.2zm-8.95-2.2a.73.73 0 0 1 .58 0l5.33 2.48L12 10.15 6.38 7.54zM5.3 16a.47.47 0 0 1-.3-.43V9.1l6 2.79v6.72zm13.39 0L13 18.61v-6.72l6-2.79v6.44a.48.48 0 0 1-.31.46z"></path></g></g></svg>
                                    <span class="menu-item" data-key="t-utility">Utility</span>
                                </a>
                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                    <li><a href="pages-starter.html" data-key="t-starter-page">Starter Page</a></li>
                                    <li><a href="pages-maintenance.html" data-key="t-maintenance">Maintenance</a></li>
                                    <li><a href="pages-comingsoon.html" data-key="t-coming-soon">Coming Soon</a></li>
                                    <li><a href="pages-timeline.html" data-key="t-timeline">Timeline</a></li>
                                    <li><a href="pages-faqs.html" data-key="t-faqs">FAQs</a></li>
                                    <li><a href="pages-pricing.html" data-key="t-pricing">Pricing</a></li>
                                    <li><a href="pages-404.html" data-key="t-error-404">Error 404</a></li>
                                    <li><a href="pages-500.html" data-key="t-error-500">Error 500</a></li>
                                </ul>
                            </li>

                            <li class="menu-title" data-key="t-components">Components</li>

                            <li>
                                <a href="javascript: void(0);" class="has-arrow" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-layers-outline icon nav-icon"><g data-name="Layer 2"><g data-name="layers"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect><path d="M21 11.35a1 1 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92 1 1 0 0 0-.61-.86l-8-3.41a1 1 0 0 0-.78 0l-8 3.41a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l2.26 1.3-2.15.92a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l2.26 1.3-2.15.92a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l8 4.6a1 1 0 0 0 1 0l8-4.6a1 1 0 0 0 .5-.92 1 1 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92zm-9-6.26l5.76 2.45L12 10.85 6.24 7.54zm-.5 7.78a1 1 0 0 0 1 0l3.57-2 1.69.72L12 14.85l-5.76-3.31 1.69-.72zm6.26 2.67L12 18.85l-5.76-3.31 1.69-.72 3.57 2.05a1 1 0 0 0 1 0l3.57-2.05z"></path></g></g></svg>
                                    <span class="menu-item" data-key="t-ui-elements">UI Elements</span>
                                </a>
                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                    <li><a href="ui-alerts.html" data-key="t-alerts">Alerts</a></li>
                                    <li><a href="ui-buttons.html" data-key="t-buttons">Buttons</a></li>
                                    <li><a href="ui-cards.html" data-key="t-cards">Cards</a></li>
                                    <li><a href="ui-carousel.html" data-key="t-carousel">Carousel</a></li>
                                    <li><a href="ui-dropdowns.html" data-key="t-dropdowns">Dropdowns</a></li>
                                    <li><a href="ui-grid.html" data-key="t-grid">Grid</a></li>
                                    <li><a href="ui-images.html" data-key="t-images">Images</a></li>
                                    <li><a href="ui-lightbox.html" data-key="t-lightbox">Lightbox</a></li>
                                    <li><a href="ui-modals.html" data-key="t-modals">Modals</a></li>
                                    <li><a href="ui-offcanvas.html" data-key="t-offcanvas">Offcanvas</a></li>
                                    <li><a href="ui-rangeslider.html" data-key="t-range-slider">Range Slider</a></li>
                                    <li><a href="ui-progressbars.html" data-key="t-progress-bars">Progress Bars</a></li>
                                    <li><a href="ui-sweet-alert.html" data-key="t-sweet-alert">Sweet-Alert</a></li>
                                    <li><a href="ui-tabs-accordions.html" data-key="t-tabs-accordions">Tabs &amp; Accordions</a></li>
                                    <li><a href="ui-typography.html" data-key="t-typography">Typography</a></li>
                                    <li><a href="ui-video.html" data-key="t-video">Video</a></li>
                                    <li><a href="ui-general.html" data-key="t-general">General</a></li>
                                    <li><a href="ui-colors.html" data-key="t-colors">Colors</a></li>
                                    <li><a href="ui-rating.html" data-key="t-rating">Rating</a></li>
                                    <li><a href="ui-notifications.html" data-key="t-notifications">Notifications</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);" class="has-arrow" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-edit-2-outline icon nav-icon"><g data-name="Layer 2"><g data-name="edit-2"><rect width="24" height="24" opacity="0"></rect><path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"></path><path d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28z"></path></g></g></svg>
                                    <span class="menu-item" data-key="t-forms">Forms</span>
                                </a>
                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                    <li><a href="form-elements.html" data-key="t-form-elements">Form Elements</a></li>
                                    <li><a href="form-layouts.html" data-key="t-form-layouts">Form Layouts</a></li>
                                    <li><a href="form-validation.html" data-key="t-form-validation">Form Validation</a></li>
                                    <li><a href="form-advanced.html" data-key="t-form-advanced">Form Advanced</a></li>
                                    <li><a href="form-editors.html" data-key="t-form-editors">Form Editors</a></li>
                                    <li><a href="form-uploads.html" data-key="t-form-upload">Form File Upload</a></li>
                                    <li><a href="form-wizard.html" data-key="t-form-wizard">Form Wizard</a></li>
                                    <li><a href="form-mask.html" data-key="t-form-mask">Form Mask</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);" class="has-arrow" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-list icon nav-icon"><g data-name="Layer 2"><g data-name="list"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect><circle cx="4" cy="7" r="1"></circle><circle cx="4" cy="12" r="1"></circle><circle cx="4" cy="17" r="1"></circle><rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"></rect><rect x="7" y="16" width="14" height="2" rx=".94" ry=".94"></rect><rect x="7" y="6" width="14" height="2" rx=".94" ry=".94"></rect></g></g></svg>
                                    <span class="menu-item" data-key="t-tables">Tables</span>
                                </a>
                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                    <li><a href="tables-basic.html" data-key="t-basic-tables">Basic Tables</a></li>
                                    <li><a href="tables-advanced.html" data-key="t-advanced-tables">Advance Tables</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);" class="has-arrow" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-pie-chart-outline icon nav-icon"><g data-name="Layer 2"><g data-name="pie-chart"><rect width="24" height="24" opacity="0"></rect><path d="M13 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 9 9 0 0 0-9-9zm1 8V4.07A7 7 0 0 1 19.93 10z"></path><path d="M20.82 14.06a1 1 0 0 0-1.28.61A8 8 0 1 1 9.33 4.46a1 1 0 0 0-.66-1.89 10 10 0 1 0 12.76 12.76 1 1 0 0 0-.61-1.27z"></path></g></g></svg>
                                    <span class="menu-item" data-key="t-charts">Charts</span>
                                </a>
                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                    <li><a href="javascript: void(0);" class="has-arrow" data-key="t-apex-charts" aria-expanded="false">Apex Charts</a>
                                        <ul class="sub-menu mm-collapse" aria-expanded="true">
                                            <li><a href="charts-line.html" data-key="t-line">Line</a></li>
                                            <li><a href="charts-area.html" data-key="t-area">Area</a></li>
                                            <li><a href="charts-column.html" data-key="t-column">Column</a></li>
                                            <li><a href="charts-bar.html" data-key="t-bar">Bar</a></li>
                                            <li><a href="charts-mixed.html" data-key="t-mixed">Mixed</a></li>
                                            <li><a href="charts-timeline.html" data-key="t-timeline">Timeline</a></li>
                                            <li><a href="charts-candlestick.html" data-key="t-candlestick">Candlestick</a></li>
                                            <li><a href="charts-boxplot.html" data-key="t-boxplot">Boxplot</a></li>
                                            <li><a href="charts-bubble.html" data-key="t-bubble">Bubble</a></li>
                                            <li><a href="charts-scatter.html" data-key="t-scatter">Scatter</a></li>
                                            <li><a href="charts-heatmap.html" data-key="t-heatmap">Heatmap</a></li>
                                            <li><a href="charts-treemap.html" data-key="t-treemap">Treemap</a></li>
                                            <li><a href="charts-pie.html" data-key="t-pie">Pie</a></li>
                                            <li><a href="charts-radialbar.html" data-key="t-radialbar">Radialbar</a></li>
                                            <li><a href="charts-radar.html" data-key="t-radar">Radar</a></li>
                                            <li><a href="charts-polararea.html" data-key="t-polararea">Polararea</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="charts-echart.html" data-key="t-e-charts">E Charts</a></li>
                                    <li><a href="charts-chartjs.html" data-key="t-chartjs-charts">Chartjs Charts</a></li>
                                    <li><a href="charts-tui.html" data-key="t-ui-charts">Toast UI Charts</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);" class="has-arrow" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-smiling-face-outline icon nav-icon"><defs><style></style></defs><g id="Layer_2" data-name="Layer 2"><g id="smiling-face"><g id="smiling-face" data-name="smiling-face"><rect width="24" height="24" opacity="0"></rect><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm5 9a5 5 0 0 1-10 0z" id="🎨-Icon-Сolor"></path></g></g></g></svg>
                                    <span class="menu-item" data-key="t-icons">Icons</span>
                                </a>
                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                    <li><a href="icons-evaicons.html" data-key="t-evaicons">Eva Icons</a></li>
                                    <li><a href="icons-boxicons.html" data-key="t-boxicons">Boxicons</a></li>
                                    <li><a href="icons-materialdesign.html" data-key="t-material-design">Material Design</a></li>
                                    <li><a href="icons-fontawesome.html" data-key="t-font-awesome">Font Awesome 5</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);" class="has-arrow" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-pin-outline icon nav-icon"><g data-name="Layer 2"><g data-name="pin"><rect width="24" height="24" opacity="0"></rect><path d="M12 2a8 8 0 0 0-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0 0 12 2zm0 17.65c-1.67-1.59-6-6-6-9.73a6 6 0 0 1 12 0c0 3.7-4.33 8.14-6 9.73z"></path><path d="M12 6a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 6zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 11z"></path></g></g></svg>
                                    <span class="menu-item" data-key="t-maps">Maps</span>
                                </a>
                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                    <li><a href="maps-google.html" data-key="t-google">Google</a></li>
                                    <li><a href="maps-vector.html" data-key="t-vector">Vector</a></li>
                                    <li><a href="maps-leaflet.html" data-key="t-leaflet">Leaflet</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);" class="has-arrow" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-share-outline icon nav-icon"><g data-name="Layer 2"><g data-name="share"><rect width="24" height="24" opacity="0"></rect><path d="M18 15a3 3 0 0 0-2.1.86L8 12.34V12v-.33l7.9-3.53A3 3 0 1 0 15 6v.34L7.1 9.86a3 3 0 1 0 0 4.28l7.9 3.53V18a3 3 0 1 0 3-3zm0-10a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM5 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm13 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path></g></g></svg>
                                    <span class="menu-item" data-key="t-multi-level">Multi Level</span>
                                </a>
                                <ul class="sub-menu mm-collapse" aria-expanded="true">
                                    <li><a href="javascript: void(0);" data-key="t-level-1.1">Level 1.1</a></li>
                                    <li><a href="javascript: void(0);" class="has-arrow" data-key="t-level-1.2" aria-expanded="false">Level 1.2</a>
                                        <ul class="sub-menu mm-collapse" aria-expanded="true">
                                            <li><a href="javascript: void(0);" data-key="t-level-2.1">Level 2.1</a></li>
                                            <li><a href="javascript: void(0);" data-key="t-level-2.2">Level 2.2</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                        </ul>
    </>
  )
}

export default Sidebar