# [The Hub](https://the-hub.surge.sh/)

### The Hub is your place for social media information. The single place needed to view all of your most important media content in one central location.

##### Using Youtube, Twitter, and Reddit APIs the app will gather a hub of tech related information. The Hub provides you with all of your nessasary information all in one place. Users will be able to search and filter data based off of their filter prfrences.



### Time To Complete

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic Styling | H | 4hrs| 8 | 8 |
| Working with API | H | 4hrs| 5 | 5 |
| Building Component Tree | H | 3hrs | 3 | 3 |
| Working page updates | H | 3 hrs | 2 | 2 |
| Writing Filter Code | H | 3hrs | 3 | 3 |
| MK2 styling | H | 4hrs | 2 | 3 |
| Basic animations | H | 3hrs | 1 | 1 |
| Total | H | 24hrs | 25 | 25 |




### Wire Frame

![Image of Full Site](https://res.cloudinary.com/drdk7a56d/image/upload/v1569940125/Screen_Shot_2019-10-01_at_9.10.47_AM_ysghni.png)

![Image of Mobile Site](https://res.cloudinary.com/drdk7a56d/image/upload/v1569940129/Screen_Shot_2019-10-01_at_9.10.59_AM_l2s7n1.png)

### MVP
- the app will display a list of stories to a landing page based on API return data
- the user will be able to filter and search for diffrent typs of social media such as videos, tweet or reddit posts
- the app will have a mobile first responsive design


### Post MVP
- Add a news api to allow for news and social feed
- Be able to allow users to save prefrences based in local storage
- Add react-spring and react overdrive for animations and better styling


### React Component Hierarchy


![Component Tree](https://res.cloudinary.com/drdk7a56d/image/upload/v1569940131/Screen_Shot_2019-10-01_at_10.11.35_AM_aibmvb.png)



### API Snippet

```JSON
{
  "kind": "youtube#searchListResponse",
  "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/_RVMLF-zWQ3W8zB_wX2kw1vu0ZU\"",
  "nextPageToken": "CBkQAA",
  "regionCode": "US",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 25
  },
  
```

### Functional Components

| Component | Description | 
| --- | :---: |  
| Header | Houses nav and search |
| Search Input | takes user input and will fire new requests for data, this response will change the story list to reflect the changes |
| Link | Misc links to move through the site or to outside site|
| Story List | A list of Stories |
| Story | Either a Reddit, Youtube, or twitter post |
| Story Image | Iframe or image from story |
| Story Data | Hold text from the story |

### Additional Libraries
- font-awesome
- Materialize
- Axios
- react-spring
- react overdrive



### Change Log
- Removed twitter from project
