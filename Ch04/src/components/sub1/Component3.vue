<template>
  <h4>SetUp Context</h4>
  <p>
    이름 : <input type="text" v-model="user.name" /> <br />
    나이 : <input type="number" v-model="user.age" /> <br />
    <button @click="btnSend">상위 컴포넌트로 전달</button>
  </p>
</template>
<script>
export default {
  name: "Component3",
  setup(props, Context) {
    let user = {
      name: "",
      age: 0,
    };
    const btnSend = () => {
      console.log("name :" + user.name);
      console.log("age :" + user.age);

      // 상위 컴포넌트로 myEvent 이벤트 발생
      Context.emit("myEvent", user);
    };
    return {
      user,
      btnSend,
      Context,
    };
  },
};
</script>
<style scoped></style>
