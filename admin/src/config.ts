interface Config {
    baseUrl: string;
    apiUrl: string;
    fileUrl: string;
  }
  
  const config: Config = {
    baseUrl: process.env.VUE_APP_BASE_URL,
    apiUrl: process.env.VUE_APP_API_URL,
    fileUrl: process.env.VUE_APP_FILE_URL,
  };
  
  export default config;