<template>
    <div>
        <nav>
            <div class="nav-wrapper cyan darken-4">
               <div class="container">
                    <a href="#" class="brand-logo">Crud Users</a>
               </div>
            </div>
        </nav>
        <div class="container mt-container">
            <User></User>
        </div>
    </div>
</template>

<script>
import User from './components/user/User.vue';
export default {
  name: "app",
  components: {
    User
  }
};
</script>

<style lang="scss">
.mt-container{
    margin-top: 60px;
}
</style>
