
<template>
  <v-app style="background-color: #00000000">
    <v-container fluid class="py-0 px-0">
      <v-img
        src="../assets/main_header_img.jpg"
        :height="isMobile ? 'auto' : '100vh'"
      >
        <v-container
          class="d-flex flex-column"
          :class="isMobile ? 'px-0 py-0 ' : 'px-8'"
          style="height: 100%; max-width: 1000px"
        >
          <Header></Header>

          <v-container class="d-flex flex-column fill-height">
            <div
              class="white--text d-flex flex-column flex-md-row mb-10 mb-md-0"
            >
              <span
                class="mx-auto h5 nanum"
                :style="
                  isMobile
                    ? ''
                    : 'letter-spacing: 15px; text-shadow: 0 0 20px white'
                "
                >국 내 최 초</span
              >
              <span
                class="mx-auto h5 nanum"
                :style="
                  isMobile
                    ? ''
                    : 'letter-spacing: 15px; text-shadow: 0 0 20px white'
                "
                >초 중 등</span
              >
              <span
                class="mx-auto h5 nanum"
                :style="
                  isMobile
                    ? ''
                    : 'letter-spacing: 15px; text-shadow: 0 0 20px white'
                "
                >쌍 방 향 온 라 인</span
              >
              <span
                class="mx-auto h5 nanum"
                :style="
                  isMobile
                    ? ''
                    : 'letter-spacing: 15px; text-shadow: 0 0 20px white'
                "
                >프 로 그 램</span
              >
            </div>
            <div class="my-auto">
              <div
                class="text-center brb"
                :class="isMobile ? 'h4' : 'h3'"
                style="color: #ca97ea"
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
        </v-container>
      </v-img>
    </v-container>
    <v-container :class="isMobile ? 'px-0 py-5' : 'px-10 py-5'">
      <div
        class="text-center text-purple mt-5 mb-10 brb korean-text"
        :class="isMobile ? 'h3' : 'h2'"
      >
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
      <div class="d-flex">
        <v-btn
          color="#4d2794"
          depressed
          class="white--text mx-auto px-10 rounded-tl-xl rounded-bl-xl rounded-tr-xl"
          x-large
          >블랙홀 무료체험
        </v-btn>
      </div>
    </v-container>
    <v-container class="px-0 py-0" fluid v-if="!isMobile">
      <v-card flat color="#ece2f3" tile class="py-5">
        <v-carousel
          hide-delimiter-background
          show-arrows-on-hover
          hide-delimiters
        >
          <v-carousel-item>
            <div class="d-flex justify-center">
              <div class="d-flex" v-for="(review, i) in review1" :key="i">
                <v-card
                  max-width="360"
                  class="pa-3 mx-3"
                  style="border: 1px solid #4d2794"
                  light
                >
                  <div class="d-flex flex-column justify-center">
                    <div
                      class="text-center text-purple font-weight-bold h5 mb-3"
                    >
                      {{ review.title }}
                    </div>
                    <div
                      class="grey--text nanum h6 korean-text text-center mb-5"
                    >
                      {{ review.body }}
                    </div>
                    <div class="text-purple nanum h6 text-center">
                      {{ review.footer }}
                    </div>
                  </div>
                </v-card>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="d-flex justify-center">
              <div class="d-flex" v-for="(review, i) in review2" :key="i">
                <v-card
                  max-width="360"
                  class="pa-3 mx-3"
                  style="border: 1px solid #4d2794"
                  light
                >
                  <div class="d-flex flex-column justify-center">
                    <div
                      class="text-center text-purple font-weight-bold h5 mb-3"
                    >
                      {{ review.title }}
                    </div>
                    <div
                      class="grey--text nanum h6 korean-text text-center mb-5"
                    >
                      {{ review.body }}
                    </div>
                    <div class="text-purple nanum h6 text-center">
                      {{ review.footer }}
                    </div>
                  </div>
                </v-card>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="d-flex justify-center">
              <div class="d-flex" v-for="(review, i) in review3" :key="i">
                <v-card
                  max-width="360"
                  class="pa-3 mx-3"
                  style="border: 1px solid #4d2794"
                  light
                >
                  <div class="d-flex flex-column justify-center">
                    <div
                      class="text-center text-purple font-weight-bold h5 mb-3"
                    >
                      {{ review.title }}
                    </div>
                    <div
                      class="grey--text nanum h6 korean-text text-center mb-5"
                    >
                      {{ review.body }}
                    </div>
                    <div class="text-purple nanum h6 text-center">
                      {{ review.footer }}
                    </div>
                  </div>
                </v-card>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-container>
    <v-container v-else>
      <v-card flat color="#ece2f3" tile class="py-5">
        <v-carousel
          hide-delimiter-background
          show-arrows-on-hover
          hide-delimiters
        >
          <v-carousel-item v-for="(review, i) in review1" :key="i">
            <div class="d-flex justify-center fill-height">
              <div class="d-flex fill-height">
                <v-card
                  max-width="360"
                  class="pa-3 mx-3"
                  style="border: 1px solid #4d2794"
                  light
                >
                  <div class="d-flex flex-column justify-center">
                    <div
                      class="text-center text-purple font-weight-bold h5 mb-3"
                    >
                      {{ review.title }}
                    </div>
                    <div
                      class="grey--text nanum h6 korean-text text-center mb-5"
                    >
                      {{ review.body }}
                    </div>
                    <div class="text-purple nanum h6 text-center">
                      {{ review.footer }}
                    </div>
                  </div>
                </v-card>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item v-for="(review, i) in review2" :key="i">
            <div class="d-flex justify-center fill-height">
              <div class="d-flex fill-height">
                <v-card
                  max-width="360"
                  class="pa-3 mx-3"
                  style="border: 1px solid #4d2794"
                  light
                >
                  <div class="d-flex flex-column justify-center">
                    <div
                      class="text-center text-purple font-weight-bold h5 mb-3"
                    >
                      {{ review.title }}
                    </div>
                    <div
                      class="grey--text nanum h6 korean-text text-center mb-5"
                    >
                      {{ review.body }}
                    </div>
                    <div class="text-purple nanum h6 text-center">
                      {{ review.footer }}
                    </div>
                  </div>
                </v-card>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item v-for="(review, i) in review3" :key="i">
            <div class="d-flex justify-center fill-height">
              <div class="d-flex fill-height">
                <v-card
                  max-width="360"
                  class="pa-3 mx-3"
                  style="border: 1px solid #4d2794"
                  light
                  height="100%"
                >
                  <div class="d-flex flex-column justify-center">
                    <div
                      class="text-center text-purple font-weight-bold h5 mb-3"
                    >
                      {{ review.title }}
                    </div>
                    <div
                      class="grey--text nanum h6 korean-text text-center mb-5"
                    >
                      {{ review.body }}
                    </div>
                    <div class="text-purple nanum h6 text-center">
                      {{ review.footer }}
                    </div>
                  </div>
                </v-card>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-container>
    <v-container class="px-0 py-0" fluid>
      <v-card
        flat
        class="ml-auto mb-3"
        :class="isMobile ? 'px-2' : 'px-15'"
        style="background: linear-gradient(to bottom right, #edf1fb, #f7eff5)"
      >
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="d-flex flex-column justify-center">
              <div class="h4 nanum mb-10" style="color: #34163e">
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
        :class="isMobile ? 'px-2' : 'px-15'"
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
            <v-col cols="12" md="6" class="d-flex flex-column justify-center">
              <div class="h4 nanum mb-10" style="color: #34163e">
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
        :class="isMobile ? 'px-2' : 'px-15'"
        style="background: linear-gradient(to bottom right, #f2f0fc, #ecf3f9)"
      >
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="d-flex flex-column justify-center">
              <div class="h4 nanum mb-10" style="color: #34163e">
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
    <v-container :class="isMobile ? 'px-2 py-5' : 'px-15 py-5'">
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
      <div class="d-flex">
        <v-btn
          color="#4d2794"
          depressed
          class="white--text mx-auto px-10 rounded-tl-xl rounded-bl-xl rounded-tr-xl"
          x-large
          >블랙홀 무료체험
        </v-btn>
      </div>
    </v-container>
  </v-app>
</template>

<style  scoped>
.marquee-container {
  overflow: hidden;
  position: relative;

  opacity: 1;
}

.marquee-container .marquee-moving {
  width: 100%;
  height: 100%;
  margin: 0;
  text-align: center;
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  -moz-animation: scroll-left 2s linear infinite;
  -webkit-animation: scroll-left 2s linear infinite;
  animation: scroll-left 20s linear infinite;
}

@-moz-keyframes scroll-left {
  0% {
    -moz-transform: translateX(0%);
  }
  100% {
    -moz-transform: translateX(-100%);
  }
}

@-webkit-keyframes scroll-left {
  0% {
    -webkit-transform: translateX(0%);
  }
  100% {
    -webkit-transform: translateX(-100%);
  }
}

@keyframes scroll-left {
  0% {
    -moz-transform: translateX(0%);
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
  100% {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
</style>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      rating: 4.8,
      screenWidth: "",
      isMobile: false,
      review1: [
        {
          title: "영어발음에 큰 도움",
          body:
            "엄마의 권유로 하게 되어 처음에는 별로 열심히 하지 않았지만 영어단어를 게임을 하듯이 외우다 보니 쉽고 재밌어서 자꾸 하게 되었고 영어학원에서 공부할 때도 블랙홀에서 외운 단어들이 바로바로 생각나서 참 신기했다 그리고 원어민 선생님들이 발음도 매번 이야기 해 주셔서 많은 도움이 되었다.",
          footer: "[중3] 다연학생",
        },
        {
          title: "탁월한 복습량",
          body:
            "전시간에 배운 단어들을 복습하며 암기하다보니 내 단어 실력이 증가했음을 알 수 있었다. 또한 원어민 선생님과의 대화를 통해서 내가 모르는 단어가 있을 때 앞뒤 문맥에 맞추어 단어의 뜻을 추측하는 능력을 기를 수 있게 되었고, 전혀 감이 잡히지 않는 단어의 경우 선생님께 따로 여쭈워보면 내가 아는 쉬운 단어로 바꾸어 말씀해주시거나 그 단어의 뜻을 설명해주셔서 정말 많은 도움이 되었다.",
          footer: "[고1] 다인학생",
        },
      ],

      review2: [
        {
          title: "완벽한 단어암기",
          body:
            "당신은 블랙홀을 경험해 본 적이 있는가? 블랙홀 영어에서는 그날의 단어 미션을 완료하기 위하여2교시에 블랙홀 수업을 하게 된다 말 그대로 미션을 완료할 때까지 절대로 빠져 나올 수 없다. 나는 오늘도 어제수업을 빠진 결과 다른 아이들 보다 블랙홀에서 선생님과 단 둘이 30분을 더 체류 할 수 밖에 없었다.. ㅠㅠ단어를 외우지 않으면 수업이 끝나지 않는다...블랙홀 ㅠㅠ!!",
          footer: "[중1]재민학생",
        },
        {
          title: "적극적인 수업참여",
          body:
            "처음엔 뭐 다 비슷비슷하겠지..했었는데 아이 눈높이에 맞춰 수업하시는 선생님의 질문에 아이가 적극적으로 대답하는 모습을 보였고, 단어 외우는 것도 퀴즈를 풀고 맞추는 기분이라며 내일은 더 잘 할거라고 얘기를 했습니다. 이젠 내일을, 블랙홀을 기대하게 되었습니다..  오늘.. 아이들은 선생님과의 시간을 먼저 체크하고 기다리네요. 블랙홀!! 아이들에게 내일은 더 잘할 수 있다는 자신감을 갖게 해줘서 정말정말 감사합니다!!",
          footer: "[중1] 용인 정인이 부모님",
        },
      ],

      review3: [
        {
          title: "국제학교식 수업",
          body:
            "처음엔 단어량이 적었는데 점차 양이 늘어가면서 단어 실력이 확실히 좋아진 것을 느낀다. 외국인강사와 함께100% 영어로만 소통하는 국제학교식 수업으로 단어를 계속 노출 시키면서 마지막엔 스펠링까지 쓰게 하게끔 하여 결국은 단어를 외우지 않으면 안 되게 끔  하는 시스템이 큰 장점이다. 단어 하나를 가지고도 쓰고 말하고 독해하며 외우게 하는 블랙홀 수업방식에 너무 만족해하며 수업하고 있다.",
          footer: "[중2] 수원 주현 학부모님",
        },
        {
          title: "영자신문 독해까지",
          body:
            "영자신문의 단어들을 3단계에 거쳐 외우게 하고 독해랑 테스트가 끝나면 2교시 블랙홀단계로 가는데 말그대로 테스트를 통과 못하면 블랙홀에서 통과할 때까지 못 빠져 나온다.쉽게 생각하던 울 아들.. 막상 수업에 들어가 한번 블랙홀을 경험하더니 다음 시간부터는 무지 진지해진다. 아무튼 영어학원 몇 년을 다녀도 안 잡히는 단어가 블랙홀에선 잡히고 있어 너무 흐믓하다. 정말 신기하다.",
          footer: "[중3] 동탄 찬규 부모님",
        },
      ],
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
    },
  },
};
</script>
