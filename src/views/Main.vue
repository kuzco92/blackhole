
<template>
  <v-app style="background-color:#00000000">
    <v-container fluid class="py-0 px-0">
      <v-img src="../assets/main_header_img.jpg">
        <div class="white--text d-flex">
          <span
            class="mx-auto h5 nanum"
            style="letter-spacing:15px;text-shadow:0 0 20px white"
          >
            국 내 최 초 !
          </span>
          <span
            class="mx-auto h5 nanum"
            style="letter-spacing:15px;text-shadow:0 0 20px white"
          >
            초 중 등
          </span>
          <span
            class="mx-auto h5 nanum"
            style="letter-spacing:15px;text-shadow:0 0 20px white"
          >
            쌍 방 향 온 라 인
          </span>
          <span
            class="mx-auto h5 nanum"
            style="letter-spacing:15px;text-shadow:0 0 20px white"
            >영 단 어 프 로 그 램
          </span>
        </div>
        <v-container style="height:100%" fluid>
          <v-row style="height:100%">
            <v-col cols="12" md="4" align-self="end">
              <div class="h2 gmarket white--text">
                초중등 영어는 <br />
                단어부터
              </div>
              <div class="white--text">
                실시간 외국인 수업,
                <span class="font-weight-black">블랙홀 영어</span>
              </div>
            </v-col>
            <v-col cols="6">
              <v-img src="../assets/tab.png"></v-img>
            </v-col>
            <v-col align-self="end">
              <div class="d-flex flex-row align-center">
                <div>
                  <div class="caption-text white--text">NEXT PAGE</div>
                  <div class="white--text">
                    무료수업<br />
                    신청하기
                  </div>
                </div>
                <v-icon color="yellow" x-large
                  >fas fa-arrow-circle-right</v-icon
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-container>
    <v-container class="px-0 py-0" fluid>
      <v-img src="../assets/blackhole_main_img2.jpg"></v-img>
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
