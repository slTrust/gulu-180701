import Vue from 'vue'
import Icon from './icon'
import Button from './button'

Vue.component('g-icon',Icon)
Vue.component('g-button',Button)
new Vue({
    el:'#app',
    data:{
        msg:'haha'
    }
})