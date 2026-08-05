# Component Composition
*Example copied from a blog post by [Robin Wieruch](https://www.robinwieruch.de/react-component-composition/).*
## Component Composition as alternative for prop drilling 
*From the [React Website](https://react.dev/learn/passing-data-deeply-with-context#use-cases-for-context).*

If you pass some data through many layers of intermediate components that don't use that data (and only pass it further down), this often means that you forgot to extract some components along the way. For example, maybe you pass data props like `posts` to visual components that use them directly, like `<Layout posts={posts} />`. Instead, make `Layout` take `children` as a prop, and render `<Layout><Posts posts={posts} /></Layout>`. This reduces the number of layers between te component specifying the data and the one that needs it.