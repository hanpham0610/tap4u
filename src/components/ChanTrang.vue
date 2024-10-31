<template>
  <div class="footer-quetnhanh">
    <div class="d-flex justify-content-center pt-5">
      <!-- <p style="font-weight: bold; margin-bottom: 0">QUETNHANH.VN</p> -->
      <a href="https://quetnhanh.vn/"
        ><img style="width: 100px" src="/img/icon/quetnhanh-trang.png" />
      </a>
    </div>
  </div>
</template>

<style>
html,
body {
  height: 90%;
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 90%;
}

.content {
  flex-grow: 1;
}

.footer-quetnhanh {
  flex-shrink: 0;
  background-size: inherit;
  background-repeat: no-repeat;
  color: white;
  padding: 15px;
  -webkit-filter: drop-shadow(1px 1px 1px #de6800);
  filter: drop-shadow(1px 1px 1px #de6800);
}
</style>
