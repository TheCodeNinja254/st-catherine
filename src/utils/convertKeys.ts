const isPlainObject = (value: any): boolean => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

const camelCase = (str: string): string => {
  return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
};

const keys = (obj: object): string[] => {
  return Object.keys(obj);
};

const isEmpty = (obj: object): boolean => {
  return keys(obj).length === 0;
};

const convertKeys = (data: any): any => {
  const dataObj: any = data;
  if (!isPlainObject(dataObj) && !Array.isArray(dataObj)) {
    return dataObj;
  }

  if (isPlainObject(dataObj) && !isEmpty(dataObj)) {
    const keysToConvert = keys(dataObj);
    keysToConvert.forEach((key) => {
      const newKey = camelCase(key);
      dataObj[newKey] = convertKeys(dataObj[key]);

      if (newKey !== key) {
        delete dataObj[key];
      }
    });
  }

  if (Array.isArray(dataObj)) {
    data.forEach((item: any, index: any) => {
      dataObj[index] = convertKeys(item);
    });
  }

  return dataObj;
};

export default convertKeys;
