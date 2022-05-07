<template>
    <div>
        <h1 class="thin" :class="classObj">自己首先是贵人，才能遇到贵人。</h1>
        <button @click="classObj.isItalic = !classObj.isItalic">italic</button>
        <button @click="classObj.isDelete = !classObj.isDelete">Delete</button>
        <div :style="{color:active,fontSize:fsize + 'px',background:bgcolor}">多维度打造竞争力</div>
        <button @click="fsize+=1">+1</button>
        <button @click="fsize-=1">-1</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            active: 'red',
            fsize: 30,
            bgcolor:'pink',
            classObj:{
                isItalic:false,
                isDelete:false
            }
            
        }
    },
}
</script>

<style lang="less">
   .thin{
       font-weight: 200;
       color:skyblue;
   }
   .isItalic{
      font-style: italic;
   }
   .isDelete{
       text-decoration: line-through;
   }
</style>