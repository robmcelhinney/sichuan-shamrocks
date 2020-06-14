import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import { useTranslation } from "react-i18next"


const BlogIndexPage  = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('/sichuan-shamrocks/img/blog-index.jpg')`,
          backgroundPosition: `center center`,
          backgroundAttachment: `fixed`,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: '0.5rem 0 0 #d02126, -0.5rem 0 0 #d02126',
            backgroundColor: '#d02126',
            color: 'white',
            padding: '1rem',
          }}
        >
          {t('news.latestNews')}
        </h1>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <BlogRoll />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogIndexPage
