---
layout: layouts/blog
pagination:
  data: collections.blogTags
  size: 1
  alias: tag
eleventyComputed:
  title: "{{tag}}"
permalink: /tag/{{tag | slugify}}/
---

<!-- <div class="grid-container"> -->
<!--   <h1> All blog posts related to "{{tag}}"</h1> -->
<!--   <ul class="usa-list usa-list--unstyled"> -->
<!--     {% assign taglist = collections[tag] %} -->
<!--     {%- for post in taglist reversed %} -->
<!--       {% include "collection-item.html" post: post %} -->
<!--     {% endfor %} -->
<!--   </ul> -->
<!-- </div> -->
