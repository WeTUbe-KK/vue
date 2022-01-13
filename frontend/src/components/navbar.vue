<template>
    <nav class="flex">
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
    </nav>
</template>

<script lang="ts">
export default {
    methods : {
    signout() {
      localStorage.removeItem("user-token");
      this.$router.push("/");
    },
    }
}
</script>
