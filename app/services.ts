export type PlumbingService = {
  label: string;
  options?: string[];
};

export const PLUMBING_SERVICES: PlumbingService[] = [
  {
    label: 'Install',
    options: ['Hot Water Tank', 'Tankless Hot Water'],
  },
  {
    label: 'Descaling',
    options: ['Hot Water Tank', 'Tankless Hot Water'],
  },
  {
    label: 'Plumbing Remodel and Repair',
    options: ['Kitchen', 'Bathroom'],
  },
  {
    label: 'Handicap Compliance',
    options: ['Handicap Toilets', 'Grab Bars'],
  },
  { label: 'Whole House Repipes' },
  { label: 'Reroutes' },
  {
    label: 'Underground Soil',
    options: ['Pipe Work', 'Repair', 'Sewers'],
  },
  { label: 'Backflow Assemblies' },
  { label: 'Backflow Cages' },
  { label: 'Leak Detection' },
  { label: 'RO - Reverse Osmosis' },
  { label: 'Soft Water Unit' },
  { label: 'NUVO Systems' },
];

export function getServiceOptions(category: string): string[] | undefined {
  return PLUMBING_SERVICES.find((s) => s.label === category)?.options;
}

export function formatServiceType(category: string, option: string): string {
  const options = getServiceOptions(category);
  if (options?.length && option) {
    return `${category} - ${option}`;
  }
  return category;
}