<template>
    <div class="bg-dark mx-auto rounded p-3" style="width: 40%;"> 
        <div class="w-75 mx-auto">
            <h1 class="text-light text-center">Sign Up</h1>          
            <div class="field">            
                <div class="control">
                    <div class="d-flex align-items-center justify-content-between my-4">
                        <label for="" class="text-light">Username</label>
                        <input type="text" class="form-control w-75" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" v-model="username">
                    </div>
                    <div class="d-flex align-items-center justify-content-between my-4">
                        <label for="" class="text-light">Gender</label>
                        <div class="d-flex flex-grow-1 justify-content-evenly">
                            <div class="male">
                                <input type="radio"  value="Male" name="fav_language" aria-describedby="basic-addon1" v-model="gender"> 
                                <label for="" class="text-light px-2">Male</label>
                            </div>
                            <div class="female">                            
                                <input type="radio"  value="Female" name="fav_language" aria-describedby="basic-addon1" v-model="gender"> 
                                <label for="" class="text-light px-2">Female</label>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between my-4">
                        <label for="" class="text-light">Birthdays</label>
                        <input type="date" class="form-control w-75" aria-describedby="basic-addon1" v-model="birthdays">
                    </div>
                    <div class="d-flex flex-column my-4">
                        <label for="" class="text-light">Password</label>
                        <div class="d-flex justify-content-between">
                            <input type="password" class="form-control mb-4 mx-1" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" v-model="password">
                            <input type="password" class="form-control mb-4 mx-1" placeholder="Confirm" aria-label="Password" aria-describedby="basic-addon1" v-model="confirmPassword">
                        </div>
                        <div class="text-start">
                            <input type="checkbox" name="" id="">
                            <label for="" class="mx-3 text-light">Show password</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between px-3 py-3">
                <a href="" class="text-decoration-none link-primary"><h5>Create Account</h5></a>
                <a><h5><button class="button is-success  px-3 py-2 rounded bg-primary text-light border border-white" @click="signUp">Sign Up</button>    </h5></a>
            </div>
        </div> 
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "signUp",
  data() {
    return {
      username: "",
      birthdays: "",
      gender: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    // Create New User
    async saveUser() {
      try {
        await axios.post("http://localhost:8000/register", {
          username: this.username,
          password: this.password,
          confirmPassword: this.confirmPassword,
          gender: this.gender,
          birthdays: this.birthdays,
        });
        this.username= "";
        this.password= "";
        this.confirmPassword= "";
        this.gender= "";
        this.birthdays= "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
