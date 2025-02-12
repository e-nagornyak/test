type NextSearchParams = Promise<Record<string, string | string[] | undefined>>
type NextParams<T> = Promise<T>

export type { NextSearchParams, NextParams }
