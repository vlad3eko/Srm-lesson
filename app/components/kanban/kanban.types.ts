import type {EnumStatus, IComment} from '~/types/deals.types'

export interface ICard {
    id: string
    name: string
    price: string
    $createdAt: string
    companyName: string
    status: string
}

export interface IColumn {
    id: EnumStatus
    name: string
    items: ICard[]
}


