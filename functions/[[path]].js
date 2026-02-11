export async function onRequest(context) {
  const url = new URL(context.request.url)
  const path = url.pathname

  // Map pretty URLs to real HTML files
  const rewrites = {
    "/about": "/html/core/about.html",
    "/deck": "/html/core/deck.html",
    "/edit-card": "/html/core/edit-card.html",
    "/edit-deck": "/html/core/edit-deck.html",
    "/features": "/html/core/features.html",
    "/flashcards": "/html/core/flashcards.html",
    "/stats": "/html/core/stats.html",
    "/study": "/html/core/study.html",
    "/mit-license": "/html/legal/license.html",
    "/privacy": "/html/legal/privacy.html",
    "/tos": "/html/legal/tos.html",
    "/changelog": "/html/resources/changelog.html",
    "/devdocument": "/html/resources/devdocumentation.html",
    "/documentation": "/html/resources/documentation.html",
    "/feedback": "/html/resources/feedback.html",
    "/roadmap": "/html/resources/roadmap.html",
    "/websites": "/html/resources/websites.html"
  }

  // If the path matches a rewrite, serve the file
  if (rewrites[path]) {
    return context.env.ASSETS.fetch(
      new Request(url.origin + rewrites[path], context.request)
    )
  }

  // Otherwise serve normally
  return context.next()
}
