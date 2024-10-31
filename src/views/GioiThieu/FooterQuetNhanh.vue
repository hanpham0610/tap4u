<template>
  <section class="contact-area p-3" id="contact" style=" background: linear-gradient(0deg, #f37d34, #ffffff);;">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 mt-5">
          <div class="contact-content text-center d-flex flex-column">
            <a href="#"><img src="/img/icon/quetnhanh-cam.png" alt="logo" /></a>
            <span class="mt-4" style="color: white;">
              Sử dụng công nghệ NFC và mã QR để chia sẻ danh thiếp điện tử, mạng xã hội, bài báo,...
              chỉ bằng một thao tác. Sử dụng cực kỳ đơn giản trên điện thoại.
            </span>
            

            <div class="contact-social">
              <ul>
                <li>
                  <a class="bg-icon hover-target" href="https://www.facebook.com/quetnhanh/" target="_blank">
                    <img
                      class="m-auto"
                      style="width: 40px"
                      src="/img/icon/App-icon/fb.png"
                      loading="lazy"
                    />
                  </a>
                </li>
                <li>
                  <a class="bg-icon hover-target" href=" https://zalo.me/0395362532" target="_blank">
                    <img
                      class="m-auto"
                      style="width: 40px"
                      src="/img/icon/App-icon/zalo.png"
                      loading="lazy"
                    />
                  </a>
                </li>
                <li>
                  <a class="bg-icon hover-target" href="https://shopee.vn/quetnhanh" target="_blank">
                    <img
                      class="m-auto"
                      style="width: 40px"
                      src="/img/icon/App-icon/shoppe.png"
                      loading="lazy"
                    />
                  </a>
                </li>
              </ul>
            </div>

          </div>
          </div>
      </div>
      
    </div>

    <footer>
        <hr class="mt-4" style="border-bottom: 1px #f37d34 solid; background-color: #ffffff59; " />

    <p>
      Copyright &copy; 2024 <img src="/img/icon/quetnhanh-trang.png" alt="logo" /> All Rights
      Reserved.
    </p>
  </footer>
  </section>

 
</template>
<style>



img {
  max-width: 100%;
  height: auto;
}
section {
  /* min-height: 100vh;*/
  background: linear-gradient(180deg, #FFA500, #000000);
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}


.contact-content p {
  font-size: 15px;
  margin: 30px 0 60px;
  position: relative;
}

.contact-content p::after {
  background: #353c46;
  bottom: -30px;
  content: '';
  height: 1px;
  left: 50%;
  position: absolute;
  transform: translate(-50%);
  width: 80%;
}

.contact-content h6 {
  color: #8b9199;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 10px;
}

.contact-content span {
  color: #353c47;
  margin: 0 10px;
}

.contact-social {
  margin-top: 30px;
}

.contact-social > ul {
  display: inline-flex;
}

.contact-social ul li a {
  border: 1px solid #8b9199;
  color: #8b9199;
  display: inline-block;
  margin: 0 10px;
  padding-top: 5px;
  transition: all 0.4s ease 0s;
}

.contact-social ul li a:hover {
  border: 1px solid #fab702;
  color: #fab702;
}

.contact-content img {
  max-width: 210px;
}

section,
footer {
  color: white;
}

footer p {
  padding: 10px 0;
  text-align: center;
}

footer img {
  width: 70px;
}
</style>