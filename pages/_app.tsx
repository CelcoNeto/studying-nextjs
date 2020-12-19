import ThemeContainer from '../contexts/theme/ThemeContainer';

const MyApp = ({ Component, pageProps }) => (
  <ThemeContainer>
    <Component {...pageProps} />
  </ThemeContainer>
);

export default MyApp;
