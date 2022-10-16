<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MyBtn'
}
</script>

<style  scoped>
.btn {
    cursor: pointer;
    padding: 8px 15px;
    background: none;
    border: 1px solid teal;
}
</style>