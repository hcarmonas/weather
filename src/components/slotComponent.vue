<template lang="html">
<div>
  <h1>Componente filho</h1>

  <slot name="header"></slot>

  <slot>
    Isso só será exibido se não houver conteúdo
    Para serem distribuídos
  </slot>

  <slot name="footer"></slot>

  <slot name="dinamic" text="hello from child"></slot>
</div>
</template>

<script lang="babel">
export default {}
</script>

<style lang="css" scoped></style>
