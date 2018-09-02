<template id="todo-list">
    <div class="row">
        <table class="responsive-table highlight">
            <thead>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Opciones</th>
            </thead>
            <tbody>
                <tr :key="user.id" v-for="user in users" v-bind:id="user.id">
                    <td v-text="user.name"></td>
                    <td v-text="user.last_name"></td>
                    <td v-text="user.email"></td>
                    <td>
                        <button class="btn blue hoverable" @click="showDataUser(user)"><i class="material-icons">edit</i></button>
                        <button class="btn red hoverable" @click="deleteUser(user.id)"><i class="material-icons">delete</i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { eventBus } from "../../helpers/EventBusUser.js";
import fetch from "../../helpers/Fetch.js";
export default {
  name: "user-list",
  data() {
    return {
      users: []
    };
  },
  created() {
    this.getUserList(); 
    eventBus.$on("user-add", user => {
      this.users.unshift(user);
    });
  },
  mounted() {
    eventBus.$on("user-clean", user => {
       this.getUserList(); 
    });
  },
  methods: {
    deleteUser(id) {
      let tr = document.getElementById(id);
      fetch.deleteData(`/users/${id}`).then(data => {
        tr.remove();
      });
    },
    showDataUser(user) {
      eventBus.$emit("user-update", user);
    },
    getUserList() {
          fetch.getData("/users/")
          .then(data => {
             this.users = data
          })
          .catch(error =>{ 
            console.log(`Error en obtener lista: ${error}`)
          })
      }
  }
};
</script>