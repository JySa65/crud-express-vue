<template>
   <div class="row ">
     <div class="col l4 m12 s12">
         <user-add></user-add>
     </div>
     <div class="col l8 m12 s12">
         <user-list></user-list>
     </div>
   </div>
</template>

<script>
import UserAdd from "./UserAdd.vue";
import UserList from "./UserList.vue";
import fetch from "../../helpers/Fetch.js";
export default {
  name: "app",
  components: {
    "user-add": UserAdd,
    "user-list" : UserList
  }
};
</script>

<style lang="scss">
</style>
