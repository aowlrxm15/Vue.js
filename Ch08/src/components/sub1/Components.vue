<template>
  <h4>Vuetify Components 실습</h4>
  <div>
    <h4>Icons</h4>
    <v-icon icon="mdi-vuetify"></v-icon>
    <v-icon color="success" icon="mdi-wifi" size="large"></v-icon>
    <v-icon icon="mdi-bird" color="info"></v-icon>
    <hr />

    <h4>Images</h4>
    <v-img
      :width="500"
      aspect-ratio="16/9"
      cover
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
    <hr />

    <h4>Buttons</h4>
    <v-btn>Button1</v-btn>
    <v-btn prepend-icon="mdi-bird">Button2</v-btn>
    <v-btn block>Button3</v-btn>
    <v-btn color="primary">Button4</v-btn>
    <v-btn color="secondary">Button4</v-btn>
    <v-btn color="success">Button4</v-btn>
    <v-btn color="warning">Button4</v-btn>
    <hr />

    <h4>Cards</h4>
    <v-card title="제목" subtitle="부제목" text="내용">
      <v-card-actions>
        <v-btn>확인</v-btn>
      </v-card-actions>
    </v-card>

    <v-card width="400" class="my-10">
      <v-img
        height="200"
        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        cover
        class="text-white"
      >
        <template v-slot:title> This is a title </template>
      </v-img>

      <template v-slot:subtitle> This is a subtitle </template>

      <template v-slot:text> This is content </template>
    </v-card>
    <hr />
  </div>
</template>
<script setup></script>
<style scoped></style>
