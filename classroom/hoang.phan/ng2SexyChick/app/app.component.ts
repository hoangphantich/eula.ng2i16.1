
/**
 * import module needed
 */
import { Component } from '@angular/core';

/*
* decorator function
*/
@Component({
    selector: 'my-sexy',
    template: `
        <!-- header -->
        <div class="header">
            <div class="headerTop">
                <!-- logo -->
                <div class="logo">
                    <a href="/"><img src="http://images.tienphong.vn/hoahau/App_Themes/Version2/images/logo.png" alt=""></a>
                </div>
                <div class="clearfix"></div>
            </div>

                <!-- menu -->
            <div id="mainMnu">
                    <ul class="listItemMnuMain">
                        <li><a [routerLink]="['/home']"><img style="position: relative; top: 5px;" src="http://images.tienphong.vn/hoahau/App_Themes/Version2/images/iconhomeFter.png" alt=""></a></li>
                        <li><a [routerLink]="['/sexies']">Sexy</a></li>
                        <li><a href="./events">Event</a></li>
                    </ul>
            </div>
        </div>

        <!-- outlet -->
        <router-outlet></router-outlet>

        <!-- footer -->
        <div class="pad"></div>
        <div class="footer">
            <p>
                Tổng Biên tập: LÊ XUÂN SƠN<br>
                Địa chỉ: 15 Hồ Xuân Hương, Hà Nội.<br>
                Điện thoại: (84 4)9431250 - Fax: (84 4) 9436238<br>
                Email:online@baotienphong.com.vn<br>
                GPXB số 449/GP-BC cấp ngày 18/10/2004.
            </p>
            <p>
            Cơ quan chủ quản: Báo Tiền Phong, Cơ quan trung ương của Đoàn TNCS Hồ Chí Minh<br>
            Không sao chép thông tin từ website này khi chưa có sự đồng ý bằng văn bản của báo Tiền Phong
            </p>
            <a href="http://hoahau.tienphong.vn/hoa-hau-2016/" title="hoa hau 2016">hoa hau 2016</a>
        </div>
        <div class="clearfix"></div>
        `
})

/**
 * class AppComponent "event controller"
 * @author hoangpt
 */
export class AppComponent {
}
