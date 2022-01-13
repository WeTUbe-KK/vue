<template>
  <div class="container">
    <div class="video_list" v-for="item in video" :key="item.id">
      <div class="card me-5">
        <router-link class="mx-auto my-2" :to="{ path: '/video/' + item.id }"><img :src="getImgUrl(item.path)" /></router-link>
        <div class="card-body d-flex justify-content-between">
          <div class="d-flex flex-column">
            <p>{{ item.name }}</p>
            <p>{{ item.view }}</p>
            <p>{{ item.User.username }}</p>
          </div>
          <div class="d-flex flex-column">
            <button v-if="authenticate" class="btn btn-outline-dark" style="height: fit-content" v-on:click="addWatchLater(item.id)">Add to Playlist</button>
            <button v-if="authenticate" class="btn btn-outline-info" style="height: fit-content" v-on:click="addWatchLater(item.id)">Watch Later</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      video: [],
      authenticate: localStorage.getItem("user-token") || false,
    };
  },
  created() {
    this.getVideo();
  },
  methods: {
    async getVideo() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_BACKEND}/video`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user-token")}`,
          },
        });
        this.video = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    getImgUrl(pic) {
      const image = pic.split("/");
      image.splice(6, 0, "w_200,h_200,c_scale");
      return image.join("/").slice(0, -4) + ".jpg";
    },
    async addWatchLater(id) {
      try {
        const response = await axios.post(
          `${process.env.VUE_APP_BACKEND}/watchLater/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user-token")}`,
            },
          }
        );
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
