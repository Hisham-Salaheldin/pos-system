import type {
    // PaginationState,
    RowSelectionState,
    SortingState,
    VisibilityState,
} from "@tanstack/react-table"


export interface TableFilter {
    field?: string
    operator:
    | "="
    | "!="
    | ">"
    | ">="
    | "<"
    | "<="
    | "contains"
    | "startsWith"
    | "endsWith"
    | "in"
    value?: unknown
}

export interface TableQuery {
    pageIndex?: number
    pageSize?: number
    sorting?: SortingState
    filters?: TableFilter[]
    search?: string
}

export interface TableState {
    query?: TableQuery
    rowSelection?: RowSelectionState
    columnVisibility?: VisibilityState
}

export interface TableStore extends TableState {
    updateQuery: (query: Partial<TableQuery>) => void
}