<template>
    <div v-if="authenticate" class="sidebar">
      <div class="shortcut">
        <router-link :to="{ name: ['IndexUser'] }"
          ><img src="../assets/photo/dark_mode/home_icon.png" alt="home" />
          <p>Home</p></router-link
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
        <router-link :to="{name:['Upload']}"><img src="../assets/photo/white_mode/upload_icon.png" alt="upload" />Upload</router-link>
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
    </div>
</template>
<script>
export default {
  data() {
    return {
      authenticate: localStorage.getItem('user-token') || null
    }
  }
}
</script>
