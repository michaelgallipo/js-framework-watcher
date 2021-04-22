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
      forks: [100, 200, 100, 200, 100],
      stars: [200, 100, 400, 100, 200],
      subscribers: [100, 300, 500, 300, 100],
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
                values: this.forks,
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
    const auth = { auth: { username: "michaelgallipo" } };
    axios
      .get("https://api.github.com/repos/vuejs/vue", auth)
      .then((response) => {
        console.log("vuejs repo", response);
        this.vueData.subscribers = response.data.subscribers_count;
        this.subscribers[0] = response.data.subscribers_count;
        this.vueData.stars = response.data.stargazers_count;
        this.stars[0] = response.data.stargazers_count;
        this.vueData.forks = response.data.forks_count;
        this.forks[0] = response.data.forks_count;
        console.log(this.vueData);
      });
    axios
      .get("https://api.github.com/repos/angular/angular.js", auth)
      .then((response) => {
        this.angularData.subscribers = response.data.subscribers_count;
        this.subscribers[1] = response.data.subscribers_count;
        this.angularData.stars = response.data.stargazers_count;
        this.stars[1] = response.data.stargazers_count;
        this.angularData.forks = response.data.forks_count;
        this.forks[1] = response.data.forks_count;
        console.log(this.angularData);
      });
    axios
      .get("https://api.github.com/repos/emberjs/ember.js", auth)
      .then((response) => {
        this.emberData.subscribers = response.data.subscribers_count;
        this.subscribers[2] = response.data.subscribers_count;
        this.emberData.stars = response.data.stargazers_count;
        this.stars[2] = response.data.stargazers_count;
        this.emberData.forks = response.data.forks_count;
        this.forks[2] = response.data.forks_count;
        console.log(this.emberData);
      });
    axios
      .get("https://api.github.com/repos/sveltejs/svelte", auth)
      .then((response) => {
        this.svelteData.subscribers = response.data.subscribers_count;
        this.subscribers[3] = response.data.subscribers_count;
        this.svelteData.stars = response.data.stargazers_count;
        this.stars[3] = response.data.stargazers_count;
        this.svelteData.forks = response.data.forks_count;
        this.forks[3] = response.data.forks_count;
        console.log(this.svelteData);
      });
    axios
      .get("https://api.github.com/repos/facebook/react", auth)
      .then((response) => {
        this.reactData.subscribers = response.data.subscribers_count;
        this.subscribers[4] = response.data.subscribers_count;
        this.reactData.stars = response.data.stargazers_count;
        this.stars[4] = response.data.stargazers_count;
        this.reactData.forks = response.data.forks_count;
        this.forks[4] = response.data.forks_count;
        console.log(this.reactData);
      });
    // console.log(this.forks, this.stars, this.subscribers);
  },
};
</script>
