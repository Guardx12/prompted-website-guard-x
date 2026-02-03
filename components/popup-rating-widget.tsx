"use client"

import Script from "next/script"

export function PopupRatingWidget() {
  return (
    <div id="popup-rating-widget">
      <Script
        id="popup-rating-widget-script"
        src="https://widget.reviewability.com/js/popupWidget.min.js"
        data-gfspw="https://guardx.reviewability.com/popup-pixel/get/45047e1ca219820a0f147c3dfc8636f15ef9a234"
        strategy="afterInteractive"
        async
      />
    </div>
  )
}
