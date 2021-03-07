<template>
  <header>
    <div class="header-top d-none d-md-block">
      <div class="container">
        <div class="hotline">
          <img src="images/icon-phone.svg" alt="" /> Hotline: 0941672992
        </div>
        <div class="mail">
          <img src="images/icon-mail.svg" alt="" /> Email:
          baohodoanhnghiep@gmail.vn
        </div>
      </div>
    </div>
    <div class="header">
      <div class="container">
        <div class="header-content">
          <div class="bars d-inline-block d-lg-none">
            <a href="javascript:;"><img src="images/icon-bars.png" alt="" /></a>
          </div>
          <div class="logo">
            <a href=""><img src="images/logo.png" alt="" /></a>
          </div>
          <div class="cart">
            <a href="">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.2 19.2C5.88 19.2 4.812 20.28 4.812 21.6C4.812 22.92 5.88 24 7.2 24C8.52 24 9.6 22.92 9.6 21.6C9.6 20.28 8.52 19.2 7.2 19.2ZM0 0V2.4H2.4L6.72 11.508L5.1 14.448C4.908 14.784 4.8 15.18 4.8 15.6C4.8 16.92 5.88 18 7.2 18H21.6V15.6H7.704C7.536 15.6 7.404 15.468 7.404 15.3L7.44 15.156L8.52 13.2H17.46C18.36 13.2 19.152 12.708 19.56 11.964L23.856 4.176C23.952 4.008 24 3.804 24 3.6C24 2.94 23.46 2.4 22.8 2.4H5.052L3.924 0H0ZM19.2 19.2C17.88 19.2 16.812 20.28 16.812 21.6C16.812 22.92 17.88 24 19.2 24C20.52 24 21.6 22.92 21.6 21.6C21.6 20.28 20.52 19.2 19.2 19.2Z"
                  fill="#469292"
                />
              </svg>
              <span>1</span>
            </a>
          </div>
          <div class="header_main">
            <div class="header_main-account-mobile">
              <a class="avatar" href=""
                ><svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="avatar__icon"
                  size="40"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                  ></path>
                </svg>
                <div class="avatar__content">
                  <div class="avatar__name">Đăng nhập</div>
                  <div class="avatar__email">Nhận nhiều ưu đãi hơn</div>
                </div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  size="20"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" ></path></svg
              ></a>
            </div>
            <div class="header-search position-relative">
              <input class="form-control" type="text" placeholder="Bạn tìm gì hôm nay?">
              <a href="" class="icon-search"><img src="images/icon-search.png" alt=""></a>
            </div>
            <div class="header_main-menu">
              <!-- <a href="javascript:;" class="close-btn d-inline-block d-lg-none" ><img src="images/icon-close.svg" width="20" alt="" srcset="" /></a> -->
              <ul class="main-menu">
                <li><a href="">Trang chủ</a></li>
                <li class="has-sub-menu">
                  <a href="">Giới thiệu</a>
                  <i class="fa fa-angle-down click-menuDown" aria-hidden="true"></i>
                  <ul  class="sub-menu">
                    <li><a href=""> Ngoại ngữ</a></li>
                    <li><a href=""> Kinh doanh - Khởi nghiệp</a></li>
                    <li><a href=""> Kinh doanh - Khởi nghiệp</a></li>
                    <li><a href=""> Tin học văn phòng</a></li>
                  </ul>
                </li>
                <li><a href="">Khóa học</a></li>
                <li><a href="">Khóa học</a></li>
                <li><a href="">Liên hệ</a></li>
              </ul>
              <div class="header_main-actions">
                <div class="cart">
                  <a href="">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.2 19.2C5.88 19.2 4.812 20.28 4.812 21.6C4.812 22.92 5.88 24 7.2 24C8.52 24 9.6 22.92 9.6 21.6C9.6 20.28 8.52 19.2 7.2 19.2ZM0 0V2.4H2.4L6.72 11.508L5.1 14.448C4.908 14.784 4.8 15.18 4.8 15.6C4.8 16.92 5.88 18 7.2 18H21.6V15.6H7.704C7.536 15.6 7.404 15.468 7.404 15.3L7.44 15.156L8.52 13.2H17.46C18.36 13.2 19.152 12.708 19.56 11.964L23.856 4.176C23.952 4.008 24 3.804 24 3.6C24 2.94 23.46 2.4 22.8 2.4H5.052L3.924 0H0ZM19.2 19.2C17.88 19.2 16.812 20.28 16.812 21.6C16.812 22.92 17.88 24 19.2 24C20.52 24 21.6 22.92 21.6 21.6C21.6 20.28 20.52 19.2 19.2 19.2Z"
                        fill="#469292"
                      />
                    </svg>
                    <span>1</span>
                  </a>
                </div>
                <div class="account">
                  <a href="" class="log-in">Đăng nhập</a>
                  <a href="" class="register">Đăng ký</a>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </div>
    <div class="overlay"></div>
  </header>
</template>