import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <ul className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <li>
              <Link
                key={tag}
                style={{ textDecoration: "none" }}
                to={`/tags/${_.kebabCase(tag)}`}
              >
                {tag}
              </Link>
            </li>
          ))}
      </ul>
    );
  }
}

export default PostTags;
