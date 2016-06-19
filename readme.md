


#### getting started with react-native

This project was built with:

- `react-native init awesome_000`, which fetches most dependencies.

- installed Genymotion simulator to,  `react-native run-android`

but got massive errors.  First had to go into /android/build.gradle and change at line-81 build tools version to 23.03 because that's the version I have.  Then have to remember to `react-native start` before `react-native run-android`.

Then it worked, and I got my hello message running on the simulator.

Then I got to the unwelcome discovery that none of my programmatic svg techniques will work immediately with react-native.  Some trips to stackoverflow and such finding out about "webview", the difference between the react-native dom functions like "view" as against web equivalents like "div" or "h1".

I did get my inline CS functional markup style working (JSX-free style which uses all inline pure JS markup, eg check my CS/SVG/React work on Github) style, so that was nice.


#### next steps, goals

To make more of these starter apps and:

- get a WebGL canvas happening to develop games
- Get some concurrency happening to take advantage of multiple processor capabilities.
- People are working to bring SVG into react-native and this is maybe coming along, so keep aprised of the situation there and be ready to exploit the opportunity.
- continue working with React-Studio/pure Java based, check out performance & optimisation contrasts with react-native
