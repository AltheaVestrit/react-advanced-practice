# React - Context API
*Example project from [the Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-managing-state-with-the-context-api).*
## Use cases for Context
*From the [React Website](https://react.dev/learn/passing-data-deeply-with-context#use-cases-for-context).*
- **Theming**: If your app lets the user change its appearance (e.g. dark mode), you can put a context provider at the top of your app, and use that context in components that need to adjust their visual look.
- **Current account**: Many components might need to know the currently logged in user. Putting it in context makes it convenient to read it anywhere in the tree. Some apps also let you operate multiple accounts at the same time (e.g. to leave a comment as a different user). In those cases, it can be convenient to wrap a part of the UI into a nested context provider with a different current account value.
- **Routing**: Most routing solutions use context internally to hold the current route. This is how every link "knows" whether it's active or not. If you build your own router, you might want to do it too.
- **Managing state**: As your app grows, you might end up with a lot of state closer to the top of your app. Many distant components below may want to change it. It is common to use a reducer together with context to manage complex state and pass it down to distant components without too much hassle.

![Use context from one context provider even in distant children](image.png)