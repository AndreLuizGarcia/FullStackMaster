# FullStackMaster

FullStackMaster Course

## Module 3 - Test Automation
### Introduction


- [Wiki - Test_automation](https://en.wikipedia.org/wiki/Test_automation)

     "Test automation is the use of special software (separate from the software being tested) to control the execution of tests and the comparison of actual outcomes with predicted outcomes."

- [Software Testing Help](https://www.softwaretestinghelp.com/the-difference-between-unit-integration-and-functional-testing/)

  "Unit testing means testing individual modules of an application in isolation (without any interaction with dependencies) to confirm that the code is doing things right."

  "Integration testing means checking if different modules are working fine when combined together as a group."

  "Functional testing means testing a slice of functionality in the system (may interact with dependencies) to confirm that the code is doing the right things."


![](https://cdn.softwaretestinghelp.com/wp-content/qa/uploads/2016/12/image-result-for-unit-testing-vs-functional-testin.png)

"To optimize the return on investment (ROI), your code base should have as many unit tests as possible, fewer integration tests and the least number of functional tests."

## Let's go code

The folder "negocios" have a little example of an unit test. The files of test is those witch end with ".test.js".

So, in the "projeto testes" folder start the project with:

```
npm init
```

To do this tests I use "Mocha" like a test runner and "Chai" to compair the values.

To install them and save to use just in a developer time, run those command in your terminal:

```
npm install --save-dev mocha

npm install --save-dev chai
```

You can see more about them here:

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)

After all ready to run your test, in windows, just run this command in your terminal:

```
node_modules\.bin\mocha --reporter spec **/*.test.js
````

In this project was used [Sinon](https://sinonjs.org/) to make the stubs tests.
The stub test it's basically make a fake method to test ours methods.

To install Sinon just run in your terminal the follow command:

```
npm install --save-dev sinon@2.4.1
```
