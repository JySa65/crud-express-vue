<template id="todo-add">
    <form @submit.prevent="addUser" id="formUser">
        <div class="row">
            <div class="input-field col s12">
                <input id="id_name" type="text" class="validate" name="name" required autocomplete="off" maxlength="50" minlength="4" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" @keyup="validateData" @blur="validateDataRequired" title="Nombre" v-model="user.name" placeholder="Nombre">
                <label for="id_name">Nombre</label>
                <span v-show="messageUser.name" v-text="messageUser.name" class="red-text"></span>
            </div>
            <div class="input-field col s12">
                <input id="id_last_name" type="text" class="validate" name="last_name" required autocomplete="off" maxlength="50" minlength="4" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" @keyup="validateData" title="Apellido" @blur="validateDataRequired" v-model="user.last_name" placeholder="Apellido">
                <label for="id_last_name">Apellido</label>
                <span v-show="messageUser.last_name" v-text="messageUser.last_name" class="red-text"></span>
            </div>
            <div class="input-field col s12">
                <input id="id_email" type="email" class="validate" name="email" required autocomplete="off" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" @keyup="validateData" @blur="validateDataRequired" v-model="user.email" placeholder="Email">
                <label for="id_email">Email</label>
                <span v-show="messageUser.email" v-text="messageUser.email" class="red-text"></span>
            </div>
            <div class="col s6">
                <button v-if="updaUser" type="submit" class="btn blue hoverable"><i class="material-icons">edit</i></button>
                <button v-else type="submit" class="btn blue hoverable"><i class="material-icons">add</i></button>
            </div>
            <div class="col s6">
                <button type="reset" @click="cleanInput" class="btn red darken-4 hoverable"><i class="material-icons">clear</i></button>
            </div>
        </div>
    </form>
</template>

<script>
import fetch from "../../helpers/Fetch.js";
import { eventBus } from "../../helpers/EventBusUser.js";
export default {
  name: "user-add",
  props: ["userUpdate"],
  data() {
    return {
      messageUser: {
        name: "",
        last_name: "",
        email: ""
      },
      user: {
        name: "",
        last_name: "",
        email: ""
      },
      updaUser: false
    };
  },
  mounted() {
    eventBus.$on("user-update", user => {
      this.user = user;
      this.updaUser = true;
    });
  },
  methods: {
    addUser() {
      if (!this.updaUser) {
        fetch.postData("/users/", this.user)
        .then(data => {
          eventBus.$emit("user-add", data);
          this.cleanInput();
        })
        .catch(error => {
          console.log(`Error en insertar: ${error}`)
        });
      } else {
        fetch.putData(`/users/${this.user.id}`, this.user)
        .then(data => {
          this.cleanInput();
          this.updaUser = false;
        })
        .catch(error => {
          console.log(`Error en actualizar: ${error}`)
        });
      }
    },
    validateData(e) {
      let input = e.target,
        expression;

      if (input.pattern) {
        let regex = new RegExp(input.pattern);
        expression = !regex.exec(input.value);
      } else {
        expression = !input.value;
      }

      if (expression) {
        this.messageUser[input.name] = `Dato Incorrecto, ${input.title}`;
      } else {
        this.messageUser[input.name] = ``;
      }
    },
    validateDataRequired(e) {
      let input = e.target;
      if (input.value == "") {
        this.messageUser[input.name] = `Campo Requerido, ${input.title}`;
      }
    },
    cleanInput() {
      this.messageUser = {
        name: "",
        last_name: "",
        email: ""
      };
      this.user = {
        name: "",
        last_name: "",
        email: ""
      };
      eventBus.$emit("user-clean", user => {});
    }
  }
};
</script>
