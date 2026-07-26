import type { Updater } from "@tanstack/react-table"


export function resolveUpdater<T> (
    updater : Updater<T>,
    current : T,
) : T {
    return typeof updater === "function" 
        ? (updater as (old: T) => T)(current)
        : updater
}