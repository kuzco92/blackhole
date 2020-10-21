
<template>
  <v-app style="background-color:#00000000">
    <v-container fluid class="py-0 px-0">
      <v-img src="../assets/main_header_img.jpg">
        <v-container class="d-flex flex-column fill-height">
          <div class="white--text d-flex flex-column flex-md-row mb-10 mb-md-0">
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
          <div class="my-auto">
            <div
              class="text-center brb"
              :class="isMobile ? 'h4' : 'h3'"
              style="color:#ca97ea;"
            >
              초중등 영어는? 단어부터!
            </div>
            <div
              class="text-center brb white--text mt-5"
              :class="isMobile ? 'h3' : 'h2'"
            >
              블랙홀 영단어
            </div>
          </div>
          <div class="mt-10 mt-md-0">
            <v-img
              src="../assets/logo.png"
              width="200"
              class="d-flex mx-auto"
            ></v-img>
          </div>
        </v-container>
      </v-img>
    </v-container>
    <v-container class="px-0 py-5">
      <div class="text-center text-purple h3 mt-5 mb-10 brb korean-text">
        국내최초! 쌍방향 온라인 화상강의
      </div>
      <v-row class="px-3">
        <v-col cols="12" class="py-0">
          <v-text-field
            outlined
            label="이름"
            class="rounded-xl"
            x-large
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-text-field
            outlined
            label="전화번호"
            class="rounded-xl"
            x-large
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="9" class="py-0">
          <v-text-field
            outlined
            label="수업일시"
            class="rounded-xl"
            x-large
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3" class="py-0">
          <v-btn class="white--text rounded-xl" color="#5b3690" x-large block>
            <span>무료 수업 시간표 선택</span>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card flat color="#fafafa">
            <v-container fluid>
              <v-row>
                <v-col cols="12" sm="6" class="py-0">
                  <v-checkbox
                    label="개인정보수집 및 이용동의"
                    x-large
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="6" class="py-0">
                  <v-checkbox
                    label="할인/ 이벤트안내 동의(선택)"
                    x-large
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="px-0 py-0">
      <v-card
        flat
        width="95%"
        class="ml-auto mb-3"
        style="background: linear-gradient(to bottom right, #edf1fb, #f7eff5)"
      >
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="d-flex flex-column  justify-center">
              <div class="h4 nanum mb-10" style="color:#34163e">
                독해단어 <span class="font-weight-bold">10회 인터벌 반복</span>
              </div>
              <div class="grey--text">
                클래스카드를 활용하여 반복적으로 외우는 영단어 암기법을 통해
                뺀질거리는 우리 아이도 제대로 학습할 수 있어요. 매일
                어원단어장을 함께 전송하여 영어를 한층 깊게 학습합니다.
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-img
                class="mx-auto"
                src="../assets/IMG2.png"
                :width="isMobile ? '100%' : '90%'"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <v-card
        flat
        class="mb-3"
        style="background: linear-gradient(to bottom right, #e8f7f8, #f9f2f7)"
      >
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-img
                class="mx-auto"
                src="../assets/IMG3.png"
                :width="isMobile ? '100%' : '90%'"
              ></v-img>
            </v-col>
            <v-col cols="12" md="6" class="d-flex flex-column  justify-center">
              <div class="h4 nanum mb-10" style="color:#34163e">
                외국인 강사님과
                <span class="font-weight-bold">100% 영어학습</span>
              </div>
              <div class="grey--text">
                외국인 강사와 함께하는 100% 영어학습을 통해 발음교정부터 스펠링
                교정까지 강사님과 체계적인 수업이 진행됩니다 . 비대면 그룹과외로
                진행되며, 친구들과 함께 공부하여 학습 능률도 높아집니다.
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <v-card
        flat
        width="95%"
        style="background: linear-gradient(to bottom right, #f2f0fc, #ecf3f9)"
      >
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="d-flex flex-column  justify-center">
              <div class="h4 nanum mb-10" style="color:#34163e">
                카톡으로
                <span class="font-weight-bold">관리하는 자녀 수업 스케줄</span>
              </div>
              <div class="grey--text">
                클래스카드를 활용하여 반복적으로 외우는 영단어 암기법을 통해
                뺀질거리는 우리 아이도 제대로 학습할 수 있어요. 매일
                어원단어장을 함께 전송하여 영어를 한층 깊게 학습합니다.
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-img
                class="mx-auto"
                src="../assets/IMG4.png"
                :width="isMobile ? '100%' : '90%'"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
    <v-container>
      <div class="mt-5 text-purple text-center h4 nanum">체험해보세요,</div>
      <div
        class="mt-5 text-purple text-center h3 brb font-weight-bold korean-text"
      >
        무료수업 신청하기
      </div>

      <v-card flat>
        <v-img src="../assets/FREECLASS_IMG1.png"></v-img>
      </v-card>
    </v-container>
    <v-container class="px-0 py-5">
      <div class="text-center text-purple h3 mt-5 mb-10 brb korrean-text">
        국내최초! 쌍방향 온라인 화상강의
      </div>
      <v-row>
        <v-col cols="12" class="py-0">
          <v-text-field
            outlined
            label="이름"
            class="rounded-xl"
            x-large
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-text-field
            outlined
            label="전화번호"
            class="rounded-xl"
            x-large
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="9" class="py-0">
          <v-text-field
            outlined
            label="수업일시"
            class="rounded-xl"
            x-large
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3" class="py-0">
          <v-btn class="white--text rounded-xl" color="#5b3690" x-large block>
            <span>무료 수업 시간표 선택</span>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card flat color="#fafafa">
            <v-container fluid>
              <v-row>
                <v-col cols="12" sm="6" class="py-0">
                  <v-checkbox
                    label="개인정보수집 및 이용동의"
                    x-large
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="6" class="py-0">
                  <v-checkbox
                    label="할인/ 이벤트안내 동의(선택)"
                    x-large
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
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
