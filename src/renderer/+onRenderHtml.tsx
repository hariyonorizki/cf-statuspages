// https://vike.dev/onRenderHtml
import React from 'react'
import { renderToStream } from 'react-streaming/server'
import { escapeInject } from 'vike/server'

import { PageLayout } from './PageLayout'
import './_global.css'

import type { OnRenderHtmlAsync } from 'vike/types'

import { config } from '#src/config'

export const onRenderHtml: OnRenderHtmlAsync = async (pageContext) => {
  const { Page, pageProps } = pageContext

  const page = (
    <React.StrictMode>
      <PageLayout pageContext={pageContext}>
        <Page {...pageProps} />
      </PageLayout>
    </React.StrictMode>
  )

  // Streaming is optional and we can use renderToString() instead
  const stream = await renderToStream(page, { userAgent: pageContext.userAgent })

  return escapeInject`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${config.settings.title} - Kiki Creative Media</title>
        <link rel="icon" type="image/x-icon" href="https://cdn-hariyonorizki.eu.org/storageapis/public/favicon.ico">
        <script defer src="https://analytics.hariyonorizki.eu.org/script.js" data-website-id="6dca5910-b80d-49d9-88b1-7be16ea71544"></script>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
      </head>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>
  `
}
