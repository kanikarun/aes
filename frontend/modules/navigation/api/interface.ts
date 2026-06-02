interface ICustomFields {
  enTitle?: string;
  kmTitle?: string;
  isHide: boolean;
}

export interface INavigationItem {
  id: number;
  documentId: string;
  title: string;
  type: 'INTERNAL' | 'EXTERNAL' | 'WRAPPER';
  path: string | null;
  uiRouterKey: string;
  menuAttached: boolean;
  order: number;
  collapsed: boolean;
  autoSync: boolean;
  additionalFields: ICustomFields;
  audience: string[];
  parent: INavigationItem | null;
  items: INavigationItem[] | null;
  related?: { __type: string } | null;
}

export interface Navigation {
  name: string;
  href?: string;
  target?: string;
  items?: Navigation[];
}

export type NavigationResponse = INavigationItem[];
