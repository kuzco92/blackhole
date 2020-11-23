<template>
  <v-app>
    <router-view></router-view>
    <v-container fluid class="px-0 py-0">
      <v-btn
        elevation="3"
        fab
        icon
        fixed
        bottom
        class="yellow black--text"
        :style="
          isMobile ? 'right:20px; bottom:20px' : 'right:50px; bottom:50px'
        "
        href="http://pf.kakao.com/_RgxjSxb/chat"
        target="_blank"
        ><v-icon large>mdi-chat</v-icon></v-btn
      >
    </v-container>
    <v-container class="py-0">
      <v-row class="my-0 py-0">
        <v-col cols="12" md="12">
          <v-container fluid class="py-0">
            <v-row>
              <v-col cols="12" md="12">
                <v-img
                  src="../src/assets/logo.png"
                  class="mx-auto"
                  width="150"
                ></v-img>
              </v-col>
            </v-row>
            <v-row class="caption-text korean-text">
              <v-col class="text-center" cols="12">
                (주)유에듀케이션 | 대표이사 : 정원석<br />
                경기도 수원시 권선구 세권로 219, 도일빌딩 3층 <br />
                Tel : 1661-3283 ㅣ Fax : 031-216-1157<br />
                사업자등록번호 : 124-87-33297<br />
                개인정보책임관리자 : email@ueducation.co.kr
              </v-col>
            </v-row>
            <v-row :class="isMobile ? '' : 'h6'">
              <v-col class="text-purple text-center caption"> 고객센터 </v-col>
              <v-col class="text-purple text-center caption"> 1661-3283 </v-col>
            </v-row>
            <v-row class="text-center" justify="center">
              <v-col cols="2">
                <v-icon>fab fa-instagram</v-icon>
              </v-col>
              <v-col cols="2">
                <v-icon>fab fa-youtube</v-icon>
              </v-col>
              <v-col cols="2">
                <v-icon>fab fa-facebook</v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="my-0 py-0">
        <div style="font-size: 9px" class="grey--text text-center mx-auto">
          Copyright ⓒ 2020 BlackHoleEnglish. All Rights Reserved
        </div>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      rating: 4.8,
      screenWidth: "",
      isMobile: false,
    };
  },

  created() {
    window.addEventListener("resize", this.onWindowResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
  },

  mounted() {
    this.$router.push("/main");
    this.screenWidth = screen.width;
    this.isMobile = this.screenWidth <= 960 ? true : false;

    // document.getElementById("scroll").scrollIntoView();
  },

  methods: {
    onWindowResize() {
      this.screenWidth = screen.width;
      this.isMobile = this.screenWidth <= 960 ? true : false;
    },
  },
};
</script>

<style>
#app {
  /* font-family: "Nanum Gothic", sans-serif; */
  font-family: "NanumSquareRound", sans-serif;
  overflow-x: hidden;
}

.h1 {
  font-weight: 300;
  font-size: 6rem;
  letter-spacing: -0.09375rem;
}
.h2 {
  font-weight: 300;
  font-size: 3.75rem;
  letter-spacing: -0.03125rem;
}
.h3 {
  font-family: "GmarketSansGmarketSansBoldLight", sans-serif;
  font-weight: 400;
  font-size: 3rem;
  letter-spacing: normal;
}
.h4 {
  font-family: "GmarketSansBold", sans-serif;
  font-weight: 400;
  font-size: 2.125rem;
  letter-spacing: -0.015625remm;
}
.h5 {
  font-family: "GmarketSansBold", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  letter-spacing: normal;
  line-break: strict;
  word-break: keep-all;
}
.h6 {
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: 0.009375rem;
}

.subtitle-text-1 {
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.009375rem;
}

.regular {
  font-weight: 400 !important;
}

.v-application .caption {
  font-family: unset;
}

.caption-text {
  font-family: "NanumSquareRound", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.025rem;
}

.nanum {
  font-family: "NanumSquareRound", sans-serif !important;
}

.gmarket {
  font-family: "GmarketSansBold", sans-serif !important;
}

.text-purple {
  color: #5b3690;
}

.text-dark-purple {
  color: #34163e;
}

.korean-text {
  word-break: keep-all;
  line-break: strict;
}

.nav-link {
  cursor: pointer;
}

.brb {
  font-family: "BRBA", sans-serif !important;
}

@font-face {
  font-family: "GmarketSansBold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "BRBA";
  src: url("~@/assets/fonts/BRBA.woff2") format("woff2"),
    url("~@/assets/fonts/BRBA.woff") format("woff");
}
</style>
