import {useQuery} from "@tanstack/vue-query";
import {KANBAN_DATA} from "~/components/kanban/kanban.data";
import {EnumStatus, type IDeal} from "~/types/deals.types";
import type {IColumn} from "~/components/kanban/kanban.types";

export function useKanbanQuery() {

    return useQuery({
        queryKey: ['deals'],
        queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS, [], "customer"),
        select(data) {
            const newBoard: IColumn[] = KANBAN_DATA.map(column => ({
                ...column,
                items: []
            }))

            const deals = data.documents as unknown as IDeal[]

            for (const deal of deals) {
                const column = newBoard.find(col => col.id === deal.status)
                if (column) {
                    column.items.push({
                        $createdAt: deal.$createdAt,
                        id: deal.$id,
                        name: deal.name,
                        status: column.name,
                        companyName: deal.customer?.name,
                        price: deal.price
                    })
                }
            }
            return newBoard
        },
    })
}
