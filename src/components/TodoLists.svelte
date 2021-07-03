<script>
  export let todos;
  import TodoItem from "../atoms/TodoItem.svelte";
</script>

<span>undone</span>
{#each todos.filter(({ isComplete }) => {
  return !isComplete;
}) as todo, i}
  <TodoItem {...todo} {i} />
{/each}
<span>done</span>
{#each todos.filter(({ isComplete }) => {
  return isComplete;
}) as todo, i}
  <TodoItem {...todo} {i} />
{/each}
