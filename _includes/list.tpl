{% for post in list %}
    <article class="post">
        <header class="post-hd">
            <h1 class="post-title"><a href="{{ post.url }}" target="_blank">{{ post.title }}</a></h1>
            <div class="post-meta">日期：{{ page.date | date: "%Y-%m-%d" }}分类：{{ page.category }}</div>
        </header>
    </article>
{% endfor %}
{% if list == null %}
<article class="post">
    <p>该分类下还没有文章</p>
</article>
{% endif %}