import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { Main, theme } from '@styles';
import { fs } from 'gatsby'; // Assuming using fs-extra
const { colors } = theme;

const StyledPostContainer = styled(Main)`
 max-width: 1000px;
`;
const StyledPostHeader = styled.header`
 margin-bottom: 50px;
 .tag {
  margin-right: 10px;
 }
`;
const StyledPostContent = styled.div`
 margin-bottom: 100px;
 h1,
 h2,
 h3,
 h4,
 h5,
 h6 {
  margin: 2em 0 1em;
 }

 p {
  margin: 1em 0;
  line-height: 1.5;
  color: ${colors.lightSlate};
 }
`;

const PostTemplate = ({ location }) => {
  const pageDataPath = process.env.GATSBY_PAGE_DATA_PATH || '/path/to/page-data.json'; // Use environment variable for path

  const [pageData, setPageData] = useState(null); // Use state to handle asynchronous data fetching

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fs.readJson(pageDataPath);
        setPageData(data);
      } catch (error) {
        console.error('Error fetching page data:', error);
      }
    };

    fetchData();
  }, [pageDataPath]);

  if (!pageData) return <div>Loading...</div>; // Handle loading state

  const { title, date, tags, ...otherData } = pageData;

  return (
    <Layout location={location}>
      <Helmet>
        <title>{title} | Chandrika Deb</title>
        <link rel="canonical" href="https://chandrikadeb7.github.io/pensieve" />
      </Helmet>

      <StyledPostContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/pensieve">All memories</Link>
        </span>

        <StyledPostHeader>
          <h1 className="medium-title">{title}</h1>
          <p className="subtitle">
            <time>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>&nbsp;&mdash;&nbsp;</span>
            {tags && tags.length > 0 && (
              <>
                {tags.map((tag, i) => (
                  <Link key={i} to={`/pensieve/tags/${kebabCase(tag)}/`} className="tag">
                    #{tag}
                  </Link>
                ))}
              </>
            )}
          </p>
        </StyledPostHeader>

        <StyledPostContent>
          {/* You can use otherData here if needed for additional content */}
          {otherData.content && <div dangerouslySetInnerHTML={{ __html: otherData.content }} />}
        </StyledPostContent>
      </StyledPostContainer>
    </Layout>
  );
};

export default PostTemplate;

PostTemplate.propTypes = {
  location: PropTypes.object,
};
