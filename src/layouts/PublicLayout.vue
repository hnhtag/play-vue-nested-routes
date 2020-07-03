<template>
  <div>
    <PublicHeader />
    <v-content>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
import PublicHeader from "@/components/header/PublicHeader";
export default {
  components: {
    PublicHeader
  }
};
</script>