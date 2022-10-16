<template>
    <div class="wrap">
        <h4>Фильтр</h4>
        <div class="filter">
            <div class="column">
                <p>Выбор колонки:</p>
                <MySelect @update:modelValue="changeColumn" :modelValue="filterColumn" :options="columns"></MySelect>
            </div>
            <div class="conditions">
                <p>Выбор условия:</p>
                <MySelect @update:modelValue="changeFilterConditionsValue" :modelValue="filterConditionsValue"
                    :options="filterConditions">
                </MySelect>
            </div>
            <div class="value">
                <MyInput :placeholder="'Значение'" :modelValue="filterValue" @update:modelValue="changeFilterValue">
                </MyInput>
            </div>
        </div>
        <div class="btns">
            <MyBtn @click="cancelFilter">Сбросить</MyBtn>
        </div>
    </div>

</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    methods: {
        ...mapMutations([
            'updateFilterColumn',
            'updateFilterConditionsValue',
            'updateFilterValue',
            'cancelFilter'
        ]),
        changeColumn(value) {
            this.updateFilterColumn(value)
        },
        changeFilterConditionsValue(value) {
            this.updateFilterConditionsValue(value)
        },
        changeFilterValue(value) {
            this.updateFilterValue(value)
        }
    },
    computed: {
        ...mapState({
            columns: state => state.columns,
            filterValue: state => state.filterValue,
            filterColumn: state => state.filterColumn,
            filterConditions: state => state.filterConditions,
            filterConditionsValue: state => state.filterConditionsValue,
        }),
    },
}
</script>

<style lang="scss" scoped>
.wrap {
    margin-bottom: 20px;
}


.column,
.conditions {
    display: flex;
    align-items: center;
    column-gap: 5px;
}

.filter {
    display: flex;
    column-gap: 10px;
    margin-bottom: 10px;
}

.btns {
    display: flex;
    column-gap: 10px;
}
</style>