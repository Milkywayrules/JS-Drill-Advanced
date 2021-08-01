interface BaseItemField {
  id: string;
  text: string;
  slug: string;
}

export interface ItemField extends BaseItemField {
  children?: Array<BaseItemField>;
}
