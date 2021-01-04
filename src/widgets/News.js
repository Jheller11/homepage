
// RSS NY Times Home
import React, { useState } from 'react'
let Parser = require('rss-parser')
let parser = new Parser()

function News () {
  const [articles, setArticles] = useState(0)
  const load = async () => {
    const feed = await parser.parseURL('https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml')
    setArticles(feed.items)
  }
  load()

  return (
    <div>
       <ul>
        {articles.length > 0 ? articles.map(article => {
          return <li>{article.link}</li>
        }) :
        <div>nothing</div>}
      </ul>

     </div>
  )
}

export default News
