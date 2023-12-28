export const oktaConfig = {
    clientId: "0oae0mgk36jOBupa25d7",
    issuer:  'https://dev-51001416.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}