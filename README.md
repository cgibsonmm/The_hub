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
| Total | H | 18hrs?  | 0 | 0 |



## API Snippet

```JSON

  "kind": "youtube#searchListResponse",
  "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/_RVMLF-zWQ3W8zB_wX2kw1vu0ZU\"",
  "nextPageToken": "CBkQAA",
  "regionCode": "US",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 25
  },
```

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- return 3 apis
- filter and Render data on page
- Allow user to search for data via keyword


## React Component Hierarchy

App>Header>Nav>Links
   |          >Search
   >Main>viewport>ItemList>Item>ItemThumbnail>
   	>Sidebar>Links
   >Footer>Links


## Functional Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| Header | This will render the header include the nav | 
| Footer | This will render the footer include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.



## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

