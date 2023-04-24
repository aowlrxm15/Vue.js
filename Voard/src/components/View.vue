<template>
  <v-app>
    <v-app-bar>
      <v-sheet max-width="800">
        <v-app-bar-title>글보기</v-app-bar-title>
        <v-btn class="float-right" @click="btnLogout">로그아웃</v-btn>
      </v-sheet>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="border mx-auto mb-2">
          <v-list lines="one">
            <v-list-item
              title="제목입니다."
              subtitle="내용입니다."
            ></v-list-item>
          </v-list>
          <v-sheet class="text-right pt-6">
            <v-btn color="info" @click="">목록</v-btn>
            <v-btn color="success ml-1" @click="">삭제</v-btn>
            <v-btn color="warning ml-2" @click="btnWrite">글수정</v-btn>
          </v-sheet>
        </v-sheet>
        <v-sheet max-width="800" class="border mx-auto">
          <v-list lines="one">
            <v-list-item
              title="제목입니다."
              subtitle="내용입니다."
            ></v-list-item>
          </v-list>
          <v-sheet class="text-right pt-6">
            <v-btn color="info" @click="">목록</v-btn>
            <v-btn color="success ml-1" @click="">삭제</v-btn>
            <v-btn color="warning ml-2" @click="btnWrite">글수정</v-btn>
          </v-sheet>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const btnLogout = () => {
  router.push("/list");
};
const btnWrite = () => {
  router.push("/modify");
};
</script>
<style scoped></style>
