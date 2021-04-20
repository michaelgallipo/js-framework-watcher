<template>
  <div class="home">
    <h1>Javascript Framework Watcher</h1>
    <img
      alt="Javascript Logo"
      src="../assets/javascript_logo_icon.png"
      style="height: 128px"
    />
    <zingchart :data="myData"></zingchart>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "home",
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      vueData: {},
      angularData: {},
      emberData: {},
      svelteData: {},
      reactData: {},
      myData: {
        layout: "horizontal",
        graphset: [
          {
            type: "bar",
            title: {
              text: "Forks",
            },
            // width: "50%",
            scaleX: {
              // set scale label
              label: {
                text: "Frameworks",
                fontSize: 16,
              },
              // convert text on scale indices
              labels: ["Vue", "Angular", "Ember", "Svelte", "React"],
            },
            series: [
              {
                values: [1, 2, 6, 5, 4],
              },
            ],
          },
          {
            type: "bar",
            title: {
              text: "Stars",
            },
            // width: "50%",
            scaleX: {
              // set scale label
              label: {
                text: "Frameworks",
                fontSize: 16,
              },
              // convert text on scale indices
              labels: ["Vue", "Angular", "Ember", "Svelte", "React"],
            },
            series: [
              {
                values: [2, 4, 5, 1, 4],
              },
            ],
          },
          {
            type: "bar",
            title: {
              text: "Watchers",
            },
            // width: "50%",
            scaleX: {
              // set scale label
              label: {
                text: "Frameworks",
                fontSize: 16,
              },
              // convert text on scale indices
              labels: ["Vue", "Angular", "Ember", "Svelte", "React"],
            },
            series: [
              {
                values: [150, 300, 500, 400, 200],
              },
            ],
          },
        ],
      },
    };
  },
  created: function () {
    axios.get("https://api.github.com/repos/vuejs/vue").then((response) => {
      console.log("vuejs repo", response);
      this.vueData.subscribers = response.data.subscribers_count;
      this.vueData.stars = response.data.stargazers_count;
      this.vueData.forks = response.data.forks_count;
      console.log(this.vueData);
    });
    axios
      .get("https://api.github.com/repos/angular/angular.js")
      .then((response) => {
        console.log("angularjs repo", response);
        this.angularData.subscribers = response.data.subscribers_count;
        this.angularData.stars = response.data.stargazers_count;
        this.angularData.forks = response.data.forks_count;
        console.log(this.angularData);
      });
    axios
      .get("https://api.github.com/repos/emberjs/ember.js")
      .then((response) => {
        console.log("emberjs repo", response);
        this.emberData.subscribers = response.data.subscribers_count;
        this.emberData.stars = response.data.stargazers_count;
        this.emberData.forks = response.data.forks_count;
        console.log(this.emberData);
      });
    axios
      .get("https://api.github.com/repos/sveltejs/svelte")
      .then((response) => {
        console.log("svelte repo", response);
        this.svelteData.subscribers = response.data.subscribers_count;
        this.svelteData.stars = response.data.stargazers_count;
        this.svelteData.forks = response.data.forks_count;
        console.log(this.svelteData);
      });
    axios
      .get("https://api.github.com/repos/facebook/react")
      .then((response) => {
        console.log("react repo", response);
        this.reactData.subscribers = response.data.subscribers_count;
        this.reactData.stars = response.data.stargazers_count;
        this.reactData.forks = response.data.forks_count;
        console.log(this.reactData);
      });
  },
};
</script>
