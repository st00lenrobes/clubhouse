export type PfpRecord = {
  id: string;
  image: string;
  name: string;
  mintAddress?: string;
  background: string;
};

export type PlaceholderRecord = {
  id: React.Key;
  [x: string]: unknown;
};
