<template>
  <div>
    <el-button>Button</el-button>
    <el-button type="primary" class="main__start">adadadasd</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="primary" :icon="Edit" circle />
  </div>
</template>

<script>
import {useVuelidate} from "@vuelidate/core";
import {email, required} from "@vuelidate/validators";

export default{
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      contact: {
        email: ''
      }
    }
  },
  validations () {
    return {
      firstName: { required },
      lastName: { required },
      contact: {
        email: { required, email }
      }
    }
  }
}
</script>
