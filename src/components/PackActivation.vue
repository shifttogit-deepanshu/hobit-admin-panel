<template>
    <div>
        <div v-if="packcourse==null">
            <div v-bind:key="data.uid" v-for="data in packdata">
                <PacksList v-bind:data="data" />
            </div>           
        </div>
        <div v-if="packcourse!=null">
            <PackUser />          
        </div>
    </div>
</template>

<script>
import PacksList from "./PacksList.vue"
import PackUser from "./PackUser.vue";

export default {
    computed: {
        packKey() {
            return this.$store.state.pack.packKey;
        },
        packdata() {
            return this.$store.state.pack.packdata;
        },
        packcourse() {
            return this.$store.state.pack.course;
        }
    },
    mounted() {
        this.$store.dispatch("getPackData", { key: 1 });
    },
    components: { PacksList, PackUser }
}
</script>

<style scoped>

</style>