---
layout: layouts/blog
pagination:
  data: collections.blogTags
  size: 1
  alias: tag
eleventyComputed:
  subtitle: "All posts tagged with &ldquo;{{tag}}&rdquo;"
permalink: "/blog/tag/{{tag | slugify}}/"
---
