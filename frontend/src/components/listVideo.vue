<template>
    <div class="container">
      <div class="video_list" v-for="item in video" :key="item.id">
        <div class="card me-5">
          <img class="mx-auto my-2" :src="getImgUrl(item.path)" />
          <div class="card-body">
            <p>{{ item.name }}</p>
            <p>{{ item.view }}</p>
            <p>{{ item.User.username }}</p>
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
      video: []
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
    }
  },
};
</script>