<template>
  <div>
    <!-- <nav class="flex">
      <div class="navbar_left flex">
        <img src="../assets/photo/dark_mode/menu_icon.png" alt="menu _icon" class="menu_icon" />
        <h3>WeTube</h3>
      </div>
      <div class="navbar_middle flex">
        <div class="search-box flex">
          <input type="text" placeholder="search" />
          <img src="../assets/photo/dark_mode/search_icon.png" alt="search_icon" />
        </div>
      </div>
      <div class="navbar_right flex"></div>
    </nav> -->
    <navbar></navbar>
    <div class="container play">
      <div class="row">
        <div class="play_video">
          <video ref="videoRef" src="" controls autoplay></video>
          <h3>{{ video.name }}</h3>
          <div class="play_info">
            <p>Views : {{ video.view }}</p>
            <div>
              <a href="#"><img src="../assets/photo/white_mode/like_icon.png" alt="like" />Like</a>
              <a href="#"><img src="../assets/photo/white_mode/dislike_icon.png" alt="dislike" />Dislike</a>
              <a href="#"><img src="../assets/photo/white_mode/share_icon.png" alt="share" />Share</a>
              <a href="#"><img src="../assets/photo/white_mode/list_plus_icon_175099.png" alt="save" />Save</a>
            </div>
          </div>
          <hr />

          <div class="publisher">
            <!-- profile user -->
            <div>
              <p>{{ video.name }}</p>
              <span>jumlah subscribes</span>
            </div>
            <button type="button">Subscribe</button>
          </div>
          <div class="description">
            <p>{{ video.description }}</p>
            <hr />
            <h4>Comments :{{ video.comment.length }}</h4>
            <div class="add_comment">
              <!-- gambar user -->
              <input type="text" placeholder="write comments" />
            </div>

            <div class="other_comment">
              <!-- gambar user lain -->
              <div>
                <h3>nama user lain <span>lama post</span></h3>
                <p>isi comment</p>
                <div class="comment_action">
                  <img src="../assets/photo/white_mode/like_icon.png" />
                  <span>Like</span>
                  <img src="../assets/photo/white_mode/dislike_icon.png" />
                  <span>Dislike</span>
                  <span>replay</span>
                  <a href="">all replies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right_sidebar">
          <a href="#" class="side_thumbnail">
            <div class="side_list"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import navbar from "./navbar.vue";

export default {
  name: "video_player",
  components: { navbar },
  data() {
    return {
      video: [],
      id: this.$route.params.id,
    };
  },
  created() {
    this.getVideo();
  },
  methods: {
    async getVideo() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_BACKEND}/video/${this.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user-token")}`,
          },
        });
        this.video = response.data.data;
        const path = this.video.path.split("/");
        path.splice(6, 0, "c_scale,c_pad,h_200,w_400");
        this.$refs.videoRef.src = path.join("/");
        this.$refs.videoRef.play();
      } catch (err) {
        console.log(err);
      }
    },
    on() {
      document.getElementById("overlay").style.display = "block";
    },
    onn() {
      document.getElementById("overlay1").style.display = "block";
    },
    onnn() {
      document.getElementById("overlay1").style.display = "none";
      document.getElementById("overlay2").style.display = "block";
    },
    off() {
      document.getElementById("overlay").style.display = "none";
      document.getElementById("overlay1").style.display = "none";
      document.getElementById("overlay2").style.display = "none";
    },
  },
};
</script>
