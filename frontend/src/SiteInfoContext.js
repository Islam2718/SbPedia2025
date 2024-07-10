import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import config from './config';
export const SiteInfoContext = createContext();

export const SiteInfoProvider = ({ children }) => {
  const [siteInfoJsonData, setSiteInfoJsonData] = useState([]);
  async function fetchSiteInfo() {
    try {
        const response = await axios.get(config.API_URL_LIVE + config.SITE_INFO_URL);
        // const response = await axios.get('http://localhost:8000/api/site-info/1');
        setSiteInfoJsonData(response.data.data);
        console.log('siteInfoJsonData', response.data.data);
    } catch (error) {
        console.error('Error reading JSON file:', error);
    }
  }
  useEffect(() => {
    // Make your API call here to fetch the siteInfoJsonData
    fetchSiteInfo();
  }, []);

  return (
    <SiteInfoContext.Provider value={siteInfoJsonData}>
      {children}
    </SiteInfoContext.Provider>
  );
};