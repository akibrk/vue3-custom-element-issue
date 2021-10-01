<template>
  <div>
      <h2>Av-Test</h2>
    <p class="deep-blue">
        Text Box: {{dataShowText? dataText: ''}}
    </p>
    <p class="dark-green">
        Amount Box: Value: {{dataAmount}} + Type: {{typeof dataAmount}}
    </p>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'av-test',
  setup(props) {
    console.log('setup() props: ', props);
    console.log('setup() props: dataText ', props.dataText);
    
    onBeforeMount(()=>{
      console.log('onBeforeMount() props', props);
      console.log('onBeforeMount() props: dataText ', props.dataText);
    });

    onMounted(()=>{
      console.log('onMounted() props: ', props);
      console.log('onMOunted() props: dataText ', props.dataText);
    })

    return {
      props,
    };
  },
  props: {
    dataText: {
      required: false,
      type: String,
    },
    dataShowText: {
      required: false,
      type: Boolean,
      default: true
    },
    dataAmount: {
      required: true,
      type: Number,
    },
  },
  watch:{
    dataText: function (newValue: string, oldValue: string){
      console.log('watch(): dataText: OldValue - ', oldValue);
      console.log('watch(): dataText: newValue - ', newValue);
    }
  },
  beforeCreate(){
    console.log('beforeCreate() this: ', this);
    console.log('beforeCreate() text: ', this.dataText);
  },
  beforeMount(){
    console.log('beforeMount() this: ', this);
    console.log('beforeMount() text: ', this.dataText);
  },
  mounted(){
    console.log('mounted() this: ', this);
    console.log('mounted() text: ', this.dataText);
  },
  created(){
    console.log('created() this: ', this);
    console.log('created() text: ', this.dataText);
    console.log('created() showText: ', this.dataShowText);
  }
  
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap');
*{
  font-family: 'Quicksand', sans-serif;
}
div{
    font-size: 2em;
}
.deep-blue{
    color: rgb(0, 25, 63);
}
.dark-green{
    color: rgb(0, 78, 20)
}

</style>