<template>
    <select v-model="modelValue" @change="changeOption">
        <option disabled value="">{{defaultValue}}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{option.name}}</option>
    </select>
</template>

<script>
export default {
    name: 'MySelect',
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => []
        },
        defaultValue: {
            type: String,
            default: 'Выберете колонку'
        }
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style  scoped>
select {
    padding: 5px;
    border: 1px solid teal;
}
</style>