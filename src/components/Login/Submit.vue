<template>
  <input
    type="submit"
    :disabled="!enabled"
    :value="enabled ? 'Submit' : 'Disabled'"
    class="cursor-pointer tracking-widest w-full px-1 py-5 uppercase text-center text-yellow-400 font-bold transform transition-all duration-500 hover:scale-110"
    :class="disabledClasses"
  />
</template>

<script>
export default {
  props: ['enabled'],
  computed: {
    disabledClasses() {
      if (this.enabled) {
        return ['bg-green-500']
      } else {
        return ['bg-red-500']
      }
    }
  }
}
</script>