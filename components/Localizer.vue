<script lang="ts" setup>
import { useNavigator } from "~/locale/useNavigator";
import locales from '../locale'
const useSwithchLocalPath = useSwitchLocalePath()
const localesList = computed(() => locales)
function setLocale(e: string) {
  navigateTo(
    useSwithchLocalPath(e)
  )
}

defineProps({
  class: [Object, String],
});
</script>

<template>
  <div>
    <ClientOnly>
      <VSelect :value="localesList.find((l) => l.code === $i18n.locale)?.name as string" variant="plain" :class="class"
        class="tw-w-24 tw-mb-2 tw-capitalize" menu-icon="mdi-web" color="primary" @update:modelValue="setLocale"
        :items="localesList" item-title="name" item-value="code">
      </VSelect>
    </ClientOnly>
  </div>
</template>
