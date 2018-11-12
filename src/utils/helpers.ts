export const isRoot = (s: string): boolean=> {
  return ['/', '/en', '/en/', '/es', '/es/', '/zh', '/zh/'].indexOf(s) > -1;
}

export const isSameDay = (s1: string, s2: string) => {
  const d1 = new Date(s1);
  const d2 = new Date(s2);

  return (
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
  ) ? true : false;
};
