<template>
<div>
    <div id="overlay">
        <div id="form_input_video">
            <img src="../assets/photo/white_mode/close_icon.png" v-on:click="off()">
            <h3>Upload Video</h3>
            <div class="drag-area">
                <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
                <header>Drag & Drop to Upload File</header>
                <span>OR</span>
                <button>Browse File</button>
                <input type="file" hidden>
            </div>
            <h3>Title (required)</h3>
            <textarea id="w3review" name="w3review" rows="2" cols="80"></textarea>
            <h3>Description</h3>
            <textarea id="w3review" name="w3review" rows="5" cols="80"></textarea>
            <h3>thumbnail</h3>
            <input type="file" id="myFile" name="filename">
        </div>
    </div>


    <div id="overlay1">
        <div id="form_input_video">
        <img src="../assets/photo/white_mode/close_icon.png" v-on:click="off()">
            <h3>Sign In</h3>
            <form class="login" @submit.prevent="login" method="post">
                <div class="txt_field">
                    <input required v-model="email" type="text">
                    <label>Email</label>
                </div>
        
                <div class="txt_field">
                    <input required v-model="password" type="password">
                    <label>Password</label>
                </div>
        
                <div class="pass">Forget Password ?</div>
                <!-- <button type="submit">Login</button> -->
                <input @click="login" type="submit" value="login"> 
                <div class="sign_up" v-on:click="onnn()">
                    Create Account
                </div>
            </form>
        </div>
    </div>


    <div id="overlay2">
        <div id="form_input_video">
        <img src="../assets/photo/white_mode/close_icon.png" v-on:click="off()">
            <h3>Create Account</h3>
            <form method="post">
            <div class="txt_field">
                <input v-model="email_r" type="text" required>
                <label>Email</label>
            </div>
    
            <div class="txt_field">
                <input v-model="f_name" type="text" required>
                <label>First Name</label>
            </div>
    
            <div class="txt_field">
                <input v-model="l_name" type="text" required>
                <label>Last Name</label>
            </div>
    
            <div class="txt_field">
                <input v-model="password_r" type="password" required>
                <label>Password</label>
            </div>
    
            <div class="txt_field">
            <input type="password" required>
            <label>Confirm Password</label>
            </div>
    
            <div class="txt_field">
            <input v-model="birthday" type="date" required>
            <label>Birthday</label>
            </div>
    
            <div class="txt_field">
            <input v-model="gender" type="text" required>
            <label>Gender</label>
            </div>
            
            <input @click="register" type="submit" value="Create">
            </form>
        </div>
    </div>

    <nav class="flex">
        <div class="navbar_left flex">
            <img src="../assets/photo/dark_mode/menu_icon.png" alt="menu _icon" class="menu_icon">
            <h3>WeTube</h3>
        </div>
        <div class="navbar_middle flex">
            <div class="search-box flex">
                <input type="text" placeholder="search">
                <img src="../assets/photo/dark_mode/search_icon.png" alt="search_icon"> 
            </div>
        </div>
        <div class="navbar_right flex">
            <div class="button_sign_in" v-on:click="onn()">
                <p>Sign In</p>
            </div>
        </div>
    </nav>

    <div class="sidebar">
        <div class="shortcut">
            <a href="#"><img src="../assets/photo/dark_mode/home_icon.png"  alt="home" ><p>Home</p></a>
            <a href="#"><img src="../assets/photo/white_mode/explore_icon.png" alt="Explore"><p>Explore</p></a>
            <a href="#" v-on:click="onn()"><img src="../assets/photo/white_mode/subscription_icon.png" alt="Subscription"><p>Subscription</p></a>
            <hr>
            <a href="#" v-on:click="onn()"><img src="../assets/photo/white_mode/library_icon.jpg" alt="library"><p>Library</p></a>
            <a href="#" v-on:click="on()"><img src = "../assets/photo/white_mode/upload_icon.png" alt = "upload"><p>Upload</p></a>
            <a href="#" v-on:click="onn()"><img src="../assets/photo/dark_mode/history_icon.png" alt="history"><p>History</p></a>
            <a href="#" v-on:click="onn()"><img src="../assets/photo/white_mode/your_video_icon.png" alt="Your Video"><p>Your Video</p></a>
            <a href="#" v-on:click="onn()"><img src="../assets/photo/white_mode/time_icon.png" alt="Watch Later"><p>Watch Later</p></a>
            <a href="#"><img src="../assets/photo/white_mode/showmore_icon.png" alt="Show More"><p>Show More</p></a>
            <hr>
        </div>

        <div class="subscriptions">
            <h6>Subscriptions</h6>
        </div>
    </div>


<!-- ------tempat taruh video------- -->


    <div class="container">
        <div class="list">
            <div class="video_list">
                <a href="#">
                    <!-- gambar thumbnail -->
                    <div class="flex">
                        <!-- gambar user -->
                        <div class="video_info">
                            <p></p>     <!--judul-->
                            <p></p>     <!--user-->
                            <p></p>     <!--view-->
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from "axios";

export default {
  name: "main_no_sign_in",
  
  data() {
    return {
      video: [],
      email: "",
      password: "",

      email_r: "",
      f_name: "",
      l_name: "",
      password_r: "",
      birthday: "",
      gender: ""
    };
  },
  methods: {
    async login() {
      try {
        await axios.post('http://localhost:3000/login', {
          email: this.email,
          password: this.password
        });
        this.email = "";
        this.password = ""
        this.$router.push("/main_sign_in")
      } catch (err) {
        console.log(err);
      }
    },
    async register() {
      try {
        await axios.post(`http://localhost:3000/register`, {
          email: this.email_r,
          username: this.f_name + " " + this.l_name,
          gender: this.gender,
          password: this.password_r,
          birthday: this.birthday,
        });
        this.email_r = "";
        this.f_name = "";
        this.l_name = "";
        this.gender = "";
        this.password_r = "";
        this.birthday = "";
        this.$router.push("/")
      } catch (err) {
        console.log(err);
    }},
    on(){
        document.getElementById("overlay").style.display = "block"
    },
    onn(){
        document.getElementById("overlay1").style.display = "block"
    },
    onnn(){
        document.getElementById("overlay1").style.display = "none"
        document.getElementById("overlay2").style.display = "block"
    },
    off(){
        document.getElementById("overlay").style.display = "none"
        document.getElementById("overlay1").style.display = "none"
        document.getElementById("overlay2").style.display = "none"
    },
  }, 
};
</script>
