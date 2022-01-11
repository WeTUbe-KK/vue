<template>
    <div>
        <div id="overlay">
            <div id="form_input_video">
                <img src="../assets/photo/white_mode/close_icon.png" onclick="off()">
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
            <div class="navbar_right flex"></div>
        </nav>

        <div class="sidebar">
            <div class="shortcut">
                <a href="#"><img src="../assets/photo/dark_mode/home_icon.png" alt="home"><p>Home</p></a>
                <router-link :to="{ name: ['explore'] }"><img src="../assets/photo/white_mode/explore_icon.png" alt="Explore"><p>Explore</p></router-link>
                <router-link :to="{ name: ['subscription'] }"><img src="../assets/photo/white_mode/subscription_icon.png" alt="Subscription"><p>Subscription</p></router-link>
                <hr>
                <router-link :to="{ name: ['library'] }"><img src="../assets/photo/white_mode/library_icon.jpg" alt="library"><p>Library</p></router-link>
                <a href="#" v-on:click="on()"><img src = "../assets/photo/white_mode/upload_icon.png" alt = "upload">Upload</a>
                <router-link :to="{ name: ['history'] }"><img src="../assets/photo/dark_mode/history_icon.png" alt="history"><p>History</p></router-link>
                <router-link :to="{ name: ['your_video'] }"><img src="../assets/photo/white_mode/your_video_icon.png" alt="Your Video"><p>Your Video</p></router-link>
                <router-link :to="{ name: ['watch_later'] }"><img src="../assets/photo/white_mode/time_icon.png" alt="Watch Later"><p>Watch Later</p></router-link>
                <a href="#"><img src="../assets/photo/white_mode/showmore_icon.png" alt="Show More"><p>Show More</p></a>
                <hr>
            </div>

            <div class="subscriptions">
                <h6>Subscriptions</h6>
            </div>
        </div>


    <!-- ------tempat taruh video------- -->

        <div class="menu" style="display: flex;">
            <div class="profile" style="background-color: black; width: 30%; height: 100vh;">                
                <div class="listPhoto" style="margin: 0 auto; width: 90%; height: 25%; border-radius: 2%; background-color: white; margin-top: 5%;"></div>
                <div class="wrap" style="margin: 10% 0;">
                    <h4 class="text-light">Playlist name</h4>
                    <div class="flex" style="justify-content: center; align-items: center; color: white; opacity: 0.6;">
                        <p>Total Playlist Video</p>
                        <div style="width: 2px; height: 25px; background-color: white; margin: 0 2% 4%;"></div>
                        <p>Last updated</p>
                    </div>                    
                </div>
                <hr style="width:80%; background-color: yellow; height: 3px; margin: 0 auto;"> 
                <div class="flex" style="align-items: center; margin: 5% 10%;">
                    <div class="userphoto" style="width: 65px; height: 65px; border-radius: 50%; background-color: white;"></div>
                    <h5 style="margin: 0 7%; color: white;">Username</h5>
                </div>
            </div>
            <div style="background-color: black; width: 70%; padding: 3%; opacity: 0.9;">
                <div class="videos" style="display: flex; align-items: center;">
                    <h4 style="margin: 0 1.5%;">1</h4>
                    <div class="video" style="width: 25%; height: 140px; background-color: white;"></div>
                    <h5 style="margin: 0 1.5%;">Video Title</h5>
                </div>           
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
    name: "playlist",
    data() {
        return {
        video: [],
        };
    },
    created() {
        this.getVideo();
    },
    /*
    mounted() {
        let mainScript = document.createElement('script')
        mainScript.setAttribute('src', '../assets/main2.js')
        document.head.appendChild(mainScript)
    },
    */
    methods: {
    async  getVideo() {
        try {
            const response = await axios.get(`http://localhost:3000/video`)
            this.video = response.data.response;
        } catch (err){
                console.log(err);
            }
        },
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
