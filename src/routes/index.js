import VocaTextField from '../components/VocaTextField.vue'
import VocaTable from '../components/VocaTable.vue'


export default [
    {
        path: '/textfield',
        name: 'TextField',
        component: VocaTextField
    },
    {
        path: '/table',
        name: 'Table',
        component: VocaTable,
        props: true
    }
]
