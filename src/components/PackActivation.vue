<template>
    <div class="container--main">
        <div v-if="packcourse.length==0" class="course-list">
            <div v-if="packdata.length!=0" class="courses">
                <div v-bind:key="data.UID" v-for="data in packdata">
                    <!-- <PacksList v-bind:data="data" /> -->
                    <PackCourse v-bind:data="data"/>
                 </div>  
            </div>
            <div v-if="packdata.length==0" class="loading--overlay">
                <LadingSpinner />
            </div>                     
        </div>
        <div class="packcourse" v-if="packcourse.length!=0">
            <PackUser /> 
            <SelectedUsers />
        </div>
    </div>
</template>

<script>
// import PacksList from "./PacksList.vue"
import PackUser from "./PackUser.vue";
import SelectedUsers from "./SelectedUsers.vue";
import LadingSpinner from "./LadingSpinner.vue";
import PackCourse from "./PackCourse.vue";

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
    components: { PackUser, SelectedUsers, LadingSpinner, PackCourse }
}
</script>

<style scoped>
    .container--main{
        height:100%;
        position: relative;
        padding:20px;
        width:100%;
    }
    .packcourse{
        height:100%;
        display:flex;
        width:100%;
    }
    .loading--overlay{
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align:center;
}
.course-list{
    width:100%;
    display: flex;
}
.courses{
    width:100%;
    display: flex;
    flex-wrap:wrap;
}
</style>