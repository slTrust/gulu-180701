import Vue from 'vue'
import Icon from './icon'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('g-icon',Icon)
Vue.component('g-button',Button)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
new Vue({
    el:'#app',
    data:{
        msg:'haha',
        loading1:false,
        loading2:false,
        loading3:false,
        message:'haha'
    },
    methods:{
        inputChange(e){
            console.log(e.target.value)
        }
    }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect


try{
    // 单元测试
    
    // 测试 setting
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon:'setting'
            }
        })
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-setting')
        vm.$el.remove()
        vm.$destroy()
    }

    // 测试 loading
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon:'setting',
                loading:true
            }
        })
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-loading')
        vm.$el.remove()
        vm.$destroy()
    }

    // 测试 order
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon:'setting',
                loading:true
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    }

    // 测试 设置了icon-positon 后的 order
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon:'setting',
                loading:true,
                iconPosition:'right'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    }

    // 测试 click
    {
        // mock
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon:'setting',
                loading:true,
                iconPosition:'right'
            }
        })
        vm.$mount()
        let spy = chai.spy(function(){})
        vm.$on('click',spy)
        // 希望这个函数被执行
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()
    }
} catch (error) {
    window.errors = [error]
} finally {
    window.errors && window.errors.forEach((error) => {
        console.error(error.message)
    })
}