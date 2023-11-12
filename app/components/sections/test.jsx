'use client'
import React, { useEffect, useState } from 'react';

export default function Test() {
  const [clientIp, setClientIp] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the client's IP address from an external service
    fetch('https://ipinfo.io/ip')
      .then((response) => response.text())
      .then((data) => {
        setClientIp(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching IP address:', error);
        setLoading(false); // Set loading to false on error as well
      });
  }, []);

  return (
    <div className='p-[30%]'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          Client IP Address: {clientIp}
        </div>
      )}
    </div>
  );
}
