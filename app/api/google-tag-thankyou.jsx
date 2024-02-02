// google-tag-thankyou.jsx
import React from 'react';

const GoogleTagThankYou = () => (
  <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11481638760"></script>
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-11481638760');
      `}
    </script>
    <script>
      {`
        gtag('config', 'AW-11481638760/7ougCNKv6Y0ZEOjO7-Iq', {
          'phone_conversion_number': '0473 220 817'
        });
      `}
    </script>
    <script>
      {`
        gtag('event', 'conversion', {'send_to': 'AW-11481638760/TULQCP227I0ZEOjO7-Iq'});
      `}
    </script>
  </>
);

export default GoogleTagThankYou;
