
<template>
  <v-app style="background-color:#00000000">
    <v-container fluid class=" px-0 py-0">
      <v-card tile>
        <v-img
          src="../assets/main_header_img.jpg"
          :height="isMobile ? 'auto' : '100vh'"
        >
          <v-card height="100%" style="background:#00000000">
            <v-container class="d-flex flex-column" style="height:100%">
              <v-card
                v-if="!isMobile"
                color="#FFFFFF5A"
                width="80%"
                class="mx-auto rounded-tr-xl rounded-br-xl my-5"
                tile
              >
                <v-container>
                  <v-row>
                    <v-col cols="2">
                      <v-img
                        class="nav-link"
                        width="150"
                        @click="$router.push('/main')"
                        src="../assets/logo.png"
                      ></v-img>
                    </v-col>
                    <v-col cols="2" class="d-flex align-center">
                      <div
                        class="white--text nav-link"
                        @click="$router.push('/class')"
                      >
                        수업안내
                      </div>
                    </v-col>
                    <v-col cols="2" class="d-flex align-center">
                      <div class="white--text">무료수업체험</div>
                    </v-col>
                    <v-col cols="2" class="d-flex align-center">
                      <div class="white--text">게시판</div>
                    </v-col>
                    <v-col cols="2" class="d-flex align-center">
                      <div class="white--text">마이페이지</div>
                    </v-col>
                    <v-col cols="2" class="d-flex align-center">
                      <v-icon color="white">search</v-icon>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>

              <v-container v-else>
                <div class="d-flex">
                  <v-card color="#00000000" flat>
                    <v-img
                      src="../assets/logo.png"
                      width="150"
                      @click="$router.push('/main')"
                    >
                    </v-img>
                  </v-card>
                  <v-spacer></v-spacer>
                  <v-card
                    color="#FFFFFF5A"
                    class="rounded-lg d-flex align-center pa-3 "
                    tile
                  >
                    <v-menu
                      close-on-click
                      nudge-bottom="12"
                      offset-y
                      bottom
                      transition="slide-y-transition"
                      min-width="100%"
                    >
                      <template v-slot:activator="{ on: menu }">
                        <v-icon v-on="menu" large>menu</v-icon>
                      </template>
                      <v-card color="blue" width="100%" min-width="100%">
                        <v-list>
                          <v-list-item @click="$router.push('/class')"
                            >무료수업체험</v-list-item
                          >
                          <v-list-item> 게시판</v-list-item>
                          <v-list-item>마이페이지</v-list-item>
                        </v-list>
                      </v-card>
                    </v-menu>
                  </v-card>
                </div>
              </v-container>

              <div
                class="white--text d-flex flex-column flex-md-row justify-space-between"
              >
                <span
                  class="mx-auto nanum"
                  :class="isMobile ? 'h6' : 'h5'"
                  style="letter-spacing:15px;text-shadow:0 0 20px white"
                >
                  국 내 최 초 !
                </span>
                <span
                  class="mx-auto nanum"
                  :class="isMobile ? 'h6' : 'h5'"
                  style="letter-spacing:15px;text-shadow:0 0 20px white"
                >
                  초 중 등
                </span>
                <span
                  class="mx-auto nanum"
                  :class="isMobile ? 'h6' : 'h5'"
                  style="letter-spacing:15px;text-shadow:0 0 20px white"
                >
                  쌍 방 향 온 라 인
                </span>
                <span
                  class="mx-auto nanum"
                  :class="isMobile ? 'h6' : 'h5'"
                  style="letter-spacing:15px;text-shadow:0 0 20px white"
                  >영 단 어 프 로 그 램
                </span>
              </div>

              <v-row class="mx-5" id="scroll">
                <v-col
                  cols="12"
                  md="4"
                  align-self="end"
                  class="text-center text-md-left mt-5 mt-md-0"
                >
                  <div
                    class="h2 brb white--text"
                    style="word-break:keep-all;line-break:strict"
                  >
                    초중등 영어는 <br />
                    단어부터
                  </div>
                  <div class="white--text">
                    실시간 외국인 수업,
                    <span class="font-weight-black">블랙홀 영어</span>
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
                  class="d-flex align-self-end justify-end"
                >
                  <div class="d-flex flex-row align-center ml-auto">
                    <div class="mr-3">
                      <div class="caption-text white--text">NEXT PAGE</div>
                      <div class="white--text h6">
                        무료수업<br />
                        신청하기
                      </div>
                    </div>
                    <v-icon color="yellow" x-large @click="$router.push('/')"
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
        class="text-center brb h3 mt-15"
        style="word-break:keep-all;line-break:strict"
      >
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
        <div class="h3 gmarket text-purple mb-5 korean-text">
          블랙홀 완전학습 비결
        </div>
        <div class="h5 nanum">
          2명의 외국인 강사가 영어로만 하는 국제학교식 수업,
        </div>
        <div class="h5 nanum mb-10">블랙홀 영단어에서만 만날 수 있습니다.</div>
      </div>
    </v-container>
    <v-divider></v-divider>
    <v-container class="py-0 px-3 px-md-0">
      <div class="text-center">
        <div class="h3 brb text-purple my-5">커리큘럼</div>
        <div class="h5 nanum">영단어 암기 블랙홀이 답인 이유!</div>
        <div class="h5 nanum">
          기존 원어민 화상영어 또는 인강과는 전혀 다른
          <span class="font-weight-black"> 새로운 수업방식 </span>
        </div>
      </div>
      <div class="d-flex flex-column flex-md-row  justify-center mt-10">
        <v-card
          style="border: 1px solid blue"
          class="rounded-circle d-flex align-center justify-center text-center mx-auto mx-md-3 my-5 my-md-0"
          width="200"
          height="200"
        >
          독해단어 10회 <br />
          인터별 반복
        </v-card>
        <v-card
          style="border: 1px solid blue"
          class="rounded-circle d-flex align-center justify-center text-center mx-auto mx-md-3 my-5 my-md-0"
          width="200"
          height="200"
        >
          스펠링까지 <br />
          완벽점검!
        </v-card>
        <v-card
          style="border: 1px solid blue"
          class="rounded-circle d-flex align-center justify-center text-center mx-auto mx-md-3 my-5 my-md-0"
          width="200"
          height="200"
        >
          외국인강사 <br />
          발음교정
        </v-card>
        <v-card
          style="border: 1px solid blue"
          class="rounded-circle d-flex align-center justify-center text-center mx-auto mx-md-3 my-5 my-md-0"
          width="200"
          height="200"
        >
          영어100% <br />
          수업진행
        </v-card>
        <v-card
          style="border: 1px solid blue"
          class="rounded-circle d-flex align-center justify-center text-center mx-auto mx-md-3 my-5 my-md-0"
          width="200"
          height="200"
        >
          어원단어장 <br />
          매일 푸쉬
        </v-card>
      </div>
      <div class="text-center mt-10 h5 nanum">
        1회 수업 : 회당 40분 이상 소요 / 한 과정당 3개월~6개월 소요
      </div>
    </v-container>
    <v-container class="px-0 py-0 mt-10">
      <v-img src="../assets/level_bar.png"></v-img>
    </v-container>
    <v-container class="px-0 py-0 d-flex flex-column">
      <v-row justify="space-around" class="d-flex">
        <v-col cols="7" md="2">
          <div>
            <div style="color:#7de314" class="font-weight-black">1 LEVEL</div>
            <div class="mt-5 font-weight-black grey--text">
              미취학, 초등저학년 <br />
              /이미지 연상법
            </div>
            <div class="caption-text mt-5 grey--text">
              * 주요 기본단어 10개씩 암기 <br />
              * 듣기. 말하기 수업
            </div>
          </div>
        </v-col>
        <v-col cols="7" md="2">
          <div style="color:#01cc9b" class="font-weight-black">2 LEVEL</div>
          <div class="mt-5 font-weight-black grey--text">초등 1~2학년</div>
          <div class="caption-text mt-5 grey--text">
            * 주요 기본단어 20개씩 암기 * 듣기. 말하기 수업
          </div>
        </v-col>
        <v-col cols="7" md="2">
          <div style="color:#14a0c0" class="font-weight-black">3 LEVEL</div>
          <div class="mt-5 font-weight-black grey--text">
            초등 5~ 중등 2학년 <br />
            /영어로 습득하는 배경지식
          </div>
          <div class="caption-text mt-5 grey--text">
            * 주요 기본단어 30개씩 암기 <br />
            * 논리적인 사고를 유도하는 독해훈련
          </div>
        </v-col>
        <v-col cols="7" md="2">
          <div style="color: #5059ab" class="font-weight-black">4 LEVEL</div>
          <div class="mt-5 font-weight-black grey--text">
            중등 1~ 고등 1학년 <br />
            /영어교과서 기반
          </div>
          <div class="caption-text mt-5 grey--text">
            * 하루 단어 40개씩 <br />
            * 발음교정과 독해훈련 <br />
            * 문장구조 이해력 강화
          </div>
        </v-col>
        <v-col cols="7" md="2">
          <div style="color:#9052a9" class="font-weight-black">5 LEVEL</div>
          <div class="mt-5 font-weight-black grey--text">
            고등 1~3학년 /수능독해를 위한 문제
          </div>
          <div class="caption-text mt-5 grey--text">
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
        class="mx-auto py-5 px-10 rounded-tl-xl rounded-tr-xl rounded-bl-xl white--text mb-10"
        x-large
        depressed
        color="#34163e"
      >
        <span class="h5 nanum">블랙홀 무료체험</span>
      </v-btn>
    </div>

    <v-divider></v-divider>

    <v-container class="pb-16">
      <v-row justify="center" style="height:100%">
        <v-col cols="12" md="5" class="d-flex flex-column grey--text">
          <div class="h4 brb text-center text-purple">영자신문 활용</div>
          <v-img src="../assets/img-news.png"></v-img>
          <div class="mt-10">
            * 문장을 통해 중요단어 파악 <br />
            * 문장속에서 의미 파악 <br />
            * 외국인 강사 액센트 지도
          </div>
        </v-col>

        <v-divider vertical v-if="!isMobile"></v-divider>

        <v-col cols="12" md="5" class="d-flex flex-column grey--text">
          <div class="h4 brb text-center text-purple">효과적인 암기법</div>
          <div class="text-center mt-5">
            영어학습에서 가장 중요한건? 단어암기!
          </div>
          <v-img src="../assets/img-graph.png" class="mt-15 mb-10"></v-img>
          <div class="mt-10">
            <span class="text-purple font-weight-black"> 암기 3단계 :</span>
            암기 – 기억인출 – 철자확인 <br />
            <span class="text-purple font-weight-black">확인 2단계 :</span>
            테스트 , 스피드퀴즈 <br />
            <span class="text-purple font-weight-black">복습 5단계 :</span> 3일,
            4일, 5일, 7일, 30일 반복테스트
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="px-0 py-0">
      <v-card tile color="#e6ddf8" class="pa-10">
        <div class="text-center h3 brb" style="color:#3e3b44">
          많은 학부모님들이 인정한
        </div>
        <div class="text-center h3 brb" style="color:#3e3b44">
          <span style="background-color:#c16ec2"> 단어암기 끝장 솔루션!</span>
          블랙홀과 함께해요~
        </div>
        <v-container>
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
                  style="line-break:strict; word-break:keep-all"
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
                style="border: 1px solid #34163e; position:relative"
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
                  class="text-center "
                  style="line-break:strict; word-break:keep-all"
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
                  width="80%"
                >
                  탁월한 복습량
                </v-card>
                <div
                  class="text-center"
                  style="line-break:strict; word-break:keep-all"
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
        style="position:relative"
      >
        <div class="d-flex flex-column flex-md-row">
          <v-card class="mx-auto ml-md-auto mr-5 mb-5 mb-md-0" flat>
            <v-img src="../assets/img-copyright.png" width="250" contain>
              <v-card
                style="background-color:#caced10a"
                width="100%"
                height="100%"
              >
              </v-card>
            </v-img>
          </v-card>
          <v-card class="mx-auto mr-md-auto ml-5" flat>
            <v-img src="../assets/img-patent.png" width="250" contain>
              <v-card
                style="background-color:#caced1A1"
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
          style="position:absolute;bottom:20px;transform:translateX(-50%);left:50%"
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

    // document.getElementById("scroll").scrollIntoView();
  },

  methods: {
    onWindowResize() {
      this.screenWidth = screen.width;
      this.isMobile = this.screenWidth <= 960 ? true : false;
    }
  }
};
</script>
