<template>
    <div class="sort">
        <p>Сортировать по:</p>
        <MySelect @update:modelValue='changeSort' :modelValue="selectedSort" :options="avalableSortList"></MySelect>
    </div>

</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            avalableSortList: state => state.avalableSortList,
            selectedSort: state => state.selectedSort
        }),
    },
    methods: {
        ...mapMutations([
            'updateSelectedSort'
        ]),
        changeSort(value) {
            this.updateSelectedSort(value)
        }
    }
}
</script>

<style lang="scss" scoped>
.sort {
    margin-bottom: 20px;
}
</style>