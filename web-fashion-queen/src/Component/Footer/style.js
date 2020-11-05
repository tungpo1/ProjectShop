import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #3e3c3c;
  padding-bottom: 100px;

  > div {
    padding-top: 80px;
    > div {
      h5 {
        margin: 47px 0 36px 6px;
        color: #fff;
        font-size: 24px;
      }
      span,
      h6 {
        color: #bdbdbd;
        font-size: 18px;
      }
      a {
        font-weight: 700;
        color: #bdbdbd;
        // margin-right: 10px;
        letter-spacing: 1px;
        margin-bottom: 10px;
        font-size: 18px;
      }
      button {
        border: none;
        padding: 1px 6px;

        margin-right: 3px;
        &:focus {
          outline: none;
        }
      }
      .contact {
        img {
          float: left;
        }
        p {
          color: #bdbdbd;
          font-size: 12px;
        }
      }
    }
  }
`;
