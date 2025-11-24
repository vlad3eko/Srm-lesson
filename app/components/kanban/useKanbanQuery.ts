import {useQuery} from "@tanstack/vue-query";
import {KANBAN_DATA} from "~/components/kanban/kanban.data";
import type {IDeal} from "~/types/deals.types";

export function useKanbanQuery() {

    return useQuery({
        queryKey: ['deals'],
        queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS, [], "customer"),
        select(data) {
            const newBoard = [...KANBAN_DATA]
            const deals = data.documents as unknown as IDeal[]
            console.log('deals', deals)
            console.log('newBoard', newBoard)

            for(const deal of deals) {
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
