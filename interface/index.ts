export interface ISettings {
  mode: "settings" | "play" | "end";
  map: string;
  direction: "decreasing" | "increasing";
  number_of_items: number;
  values_for_items: "A" | number[];
}

export interface IItem {
  order: number;
  value: number | string;
  visible: boolean;
}

export interface IKeyTyping {
  [id: number]: number[];
}

export interface IMapsKeyTyping {
  [id: string]: any;
}
