<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'GuluCol',
        props:{
            span:[Number,String]
        }
    }
</script>

<style scoped lang="scss">
    .col{
        border:1px solid red;
        height: 100px;
        background: #ccc;
        width:50%;

        $class-prefix: col-;

        @for $n from 1 through 24 {

            // for each $col_#{i}
            &.#{$class-prefix}#{$n} {
                width:($n/24)*100%;
            }
        }
    }
</style>