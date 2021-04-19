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

export default {
  name: "home",
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      myData: {
        layout: "horizontal",
        graphset: [
          {
            type: "bar",
            title: {
              text: "Forks",
            },
            width: "50%",
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
            width: "50%",
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
        ],
      },
    };
  },
};
</script>
