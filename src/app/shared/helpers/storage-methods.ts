export class StorageMethods {
  public static localStorageSetItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static localStorageGetItem(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
}
