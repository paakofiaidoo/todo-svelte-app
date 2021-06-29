<script>
  export let todos;
  import TodoItem from "../atoms/TodoItem.svelte";
</script>

<div>
  {#each todos as todo, i}
    <TodoItem {...todo} i={i} />
  {/each}
</div>
