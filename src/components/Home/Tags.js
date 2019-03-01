import React from 'react';
import agent from '../../agent';
import { Link } from 'react-router-dom';

const Tags = props => {
  const tags = props.tags;
  if (tags) {
    return (
      <div className="tag-list">
        {
          tags.map(tag => {
            const handleClick = ev => {
              ev.preventDefault();
              props.onClickTag(tag, page => agent.Articles.byTag(tag, page), agent.Articles.byTag(tag));
            };

            return (
              <Link
                to=""
                className="tag-default tag-pill"
                key={tag}
                onClick={handleClick}>
                {tag}
              </Link>
            );
          })
        }
      </div>
    );
  } else {
    return (
      <div>Loading Tags...</div>
    );
  }
};

export default Tags;
