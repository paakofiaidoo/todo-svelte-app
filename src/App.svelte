<script>
  import TodoItem from "./atoms/TodoItem.svelte";
  import Collection from "./components/Collection.svelte";
  import SideMenu from "./components/SideMenu.svelte";
  import { v4 as uuidv4 } from "uuid";

  let collections = [
    {
      name: "school",
      color: "red",
      description: "lorem",
      id: uuidv4(),
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
      id: uuidv4(),
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
      id: uuidv4(),
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
  ];
  const addCollection = (
    name = "",
    color = "red",
    description = "",
    tasks = []
  ) => {
    const newCollection = {
      id: uuidv4(),
      name,
      color,
      description,
      tasks,
      isComplete: false,
      created: new Date(),
      completeTime: null,
    };

    collections = [...collections, newCollection];
    console.log(newCollection, collections);
  };
  const removeCollection = () => {};
  const editCollection = () => {};
  const addTask = () => {};
  const removeTask = () => {};
  const editTask = () => {};
  let active = 0;

  setInterval(() => {
    console.log(active);
  }, 5000);
</script>

<div class="content">
  <SideMenu bind:active bind:collections />
  <main>
    <button
      on:click={() => {
        addCollection("name");
        console.log(collections);
      }}>test</button
    >
    <h1>My ToDO List</h1>
    <Collection bind:collection={collections} {active} />
  </main>
</div>

<style>
  .content {
    display: flex;
  }
  main {
    text-align: center;
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    margin: 0;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
