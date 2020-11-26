<template lang="html">
  <v-img
    src="../assets/main_header_img.jpg"
    :height="isMobile ? '100vh' : '100vh'"
    class="align-center"
  >
    <div class="d-flex flex-column">
      <p class="white--text h5 nanum d-flex justify-center">
        페이지를 찾을 수 없습니다.
      </p>
      <p class="d-flex justify-center h6">
        <router-link
          class="white--text nanum"
          :to="{ name: 'Main', params: {} }"
          >메인화면으로 바로가기</router-link
        >
      </p>
    </div>
  </v-img>
</template>

<script>
export default {};
</script>

<style lang="css" scoped></style>
