<template>
  <input
    :type="type"
    :placeholder="placeholder"
    v-on:input="$emit('input', $event.target.value)"
    class="text-input"
  />
</template>

<script>
export default {
  props: ['value', 'type', 'placeholder'],
}
</script>