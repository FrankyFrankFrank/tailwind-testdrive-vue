<template>
  <form class="flex flex-col md:flex-row items-end md:items-start md:mx-64">
      <div class="border-red-500 md:border-2 pt-32 md:w-64 w-full md:h-auto bg-yellow-400 transform md:skew-y-6 md:shadow">
        <h1 class="text-xs text-red-500 font-black uppercase tracking-widest p-1">Please Log In</h1>
        <TextInput type="text" placeholder="Name" v-model="name" />
        <TextInput type="password" placeholder="Password" v-model="password" />
        <Submit :enabled="canSubmit" />
        <p class="p-4 text-center text-xs text-red-500 uppercase leading-tight">By clicking submit you agree to the <span class="underline">terms of service</span>.<br />Spooky stuff.</p>
      </div>
      <HelpButton />
    </form>
</template>

<script>
import TextInput from './TextInput'
import Submit from './Submit'
import HelpButton from './HelpButton'

export default {
  name: 'Form',
  components: {
    TextInput,
    Submit,
    HelpButton
  },
  data: function () {
    return {
      name: '',
      password: '',
    }
  },
  computed: {
    canSubmit() {
      return this.name && this.password;
    }
  }
}
</script>