import {useDealSlideStore} from "~/store/deal-slide.store";
import {useQuery} from "@tanstack/vue-query";
import {Query} from "appwrite";


export function useComments() {
    const store = useDealSlideStore()
    const cardId = store.card?.id || ''

    return useQuery({
        enabled: !!cardId,
        queryKey: ['deal', cardId],
        queryFn: async () => {
            if (!cardId) return

            const deal = await DB.getDocument(DB_ID, COLLECTION_DEALS, cardId)
            console.log('deal', deal)

            const comments = await DB.listDocuments(
                DB_ID,
                COLLECTION_COMMENTS,
                [
                    Query.equal("deal", cardId)
                ]
            )

            return {
                ...deal,
                comments: comments.documents
            }
        }
    })
}
