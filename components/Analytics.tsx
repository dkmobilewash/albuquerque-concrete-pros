"use client";

import Script from "next/script";
import { gaMeasurementId } from "@/lib/site-config";

/** GA4. Renders nothing unless NEXT_PUBLIC_GA_MEASUREMENT_ID is set, so dev/preview stay silent. */
export function Analytics() {
  if (!gaMeasurementId) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaMeasurementId)}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(gaMeasurementId)});`}
      </Script>
    </>
  );
}
