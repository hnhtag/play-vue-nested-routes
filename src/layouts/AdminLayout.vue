<template>
  <div>
    <AdminHeader />
    <v-content>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
import AdminHeader from "@/components/header/AdminHeader";

export default {
  name: "App",

  components: {
    AdminHeader
  },

  data: () => ({
    //
  })
};
</script>
