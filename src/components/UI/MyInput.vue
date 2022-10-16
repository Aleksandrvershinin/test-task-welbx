<template>
    <input @input="changeInput" v-model="modelValue" class="input" :type="type" :placeholder="placeholder">
</template>

<script>
export default {
    name: 'MyInput',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
        },
        modelValue: {
            type: String
        }
    },
    methods: {
        changeInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style  scoped>
.input {
    width: 100%;
    padding: 5px;
    border: 1px solid teal;
}
</style>