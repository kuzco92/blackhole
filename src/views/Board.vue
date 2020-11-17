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
          style="height: 100%"
        >
          <Header></Header>

          <v-card :class="isMobile ? 'mx-2' : 'mx-10'">
            <v-container>
              <v-row>
                <v-col cols="5" md="3">
                  <v-select :items="items" outlined dense></v-select>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="5" md="3">
                  <v-text-field label="제목+내용">
                    <template v-slot:append>
                      <v-icon color="orange">arrow_forward</v-icon>
                    </template>
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-data-table
                  style="width: 100%"
                  :headers="header"
                  :items="content"
                ></v-data-table>
              </v-row>
            </v-container>
          </v-card>
        </v-container>
      </v-img>
    </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header },
  data() {
    return {
      rating: 4.8,
      screenWidth: "",
      isMobile: false,

      items: ["최신순"],

      header: [
        {
          text: "No.",
          value: "no",
        },
        {
          text: "날짜",
          value: "date",
        },
        {
          text: "수강종류",
          value: "course",
        },
        {
          text: "제목",
          value: "title",
        },
        {
          text: "회원명",
          value: "name",
        },
        {
          text: "조회수",
          value: "views",
        },
      ],

      content: [
        {
          no: "2",
          date: "2020-04-15",
          course: "입문과정",
          title: "작품 활동을 위해 수강했습니다.",
          name: "강동원",
          views: "2",
        },
        {
          no: "1",
          date: "2020-04-12",
          course: "승무원영어",
          title: "리얼해서 활용도 높은",
          name: "이유리",
          views: "28",
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
