---
layout: page
title: News
---

{% for post in site.posts %}
{{ post.date | date: "%B %d, %Y" }}—<a href="{{ post.url | relative_url }}">{{ post.title }}</a>
{% endfor %}
