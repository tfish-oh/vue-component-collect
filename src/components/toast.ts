
import Vue from 'vue'
import NToast from './toast.vue'
let Toast = Vue.extend(NToast)

let instance 

const Dtoast =function (options:any){
    options =options||{}
    instance=new Toast({
        data:options
    })
    instance.vm=instance.$mount()
    document.body.appendChild(instance.vm.$el)
  return instance.vm
}
export default Dtoast