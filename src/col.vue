<template>
    <div class="col" :class="[`col-${span}`,offset && `offset-${offset}`]"
         :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}"
    >
        <div style="border:1px solid green;">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'GuluCol',
        props:{
            span:{
                type:[Number,String]
            },
            offset:{
                type:[Number,String]
            }
        },
        data(){
            return {
                gutter:0
            }
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
        $class-prefix: offset-;
        @for $n from 1 through 24 {

            // for each $col_#{i}
            &.#{$class-prefix}#{$n} {
                margin-left:($n/24)*100%;
            }
        }
    }
</style>