<template>
  <navbar></navbar>
  <!-- <nav class="flex">
      <div class="navbar_left flex">
        <img src="../assets/photo/dark_mode/menu_icon.png" alt="menu_icon" class="menu_icon" />
        <h3>WeTube</h3>
      </div>
      <div class="navbar_middle flex">
        <div class="search-box flex">
          <input type="text" placeholder="search" />
          <img src="../assets/photo/dark_mode/search_icon.png" alt="search_icon" />
        </div>
      </div>
      <div class="navbar_right flex">
        <div class="btn btn-outline-danger" v-on:click="signout()">
          <p class="m-0">Sign Out</p>
        </div>
      </div>
    </nav> -->
    <sidebar></sidebar>

    <!-- <div class="sidebar">
      <div class="shortcut">
        <a href="/home"
          ><img src="../assets/photo/dark_mode/home_icon.png" alt="home" />
          <p>Home</p></a
        >
        <router-link :to="{ name: ['explore'] }"
          ><img src="../assets/photo/white_mode/explore_icon.png" alt="Explore" />
          <p>Explore</p></router-link
        >
        <router-link :to="{ name: ['subscription'] }"
          ><img src="../assets/photo/white_mode/subscription_icon.png" alt="Subscription" />
          <p>Subscription</p></router-link
        >
        <hr />
        <router-link :to="{ name: ['library'] }"
          ><img src="../assets/photo/white_mode/library_icon.jpg" alt="library" />
          <p>Library</p></router-link
        >
        <a href="#" v-on:click="on()"><img src="../assets/photo/white_mode/upload_icon.png" alt="upload" />Upload</a>
        <router-link :to="{ name: ['history'] }"
          ><img src="../assets/photo/dark_mode/history_icon.png" alt="history" />
          <p>History</p></router-link
        >
        <router-link :to="{ name: ['your_video'] }"
          ><img src="../assets/photo/white_mode/your_video_icon.png" alt="Your Video" />
          <p>Your Video</p></router-link
        >
        <router-link :to="{ name: ['watch_later'] }"
          ><img src="../assets/photo/white_mode/time_icon.png" alt="Watch Later" />
          <p>Watch Later</p></router-link
        >
        <router-link :to="{ name: ['playlist'] }"
          ><img src="../assets/photo/white_mode/showmore_icon.png" 
            alt="playlist" />
            <p>Playlist</p>
        </router-link>            
        <hr />
      </div>

      <div class="subscriptions">
        <h6>Subscriptions</h6>
      </div>
    </div> -->
    <div>
    <div class="container create_acc">
      <a class="link" href=""><img src="/close_icon.png"></a>
        <form>
          <h1 class="judul">Create WeTube Account</h1>
            <div class="row">
                <label for="exampleInputEmail1">Name</label>
                <div class="col">
                  <input type="text" class="form-control" placeholder="First name">
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="Last name">
                </div>
              </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            
            <div class="row">
              <div class="col">
                <label for="inputState">Gender</label>
                <select id="inputState" class="form-control">
                  <option selected></option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div class="col">
                <label for="inputState">Birthday</label>
                <input type="text" class="form-control" placeholder="Last name">
              </div>
            </div>

              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">Confirm Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password">
              </div>


            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">I agree all statement in <a href="">Terms of service</a></label>
            </div>
            <button class="tombol_create_acc" type="submit" class="btn btn-primary">Create Account</button>
            <p>Your already have account? <a href="">Login here</a></p>
          </form>
    </div>
    </div>
</template>
<script>
import axios from "axios";
import sidebar from "./sidebar.vue";
import navbar from "./navbar.vue";
</script>