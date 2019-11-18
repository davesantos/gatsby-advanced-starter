import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "src/layout";
import UserInfo from "src/components/UserInfo/UserInfo";
import PostTags from "src/components/PostTags/PostTags";
import SocialLinks from "src/components/SocialLinks/SocialLinks";
import SEO from "src/components/SEO";
import Footer from "src/components/Footer";
import config from "data/SiteConfig";
import "./b16-tomorrow-dark.css";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <article>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />

          <div>
            <h1>{post.title}</h1>

            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />

            <PostTags tags={post.tags} />
            <SocialLinks postPath={slug} postNode={postNode} />

            <UserInfo config={config} />

          </div>

        </article>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
