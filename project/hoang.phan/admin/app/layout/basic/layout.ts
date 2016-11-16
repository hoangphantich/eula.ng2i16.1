import { Component } from '@angular/core';

@Component({
    selector: 'boo-admin',
    template: `
        <div class="wrapper">
            <header class="main-header">
                <!-- Logo -->
                <a [routerLink]="['Dashboard']" class="logo">
                    <!-- mini logo for sidebar mini 50x50 pixels -->
                    <span class="logo-mini"><b>B</b>tx</span>
                    <!-- logo for regular state and mobile devices -->
                    <span class="logo-lg"><b>Bontrax</b>Admin</span>
                </a>
                <!-- Header Navbar: style can be found in header.less -->
                <nav class="navbar navbar-static-top">
                    <!-- Sidebar toggle button-->
                    <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </a>
                
                    <div class="navbar-custom-menu">
                        <ul class="nav navbar-nav">

                            <li class="dropdown user user-menu">
                                <a href="" class="dropdown-toggle" data-toggle="dropdown">
                                    <img src="mock_data/images/avatar_blank.jpg" class="user-image" alt="Hoang pix">
                                    <span class="hidden-xs">Hoang</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="user-header">
                                        <img src="mock_data/images/avatar_blank.jpg" class="img-circle" alt="Hoang pix">
                                        <p>
                                            Hoang pix
                                            <small>Member since 2012</small>
                                        </p>
                                    </li>
                                    <li class="user-footer">
                                        <div align="center">
                                            <a href="#" class="btn btn-default btn-flat" (click)="logout()">Sign out</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>            
            </header>
            <!-- sidebar component -->
            <aside sidebar class="main-sidebar"></aside>
            <section class="content-wrapper">
                <router-outlet></router-outlet>
            </section>
            <footer class="main-footer">
                <div class="pull-right hidden-xs">
                    <b>Version</b> 1.0.0
                </div>
                <strong>Bontrax.</strong> 2016            
            </footer>
        </div>

    `
})

/**
 * view controller
 */
export class Layout {

    constructor() {}

    logout() {
        return false;
    }

}