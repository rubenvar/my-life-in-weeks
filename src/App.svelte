<script>
  import GitHubCorner from "./GitHubCorner.svelte";
  import Life from "./Life.svelte";
  import Menu from "./Menu.svelte";
  import MenuToggler from "./MenuToggler.svelte";
  import { yearsToLive, dateString } from "./stores";

  $: if ($yearsToLive < 1) $yearsToLive = 1;
  $: if ($yearsToLive > 100) $yearsToLive = 100;
  $: dateOfBirth = new Date($dateString);
</script>

<MenuToggler />
<Menu />
<Life {dateOfBirth} />
<GitHubCorner />
