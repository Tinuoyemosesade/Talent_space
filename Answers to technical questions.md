## Technical questions

#### 1. How long did you spend on the technical test? What would you add to your solution if you had more time? If you didn't spend much time on the technical test then use this as an opportunity to explain what you would add.

-   didn#t take long. about 3 hours.

Improvements i will make if i had more time:

-   move the secrets (username, password) to the `cypres.env` file
-   add a tool for test case management, maybe [Cypress dashboard] (https://www.cypress.io/dashboard/)

#### 2. What do you think is the most interesting trend in test automation?

-   UI Paths(Computer Vision) for [test automation](https://www.uipath.com/product/test-suite)
-   Continous Delivery --> Continuous Automation: https://www.uipath.com/resources/automation-whitepapers/continuous-automation

#### 3. How would you approach adding automated testing to an existing (web) application with no existing E2E tests? Have you ever had to do this?

Yes. In the past, I was responsible for setting up the testing infrastrucutre form scratch. Our app was a React application and had a very rich data interface. The main challenge adding id's to generic components written in React.

The steps I followed in order to make the project a success were:

-   1.  Define the test cases with the dev team
-   2.  Choose and end to end tool: Cypress
-   3.  Discussed test strategies with the team : decided on using id's and data-cy as best practices indicates in cypress documentation
-   4.  Write tests (add missing selectors)
-   5.  Refactoring (for example separate login and logout as Cypress Commands)
-   6.  Add tests to the CI / CD pipeline --> in our case it was GitHub [Cypress dashboard] (https://www.cypress.io/dashboard/)
