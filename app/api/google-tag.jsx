'use client'
import React from 'react';

const GoogleTag = () => (
  <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11412063683"></script>
    <script dangerouslySetInnerHTML={{
      __html:
        `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-11412063683');
      `
    }}></script>
    <script dangerouslySetInnerHTML={{
      __html:
        `
        gtag('config', 'AW-11412063683/wBg4CMGT4vYYEMOL2cEq', {
          'phone_conversion_number': '0404 494 904'
        });
      `
    }}></script>
  </>
);

export default GoogleTag;
