<template>
<div v-if="selectedKey==1">
    <a-button type="primary" class="failed">
            Failed
    </a-button>
     <a-button type="primary" class="open">
            Open
    </a-button>
    <a-button type="primary" class="closed">
            Closed
    </a-button>    
    <a-button type="primary" class="all">
            All
    </a-button>
</div>     
</template>

<script>
export default {
    props:["selectedKey"]
}
</script>

<style scoped>
    .open{
        color:rgb(191, 191, 0);
        border-color:rgb(191, 191, 0);
        background: white;
    }
    .open:hover{
        color:white;
        background:rgb(191, 191, 0);
    }
    .closed{
        color:rgb(0, 154, 0);
        border-color:rgb(0, 158, 0);
        background: white;
    }
    .closed:hover{
        background:rgb(0, 154, 0);
        color: white;
    }
    .failed{
        color:rgb(199, 0, 0);
        border-color:rgb(199, 0, 0);
        background: white;
    }
    .failed:hover{
        background:rgb(199, 0, 0);
        color: white;
    }
    .all{
        color:#CB6CE4;
        border-color:#CB6CE4;
        background: white;        
    }
    .all:hover{
        color: white;
        background:#CB6CE4;
    }
    .ant-btn{
        margin:0px 20px;
        font-weight: 500;   
    }
</style>