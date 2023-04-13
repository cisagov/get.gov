---
layout: layouts/blog
title: Blog
permalink: "/blog/{%if pagination.pageNumber > 0 %}{{pagination.pageNumber | plus:1 }}/{% endif %}"
pagination:
  data: collections.posts
  size: 8
  alias: posts
  reverse: true
---
