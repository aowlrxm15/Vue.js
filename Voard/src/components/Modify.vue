<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글수정</v-app-bar-title>
      <v-btn class="float-right" @click="btnLogout">로그아웃</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-text-field label="제목 " variant="underlined"></v-text-field>
        <v-sheet max-width="1000" class="mx-auto">
          <v-textarea label="내용 "></v-textarea>
        </v-sheet>
        <v-file-input label="첨부된 파일"></v-file-input>
        <v-sheet class="text-right">
          <v-btn class="mr-2" @click="btnCancel">취소</v-btn>
          <v-btn color="primary" @click="btnModify">확인</v-btn>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const btnCancel = () => {
  router.push("/list");
};
const btnModify = () => {
  router.push("/list");
};
</script>
<style scoped></style>
