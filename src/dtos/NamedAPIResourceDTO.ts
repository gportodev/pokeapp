export interface NamedAPIResource<T> {
  name: string;
  url: string;
  data?: T;
}
