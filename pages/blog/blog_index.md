---
layout: layouts/blog
title: Blog
subtitle: What's happening around .gov 
permalink: "/blog/{%if pagination.pageNumber > 0 %}{{pagination.pageNumber | plus:1 }}/{% endif %}"
excerpt: What's happening around .gov
pagination:
  data: collections.posts
  size: 8
  alias: posts
  reverse: true
---
