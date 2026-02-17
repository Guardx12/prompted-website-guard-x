"use client"

import { useEffect } from "react"

export function PopupRatingWidget() {
  useEffect(() => {
    // Guard against duplicate script loads
    if (document.getElementById("popup-rating-widget-script")) {
      return
    }

    const script = document.createElement("script")
    script.id = "popup-rating-widget-script"
    script.src = "https://widget.reviewability.com/js/popupWidget.min.js"
    script.setAttribute(
      "data-gfspw",
      "https://guardx.reviewability.com/popup-pixel/get/45047e1ca219820a0f147c3dfc8636f15ef9a234"
    )
    script.async = true

    document.body.appendChild(script)
  }, [])

  return <div id="popup-rating-widget" />
}

export default PopupRatingWidget
