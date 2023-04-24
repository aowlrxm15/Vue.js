<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글쓰기</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-text-field label="제목 입력" variant="underlined"></v-text-field>
        <v-sheet max-width="1000" class="mx-auto">
          <v-textarea label="내용 입력"></v-textarea>
        </v-sheet>
        <v-file-input label="파일첨부"></v-file-input>
        <v-sheet class="text-right">
          <v-btn class="mr-2" @click="btnCancel">취소</v-btn>
          <v-btn color="primary" @click="btnNext">글등록</v-btn>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const btnCancel = () => {
  router.push("/user/login");
};
const btnNext = () => {
  router.push("/list");
};
</script>
<style scoped></style>
