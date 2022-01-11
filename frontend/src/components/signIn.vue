<template>
    <div class="bg-dark mx-auto rounded p-3 text-center" style="width: 40%;">  
        <div class="w-50 mx-auto">
            <h1 class="text-light">Sign In</h1>          
            <div class="field">            
                <div class="control">
                    <input type="text" class="form-control my-4" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" v-model="username">
                    <input type="password" class="form-control my-4" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" v-model="password">
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between px-3 py-3">
                <a href="" class="text-decoration-none link-primary"><h5>Create Account</h5></a>
                <a><h5>
                    <button class="button is-success px-3 py-2 rounded bg-primary text-light border border-white" @click="signIn">Sign In</button>    
                </h5></a>
            </div>
        </div> 
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "signIn",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async signIn() {
      try {
        await axios.get("http://localhost:8000/login", {
          username: this.username,
          password: this.password,
        });
        this.username= "";
        this.password= "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
