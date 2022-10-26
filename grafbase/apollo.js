const httpLink = new HttpLink({
  uri: "https://grapbase-hamu-ai.grafbase.app/graphql",
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_GRAFBASE_API_KEY,
  },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// Query
export const Get_Table = gql`
  query GET {
    episodeCollection(first: 2) {
      edges {
        node {
          id
          title
          description
          episodeCover
          episodeNumber
        }
      }
    }
  }
`;

// mutation

const EPISODE = gql`
  mutation episode(
    $title: String!
    $description: String!
    $episodeCover: String!
    $episodeNumber: Int!
  ) {
    episodeCreate(
      input: {
        title: $title
        description: $description
        episodeCover: $episodeCover
        episodeNumber: $episodeNumber
      }
    ) {
      episode {
        id
        title
        description
        episodeCover
        episodeNumber
      }
    }
  }
`;
