<template>
  <v-app>
    <router-view></router-view>

    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-img
            src="../src/assets/logo.png"
            class="mx-auto"
            width="200"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-container fluid>
            <v-row>
              <v-col cols="6" md="3">
                회사소개
              </v-col>
              <v-col cols="6" md="3">
                개인정보처리방침
              </v-col>
              <v-col cols="6" md="3">
                제휴문의
              </v-col>
              <v-col cols="6" md="3">
                패밀리사이트
              </v-col>
            </v-row>
            <v-row class="caption-text korean-text mt-5">
              (주)유에듀케이션 ㅣ 대표이사 : 정원석 ㅣ 경기도 수원시 권선구
              세권로 219, 도일빌딩 3층 ㅣ Tel : 1661-3283 ㅣ Fax : 031-216-1157
              ㅣ 사업자등록번호 : 124-87-33297 ㅣ 개인정보책임관리자 :
              email@ueducation.co.kr
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12" md="3">
          <v-container fluid>
            <v-row>
              <v-col class="text-purple">
                고객센터
              </v-col>
              <v-col class="text-purple">
                1661-3283
              </v-col>
            </v-row>
            <v-row>
              <v-col class="caption-text">
                FOLLOW US
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-icon>fab fa-instagram</v-icon>
              </v-col>
              <v-col>
                <v-icon>fab fa-youtube</v-icon>
              </v-col>
              <v-col>
                <v-icon>fab fa-facebook</v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row>
        <div style="font-size:9px" class="grey--text text-center mx-auto">
          Copyright ⓒ 2020 BlackHoleEnglish. All Rights Reserved
        </div>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),

  mounted() {
    this.$router.push("/main");
  }
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
