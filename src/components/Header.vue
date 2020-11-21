<template>
  <v-card
    v-if="!isMobile"
    color="#FFFFFF5A"
    width="100%"
    class="mx-auto rounded-tr-xl rounded-br-xl my-5"
    tile
  >
    <v-container class="px-0 py-0">
      <v-row>
        <v-col cols="2">
          <v-img
            class="nav-link"
            width="150"
            @click="$router.push('/main')"
            src="../assets/logo.png"
          ></v-img>
        </v-col>
        <v-col cols="2" class="d-flex align-center offset-2">
          <div
            class="white--text nav-link"
            :class="isMobile ? '' : 'h6'"
            @click="$router.push('/class')"
          >
            수업안내
          </div>
        </v-col>
        <v-col cols="2" class="d-flex align-center">
          <div
            class="white--text nav-link"
            :class="isMobile ? '' : 'h6'"
            @click="$router.push('/free-class')"
          >
            무료수업체험
          </div>
        </v-col>
        <!-- <v-col cols="2" class="d-flex align-center">
          <div
            class="white--text nav-link"
            :class="isMobile ? '' : 'h6'"
            @click="$router.push('/board')"
          >
            게시판
          </div>
        </v-col> -->
        <v-col cols="2" class="d-flex align-center">
          <div
            class="white--text nav-link"
            :class="isMobile ? '' : 'h6'"
            @click="phoneDialog = true"
          >
            마이페이지
          </div>
        </v-col>
        <v-col cols="2" class="d-flex align-center">
          <a href="http://bhen.co.kr/gift/" target="_blank">
            <v-icon color="white" large>mdi-gift-outline</v-icon>
          </a>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="phoneDialog" max-width="500">
      <v-card class="pa-5">
        <div class="mb-5 h5">휴대번호 뒷 4자리를 입력해주세요.</div>
        <v-text-field outlined dense></v-text-field>
        <div class="d-flex justify-end">
          <v-btn
            class="mr-3"
            depressed
            color="#5b3690"
            text
            @click="phoneDialog = false"
            >Cancel</v-btn
          >
          <v-btn
            depressed
            color="#5b3690"
            class="white--text"
            @click="$router.push('/mypage')"
            >OK</v-btn
          >
        </div>
      </v-card>
    </v-dialog>
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
        class="rounded-lg d-flex align-center pa-3"
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
                >수업안내</v-list-item
              >
              <v-list-item @click="$router.push('/free-class')"
                >무료수업체험</v-list-item
              >
              <!-- <v-list-item @click="$router.push('/board')"> 게시판</v-list-item> -->
              <v-list-item @click="phoneDialog = true">마이페이지</v-list-item>
              <v-list-item to="/class">스토어</v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </v-card>
    </div>

    <v-dialog v-model="phoneDialog" max-width="500">
      <v-card class="pa-5">
        <div class="mb-5 h5">휴대번호 뒷 4자리를 입력해주세요.</div>
        <v-text-field outlined dense></v-text-field>
        <div class="d-flex justify-end">
          <v-btn
            class="mr-3"
            depressed
            color="#5b3690"
            text
            @click="phoneDialog = false"
            >Cancel</v-btn
          >
          <v-btn
            depressed
            color="#5b3690"
            class="white--text"
            @click="$router.push('/mypage')"
            >OK</v-btn
          >
        </div>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      rating: 4.8,
      screenWidth: "",
      isMobile: false,
      phoneDialog: false
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
