<template>
  <v-app>
    <v-app-bar>
      <v-container>
        <v-sheet class="align-center d-flex mx-auto" max-width="800">
          <v-app-bar-title>글목록</v-app-bar-title>

          <p>
            {{ user?.nick }}님 반갑습니다.
            <v-btn @click="btnLogout">로그아웃</v-btn>
          </p>
        </v-sheet>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto">
          <v-table>
            <thead>
              <tr>
                <th class="text-center" width="80">번호</th>
                <th class="text-center" width="auto">제목</th>
                <th class="text-center" width="100">글쓴이</th>
                <th class="text-center" width="100">조회수</th>
                <th class="text-center" width="100">등록일</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(article, index) in state.data.articles">
                <td class="text-center">
                  {{ state.data.pageStartNum - index }}
                </td>
                <td class="text-left">{{ article.title }}</td>
                <td class="text-center">{{ article.nick }}</td>
                <td class="text-center">{{ article.hit }}</td>
                <td class="text-center">
                  {{ article.rdate.substring(2, 10) }}
                </td>
              </tr>
            </tbody>
          </v-table>
          <v-sheet class="text-right pt-6">
            <v-btn color="primary" @click="btnWrite">글쓰기</v-btn>
          </v-sheet>

          <div class="text-center">
            <v-pagination
              :length="state.data.pageStartNum"
              :total-visible="5"
              rounded="circle"
              v-model="page"
              @click="pageClickHandler"
            ></v-pagination>
          </div>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, onBeforeMount, ref, reactive } from "vue";
import axios from "axios";
const router = useRouter();
const store = useStore();
const user = computed(() => store.getters.user);
const state = reactive({
  data: {},
});

const page = ref(1);

const btnLogout = () => {
  localStorage.removeItem("accessToken");
  router.push("/user/login");
};
const btnWrite = () => {
  router.push("/write");
};

const pageClickHandler = () => {
  getArticles(page.value);
};

onBeforeMount(() => {
  getArticles(1);
});

const getArticles = (page) => {
  axios
    .get("http://localhost:8080/Voard/list")
    .then((response) => {
      console.log(response);
      state.data = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
