import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;

  header {
    position: fixed;
    width: 100%;
    z-index: 99;
  }

  main {
    width: 100%;
    max-width: 1020px;
    margin: 0 auto;
    padding: 120px 20px 20px;

    @media (max-width: 768px) {
      padding: 100px 20px 20px;
    }
  }
`
