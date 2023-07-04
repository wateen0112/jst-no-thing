<template>
  <section>
    <div class="header tw-grid tw-grid-cols-12 tw-p-4">
      <div
        class="lg:tw-col-span-5 lg:tw-order-1 tw-order-2 tw-col-span-12 tw-flex tw-flex-col tw-justify-center tw-text-center tw-items-center"
      >
        <h1 class="tw-text-primary tw-text-3xl">{{ $t("home.header1") }}</h1>
        <h1 class="tw-text-secondary tw-text-2xl">{{ $t("home.header2") }}</h1>
        <VBtn class="btn-start tw-my-5 text-white">{{ $t("home.start") }}</VBtn>
      </div>
      <div class="lg:tw-col-span-7 tw-col-span-12 lg:tw-order-2 tw-order-1">
        <img class="tw-w-full" src="~assets/svg/home/header-car.svg" />
      </div>
    </div>
  </section>
  <section>
    <div class="tw-mt-5 tw-bg-[#D5E7F7] tw-p-10">
      <h2
        class="tw-col-span-12 tw-text-primary tw-mx-3 tw-font-bold lg:tw-text-start tw-text-center"
      >
        {{ $t("home.view") }}
      </h2>
      <div class="tw-grid tw-grid-cols-12 tw-px-4 tw-gap-4">
        <div class="lg:tw-col-span-6 tw-col-span-12 tw-mt-6 tw-flex">
          <h2 class="lg:tw-w-16 tw-w-10 tw-text-primary tw-mt-2 tw-mx-5">
            {{ $t("home.from") }}
          </h2>
          <VTextField
            variant="solo"
            :label="$t('home.address')"
            append-inner-icon="mdi-map-marker"
          ></VTextField>
        </div>

        <div class="lg:tw-col-span-6 tw-col-span-12 tw-mt-6 tw-flex">
          <h2 class="tw-w-10 tw-text-primary tw-mt-2 tw-mx-5">
            {{ $t("home.to") }}
          </h2>
          <VTextField
            variant="solo"
            :label="$t('home.address')"
            append-inner-icon="mdi-map-marker"
          ></VTextField>
        </div>
        <div class="tw-col-span-12 tw-mt-6 tw-flex tw-justify-center">
          <VBtn color="primary"
            >{{ $t("home.calc") }} <VIcon class="tw-mx-2">mdi-arrow-right</VIcon></VBtn
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.header .btn-start {
  background: linear-gradient(-50deg, #2b256d 50%, #14ad98);
}
</style>
