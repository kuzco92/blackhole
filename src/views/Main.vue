<template>
  <v-app style="background-color: #00000000">
    <v-container fluid class="px-0 py-0">
      <v-card tile>
        <v-img
          src="../assets/main_header_img.jpg"
          :height="isMobile ? '100vh' : '100vh'"
        >
          <v-card height="100%" style="background: #00000000">
            <v-container
              class="d-flex flex-column"
              :class="isMobile ? 'px-0 py-0 ' : 'px-8'"
              style="height: 100%"
            >
              <Header></Header>
              <div
                class="white--text d-flex flex-column flex-md-row justify-md-space-between"
              >
                <v-row>
                  <v-col
                    md="6"
                    cols="12"
                    class="d-md-inline-flex text-center py-0"
                  >
                    <span
                      class="mx-auto nanum"
                      :class="isMobile ? 'h6' : 'h5'"
                      :style="
                        isMobile
                          ? ''
                          : 'letter-spacing: 8px; text-shadow: 0 0 20px white'
                      "
                    >
                      국내 최초!
                    </span>
                    <span
                      class="mx-auto nanum"
                      :class="isMobile ? 'h6' : 'h5'"
                      :style="
                        isMobile
                          ? ''
                          : 'letter-spacing: 8px; text-shadow: 0 0 20px white; right:0 '
                      "
                    >
                      초중등
                    </span>
                  </v-col>
                  <v-col
                    md="6"
                    cols="12"
                    class="d-md-inline-flex text-center py-0"
                  >
                    <span
                      class="mx-auto nanum "
                      :class="isMobile ? 'h6' : 'h5'"
                      :style="
                        isMobile
                          ? ''
                          : 'letter-spacing: 8px; text-shadow: 0 0 20px white'
                      "
                    >
                      쌍방향 온라인
                    </span>
                    <span
                      class="mx-auto nanum "
                      :class="isMobile ? 'h6' : 'h5'"
                      :style="
                        isMobile
                          ? ''
                          : 'letter-spacing: 8px; text-shadow: 0 0 20px white'
                      "
                      >영단어 프로그램
                    </span>
                  </v-col>
                </v-row>
              </div>

              <v-row class="mx-5">
                <v-col
                  cols="12"
                  md="4"
                  class="text-center align-self-end text-md-left mt-3 mt-md-0"
                >
                  <div
                    class="brb white--text"
                    :class="isMobile ? 'h3' : 'h2'"
                    style="word-break: keep-all; line-break: strict"
                  >
                    초중등 영어는 <br />
                    단어부터
                  </div>
                  <div class="white--text">
                    실시간 외국인 수업,
                    <span class="font-weight-black h6">블랙홀 영어</span>
                  </div>
                </v-col>
                <v-col cols="12" md="6" align-self="start">
                  <v-img
                    class="mx-auto mx-md-0"
                    src="../assets/tab.png"
                    width="70%"
                  ></v-img>
                </v-col>
                <v-col
                  cols="12"
                  md="2"
                  class="align-self-end d-flex  justify-md-end justify-center"
                >
                  <!-- <div class="d-inline-flex flex-row align-center ml-auto"> -->
                  <div class="d-inline-flex flex-row align-center">
                    <div :class="isMobile ? '' : 'mr-3'">
                      <div class="caption-text white--text text-center">
                        NEXT PAGE
                      </div>
                      <div
                        class="nanum"
                        :class="isMobile ? 'h6 yellow--text' : 'h5 white--text'"
                        @click="$router.push('/free-class')"
                        style="cursor: pointer"
                      >
                        무료수업<br />
                        신청하기
                      </div>
                    </div>
                    <v-icon
                      color="yellow"
                      x-large
                      @click="$router.push('/free-class')"
                      class="d-none d-md-block"
                      >fas fa-arrow-circle-right
                    </v-icon>
                  </div>
                </v-col>
              </v-row>

              <div class="text-center white--text">
                SHOW MORE
                <div>
                  <v-icon small color="white">keyboard_arrow_down</v-icon>
                </div>
              </div>
            </v-container>
          </v-card>
        </v-img>
      </v-card>
    </v-container>
    <v-container fluid class="px-0 py-0">
      <v-img src="../assets/blackhole_main_img2.jpg"></v-img>
    </v-container>
    <v-container class="px-0 py-0" fluid>
      <div
        class="text-center brb mt-15"
        style="word-break: keep-all; line-break: strict"
        :class="[isMobile ? 'h4 px-10' : 'h2', '']"
      >
        초중등 관리형 온라인 영단어 <br />
        블랙홀 영단어가 단어습관을 잡는다.
      </div>
      <v-container class="pt-10" style="max-width:80%">
        <v-row justify="center">
          <v-col cols="12" sm="3" class="d-flex flex-column align-center mb-10">
            <v-img src="../assets/sticky-note.svg" width="220"></v-img>
            <div class="mt-5 h5 nanum">확실한 단어암기</div>
          </v-col>
          <v-col cols="12" sm="3" class="d-flex flex-column align-center mb-10">
            <v-img src="../assets/computer.svg" width="220"></v-img>
            <div class="mt-5 h5 nanum">수업 피드백 전송</div>
          </v-col>
          <v-col cols="12" sm="3" class="d-flex flex-column align-center mb-10">
            <v-img src="../assets/school.svg" width="220"></v-img>
            <div class="mt-5 h5 nanum">효율적인 시간계산</div>
          </v-col>
        </v-row>
      </v-container>
      <div class="text-center mt-10">
        <div
          class="gmarket text-purple mb-5 korean-text"
          :class="[isMobile ? 'h4 px-10' : 'h2', '']"
        >
          블랙홀 완전학습 비결
        </div>
        <div class="nanum" :class="[isMobile ? 'h6 ' : 'h4', 'mx-10']">
          2명의 외국인 강사가 <br v-if="isMobile" />
          영어로만 하는 국제학교식 수업,
        </div>
        <div
          class="nanum mb-10"
          :class="[isMobile ? 'h6 px-10' : 'h4', 'mt-2']"
        >
          블랙홀 영단어에서만 만날 수 있습니다.
        </div>
      </div>
    </v-container>
    <v-divider></v-divider>
    <v-container class="py-0 px-3 px-md-0">
      <div class="text-center">
        <div class="brb text-purple mt-5" :class="isMobile ? 'h4' : 'h2'">
          커리큘럼
        </div>
        <div class="nanum" :class="[isMobile ? 'h6' : 'h4', 'mx-10']">
          영단어 암기 블랙홀이 답인 이유!
        </div>
        <div class="nanum" :class="[isMobile ? 'h6' : 'h4', 'mx-10']">
          기존 원어민 화상영어 또는 인강과는 전혀 다른
          <span class="font-weight-black"> 새로운 수업방식 </span>
        </div>
      </div>
      <div class="d-flex flex-column flex-md-row justify-center mt-10">
        <v-row
          justify="center"
          align="center"
          class="overflow-y-auto"
          v-scroll.self="onScroll"
        >
          <v-card
            style="border: 10px solid #34163e"
            class="rounded-circle d-flex align-center justify-center text-center mx-auto mx-md-3 my-5 my-md-0 h6"
            width="200"
            height="200"
          >
            <v-progress-circular
              :rotate="360"
              :size="200"
              :width="10"
              value="100"
              color="primary"
            >
              독해단어 10회 <br />
              인터별 반복
            </v-progress-circular>
          </v-card>
          <v-card
            style="border: 10px solid #34163e"
            class="rounded-circle d-flex align-center justify-center text-center mx-auto mx-md-3 my-5 my-md-0 h6"
            width="200"
            height="200"
          >
            <v-progress-circular
              :rotate="360"
              :size="200"
              :width="10"
              value="100"
              color="red"
            >
              스펠링까지 <br />
              완벽점검!
            </v-progress-circular>
          </v-card>
          <v-card
            style="border: 10px solid #34163e"
            class="rounded-circle d-flex align-center justify-center text-center mx-auto mx-md-3 my-5 my-md-0 h6"
            width="200"
            height="200"
          >
            <v-progress-circular
              :rotate="360"
              :size="200"
              :width="10"
              value="100"
              color="teal"
            >
              외국인강사 <br />
              발음교정
            </v-progress-circular>
          </v-card>
          <v-card
            style="border: 10px solid #34163e"
            class="rounded-circle d-flex align-center justify-center text-center mx-auto mx-md-3 my-5 my-md-0 h6"
            width="200"
            height="200"
          >
            <v-progress-circular
              :rotate="360"
              :size="200"
              :width="10"
              value="100"
              color="pink"
            >
              영어100% <br />
              수업진행
            </v-progress-circular>
          </v-card>
          <v-card
            style="border: 10px solid #34163e"
            class="rounded-circle d-flex align-center justify-center text-center mx-auto mx-md-3 my-5 my-md-0 h6"
            width="200"
            height="200"
          >
            <v-progress-circular
              :rotate="360"
              :size="200"
              :width="10"
              value="100"
              color="purple"
            >
              어원단어장 <br />
              매일 푸쉬
            </v-progress-circular>
          </v-card>
        </v-row>
      </div>
      <div class="text-center mt-10 nanum" :class="isMobile ? 'h6' : 'h4'">
        1회 수업 : 회당 40분 이상 소요 <br v-if="isMobile" />
        <span v-else>/</span> 한 과정당 3개월~6개월 소요
      </div>
    </v-container>
    <v-container class="mt-10 " :class="isMobile ? 'px-0 py-0 ' : 'px-16'">
      <v-img
        src="../assets/level_bar.png"
        :stlye="isMobile ? 'max-width:100%' : 'max-width:50%'"
        class="mx-auto"
      ></v-img>
    </v-container>
    <v-container
      class="d-flex flex-column"
      :class="isMobile ? 'px-0 py-0 ' : 'px-16'"
    >
      <v-row justify="space-around" class="d-flex">
        <v-col cols="9" md="2">
          <div>
            <div style="color: #7de314" class="font-weight-black">1 LEVEL</div>
            <div
              class="mt-5 font-weight-black grey--text"
              :class="isMobile ? '' : 'h6'"
            >
              미취학, 초등저학년 <br />
              /이미지 연상법
            </div>
            <div
              class="mt-5 grey--text"
              :class="isMobile ? 'caption-text' : ''"
            >
              * 주요 기본단어 10개씩 암기 <br />
              * 듣기. 말하기 수업
            </div>
          </div>
        </v-col>
        <v-col cols="9" md="2">
          <div style="color: #01cc9b" class="font-weight-black">2 LEVEL</div>
          <div
            class="mt-5 font-weight-black grey--text"
            :class="isMobile ? '' : 'h6'"
          >
            초등 1~2학년
          </div>
          <div class="mt-5 grey--text" :class="isMobile ? 'caption-text' : ''">
            * 주요 기본단어 20개씩 암기 * 듣기. 말하기 수업
          </div>
        </v-col>
        <v-col cols="9" md="2">
          <div style="color: #14a0c0" class="font-weight-black">3 LEVEL</div>
          <div
            class="mt-5 font-weight-black grey--text"
            :class="isMobile ? '' : 'h6'"
          >
            초등 5~ 중등 2학년 <br />
            /영어로 습득하는 배경지식
          </div>
          <div class="mt-5 grey--text" :class="isMobile ? 'caption-text' : ''">
            * 주요 기본단어 30개씩 암기 <br />
            * 논리적인 사고를 유도하는 독해훈련
          </div>
        </v-col>
        <v-col cols="9" md="2">
          <div style="color: #5059ab" class="font-weight-black">4 LEVEL</div>
          <div
            class="mt-5 font-weight-black grey--text"
            :class="isMobile ? '' : 'h6'"
          >
            중등 1~ 고등 1학년 <br />
            /영어교과서 기반
          </div>
          <div class="mt-5 grey--text" :class="isMobile ? 'caption-text' : ''">
            * 하루 단어 40개씩 <br />
            * 발음교정과 독해훈련 <br />
            * 문장구조 이해력 강화
          </div>
        </v-col>
        <v-col cols="9" md="2">
          <div style="color: #9052a9" class="font-weight-black">5 LEVEL</div>
          <div
            class="mt-5 font-weight-black grey--text"
            :class="isMobile ? '' : 'h6'"
          >
            고등 1~3학년 /수능독해를 위한 문제
          </div>
          <div class="mt-5 grey--text" :class="isMobile ? 'caption-text' : ''">
            * 하루 단어 50개씩 <br />
            * 암기 발음교정과 듣기연습 <br />
            * 영어로 습득하는 최신시사 <br />
            (경제 / 국제사회 뉴스 활용) <br />
            ▶ 배경 지식 확장
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div class="d-flex mx-auto">
      <v-btn
        class="mx-auto mt-5 px-10 rounded-tl-xl rounded-tr-xl rounded-bl-xl white--text mb-10"
        x-large
        depressed
        color="#34163e"
        @click="$router.push('/free-class')"
      >
        <span class="h5 nanum">블랙홀 무료체험</span>
      </v-btn>
    </div>

    <v-divider></v-divider>

    <v-container class="pb-16" style="max-width:75%">
      <v-row justify="center" style="height: 100%">
        <v-col cols="12" md="5" class="d-flex flex-column grey--text">
          <div
            class="brb text-center text-purple"
            :class="isMobile ? 'h4' : 'h3'"
          >
            영자신문 활용
          </div>
          <v-img src="../assets/img-news.jpg"></v-img>
          <div class="mt-10 h6">
            * 문장을 통해
            <span class="primary--text lighten-2 font-weight-bold"
              >중요단어</span
            >
            파악 <br />
            * 문장속에서
            <span class="primary--text lighten-2 font-weight-bold">의미</span>
            파악 <br />
            * 외국인 강사
            <span class="primary--text lighten-2 font-weight-bold">액센트</span>
            지도
          </div>
        </v-col>

        <v-divider vertical v-if="!isMobile"></v-divider>

        <v-col cols="12" md="5" class="d-flex flex-column grey--text">
          <div
            class="brb text-center text-purple"
            :class="isMobile ? 'h4' : 'h3'"
          >
            효과적인 암기법
          </div>
          <div class="text-center mt-5 h6">
            영어학습에서 가장 중요한건? <br v-if="isMobile" />
            <span class="primary--text lighten-2 font-weight-bold"
              >단어암기!</span
            >
          </div>
          <v-img src="../assets/img-graph.png" class="mt-15 mb-10"></v-img>
          <div class="mt-10 h6">
            <span class="text-purple font-weight-black"> 암기 3단계 :</span>
            <br v-if="isMobile" />
            <span class="subtitle-1">암기 – 기억인출 – 철자확인</span> <br />
            <span class="text-purple font-weight-black">확인 2단계 :</span>
            <br v-if="isMobile" />
            <span class="subtitle-1">테스트 , 스피드퀴즈</span> <br />
            <span class="text-purple font-weight-black">복습 5단계 :</span>
            <br v-if="isMobile" />
            <span class="subtitle-1">3일, 4일, 5일, 7일, 30일 반복테스트</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="px-0 py-0">
      <v-card tile color="#e6ddf8" class="pa-10">
        <div
          class="text-center brb"
          :class="isMobile ? 'h4' : 'h2'"
          style="color: #3e3b44"
        >
          많은 학부모님들이 <br />
          <span class="text-purple">인정</span>한
        </div>
        <div
          class="text-center brb"
          :class="isMobile ? 'h4' : 'h2'"
          style="color: #3e3b44"
        >
          <span style="background-color: #c16ec2"> 단어암기 끝장 솔루션!</span
          ><br />
          <span class="text-purple">"블랙홀"</span>과 함께해요~
        </div>
        <v-container
          :class="isMobile ? 'px-0 py-0 ' : 'px-10'"
          :style="isMobile ? 'max-width:100%' : 'max-width:80%'"
        >
          <v-row>
            <v-col cols="12" md="4">
              <v-card
                flat
                style="border: 1px solid #34163e"
                width="100%"
                class="pa-5 rounded-xl"
              >
                <v-card
                  class="rounded-pill white--text text-center pa-3 mx-auto mb-5"
                  color="#4d2794"
                  width="80%"
                  >적극적인 수업참여
                </v-card>
                <div
                  class="text-center"
                  style="line-break: strict; word-break: keep-all"
                >
                  처음엔 뭐 다 비슷비슷하겠지.... 했었는데 아이 눈높이에 맞춰
                  수업하시는 선생님의 질문에 적극적으로 대답하는 아이의 모습이
                  보였고, 단어 암기도 퀴즈를 풀고 맞추는 기분이라며 내일은 더
                  잘할거라고 이야기했습니다. 이젠 내일을, 블랙홀을
                  기대하게되네요^^
                  <br /><br />
                  오늘도 아이들은 선생님과의 수업시간을 먼저 체크하고
                  기다리네요. 블랙홀영어!!! 아이들에게 내일은 더 잘할수 있다는
                  자신감을 갖게 해주셔서 정말 감사합니다!!!
                </div>
                <div class="text-right mt-5 text-purple">
                  [중1] 용인 정인이 학부모님
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card
                flat
                style="border: 1px solid #34163e; position: relative"
                width="100%"
                height="100%"
                class="pa-5 rounded-xl"
              >
                <v-card
                  class="rounded-pill white--text text-center pa-3 mx-auto mb-5"
                  color="#4d2794"
                  width="80%"
                >
                  국제학교식 수업
                </v-card>

                <div
                  class="text-center"
                  style="line-break: strict; word-break: keep-all"
                >
                  처음엔 단어량이 적었는데 점차 양이 늘어가면서 단어 실력이
                  확실히 좋아진 것을 느낀다.
                  <br />
                  <br />
                  외국인강사와 함께100% 영어로만 소통하는 국제학교식 수업으로
                  단어를 계속 노출시키면서 마지막엔 스펠링까지 쓰게 하게끔 하여
                  결국은 단어를 외우지 않으면 안 되게 끔 하는 시스템이 큰
                  장점이다. 단어 하나를 가지고도 쓰고 말하고 독해하며 외우게
                  하는 블랙홀 수업방식에 너무 만족해하며 수업하고 있다
                </div>
                <div class="text-right mt-5 text-purple">
                  [중2] 수원 주현 학부모님
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card
                flat
                style="border: 1px solid #34163e"
                width="100%"
                height="100%"
                class="pa-5 rounded-xl"
              >
                <v-card
                  class="rounded-pill white--text text-center pa-3 mx-auto mb-5"
                  color="#4d2794"
                  width="100%"
                >
                  탁월한 복습량
                </v-card>
                <div
                  class="text-center nanum"
                  style="line-break: strict; word-break: keep-all"
                >
                  전시간에 배운 단어들을 복습하며 암기하다 보니 내 단어 실력이
                  증가했음을 알 수 있었다. 또한 원어민 선생님과의 대화를 통해서
                  내가 모르는 단어가 있을 때엔 앞뒤 문맥에 맞추어 단어의 뜻을
                  추측하는 능력을 기를 수 있게 되었고, 전혀 감이 잡히지 않는
                  단어의 경우 선생님께 따로 여쭈워보면 내가 아는 쉬운 단어로
                  바꾸어 말씀해주시거나 그 단어의 뜻을 설명해주셔서 정말 많은
                  도움이 되었다.
                </div>
                <div class="text-right mt-5 text-purple">
                  [고1] 다인 학생 후기
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
    <v-container class="px-0 py-0" fluid>
      <v-card
        tile
        color="rgba(202,206,209, 0.5)"
        class="text-center pa-10"
        style="position: relative"
      >
        <div class="d-flex flex-column flex-md-row">
          <v-card class="mx-auto ml-md-auto mr-5 mb-5 mb-md-0" flat>
            <v-img
              src="../assets/img-copyright.png"
              :width="isMobile ? '100%' : '250'"
              contain
            >
              <v-card
                style="background-color: #caced10a"
                width="100%"
                height="100%"
              >
              </v-card>
            </v-img>
          </v-card>
          <v-card class="mx-auto mr-md-auto mx-auto" flat>
            <v-img
              src="../assets/img-patent.png"
              :width="isMobile ? '100%' : '250'"
              contain
            >
              <v-card
                style="background-color: #caced1A1"
                width="100%"
                height="100%"
              >
              </v-card>
            </v-img>
          </v-card>
        </div>
        <v-card
          width="70%"
          class="mx-auto nanum pa-10 rounded-xl"
          :class="isMobile ? 'h6' : 'h5'"
          style="
            position: absolute;
            bottom: 20px;
            transform: translateX(-50%);
            left: 50%;
          "
          color="#FFFFFF2a"
        >
          블랙홀영어의 컨텐츠 및 도구들을 이용한 <br />
          쌍방향 온라인 수업방식을 유에듀케이션의 승인을 받지않고 <br />
          <span class="font-weight-bold">사용하는 행위는 불법</span> 임을
          인지해주시기 바랍니다.
        </v-card>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  },

  data() {
    return {
      rating: 4.8,
      screenWidth: "",
      screenHeight: "",
      isMobile: false,
      offsetTop: false
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

    // document.getElementById("scroll").scrollIntoView();
  },

  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
      console.log(e.target.scrollTop);
    },
    onWindowResize() {
      this.screenWidth = screen.width;
      this.isMobile = this.screenWidth <= 960 ? true : false;
    }
  }
};
</script>
