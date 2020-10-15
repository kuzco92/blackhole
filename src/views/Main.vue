
<template>
  <v-app style="background-color:#00000000">
    <v-container fluid class=" px-0 py-0">
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
        <v-container class="pb-16" style="height:98%" fluid>
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
                  <div class="white--text h6">
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
          <div class="d-flex  justify-center white--text mb-10">Show More</div>
        </v-container>
      </v-img>
    </v-container>
    <v-container fluid class="px-0 py-0">
      <v-img src="../assets/blackhole_main_img2.jpg"></v-img>
    </v-container>
    <v-container class="px-0 py-0" fluid>
      <div class="text-center gmarket h3 mt-15">
        초중등 관리형 온라인 영단어 <br />
        블랙홀 영단어가 단어습관을 잡는다.
      </div>
      <v-container class="pt-10">
        <v-row justify="center">
          <v-col cols="12" sm="4" class="d-flex flex-column align-center">
            <v-img src="../assets/sticky-note.svg" width="250"></v-img>
            <div class="mt-5 ">확실한 단어암기</div>
          </v-col>
          <v-col cols="12" sm="4" class="d-flex flex-column align-center">
            <v-img src="../assets/computer.svg" width="250"></v-img>
            <div class="mt-5 ">수업 피드백 전송</div>
          </v-col>
          <v-col cols="12" sm="4" class="d-flex flex-column align-center">
            <v-img src="../assets/school.svg" width="250"></v-img>
            <div class="mt-5 ">효율적인 시간계산</div>
          </v-col>
        </v-row>
      </v-container>
      <div class="text-center mt-16">
        <div class="h3 gmarket text-purple mb-5">블랙홀 완전학습 비결</div>
        <div class="h5 nanum">
          2명의 외국인 강사가 영어로만 하는 국제학교식 수업,
        </div>
        <div class="h5 nanum mb-10">블랙홀 영단어에서만 만날 수 있습니다.</div>
      </div>
    </v-container>
    <v-divider></v-divider>
    <v-container class="py-0 px-0">
      <div class="text-center">
        <div class="h3 gmarket text-purple mb-5">커리큘럼</div>
        <div class="h5 nanum">영단어 암기 블랙홀이 답인 이유!</div>
        <div class="h5 nanum">
          기존 원어민 화상영어 또는 인강과는 전혀 다른 새로운 수업방식
        </div>
      </div>
      <div class="d-flex justify-center mt-10">
        <v-card
          style="border: 1px solid blue"
          class="rounded-circle d-flex align-center justify-center text-center mx-3"
          width="200"
          height="200"
        >
          독해단어 10회 <br />
          인터별 반복
        </v-card>
        <v-card
          style="border: 1px solid blue"
          class="rounded-circle d-flex align-center justify-center text-center mx-3"
          width="200"
          height="200"
        >
          스펠링까지 <br />
          완벽점검!
        </v-card>
        <v-card
          style="border: 1px solid blue"
          class="rounded-circle d-flex align-center justify-center text-center mx-3"
          width="200"
          height="200"
        >
          외국인강사 <br />
          발음교정
        </v-card>
        <v-card
          style="border: 1px solid blue"
          class="rounded-circle d-flex align-center justify-center text-center mx-3"
          width="200"
          height="200"
        >
          영어100% <br />
          수업진행
        </v-card>
        <v-card
          style="border: 1px solid blue"
          class="rounded-circle d-flex align-center justify-center text-center mx-3"
          width="200"
          height="200"
        >
          어원단어장 <br />
          매일 푸쉬
        </v-card>
      </div>
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
