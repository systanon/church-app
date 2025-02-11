export type TabItem = {
  title?: string;
  key: string;
  i18n_key?: string;
};

export enum TabKeys {
  WOMEN = 'women_ministry',
  YOUTH = 'youth_ministry',
  CHILDREN = 'children_ministry',
  WORSHIP = 'worship_ministry',
  PRISON = 'prison_ministry',
}

export const tabMinistries: TabItem[] = [
  {
    key: TabKeys.WOMEN,
  },
  {
    key: TabKeys.YOUTH,
  },
  {
    key: TabKeys.CHILDREN,
  },
  {
    key: TabKeys.WORSHIP,
  },
  { key: TabKeys.PRISON },
];
