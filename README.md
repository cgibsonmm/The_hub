# The Hub

### The Hub is your place for social media information. The single place needed to view all of your most important media content in one central location.

#### Using Youtube, Twitter, and Reddit APIs the app will gather a hub of tech related information. The Hub provides you with all of your nessasary information all in one place. Users will be able to search and filter data based off of their filter prfrences.


| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic Styling | H | 4hrs| 0 | 0 |
| Working with API | H | 4hrs| 0 | 0 |
| Building Component Tree | H | 3hrs | 0 | 0 |
| Working page updates | H | 3 hrs | 0 | 0 |
| Writing Filter Code | H | 3hrs | 0 | 0 |
| MK2 styling | H | 4hrs | 0 | 0 |
| Basic animations | H | 3hrs | 0 | 0 |
| Total | H | 24hrs | 0 | 0 |



## API Snippet

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

![Image of Full Site](https://res.cloudinary.com/drdk7a56d/image/upload/v1569940125/Screen_Shot_2019-10-01_at_9.10.47_AM_ysghni.png)

![Image of Mobile Site](https://res.cloudinary.com/drdk7a56d/image/upload/v1569940129/Screen_Shot_2019-10-01_at_9.10.59_AM_l2s7n1.png)

### MVP/PostMVP

- Be able to allow users to save prefrences based in local storage
- Add a news api to allow for news and social feed
- add react-spring and react overdrive for animations and better styling




#### MVP EXAMPLE
- display styled rretured Stories to a landing page
- filter for diffrent stories 
- Allow user to search for data via keyword


## React Component Hierarchy


![Component Tree](https://res.cloudinary.com/drdk7a56d/image/upload/v1569940131/Screen_Shot_2019-10-01_at_10.11.35_AM_aibmvb.png)



## Functional Components
Story List
 - Houses all retured items in a list
Search input
 - takes user input and will fire new requests for data, this response will change the story list to reflect the changes.


## Additional Libraries
- font-awesome
- Materialize
- Axios
- react-spring
- react overdrive

