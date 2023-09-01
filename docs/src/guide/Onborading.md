# Overview

The onboarding guide is a collection of standard steps to provide a clear and simple way to start as a new team member.

## Development Environment

This guide is destined to introduce the new developers to the ToursByLocals development environment.

For that, the software **Visual Studio Code**, **Xcode**, **MongoDB Compass**, **Figma** and **Slack** are needed.

### [Visual Studio Code](https://go.microsoft.com/fwlink/?LinkID=534106)

Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.

#### How to install

1. [Download Visual Studio Code](https://go.microsoft.com/fwlink/?LinkID=534106) for macOS.
1. Install Visual Studio Code with a double-click on the .dmg file to open the disk image within the macOS Finder.
1. Drag the Visual Studio Code application to your **Applications** folder.
1. Eject the disk image.
1. From the **Applications** folder, double-click on the Visual Studio Code icon to start the application.

### [Xcode](https://developer.apple.com/xcode/)

Xcode is Apple's integrated development environment for macOS, used to develop software for macOS, iOS, iPad, watchOS, and tvOS

#### How to install

1. [Download Xcode](https://developer.apple.com/xcode/) on App Store
1. Search for Xcode [#](https://developer.apple.com/xcode/)
1. Click Install or Update.

### [MongoDB Compass](https://www.mongodb.com/download-center/compass?tck=docs_compass)

MongoDB Compass is a powerful GUI for querying, aggregating, and analyzing your MongoDB data in a visual environment.

Compass is free to use and source available, and can be run on macOS, Windows, and Linux.

#### How to install

1. [Download the latest version of ‘MongoDB Compass for macOS’](https://www.mongodb.com/download-center/compass?tck=docs_compass). The MongoDB Compass installer is a .dmg disk image.
1. Install Compass with a double-click on the .dmg file to open the disk image within the macOS Finder.
1. Drag the MongoDB Compass application to your **Applications** folder.
1. Eject the disk image.
1. From the **Applications** folder, double-click on the Compass icon to start the application.

### [Figma](https://www.figma.com/downloads/)

Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows. The Figma mobile app for Android and iOS allows viewing and interaction with Figma prototypes on real-time mobile devices.

#### How to install

1. [Download Figma Desktop App](https://www.figma.com/downloads/)
1. Log in to your account and open the Figma desktop app.
1. Request the Figma access to UI/UX Team.

### [Slack](https://slack.com/downloads/mac)

Slack is a messaging program designed specifically for the **workplace**. Slack includes persistent chat rooms organized by topic, private groups, and direct messaging.

#### How to Install

1. [Download Slack Desktop App](https://slack.com/downloads/mac)
1. Install Slack with a double-click on the .dmg file to open the disk image within the macOS Finder.
1. Drag the Slack Compass application to your **Applications** folder.
1. Eject the disk image.
1. From the **Applications** folder, double-click on the Slack icon to start the application.
1. Sign in to your account.
1. Select the workspace “ToursByLocals”.

# Overview

This guide is destined to explain how new developers obtain the right access to the internal system and third-party through tokens.

For that, the developer needs to generate a token from **GitHub** and MongoDB.

## Private Registry

### GitHub Token

#### How to generate a token

1. [Verify your email address](https://docs.github.com/en/github/getting-started-with-github/verifying-your-email-address), if it hasn't been verified yet.
1. In the upper-right corner of **GitHub** page, click your profile photo, then click Settings.

1. In the left sidebar, click Developer settings.
1. In the left sidebar, click Personal access tokens.

1. Click Generate new token.

1. Give your token a descriptive name.

1. To give your token an expiration, select the Expiration drop-down menu, then click a default or use the calendar picker.

1. Select the scopes, or permissions, you'd like to grant this token. To use your token to access repositories from the command line, select repo.

1. Click Generate token.

1. Warning: Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoded them into your programs.

1. To use your token to authenticate to an organization that uses SAML single sign-on, authorize the token. For more information, see "[Authorizing a personal access token for use with SAML single sign-on](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" in the **GitHub** Enterprise Cloud documentation.

### MongoDB

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

1. Open th MongoDB Compass and past the connection string int he **URI** field and **connect**.

### ToursByLocals Private Package

After the private **GitHub** token is generated, the developer can use the token to access the ToursByLocals packages.

#### How to use the token

1. Open the Visual Studio Code editor.

2. Open the project **MyTripJournal**.

3. In the project, go to the root of the project.

4. Create a file **.npmrc** in the root of the project.

5. Add the following line to the file:

```jsx
@toursbylocals:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${token}

```

6. Insert the token in the **\_authToken** field. After that, delete **${token}** and replace it with the token you generated.

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

After the private **GitHub** token is generated, the developer can use the token to access the ToursByLocals database.

#### How to use the token

1. Open the Visual Studio Code editor.

2. Open the project **MyTripJournal**.

3. In the project, go to the root of the project.

4. Create a file **.env** in the root of the project.

5. Add the following line to the file:

```jsx
MONGO_CLOUD_URI=mongodb+srv:${tokenFromMongodb}
APP_SECRET=tblsupersecret
```

NeedToCheck

6. Insert the token in the **mongodb+srv:** field. After that, delete **${tokenFromMongodb}** and replace it with the token you generated.

7. Save the file.

8. Open the terminal and install the **dotenv package** with the following line:

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

## New Member

### Welcome to the ToursByLocals Team

The introduction to the new team member is a collection of standard steps to provide a clear and simple way to start as a new team member.

#### How to introduce new members

1. Introduce the new hire to the company over Slack.

1. Share manuals or provide training for role-critical tools.

1. Share access to company Wikis and technical documentation.

1. Team lunch or a team call with an engaging ice breaker for remote teams.

1. Share the itinerary for the rest of the week, including regular team meetings.

## Internal Access

### Accounts

This guide provides information on how to have access to the internal system.

## Invitations

If an invitee does not accept the invitation within seven days, the pending invitation expires automatically. After expiration, **GitHub** will no longer bill you for the pending invitation.

If your organization requires members to use two-factor authentication, users that you invite must enable two-factor authentication before accepting the invitation. For more information, see "[Requiring two-factor authentication in your organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)" and "[Securing your account with two-factor authentication (2FA)](https://docs.github.com/en/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)."

---

### How to Invite a Member on **GitHub**

1. In the top right corner of **GitHub**.com, click your profile photo, then click Your organizations.

1. Click the name of your organization.

1. Under your organization name, click **People**.

1. On the **People tab**, click **Invite member**.

1. Type the username, full name, or **email** address of the person you want to invite and click **Invite**.

1. If the person you're inviting was an organization member within the last three months, choose whether to **restore** their privileges or start fresh, then click **Invite** and **reinstate** or **Invite** and start fresh.

1. If the person you're inviting has never been a member of the organization or if you cleared their privileges, choose an organization role for the user.

1. Optionally, add the user to teams in the organization.

1. Click **Send invitation**.

---

### How to Invite a Member on ZenHub

There are two ways to ensure your team members gain access to ZenHub:

1. Inviting team members via **email**.

2. Inviting team members by sharing a ZenHub Workspace invite link

#### How to Invite Via Email

1. Go to the **ZenHub** dashboard on **GitHub**.

1. Inviting team members via **email**

1. When viewing a Workspace, navigate to the sidebar navigation where you will see the **Invite your team** option.

1. Selecting the **Invite your team** option will open up a pop-up modal where you can enter your team member's **email** address\*\*.

---

#### How to Invite Via Link

1. Inviting your team by **sharing** an invite link to the **Workspace**.

1. Selecting the **Invite your team** option on the **Board** will open the invite pop-up modal where you can **copy** an invite link to share with members of your organization.

**Please note the following:**

1. If you and your team use **GitHub** with **ZenHub**, you must **first invite** your team members to your **GitHub** Organization**before inviting them to**ZenHub\*\*

1. Invite links to expire after **48 hours.**

#### My teammate received the invite, what do they need to do?

When your team member has received the invite, they can follow the link in the **email** to set up an account and join your workspace.

If you and your team use **GitHub** with **ZenHub**, they will need to connect their **GitHub** accounts. Make sure they have to write permissions to the repositories **ZenHub** is being used for (which is managed through the **GitHub** repo permission model), once authorized, they'll be able to see all of your **GitHub** Issues in **ZenHub**.

---

### How to Invite a Member on Slack

1. Open the **channel** you'd like to add people to.

1. Click **cluster** of profile pictures in the **top** **right**.

1. Click **Add** **people**.

1. To add a few people, search for the members you'd like to add by **name**, **email** **address**, or **user** **group** and **select** **them**. To add a large group, paste the list of **names** or **email** **addresses** into the field.

1. When you're done, click **Add**.

---

### How to Invite a Member to the Slack Workspace

1. From your **desktop**, click your **workspace** name in the top left.

1. Select **Invite** people to **ToursByLocals** from the menu.

1. Enter the **email address** of anyone you'd like to invite. If you're a **ToursByLocals Workspace** or **Admin**, click the drop-down **menu** to choose whether you'd like to invite members or guests.

1. If you're inviting members, click **Customize** your invitation to select additional [default channels](https://slack.com/help/articles/201898998-Set-default-channels-for-new-members) they'll be added to if they accept their invitations. If you're inviting guests, choose the channel(s) they'll be added to and set a time limit for their accounts if you'd like.

1. Click Send, then click Done.

Note: Workspace Owners can [approve certain email domains](https://slack.com/help/articles/115004856503-Manage-how-people-join-your-workspace) so anyone with an approved email address to join their workspace.

### How to get Invited to the Workspace

1. Download the desktop app , you can also download the app for Android or IOS.

1. Use your **@tblinternal.com email address** to create your account or ask the **admin (IT)** to send you an invitation to join Slack.

1. Join **ToursByLocals Workspace**

## Set up Internal Accounts

### How to Access the Internal Email

In ToursByLocals we use two domains:

- **toursbylocals.com** is our main email address.

- **tblinternal.com** is designed to access all the google services like Google Calendar, Google Drive, Google Meet..etc.

#### Set up Google Workspace Account Calendar and Email

1. Open **System Preferences**

1. Click in **Internet Accounts**

1. Click on Google on the right-hand side of the new window that pops up. You will be prompted that Google requires completing authentication in your web browser. Choose the **Open Browser button** to open Safari.

1. You will then be shown a Google **Sign-in screen** asking for your tblinternal email address. Enter your tblinternal email address and choose the blue **Next button** below.

1. Next, you will be asked for your password. Enter this and choose the blue **Next button** below. You will be prompted that "macOS wants to access your Google Account". Choose the **Allow** button below.

1. At this point, your Google account will be loaded on your device if you press **Done** at the bottom right of the screen, however, you really should review which services you want to sync with the account you have connected:

Select **Mail** and **Calendars**

1. Choose **Done** at the bottom right of the screen.

## Agile

This guide is destined to introduce the Agile methodology and its benefits using Scrum.
NeedToCheck > Read more

### What are the main agile ceremonies?

Learn how to use Scrum to drive your organization's progress and empower teams to deliver the best product.

#### The agile ceremonies list includes

1. Sprint Planning.

1. Daily Stand-Up.

1. Sprint Review.

1. Sprint Retrospective.

While each ceremony is different, they facilitate the same overall purpose. The ceremonies bring teams together with a common goal under a regular rhythm, and they help teams get things done.

## ToursByLocals Products

The **ToursByLocals'** product is the **Tours** in person and **virtual** version.

### Introduction to the ToursByLocals Product

#### Tours

1. In person tours are a way to learn about the local culture and history, at same time, you can experience the place in a different way.

1. Virtual tours are a way to learn about the local culture, history and experience it from the comfort of your own home.
