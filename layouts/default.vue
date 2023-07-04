
<template>
  <div>
 
    <LayoutNavbar></LayoutNavbar>
    <main>
      <div class="bg-background tw-mt-[70px]">
        <slot></slot>
      </div>
    </main>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<style lang="scss">
main {
  min-height: calc(100vh - 70px);
}

</style>