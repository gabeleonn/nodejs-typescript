# Initial Project for Node.js with Typescript

This is just a simple boilerplate for node.js.


## Commands

To install the packages:
```sh
yarn
```

To start developer mode:
```sh
yarn start:dev
```

To start developer mode with Debug (VSCode Only):
```sh
yarn start:debug
```

To build:
```sh
yarn build
```

To start production:
```sh
yarn start
```


## TESTING
Always follow this sample for testing

```
//1. unit under test
describe.skip('Customer classifier', () => {
  //2. scenario and 3. expectation
  test('When customer spent more than 500$, should be classified as premium', () => {
      //Arrange
      const customerToClassify = {spent:505, joined: new Date(), id:1}
      const DBStub = sinon.stub(dataAccess, 'getCustomer')
          .reply({id:1, classification: 'regular'});

      //Act
      const receivedClassification = customerClassifier.classifyCustomer(customerToClassify);

      //Assert
      expect(receivedClassification).toMatch('premium');
  });
});
```

> Meaning
The 1st A - Arrange: All the setup code to bring the system to the scenario the test aims to simulate. This might include instantiating the unit under test constructor, adding DB records, mocking/stubbing on objects and any other preparation code

The 2nd A - Act: Execute the unit under test. Usually 1 line of code

The 3rd A - Assert: Ensure that the received value satisfies the expectation. Usually 1 line of code
