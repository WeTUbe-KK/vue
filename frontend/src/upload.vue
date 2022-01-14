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
    <div class="container upload">
    <a href=""><img src="/close_icon.png"></a>
    <h1>Upload Video</h1>
    <div class="drag-area">
      <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
      <header>Drag & Drop to Upload File</header>
      <span>OR</span>
      <button>Browse File</button>
      <input type="file" hidden>
  </div>

  <h3 class="h3_upload">Title (required)</h3>
  <textarea class="textarea_upload"></textarea>
  <h3>Description</h3>
  <textarea class="textarea_upload"></textarea>
  <h3 class="h3_upload">Thumbnail</h3>
  <input type="file" name="filename">
  <button type="submit" class="btn btn-primary tombol_upload">Upload</button>
  </div>
    </div>
</template>
<script>
import axios from "axios";
import sidebar from "./sidebar.vue";
import navbar from "./navbar.vue";
</script>