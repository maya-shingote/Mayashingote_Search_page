import React, { useState, useEffect } from "react";
import axios from "axios";
import { MongoClient } from "mongodb";
import "./Searchpage.css";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ads, setAds] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const client = new MongoClient("<mongoDB-connection-string>");

      try {
        await client.connect();
        const database = client.db("myDatabase");
        const adsCollection = database.collection("ads");
        const result = await adsCollection.find().toArray();
        setAds(result);
      } catch (error) {
        console.error(error);
      } finally {
        await client.close();
      }
    };
    fetchData();
  }, []);

  const filteredAds = ads.filter(
    (ad) =>
      ad.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ad.primary_text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ad.headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ad.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderAds = () => {
    return filteredAds.map((ad) => (
      <div key={ad._id} className="ad">
        <img src={ad.image_url} alt={ad.primary_text} />
        <div className="company-name">{ad.company_name}</div>
      </div>
    ));
  };

  return (
    <div className="search-page">
      <input
        type="text"
        placeholder="Search ads"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="ads-grid">{renderAds()}</div>
    </div>
  );
};

export default SearchPage;
