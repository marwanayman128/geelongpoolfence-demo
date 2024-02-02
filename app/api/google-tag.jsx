'use client'
import React from 'react';

const GoogleTag = () => (
  <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11481638760"></script>
    <script dangerouslySetInnerHTML={{
      __html:
        `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-11481638760');
      `
    }}></script>
    <script dangerouslySetInnerHTML={{
      __html:
        `
        gtag('config', 'AW-11481638760/7ougCNKv6Y0ZEOjO7-Iq', {
          'phone_conversion_number': '0473 220 817'
        });
      `
    }}></script>
  </>
);

export default GoogleTag;
