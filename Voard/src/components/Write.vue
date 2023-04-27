<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글쓰기</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-text-field
          label="제목 입력"
          variant="underlined"
          v-model="article.title"
        ></v-text-field>
        <v-sheet max-width="1000" class="mx-auto">
          <v-textarea label="내용 입력" v-model="article.content"></v-textarea>
        </v-sheet>
        <v-file-input label="파일첨부"></v-file-input>
        <v-sheet class="text-right">
          <v-btn class="mr-2" @click="btnCancel">취소</v-btn>
          <v-btn color="primary" @click="btnNext">글등록</v-btn>
        </v-sheet>
        <v-dialog v-model="dialog" width="400">
          <v-card>
            <v-card-text> 등록 완료 </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="dialog = false">확인</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";

const store = useStore();
const router = useRouter();

const article = reactive({
  title: null,
  content: null,
  uid: null,
});

const dialog = ref(false);

const btnCancel = () => {
  router.push("/list");
};
const btnNext = () => {
  const user = store.getters.user;
  article.uid = user.uid;
  console.log(article);
  axios
    .post("http://localhost:8080/Voard/write", article)
    .then((response) => {
      console.log(response);
      dialog.value = true;
      //router.push("/list");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
