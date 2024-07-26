import { defineStore } from "pinia";
import { reactive, ref, onMounted } from "vue";
// import {useEventListener} from "@vueuse/core";

export const useInventoryStore = defineStore('inventoryStore', () => {
    const tools = ref<({id:number, count:number, toolId:Number, elemStyle:string, blurStyle:string})>([
        {
            id: 0,
            count: 4,
            toolId: 0,
            elemStyle: 'rgb(127, 170, 101)',
            blurStyle: 'rgba(184, 217, 152, 0.35)'
        },
        {
            id: 1,
            count: 2,
            toolId: 1,
            elemStyle: 'rgb(170, 151, 101)',
            blurStyle: 'rgba(217, 187, 152, 0.35)'
        },
        {
            id: 2,
            count: 5,
            toolId: 2,
            elemStyle: 'rgb(101, 108, 170)',
            blurStyle: 'rgba(116, 129, 237, 0.35)'
        },
        {
            id: 3,
            count: 0,
            toolId: 3,
            elemStyle: null,
            blurStyle: null
        },
        {
            id: 4,
            count: 0,
            toolId: 4,
            elemStyle: null,
            blurStyle: null
        },
        {
            id: 5,
            count: 0,
            toolId: 5,
        },
        {
            id: 6,
            count: 0,
            toolId: 6,
        },
        {
            id: 7,
            count: 0,
            toolId: 7,
        },
        {
            id: 8,
            count: 0,
            toolId: 8,
        },
        {
            id: 9,
            count: 0,
            toolId: 9,
        },
        {
            id: 10,
            count: 0,
            toolId: 10,
        },
        {
            id: 11,
            count: 0,
            toolId: 11,
        },
        {
            id: 12,
            count: 0,
            toolId: 12,
        },
        {
            id: 13,
            count: 0,
            toolId: 13,
        },
        {
            id: 14,
            count: 0,
            toolId: 14,
        },
        {
            id: 15,
            count: 0,
            toolId: 15,
        },
        {
            id: 16,
            count: 0,
            toolId: 16,
        },
        {
            id: 17,
            count: 0,
            toolId: 17,
        },
        {
            id: 18,
            count: 0,
            toolId: 18,
        },
        {
            id: 19,
            count: 0,
            toolId: 19,
        },
        {
            id: 20,
            count: 0,
            toolId: 20,
        },
        {
            id: 21,
            count: 0,
            toolId: 21,
        },
        {
            id: 22,
            count: 0,
            toolId: 22,
        },
        {
            id: 23,
            count: 0,
            toolId: 23,
        },
        {
            id: 24,
            count: 0,
            toolId: 24,
        },
        {
            id: 25,
            count: 0,
            toolId: 25,
        }
    ])
    const itemRefs = ref<HTMLAllCollection>()
    const showPopup = ref<boolean>(false)
    const toolItem = reactive<({id:number, count:number, toolId:Number, elemStyle:string, blurStyle:string})>({})
    const showFormConfirm = ref<boolean>(false)
    const countItemDelete = ref<number>()
    const localTools: string | null  = localStorage.getItem('tools')

    //Drag
    const onDragStart = (e: DdragEvent, item: object): void => {
        e.dataTransfer.dropEffect = 'move'
        e.dataTransfer.dropEffect = 'move'
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('toolDragId', item.toolId.toString())
        e.dataTransfer.setData('cellDragId', item.id.toString())
        e.dataTransfer.setData('count', item.count.toString())
        e.dataTransfer.setData('elemStyle', item.elemStyle)
        e.dataTransfer.setData('blurStyle', item.blurStyle)

    }

    // Drop
    const onDrop = (e: DragEvent, cell: Object): void => {

        const toolDragId : number = parseInt(e.dataTransfer.getData('toolDragId'));
        const cellDragId : number = parseInt(e.dataTransfer.getData('cellDragId'));
        const count : number = parseInt(e.dataTransfer.getData('count'));
        const elemStyle : string = e.dataTransfer.getData('elemStyle');
        const blurStyle : string = e.dataTransfer.getData('blurStyle');
        let toolId: Number;

        if (!cell.elemStyle) {

            tools.value = tools.value.map((x: object) => {

                if (x.id === cellDragId) { // Запись в ячейку Drag
                    toolId >= 0 ? x.toolId = toolId : x.toolId = cell.toolId
                    x.count = 0
                    x.elemStyle = null
                    x.blurStyle = null

                } else if (x.id == cell.id) { // Запись в ячейку Drop
                    toolId = x.toolId
                    x.toolId = toolDragId
                    x.count = count
                    x.elemStyle = elemStyle
                    x.blurStyle = blurStyle
                }

                return x
            })
            localStorage.setItem('tools', JSON.stringify(tools.value))
        }
    }

    const openPopup = (id: number): void => {
        showPopup.value = true
        showFormConfirm.value = false
        toolItem.value = tools.value.find((tool: object):boolean => tool.toolId === id)
    }
    const closePopup = (): void => {
        showPopup.value = false
    }

    const openFormConfirm = (): void => {
        showFormConfirm.value = true
    }

    const cancelDelete = (): void => {
        showFormConfirm.value = false
    }

    // Удаление элементов
    const confirmDelete = (): void => {

        tools.value = tools.value.map((item: object )=> {
            if (item.toolId === toolItem.value.toolId && item.count >= countItemDelete.value) {
                item.count = item.count - countItemDelete.value
            } else if (item.toolId === toolItem.value.toolId && item.count < countItemDelete.value) {
                alert('Количество инструментов меньше вводимого числа')
            }
            return item
        })

        localStorage.setItem('tools', JSON.stringify(tools.value))
        showFormConfirm.value = false
        countItemDelete.value = undefined
    }

    onMounted((): void => {
        const localTools = localStorage.getItem('tools')
        tools.value = localTools ? JSON.parse(localTools) : tools.value;

        // Не реализовал форму элемента при перетаскивании
        // for (let item of itemRefs.value) {
            // useEventListener(item, 'dragstart', () => {
                // item.className = 'drag';
            // }, true)
        // }
    })


        return {tools, itemRefs, showPopup, toolItem, countItemDelete, onDragStart, onDrop, openPopup, closePopup,
            showFormConfirm, openFormConfirm, cancelDelete, confirmDelete}


})
