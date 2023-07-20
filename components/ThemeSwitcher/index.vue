<script lang="ts" setup>
const { ui, theme } = useAppConfig();
const colors = theme.colors;

const tabs = ["primary", "gray"];
const currentTab = ref("primary");

const palette = computed(() =>
  currentTab.value === "primary" ? colors.primary : colors.gray
);

const onSelect = (value) => {
  if (currentTab.value === "primary") {
    ui.primary = value;
  } else {
    ui.gray = value;
  }
};
</script>

<template>
  <UPopover>
    <UButton icon="i-heroicons-swatch" variant="soft" :square="true" />

    <template #panel>
      <UITabs v-model="currentTab" :tabs="tabs"></UITabs>
      <div class="grid grid-cols-5 gap-2 p-2">
        <UTooltip v-for="color in palette" :key="color" :text="color">
          <URadio
            :value="color"
            :model-value="currentTab === 'primary' ? ui.primary : ui.gray"
            :ui="{
              background: `!bg-${color}-500`,
              border: 'border-0',
              base: 'h-6 w-6 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent',
            }"
            @update:model-value="onSelect"
          ></URadio>
        </UTooltip>
      </div>
    </template>
  </UPopover>
</template>
