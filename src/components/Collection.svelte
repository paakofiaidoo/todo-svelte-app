<script>
  export let name, color, tasks;
  import TodoLists from "../components/TodoLists.svelte";
</script>

<div class="collection">
  <div class="title">
    <span style={`background-color: ${color}`} />
    <h2>{name}</h2>
  </div>
  <div class="list">
    <TodoLists todos={tasks} />
  </div>
</div>

<style>
  .collection {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    border-radius: 1rem;
    overflow: hidden;

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
    text-align: center;
  }
  .title h2 {
    font-size: 2rem;
    text-transform: capitalize;
    margin: 0;
  }
  .list {
    width: 100%;
    text-align: left;
   
  }
  span {
    height: 1rem;
    width: 1rem;
    margin: 1rem;
    border-radius: 0.5rem;
    padding: auto;
    background-color: #ff3e00;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
