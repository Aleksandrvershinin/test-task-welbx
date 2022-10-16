<template>
    <div @click="$emit('update:show', false)" v-if="show" class="modal">
        <div @click.stop class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Modal',
    props: {
        show: {
            default: false,
            type: Boolean,
        }
    }
}
</script>

<style  scoped>
.modal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
}

.content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-width: 300px;
    min-height: 50px;
    padding: 15px;
}
</style>