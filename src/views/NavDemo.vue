<template>
  <div class="text-center w-full">
    <h1 class="text-slot-400 text-2xl mb-10">Nav自製組件展示</h1>
    <div class="w-full flex flex-col items-center">
      <DemoSlot title="nav樣式1">
        <Nav1
          :navItems="[
            { name: 'Home' },
            { name: 'About' },
            { name: 'Services' },
            { name: 'Portfolio' },
            { name: 'Contact' },
          ]"
        />
      </DemoSlot>
      <DemoSlot title="nav樣式2">
        <Nav2
          :navItems="[
            { name: 'Contact' },
            { name: 'Home' },
            { name: 'Services' },
            { name: 'Portfolio' },
            { name: 'About' },
          ]"
        />
      </DemoSlot>
      <DemoSlot title="nav樣式3">
        <Nav3
          :navItems="[
            { name: 'Contact' },
            { name: 'Home' },
            { name: 'Services' },
            { name: 'Portfolio' },
            { name: 'About' },
          ]"
        />
      </DemoSlot>
      <DemoSlot title="nav樣式4">
        <Nav4
          :navItems="[
            { name: 'Contact' },
            { name: 'Home' },
            { name: 'Services' },
            { name: 'Portfolio' },
            { name: 'About' },
          ]"
        />
      </DemoSlot>
      <DemoSlot title="nav樣式5">
        <Nav5
          :navItems="[
            { name: 'Contact' },
            { name: 'Home' },
            { name: 'Services' },
            { name: 'Portfolio' },
            { name: 'About' },
          ]"
        />
      </DemoSlot>
      <DemoSlot title="nav樣式6">
        <Nav6
          :navItems="[
            { name: 'Contact' },
            { name: 'Home' },
            { name: 'Services' },
            { name: 'Portfolio' },
            { name: 'About' },
          ]"
        />
      </DemoSlot>
      <DemoSlot title="nav樣式7">
        <Nav7
          :navItems="[
            { name: 'Contact' },
            { name: 'Home' },
            { name: 'Services' },
            { name: 'Portfolio' },
            { name: 'About' },
          ]"
        />
      </DemoSlot>
      <div class="flex">
        <!-- <DemoSlot title="nav樣式8[直版]">
          <Nav8
            :navItems="[
              { name: 'Contact' },
              { name: 'Home' },
              { name: 'Services' },
              { name: 'Portfolio' },
              { name: 'About' },
            ]"
          />
        </DemoSlot> -->
        <DemoSlot title="nav樣式9[直版]">
          <Nav9
            :navItems="[
              { name: 'Contact' },
              { name: 'Home' },
              { name: 'Services' },
              { name: 'Portfolio' },
              { name: 'About' },
            ]"
          />
        </DemoSlot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import DemoSlot from "../component/DemoSlot.vue";
import Nav1 from "../component/navs/Nav1.vue";
import Nav2 from "../component/navs/Nav2.vue";
import Nav3 from "../component/navs/Nav3.vue";
import Nav4 from "../component/navs/Nav4.vue";
import Nav5 from "../component/navs/Nav5.vue";
import Nav6 from "../component/navs/Nav6.vue";
import Nav7 from "../component/navs/Nav7.vue";
import Nav8 from "../component/navs/Nav8.vue";
import Nav9 from "../component/navs/Nav9.vue";
</script>
