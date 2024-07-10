// axios.d.ts
declare module 'axios' {
    export interface AxiosInstance {
      (config: AxiosRequestConfig): Promise<any>;
      (url: string, config?: AxiosRequestConfig): Promise<any>;
    }
  
    export interface AxiosRequestConfig {
      // Add your Axios request config types here
    }
  
    // Add other Axios types if needed
  }
  declare module 'bootstrap' {
    const bootstrap: any;
    export default bootstrap;
  }