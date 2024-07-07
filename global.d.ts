declare global {
  interface Window {
    fbq: (name1: string, name2: string, options?: object) => void;
  }
}

export {};
