

export const renderImage = (url?: string, fallback: string = '/Images/blank.png'): string => {
    return url ? url : fallback;
  };
  
 