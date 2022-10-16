<template>
    <div class="wrap">
        <table class="table">
            <caption>Таблица</caption>
            <thead>
                <tr>
                    <template v-for="column in columns">
                        <th :class="{sortActive:selectedSort === column.value}">
                            {{column.name}}
                        </th>
                    </template>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in currentData">
                    <td>{{item.name}}</td>
                    <td>{{item.quantity}}</td>
                    <td>{{item.dist}}</td>
                    <td>{{item.date}}</td>
                </tr>
            </tbody>
        </table>
        <template v-if="allPage > 1">
            <div class="btns">
                <p>Страницы:</p>
                <template v-for="page in allPage">
                    <MyBtn @click="changePage" :class="{activePage:page == currentPage}">{{page}}</MyBtn>
                </template>
            </div>
        </template>
    </div>

</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
    data() {
        return {
            currentPage: 1
        }
    },
    computed: {
        ...mapState({
            selectedSort: state => state.selectedSort,
            columns: state => state.columns
        }),
        ...mapGetters({
            data: 'data'
        }),
        currentData() {
            if (this.allPage > 1) {
                const newData = [...this.data]
                const startIndex = (this.currentPage - 1) * 5
                return newData.splice(startIndex, 5)
            }
            return this.data
        },
        allPage() {
            return Math.ceil(this.data.length / 5)
        }
    },
    methods: {
        ...mapMutations(['updateSelectedSort']),
        changePage(event) {
            this.currentPage = event.target.textContent
        }
    }
}
</script>

<style lang="scss"  scoped>
.wrap {
    min-height: 400px;
    display: flex;
    flex-direction: column;
}

.table {
    margin-bottom: 20px;
    border-collapse: collapse;
    border: 2px solid teal;
    text-align: center;

    thead tr {
        border-bottom: 2px solid teal;
    }


    th,
    td {
        padding: 10px;
        border: 1px solid teal;
    }


    .sortActive {
        background-color: #97ffff;
    }
}

.btns {
    margin-top: auto;
    display: flex;
    column-gap: 10px;
    align-items: center;

    .activePage {
        background: #97ffff;
    }
}
</style>