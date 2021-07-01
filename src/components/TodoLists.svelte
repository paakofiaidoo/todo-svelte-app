<script>
  export let todos;
  import TodoItem from "../atoms/TodoItem.svelte";
</script>


  {#each todos as todo, i}
    <TodoItem {...todo} i={i} />
  {/each}

