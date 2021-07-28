interface MainItemField {
  id: string;
  text: string;
  slug: string;
}

export interface Item extends MainItemField {
  children?: Array<MainItemField>;
}
