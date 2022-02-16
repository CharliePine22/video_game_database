import OAuth2Login from 'react-simple-oauth2-login';

const SteamAuth = () => {
 
  const onSuccess = response => console.log(response);
  const onFailure = response => console.error(response);

  return <OAuth2Login
  authorizationUrl="https://steamcommunity.com/oauth/login"
  responseType="token"
  clientId="a85a1023a2992987da3a"
  redirectUri="http://localhost:3000"
  onSuccess={onSuccess}
  onFailure={onFailure}/>

  
};

export default SteamAuth;
