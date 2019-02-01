import React, { Component } from "react";
import Link from "./Link";
// import gql from "graphql-tag";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        description
        url
        createdAt
      }
    }
  }
`;

class LinkList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {/* there are 2{multiple} objects so will will map them */}
        {/* remember to provide key to differenciate  */}
        {// remember these 3loading,error,data
        ({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error{console.log(error)}</div>;

          const linksToRender = data.feed.links;
          return (
            <div>
              {linksToRender.map(link => (
                <Link key={link.id} link={link} />
              ))}
              {console.log(linksToRender)}
            </div>
          );
        }}
      </Query>
    );
  }
}
export default LinkList;
