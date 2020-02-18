<template>
  <input
    :type="type"
    :placeholder="placeholder"
    v-on:input="$emit('input', $event.target.value)"
    class="w-full px-1 py-5 uppercase tracking-widest text-lg bg-yellow-400 placeholder-yellow-800 focus:bg-red-500 text-red-500 focus:text-yellow-400 transition-colors border-b-2 border-red-500 duration-500"
  />
</template>

<script>
export default {
  props: ['value', 'type', 'placeholder'],
}
</script>