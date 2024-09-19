"use client";

import { Products } from "@/api";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState<Products>([]);

  async function getData() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`
      );
      return setData(response.data);
    } catch (error: any) {
      throw new Error("Failed to fetching data", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        {data.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
