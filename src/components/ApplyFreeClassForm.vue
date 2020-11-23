<template lang="html">
  <v-form ref="form" lazy-validation>
    <v-row class="px-3">
      <v-col cols="12" md="6" offset-md="3" class="py-0">
        <v-text-field
          outlined
          label="이름"
          class="rounded-xl"
          x-large
          v-model="name"
          required
          :rules="nameRules"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" offset-md="3" class="py-0">
        <v-text-field
          outlined
          label="전화번호"
          type="tel"
          class="rounded-xl"
          x-large
          v-model="number"
          required
          :rules="numberRules"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" offset-md="3" class="py-0">
        <v-select
          outlined
          label="학년"
          class="rounded-xl"
          x-large
          :items="grades"
          v-model="grade"
          required
          :rules="gradeRules"
        ></v-select>
      </v-col>
      <v-col cols="12" md="4" offset-md="3" sm="6" class="py-0">
        <!-- <v-text-field
        outlined
        label="수업일시"
        class="rounded-xl"
        x-large
        readonly
        ></v-text-field> -->
        <v-select
          outlined
          label="수업일"
          class="rounded-xl"
          x-large
          :items="dates"
          v-model="startDay"
          required
          :rules="dateRules"
        ></v-select>
      </v-col>
      <v-col cols="12" md="2" sm="6" class="py-0">
        <!-- <v-btn class="rounded-xl" color="#5b3690" x-large block>
        <v-icon class="white--text" large>
        mdi-calendar-clock
      </v-icon>
    </v-btn> -->
        <v-select
          outlined
          label="수업시간"
          class="rounded-xl"
          x-large
          :items="times"
          v-model="startTime"
          required
          :rules="timeRules"
          no-data-text="수업 가능한 시간이 없습니다"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" offset-md="3">
        <v-card flat color="#fafafa">
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6" class="py-0">
                <v-checkbox
                  v-model="agreement"
                  label="개인정보수집 및 이용동의"
                  x-large
                  required
                  :rules="agreementRules"
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
    <div class="d-flex mt-10">
      <v-btn
        color="#4d2794"
        depressed
        class="white--text mx-auto px-10 rounded-tl-xl rounded-bl-xl rounded-tr-xl"
        x-large
        @click="submit()"
        >블랙홀 무료체험
      </v-btn>
    </div>
  </v-form>
</template>

<script>
import axios from "axios";
// axios.defaults.baseURL = 'http://localhost:8080';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default {
  name: "applyFreeClassForm",
  data() {
    return {
      name: "",
      number: "",
      startDay: "",
      startTime: "",
      agreement: "",
      grade: "",
      nameRules: [
        v => !!v || "이름을 입력해주세요.",
        v => (v && v.length <= 10) || "이름은 10글자 이내여야 합니다."
      ],
      numberRules: [
        v => !!v || "전화번호를 입력해주세요.",
        v => (v && v.length <= 13) || "번호는 13글자 이내여야 합니다.",
        v => !isNaN(parseInt(v.replace(/-/gi, ""))) || "번호는 숫자여야 합니다."
      ],
      gradeRules: [v => !!v || "학년을 선택해주세요."],
      dateRules: [v => !!v || "수업일을 선택해주세요."],
      timeRules: [v => !!v || "수업시간을 입력해주세요."],
      agreementRules: [v => !!v || "개인정보수집 및 이용동의 체크해 주세요."]
    };
  },
  methods: {
    getDayOfWeek(selDate) {
      var week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      var dayOfWeek = week[new Date(selDate).getDay()];
      return dayOfWeek;
    },
    isWeekend(dow) {
      var weekEnd = ["Sunday", "Saturday"];
      return weekEnd.includes(dow);
    },
    submit() {
      if (this.$refs.form.validate()) {
        let numberArr = this.number.split("-");
        let ymdArr = this.startDay.split("-");
        let hmArr = this.startTime.split(":");

        let form = new FormData();
        form.enctype = "multipart/form-data";
        form.append("name", this.name);
        form.append("aHp", numberArr[0]);
        form.append("bHp", numberArr[0]);
        form.append("cHp", numberArr[2]);
        form.append("year", ymdArr[0]);
        form.append("month", ymdArr[1]);
        form.append("day", ymdArr[2]);
        form.append("hour", hmArr[0]);
        form.append("min", hmArr[2]);
        form.append("grade", this.grade);
        form.append("history", "New Website");
        form.append("levelAdd", "1");

        axios
          .post("http://bhen.co.kr/api/post_leveltest_apply.php", form)
          .then(res => {
            console.log(res);
            this.$refs.form.reset();
            this.$emit("setSnackbar", true);
          })
          .catch(err => {
            console.log(err);
            alert(
              "무료 체험 수업이 신청되지 않았습니다. 고객센터에 문의하세요."
            );
          });
      }
    },
    inputPhoneNumber(val) {
      var number = val.replace(/[^0-9]/g, "");
      var phone = "";

      if (number.length < 4) {
        return number;
      } else if (number.length < 7) {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3);
      } else if (number.length < 11) {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3, 3);
        phone += "-";
        phone += number.substr(6);
      } else {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3, 4);
        phone += "-";
        phone += number.substr(7);
      }
      return phone;
    }
  },
  watch: {
    number(val) {
      this.number = this.inputPhoneNumber(val);
    }
  },
  computed: {
    myToday() {
      let currentDate = new Date();
      let day = currentDate.getDate();
      let month = currentDate.getMonth() + 1;
      let year = currentDate.getFullYear();
      let ymd = `${year}-${month}-${day}`;
      return ymd;
    },
    grades() {
      let grades = [];
      grades.push({ text: "초1", value: 8 });
      grades.push({ text: "초2", value: 9 });
      grades.push({ text: "초3", value: 10 });
      grades.push({ text: "초4", value: 11 });
      grades.push({ text: "초5", value: 12 });
      grades.push({ text: "초6", value: 13 });
      grades.push({ text: "중1", value: 15 });
      grades.push({ text: "중2", value: 16 });
      grades.push({ text: "중3", value: 17 });
      return grades;
    },
    dates() {
      var i = 0;
      var oneDay = 24 * 60 * 60 * 1000;
      var dateArr = [];
      while (dateArr.length < 3) {
        let currentDate = new Date(new Date().getTime() + oneDay * i);
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let ymd = `${year}-${month}-${day}`;
        let dow = this.getDayOfWeek(ymd);
        if (this.isWeekend(dow)) {
          i++;
        } else {
          dateArr.push(ymd);
          i++;
        }
        // dateArr.push(ymd);
        // i++;
      }
      return dateArr;
    },
    times() {
      var timeArr = [];
      var startHour = 10;
      var endtHour = 17;
      var startMins = 0;

      if (this.myToday == this.startDay) {
        timeArr = [];
        let nowHours = new Date().getHours();
        if (startHour < nowHours) {
          startHour = nowHours;
        }

        let nowMins = new Date().getMinutes();
        if (startMins < nowMins) {
          startMins = Math.ceil(nowMins / 10) * 10;
        }
        for (let i = startHour; i < endtHour; i++) {
          for (let j = startMins; j < 60; j += 10) {
            let tempHour = i < 10 ? "0" + i : i;
            let tempMin = j < 10 ? "0" + j : j;
            let time = `${tempHour}:${tempMin}`;
            timeArr.push(time);
          }
        }
      } else {
        timeArr = [];
        for (let i = startHour; i < endtHour; i++) {
          for (let j = 0; j < 60; j += 10) {
            let tempHour = i < 10 ? "0" + i : i;
            let tempMin = j < 10 ? "0" + j : j;
            let time = `${tempHour}:${tempMin}`;
            timeArr.push(time);
          }
        }
      }
      return timeArr;
    }
  }
};
</script>

<style lang="css" scoped></style>
