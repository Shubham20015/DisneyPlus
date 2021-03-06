import styled from "styled-components";

function Login(props) {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>GET IT ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  margin-bottom: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto 2vw;
  transition: opacity 0.2s;
  transition-timing-function: ease-out; */
`;

const CTALogoOne = styled.img`
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
  margin-bottom: 12px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  display: block;
  width: 100%;
  /* display: inline-block
  vertical-align: bottom; */
  margin-bottom: 20px;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  padding: 16.5px 0;
  font-size: 18px;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
    cursor: pointer;
  }
`;

const Description = styled.div`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11.5px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  margin: 0 0 24px;
`;

export default Login;
