# The Hub

### The Hub is your place for social media information. The single place needed to view all of your most important media content in one central location.

####Using Youtube, Twitter, and Reddit APIs the app will gather a hub of tech related information. The Hub provides you with all of your nessasary information all in one place. Users will be able to search and filter data based off of their filter prfrences.


| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic Styling | H | 3hrs| 0 | 0 |
| Working with API | H | 4hrs| 0 | 0 |
| Building Component Tree | H | 2hrs | 0 | 0 |
| Working page updates | H | 2.5 hrs | 0 | 0 |
| Writing Filter Code | H | 2hrs | 0 | 0 |
| MK2 styling | H | 4hrs | 0 | 0 |
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

### MVP/PostMVP

- Be able to allow users to save prefrences based in local storage
- Add a news api to allow for news and social feed
- add react-spring and react overdrive for animations and better styling




#### MVP EXAMPLE
- display styled rretured Stories to a landing page
- filter for diffrent stories 
- Allow user to search for data via keyword


## React Component Hierarchy
````
App>Header>Nav>Links
   |          >Search
   |
   >Main>viewport>StoryList>Story>StoryText>StoryImage>
   |	>Sidebar>Links
   |
   >Footer>Links
   ````


## Functional Components
Story List
 - Houses all retured items in a list
Search input
 - takes user input and will fire new requests for data, this response will change the story list to reflect the changes.


## Additional Libraries
- font-awesome
- Matrilize
- Axios
- react-spring
- react overdrive


## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

