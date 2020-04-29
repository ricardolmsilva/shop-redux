import React from 'react'

import { Container } from './styles'

export default function AboutProject() {
  return (
    <Container>
      <h1>About Project</h1>
      <p>
        I decided to build that project as a way to improve my knowledge with
        react and redux but mostly to learn redux-saga, technology that I never
        worked before.
      </p>
      <p>
        At the beginning of that project was confusing to understand why should
        I use redux sagas with all of the boilerplate involved, but now I
        understand that is good to use sagas as a way to separate some logic
        from reducers making the code cleaner or when is require some kinds of
        stuff between actions and reducers as API calls.
      </p>
      <p>
        In the process of development i also had the opportunity to meet and
        work with some new libraries with names json-server, react-toastify,
        immer and react-responsive. Also I learned about store subscription in
        redux that I used to save cart state in the local storage of the client.
      </p>
    </Container>
  )
}
