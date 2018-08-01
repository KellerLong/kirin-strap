export const createNote = (type: string) => {
  return (object: any, key: any, content: any) => {
    object[type] = { ...object[type], [key]: content.value };
  };
};
