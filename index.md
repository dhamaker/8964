---
title: 19 Personal Accounts from Xi'an
layout: default
description: 19 student stories about hearing about the June 4th crackdown.
---
<div id="narratives">
    <p id="question">Describe where you were, what you were doing, and how you felt when you first heard the news about Tienanmen Square?</p>

    <div id="stories">
        {% for story in site.stories %}
        <article>
            <h2>{{ story.title }}</h2>
            <p class="date">{{ site.story-created }}</p>
            {{ story.content }}
            <p class="location">{{ site.story-location }}</p>
        <article>
        {% endfor %}
    <div>
<div>