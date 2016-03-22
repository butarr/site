# SITE

> New website

## How to install

1 - Install nodejs based on your OS;
2 - Install gulp;
3 - Run `npm install` in project folder;
4 - Run the local server using `gulp` or `npm start` commands;
5 - Be happy ;)


## Schemas
### Which one to choose?

1. Columnists
> Person: https://schema.org/Person
    name: https://schema.org/name
    e-mail: https://schema.org/email
    mini-bio: https://schema.org/jobTitle
    profile-image: https://schema.org/image
    link to wiki: https://schema.org/sameAs


2. Opinion
> Blog Post: https://schema.org/BlogPosting
    title: https://schema.org/headline
    eye: https://schema.org/about
    date published: https://schema.org/datePublished
    date modified: https://schema.org/dateModified
    author: https://schema.org/author
    body: https://schema.org/articleBody
    section: https://schema.org/articleSection
    description: https://schema.org/description


3. News
> https://schema.org/NewsArticle
    title: https://schema.org/headline
    hat: https://schema.org/about
    support line: https://schema.org/description
    date: https://schema.org/dateline
    data published: https://schema.org/datePublished
    data modified: https://schema.org/dateModified
    cover: https://schema.org/image


4. Navigation/Menu
> http://schema.org/SiteNavigationElement
    link: http://schema.org/url
    name: http://schema.org/name

6. BreadCrumbs
> http://schema.org/BreadcrumbList
    Item list: http://schema.org/ListItem
        item: http://schema.org/itemListElement
        title: http://schema.org/name
        index: http://schema.org/position



Tips:
- Do you have more than one property?
> You can use <meta> tag or add an inline property: itemprop="name headline"

- Where can I check my schemas?
> (google)[https://developers.google.com/structured-data/testing-tool/]

- Problems with mainEntityOfPage?
> Don't worry. The community still talk about this one, if you have curiosity, take a look on (that)[https://github.com/schemaorg/schemaorg/issues/301]
