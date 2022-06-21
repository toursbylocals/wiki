# Overview

This guide is destined to explain how new developers obtain the right access to the internal system and third-party through tokens.

For that, the developer needs to generate a token from GitHub and MongoDB.

## Private Access

### Github Token

#### How to generate a token

1. [Verify your email address](https://docs.github.com/en/github/getting-started-with-github/verifying-your-email-address), if it hasn't been verified yet.
1. In the upper-right corner of Github page, click your profile photo, then click Settings.

1. In the left sidebar, click  Developer settings.
1. In the left sidebar, click Personal access tokens.

1. Click Generate new token.

1. Give your token a descriptive name.

1. To give your token an expiration, select the Expiration drop-down menu, then click a default or use the calendar picker.

1. Select the scopes, or permissions, you'd like to grant this token. To use your token to access repositories from the command line, select repo.

1. Click Generate token.

1. Warning: Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoded them into your programs.

1. To use your token to authenticate to an organization that uses SAML single sign-on, authorize the token. For more information, see "[Authorizing a personal access token for use with SAML single sign-on](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" in the GitHub Enterprise Cloud documentation.

### MongoDB Token

In this guide, you will retrieve your database deployment's connection string.

- Whitelist your IP address to allow access to your Atlas cluster.
- Locate your connection string and copy it.

#### How to generate a token

[Get Connection String](https://www.mongodb.com/docs/guides/atlas/connection-string/?_ga=2.26059581.148483099.1655845452-1058474106.1651701693)

#### What You'll Need

- A MongoDB account. See [Sign Up for a MongoDB Account](https://www.mongodb.com/docs/guides/atlas/account/#std-label-create-and-manage-account).
- An Atlas cluster. See [Create a New Cluster](https://docs.atlas.mongodb.com/tutorial/create-new-cluster/).
- A MongoDB user. See [Configure MongoDB Users](https://docs.atlas.mongodb.com/security-add-mongodb-users/) in the Atlas documentation.

#### Procedure

1. Navigate to the [Database Deployments](https://cloud.mongodb.com/v2) page for your project.

1. Click the Connect button.

1. Click the Connect button on the cluster management panel.

1. Copy the connection string.

1. Open th MongoDB Compass and past the connection string int he `URI` field and connect.

### ToursByLocals Private Package

After the private `GitHub` token is generated, the developer can use the token to access the ToursByLocals packages.

#### How to use the token

1. Open the Visual Studio Code editor.

2. Open the project `MyTripJournal`.

3. In the project, go to the root of the project.

4. Create a file `.npmrc` in the root of the project.

5. Add the following line to the file:

```jsx
@toursbylocals:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${token}

```

6. Insert the token in the `_authToken` field. After that, delete `${token}` and replace it with the token you generated.

7. Open the terminal and type the following line:

```jsx
yarn install
```

8. Wait for the install to complete.

9. Open the terminal and type the following line:

```jsx
yarn dev
```

### ToursByLocals Private Database

After the private `GitHub` token is generated, the developer can use the token to access the ToursByLocals database.

#### How to use the token

1. Open the Visual Studio Code editor.

2. Open the project `MyTripJournal`.

3. In the project, go to the root of the project.

4. Create a file `.env` in the root of the project.

5. Add the following line to the file:

```jsx
MONGO_CLOUD_URI=mongodb+srv:${tokenFromMongodb}
APP_SECRET=tblsupersecret
```

6. Insert the token in the `mongodb+srv:` field. After that, delete `${tokenFromMongodb}` and replace it with the token you generated.

7. Save the file.

8. Open the terminal and install the `dotenv package` with the following line:

```jsx
npm install --save-dev dotenv
```

9. Open the terminal and type the following line:

```jsx
yarn install
```

Run the project:

```jsx
yarn dev
```