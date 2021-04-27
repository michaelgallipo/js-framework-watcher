<template>
  <div class="home">
    <div id="logo">
      <h1>Javascript Framework Watcher</h1>
      <img
        alt="Javascript Logo"
        src="../assets/javascript_logo_icon.png"
        style="height: 128px"
      />
    </div>
    <div id="charts">
      <zingchart id="forks" :data="chartConfig"></zingchart>
      <zingchart id="stars" :data="chartConfig2"></zingchart>
      <zingchart id="watchers" :data="chartConfig3"></zingchart>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import "zingchart";
import zingchartVue from "zingchart-vue";

export default {
  name: "home",
  components: {
    zingchart: zingchartVue,
  },
  data() {
    return {
      vueData: {},
      angularData: {},
      emberData: {},
      svelteData: {},
      reactData: {},
      labels: ["Vue", "Angular", "Ember", "Svelte", "React"],
      forks: [100, 200, 100, 200, 100],
      stars: [200, 100, 400, 100, 200],
      subscribers: [100, 300, 500, 300, 100],
    };
  },
  computed: {
    chartConfig() {
      return {
        layout: "horizontal",
        type: "bar",
        id: "forks",
        title: {
          text: "Forks",
        },
        width: "100%",
        scaleX: {
          // set scale label
          label: {
            text: "Frameworks",

            fontSize: 16,
          },
          // convert text on scale indices

          labels: this.labels,
        },
        series: [
          {
            values: this.forks,
          },
        ],
      };
    },
    chartConfig2() {
      return {
        type: "bar",
        id: "stars",
        title: {
          text: "Stars",
        },
        width: "100%",
        scaleX: {
          // set scale label
          label: {
            text: "Frameworks",
            fontSize: 16,
          },
          // convert text on scale indices
          labels: this.labels,
        },
        series: [
          {
            values: this.stars,
          },
        ],
      };
    },
    chartConfig3() {
      return {
        type: "bar",
        id: "watchers",
        title: {
          text: "Watchers",
        },
        width: "100%",
        scaleX: {
          // set scale label
          label: {
            text: "Frameworks",
            fontSize: 16,
          },
          // convert text on scale indices
          labels: this.labels,
        },
        series: [
          {
            values: this.subscribers,
          },
        ],
      };
    },
  },
  created: function () {
    const auth = { auth: { username: "michaelgallipo" } };
    axios
      .get("https://api.github.com/repos/vuejs/vue", {}, auth)
      .then((response) => {
        console.log("vuejs repo", response);
        this.vueData.subscribers = response.data.subscribers_count;
        this.vueData.stars = response.data.stargazers_count;
        this.vueData.forks = response.data.forks_count;
        console.log(this.vueData);
        this.updateVue(this.vueData);
      });
    axios
      .get("https://api.github.com/repos/angular/angular.js", {}, auth)
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
      .get("https://api.github.com/repos/emberjs/ember.js", {}, auth)
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
      .get("https://api.github.com/repos/sveltejs/svelte", {}, auth)
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
      .get("https://api.github.com/repos/facebook/react", {}, auth)
      .then((response) => {
        this.reactData.subscribers = response.data.subscribers_count;
        this.subscribers[4] = response.data.subscribers_count;
        this.reactData.stars = response.data.stargazers_count;
        this.stars[4] = response.data.stargazers_count;
        this.reactData.forks = response.data.forks_count;
        this.forks[4] = response.data.forks_count;
        console.log(this.reactData);
        // this.chartRerender();
      });
    setTimeout(this.chartRerender, 2500);
  },
  methods: {
    updateVue: function (vueData) {
      this.stars[0] = vueData.stars;
      this.subscribers[0] = vueData.subscribers;
      this.forks[0] = vueData.forks;
    },
    chartRerender: function () {
      console.log(this.stars, this.forks, this.subscribers);
      zingchart.exec("stars", "setseriesvalues", {
        values: [this.stars],
      });
      zingchart.exec("forks", "setseriesvalues", {
        values: [this.forks],
      });
      zingchart.exec("watchers", "setseriesvalues", {
        values: [this.subscribers],
      });
    },
  },
};
</script>

<style scoped>
#charts {
  display: flex;
}

#logo {
  margin-bottom: 40px;
}
</style>
