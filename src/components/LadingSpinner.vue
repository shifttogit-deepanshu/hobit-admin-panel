<template>
    <div>
        <!-- <a-spin class="spinner" size="large"/> -->
        <div class="loading-text">Loading...</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .loading-text{
        font-size:20px;
        font-weight:500;
        color:#8C62D3;
        margin-top:20px;
    }
    .ant-spin i{
        background-color:rgb(0, 175, 0)!important;
        color:#8C62D3;
    }
</style>