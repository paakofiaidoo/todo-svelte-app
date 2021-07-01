import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    collections: [
      {
        name: "school",
        color: "red",
        description: "lorem",
        tasks: [
          {
            title: "kill 1",
            isComplete: false,
            create: new Date(2021, 1, 12),
            completeTime: new Date(2021, 6, 12),
          },
          {
            title: "kill 2",
            isComplete: false,
            create: new Date(2021, 1, 12),
            completeTime: new Date(2021, 6, 12),
          },
          {
            title: "kill 3",
            isComplete: true,
            create: new Date(2021, 1, 12),
            completeTime: new Date(2021, 6, 12),
          },
        ],
      },
      {
        name: "afrodew",
        color: "yellow",
        description: "lorem",
        tasks: [
          {
            title: "kill 1",
            isComplete: false,
            create: new Date(2021, 1, 12),
            completeTime: new Date(2021, 6, 12),
          },
          {
            title: "kill 2",
            isComplete: false,
            create: new Date(2021, 1, 12),
            completeTime: new Date(2021, 6, 12),
          },
          {
            title: "kill 3",
            isComplete: true,
            create: new Date(2021, 1, 12),
            completeTime: new Date(2021, 6, 12),
          },
        ],
      },
      {
        name: "dev",
        color: "orange",
        description: "lorem",
        tasks: [
          {
            title: "kill 1",
            isComplete: false,
            create: new Date(2021, 1, 12),
            completeTime: new Date(2021, 6, 12),
          },
          {
            title: "kill 2",
            isComplete: false,
            create: new Date(2021, 1, 12),
            completeTime: new Date(2021, 6, 12),
          },
          {
            title: "kill 3",
            isComplete: true,
            create: new Date(2021, 1, 12),
            completeTime: new Date(2021, 6, 12),
          },
        ],
      },
    ],
  },
});

export default app;
