
<template>
  <v-app style="background-color:#00000000">
    <v-container fluid class="py-0 px-0">
      <v-img src="../assets/main_header_img.jpg">
        <div class="white--text d-flex">
          <span
            class="mx-auto h5 nanum"
            style="letter-spacing:20px;text-shadow:0 0 20px white"
            >국 내 최 초</span
          >
          <span
            class="mx-auto h5 nanum"
            style="letter-spacing:20px;text-shadow:0 0 20px white"
            >초 중 등</span
          >
          <span
            class="mx-auto h5 nanum"
            style="letter-spacing:20px;text-shadow:0 0 20px white"
            >쌍 방 향 온 라 인</span
          >
          <span
            class="mx-auto h5 nanum"
            style="letter-spacing:20px;text-shadow:0 0 20px white"
            >프 로 그 램</span
          >
        </div>
        <div
          class="text-center h3 gmarket"
          style="color:#ca97ea;margin-top:100px"
        >
          초중등 영어는? 단어부터!
        </div>
        <div class="text-center h2 gmarket white--text mt-5">
          블랙홀 영단어
        </div>
        <div style="position:absolute;bottom:20px;width:100%">
          <v-img
            src="../assets/logo.png"
            width="200"
            class="d-flex mx-auto"
          ></v-img>
        </div>
      </v-img>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      rating: 4.8,
      screenWidth: "",
      isMobile: false
    };
  },

  created() {
    window.addEventListener("resize", this.onWindowResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
  },

  mounted() {
    this.screenWidth = screen.width;
    this.isMobile = this.screenWidth <= 960 ? true : false;
  },

  methods: {
    onWindowResize() {
      this.screenWidth = screen.width;
      this.isMobile = this.screenWidth <= 960 ? true : false;
    }
  }
};
</script>
