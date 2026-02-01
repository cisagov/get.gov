---
layout: layouts/blog
title: Blog
show_page_header: true
banner_img: _img/blog.svg
banner_img_alt: ""
subtitle: What's happening around .gov 
permalink: "/blog/{%if pagination.pageNumber > 0 %}{{pagination.pageNumber | plus:1 }}/{% endif %}"
excerpt: Blog posts from the .gov team
pagination:
  data: collections.posts
  size: 8
  alias: posts
  reverse: true
---
