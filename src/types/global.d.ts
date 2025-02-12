declare global {
  type valueof<X> = X[keyof X]
  type Nullable<T> = T | null
  type Maybe<T> = T | null | undefined
}
