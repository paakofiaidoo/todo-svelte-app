<script>
  export let collections;
  import TodoLists from "./components/TodoLists.svelte";
</script>

<main>
  <h1>My ToDO List</h1>
  {#each collections as { name, color, tasks }}
    <div class="collection">
      <div class="title">
        <span style={`background-color: ${color}`} />
        <h2>{name}</h2>
      </div>
      <div class="list">
        <TodoLists todos={tasks} />
      </div>
    </div>
  {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  .collection {
    display: flex;
    flex-direction: column;

    margin-bottom: 1rem;
    border-radius: 1rem;
    overflow: hidden;
    text-align: center;
    align-items: center;
    padding: 1rem;
  }
  .collection:nth-of-type(even) {
    background-color: #ccc;
  }
  .collection:nth-of-type(odd) {
    background-color: #eee;
  }
  .title {
    display: flex;
  }
  .title h2 {
    font-size: 2rem;
    text-transform: capitalize;
    margin: 0;
  }
  .list {
    width: 100%;
  }
  span {
    height: 1rem;
    width: 1rem;
    margin: 1rem;
    border-radius: 0.5rem;
    padding: auto;
    background-color: #ff3e00;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
