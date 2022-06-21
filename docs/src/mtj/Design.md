# Overview

## Navigation Bar

(Auth and Non-Auth)

### 1. Introduction

The navbar is the main navigation of the whole site. It is present on every page except the landing page.
Both auth and non-auth user have access to it, however, the interactions are different.

### 2. Business Rules

#### 2.1 Elements of the navbar

The navbar has 5 main elements:

- Home
- Search/Explore
- Add new memory
- Notifications
- User menu

Notifications and User menu expand to show additional items.

- Notifications: Show user’s notifications
- User menu
  - User profile - View/Edit Profile
  - My Memories - View edit your memories
  - View/Edit your friends
  - Account settings
  - FAQs

![](https://lh5.googleusercontent.com/aEUfOsXQYllfGx2OXSQWvOAOyegC65_KoKabN00XB0Wq614EMnjzBGzEzrPENyQmzgna4PhfHtGDAOzCiWmHqu8R_88RkPgyeC2SZeqTKbE15bCB3PGCTWYbXkdS3YNjhV4Cg8Z6)

#### 2.2 Location of the Nav Bar

- Mobile: At the bottom of the page

![](https://lh3.googleusercontent.com/H4oxmX-ss_l2Xtz1a5hKnXl1G5zVWGA7EMcUfqeaphW2AZduXnyZ4lnIIpn5x_Vvm_z7jpK7a_aWwkTGU7CulyqxIVSV4UDrmY6LbPOXZahou2Yhto-2ZMyp84WrFTBspiwzf3Zf)

- Desktop: At the top of the page

![](https://lh6.googleusercontent.com/9xn5X-x2rwdT8StTRWhVBwLK2rWu8fUKeX3F9e5QywjuFl6eaTVm7zka_oYYmo8cPlUcdDnZw_V7-_8nYqd8YMCPUr-ebq25y6lhU3QPycTY9KqLaZKxWMQDk9O95ph16j7ogKq_)

In both cases, it is fixed and always visible.

If the user is not authenticated, the navbar will also include `log in` and `sign up` CTAs.

(On mobile, the CTAs will be located at the top navigation)

- Mobile: Top and bottom

![](https://lh6.googleusercontent.com/CSvDioazI_Ms9sCdGf2gr34MXJLhvxseG-LrtXjkVqznZG3WAGz601Y-AvkaDPlqDR0mtORW_1SICC7tB9OlVmbl2xTmkGYpZCbhtHaDlqo9dDOrWtu0b4mJDM9ztcV6vO8-ODh9)![](https://lh3.googleusercontent.com/CTYsQtjhlff_3SmuyTnwTpIQBHUG1nyTJuPY2Vu5agJpjKI2YuoUH33UocmTTO1rrq90LrORBK_6oI00OiahS8LOyLP2PS-ETYtYxUOnz8uWmhO8VOWHBhWWlsYVxycfyqybUGZr)

- Desktop: At the top of the page

![](https://lh4.googleusercontent.com/MQu-8W910yRQl2WXy0CfIw7NfRoqZXnENdzM0uUkSSD1nsVP-yEeAAqMvyOO3og-yuR_PwkzhoKdWdWCIM_2udbIRaWcnwXLejxHzOdc4i62cnUOSd7tgAhNVeDRC5_4JIRuehoz)

### 3. Interactions and Flows

The nav bar will ALWAYS interact in the same way all across the site. The interaction for auth and non-auth user is different.

All details are displayed in the wire flows below:

- [Mobile - auth](https://xd.adobe.com/view/13e63d20-e8fa-46dd-8294-d7aa00958aa5-46b5/?fullscreen&hints=off)
- [Mobile - non-auth](https://xd.adobe.com/view/ced7504e-8fc3-4a35-8c33-9aa746184a7a-9b84/?fullscreen&hints=off)
- [Desktop - auth](https://xd.adobe.com/view/c2215c84-1465-4670-9198-2544961482fd-9772/?fullscreen&hints=off)
- [Desktop - non-auth](https://xd.adobe.com/view/f1bb648f-7a82-4b34-949e-c27d0a65f262-a4e8/?fullscreen&hints=off)

## Feed page

(Auth only)

### 1. Introduction

The feed is the home page of MTJ. As soon as an authenticated user logs in, they land on the feed.
The feed displays the user’s friend's updates and can interact/view them.

### 2. Business Rules

#### 2.1 Anatomy of the feed

- Navbar
- Posts (main component, details below)
- If the user is currently on a live memory: indication of it and easy access to add a new stop
- On desktop only: Left sider
  - Featured memories: four memories selected randomly
  - People you may know: five user profiles, selected from friends of friends. If the user does not have any friends yet or does not have 5 possible contacts, select randomly.

#### 2.1.2 If the user does not have any friends

The feed will not display any posts, instead, it will display a headline reading “Seems you don’t have any friend’s updates yet…
Search and add friends to see what they’re up to!” + a CTA “search for friends” that will link to the Explore (search) page. On mobile, will also have a list of 5 users under “people you may know”

#### 2.1.3 Examples (no interactions)

- [Desktop Feed with friends](https://xd.adobe.com/view/075a200b-ee7c-4abb-afcd-5733e5f1774c-5209/)
- [Desktop Feed without friends](https://xd.adobe.com/view/3b9eca5c-edaa-402f-bf1c-5fa9079d5ffc-6ecd/?hints=off)
- [Mobile Feed with friends](https://xd.adobe.com/view/74c3114f-d34b-442b-bd4b-0f138b6f31a7-2190/?hints=off)
- [Mobile Feed without friends](https://xd.adobe.com/view/731f57ab-b696-4471-b955-b72ade2890bf-264c/?hints=off)

#### 2.2 Post

The post is the main component of the feed page. Each post represents one friend update.

#### 2.1.3 Friend’s Updates on Post

- Friend added a new stop to a memory
- Friend added a picture to a memory

#### 2.1.3 Anatomy of the post

Each post consists of:

- User avatar + name
- Post type (added stop, added picture)
- Share icon
- Three dots to view additional details and actions
- Timestamp (time and day the post was made)
- Privacy status (icon for private, public or not listed)
- Post Description (standard)
- Tag - There are two types of tags: `Stop` & `Memory`
  - If the Stop is the first stop of a memory: `Memory` tag
  - If the stop is from an existing memory: `Stop` tag
- Post main image (clickable) + Name + Stop
- Heart (amount of hearts + who liked it - link to view all ) + Comment (amount of comments - link to view all)
- Comments. Each comment has a heart. By default, 252 characters will be displayed for each comment, after this, there is a “read more” link.
  By default, 1 comment per post is displayed.
  Total characters allowed for comments: 8,000
- Reply comment link
- Add a new comment box

#### 2.1.3 Post Examples

[Desktop / Mobile  Post](https://xd.adobe.com/view/5ca805e1-1231-4d5d-ac85-f95eaaae0592-09fb/?hints=off)

### 3. Interactions and Flows

**How all items interact and flow is described in these diagrams:**

- [Mobile](https://xd.adobe.com/view/9ad50269-961b-4687-89cf-c0cd6c90ba63-cf86/?fullscreen&hints=off)
- [Desktop](https://xd.adobe.com/view/916da80a-8865-4e86-b187-85f1f66b5f1d-c43e/?fullscreen&hints=off)

**Interactions descriptions are below:**

- User clicks on Avatar or name: → Poster user profile with `back` CTA on the upper left corner ![](https://lh3.googleusercontent.com/EVx5FoSlDcUQQsMyc3FOWmEzi1l-9gpDCCOiKIyzf_7HpzYIgDZ2t5_c7rCucZYqIHxshJQi_tHi0b_C1kJUvsVco7MPMwUH8x7XIfoewjsMAiq8uVYSAzchpwn6Ov9_eckwdilE)

- User clicks on the main image on `new stop` post → Memory opens as toaster from the right with the stop expanded. Memory view as from `Explore` page. When the user closes the memory, goes back to feed.

![](https://lh3.googleusercontent.com/gQ9yBnLisdwlNI7gruXw_uYQCUoa99FB8dN-YFLvnUzsbMTHf8SG_0ZOLe7TGYKYUPKdK14pjVcZ3n2TSI8n3xmU4JjyvwQHow8Iq6z8nST8iWhOXWPraAqp-2uSWGkwCk3mU4uH)

- User clicks on the main image on `new picture` post → Image viewer opens. The image viewer has a `view memory` CTA → Memory opens on stop where the picture is. When the user closes the memory, goes back to feed.

![](https://lh6.googleusercontent.com/1ON8d4xt3t0odZvO1xqjrAHzZHVLLMOg7nn_2yhOh0g9OIz8b_zZXYS1wX7je8NW7nhHOhDddY7VtcUkI5fCTvvt1EDgDOOgYg7P_l4zRvhEkUlSn0l8OqNbn8nhtX_34T-7-M33)

- User clicks on `comment` icon →
  Desktop: If there is more than one comment, up to 3 comments are displayed. If there are more than 3 comments, a `view more comments` link is displayed. When user clicks the comment link again, the comments are collapsed. ![](https://lh5.googleusercontent.com/DyklLvGXFFULIGODlNAxO3l942XvLknXYWDcpSSto0RVVsD2GGjb25ksfM2Mwwo6f20rFqFiSfMkzySF4A04cglQgT2_nfl2965HpZk6mlkfjywDvg-NSv-UhVN9NXi0GEmkZe7l)

Mobile: If there is more than one comment → new screen opens displaying all comments.  When user clicks < back button, goes back to post/feed

![](https://lh6.googleusercontent.com/vmSzMYCC-lDmuzXqjd70Kct3ert9U5bf-66qM62fflxVZOi0lv-Pf5SRnTHRELOB9fBMEpkaYPFsi35Ks5adcweAbcuvf4Dy_-StZK0CM2JPF8raGqISXDVyY-w-eZHkcjkR9ZJY)

- User clicks on `read more` on a comment that has more than 252 characters → the full comment is displayed. When the user clicks on `read less` → the comment is collapsed to 252 characters. ![](https://lh3.googleusercontent.com/Tu9mRETkc3fJ_Osk3buJX7MpIiNSnhTAIdWx8a9GciTlkQ7Y53n1pJnqrN6EDkbUUUXgvI-Sf4uwCbvqJ2oiKSygxF5RZQ03HSitd1TdxMOzqyLggf9KeSsse78_pnGCXlJ-_u2a)

- User clicks on `reply comment` →  @ with the comment author is added to the `add comment` box for the user to add the new comment ![](https://lh4.googleusercontent.com/FkCvTd7dTaPfssau5Mw_MgMxjMA2jULPT0lG0DS0YYRt-4FVB9764ngFg-l3uVCUCpBm5YntPm-2mCTTCfd6LyIYDDjfhmqSChughdSQ5-9VatHvohjmF0ZAoRfy9G8-JQlZeiI3)

- User clicks on `view more comments` → six more comments are displayed (desktop only)

- User clicks on the share icon → a pop up  shows so the user can choose where to share this memory: copy the link, share on Facebook
  ![](https://lh5.googleusercontent.com/KtO4P0hxcEvdsOZ5ui4bELgxlLcSoF2MEcUm_PU5P5SXUptIZqmfxe74JU9orO1sImMguw2pvt9HCXl_P012Eb5gqsNZ9wt_I4GXhd7FCGGvkq7ksZWRfG6GSleVyGIwKiyK-zhU)![](https://lh4.googleusercontent.com/3_khktgY38dgxNxiJp0HpiqzRiVYI5OK7_SMuS3ZfyUJTkwrt9B97_KfF-rn2NkTlBSVGFe0bRdnRrpB0t-dbu6nqpLHKEdNfDRWqGE2dLqlsNt5r-775jyznbt_51akHz_3DXJF)

- User clicks on names next to hearts → pop up with all people who liked ![](https://lh5.googleusercontent.com/4cam1BcJ0pjkTbY30a46Pxv73ZiLKuu0UxaIJRZ9x7TWMMMyboMau4JuZkb5ve8K0M2ovvLHR6-WO2zJL--b8VB8LWkSqN68RljSMEDRBTGe5LILN0gPuOw95k3YGAmQfYp3z8Xi)![](https://lh3.googleusercontent.com/vHZT5WO4DfBXd6Hp2sWhZ5UKX4WWkupGcVzjL_wOVR6ILQ2YpTus5ThiRxkggEIHGc5cVfHRakidlO8Dvjl-gvQVgmla1dpWaR5qOevC5FWqsICvNGpX_c6Sis5hX1W7rZe2LgWH)

### 4. Hearts and comments Behavior

Hearts and comments can be given to:

- A stop containing the gallery

These hearts and comments can be given by a user from:

- A post ( which it's intended to go to a `Stop`)

All hearts and comments will be recorded on the stop.

### 5. Lo-Fi Interactive Prototypes

[Desktop](https://xd.adobe.com/view/a2eaf12b-c27c-4369-ac41-f372f15024fd-f7b9/)
[Mobile](https://xd.adobe.com/view/368d12d1-fa57-4e63-b8ad-217191294b25-63de/)

### 6. Video Process and Flows

[Desktop](https://drive.google.com/file/d/1tF4ft8agEM8OQyU1AaSMSd8_sli-18I1/view?usp=sharingZIf_UUBxti54CZ5Q-Xrgje1/view?usp=sharing)\
[Mobile](https://drive.google.com/file/d/1VqTXUNnmSFVZniQaWmPnwnDixi2QgO3n/view?usp=sharing)

## Explore Page

(Auth & Non-Auth)

### 1. Introduction

The explore page is the search page for MTJ. From the page, the users can search, browse and view the public memories that match their search. Both authorized and Non-authorized users can access the explore page.

### 2. Business Rules

The explore page can be accessed

- From the landing page, by clicking on `Explore Memories`
- From the nav bar, by clicking on `Search`

#### 2.1 Anatomy of the Explore Page

- Search bar
- Recent Searches
- Memories thumbnails (infinite scroll)
- Sider with Featured Memories + Popular Travelers + People you may know (Desktop only)

![](https://lh3.googleusercontent.com/yKobaTNy8jON9_nanepHL5U0iAc1yf7DSQtxk_mjpJ8KFTRCFXjPqiknZQTfWbZTPG28zcBZay8Ap09Cyick5PGckR6efUAR1glwUFD0KSGhplKFLTBtaZnROtSB9QtfNB_R5FFa)

![](https://lh6.googleusercontent.com/_5GFplJP6NLlzyDR_TloMIrpuqct_B0EiRH_W9_fpnOWBPBHtE_mCAShZiQOhbepm4RD3Pl_-x280zkPnXam8BeZzEobvF7Lah18B_QSqj-xXKjA0vrmFlU7NhW8IWfybyx3g8pK)

#### 2.2 Search Bar Rules

#### 2.2.1 Search Bar functioning

On the search bar, the user can search for

- Memories
- People

Once the user introduces a keyword or part of a keyword, if it matches with any indexed word, a drop-down menu will appear with suggestions.

Once the user introduces the keyword and hits search (or clicks on any of the suggestions), the results are displayed.

Since the results could be both memories or people, they can be viewed either all of them, memories or people, in different tabs.

![](https://lh5.googleusercontent.com/bOuL1DjnN8hOg7LNWcMI_J5_Onnkf_4JaSRW-zocOFrMgFKIo9cnMsmsdxf9ylICkOVOqGSVElWm0L2_nICxDb422pXQa1tqJsFCDXRhrQhRWmw0TLGhYgXZH5926PfRg7dIqKQU)

#### 2.2.2 Keywords and results

The user can enter any keyword (usually a place or a friend's name)

After the keyword is entered, the results will be as follows:

- Any memory that contains the keyword in the title
- Any person with at least one memory with the keyword in the title
- Any memory that contains the keyword as one of the stops (if the keyword is an indexed place)
- Any person with at least one memory with the keyword as one of the stops (if the keyword is an indexed place)
- Any memory that contains the keyword in the text (memory or stop description) as long as the keyword is indexed
- Any person with a first name or last name containing the keyword

_Non-authorized users_

Since non-authorized users cannot view other user's public profiles, if the search results return a person, when they click on it, they will be prompted with the sign-up screen.

There is no limit to the number of results displayed, it will be infinite scrolling.

### 3. Interactions and Flows

- [Mobile (Auth)](https://xd.adobe.com/view/5be4ac22-7167-4bdb-a95d-5e498ec4f8be-0eb7/?fullscreen&hints=off)
- [Mobile (Not auth)](https://xd.adobe.com/view/43d02316-3b5e-4949-8104-98ca5a8fb06c-1683/?fullscreen&hints=off)
- [Desktop (Auth)](https://xd.adobe.com/view/fad5426a-4fc6-4b32-bfd6-bbe9eb16e0b3-af86/?fullscreen&hints=off)
- [Desktop (Not auth)](https://xd.adobe.com/view/656eb1ca-f702-4dd1-8951-e2004e157296-303d/?fullscreen&hints=off)

### 4. Interactive Prototypes

- [Mobile (Auth)](https://xd.adobe.com/view/84e6c243-4b2e-4f5c-9334-d30dc9ce8aa8-d1b5/)
- [Mobile (Not auth)](https://xd.adobe.com/view/5a42e0a8-a2f2-4b60-ba05-9abadc8caa8c-0f11/)
- [Desktop (Auth)](https://xd.adobe.com/view/71646618-fdf2-4ae7-b24a-5958669c9ec6-2437/)
- [Desktop (Not auth)](https://xd.adobe.com/view/fe498c5e-051c-413b-908a-0a7ef0583c35-ab1a/)

### 5. Process Flow Video

- [Mobile (Auth)](https://drive.google.com/file/d/17k4QPj_U-66BJtT4otX2TQxiS-NUIF08/view?usp=sharing)
- [Mobile (Not auth)](https://drive.google.com/file/d/1xRKBnnQ791uEjzVJUVv-grT8_PKSTCia/view?usp=sharing)
- [Desktop (Auth)](https://drive.google.com/file/d/1srocJuTfvxQWYvvE1UD5Uef8OicVaT43/view?usp=sharing)
- [Desktop (Not auth)](https://drive.google.com/file/d/1rns67hUaoL-zGbJIC7Ay2QG1p26eqEsC/view?usp=sharing)

## Memory

(Auth only)

### 1. Introduction

The Memory is the central element of MTJ. It is where the users record their journeys, add descriptions and pictures, and where other users leave their hearts and comments.

### 2. Business Rules

#### 2.1 Memory view

#### 2.1.1 Memory access

A memory can be accessed by the user depending on the privacy status (details about it below).

Both authorized and non-authorized users can view a memory, following [this flow](https://excalidraw.com/#json=_d2gRrSqTfOx6eNVnvrv-,bAgzo_HKlHEyFdkscE5s_Q).

For details on what a non-authorized user has access to, please refer to [this doc](https://docs.google.com/document/d/1zzUMK66PKSaRr_oWjDd1S4Bq9nB1jQvNKrR3DHOfYIw/edit?usp=sharing).

#### 2.1.2 Anatomy of the memory

**Desktop**

**General initial view**

- Scrollable map showing stops - centered on current or selected stop
- Information panel (collapsable) containing
  - Cover picture
  - Share Icon
  - Memory title
  - Share icon
  - Overview panel
    - Total stops
    - Total duration
    - Total distance
    - Memory owner avatar + name
  - Memory Description
  - Stops (with arrival date)
- Close button

![](https://lh3.googleusercontent.com/MNQ8BPumJP-5SwRPADcGwJzFsobIdu9WX2Ea8rTh83RwkVlGhkbLlryyYsMLQQkZmy0p8jpp8O2hCU2jcw2gBApmfhr2PoBMiLa5X4DunSl7qPF1u1admm-oIKCxA0biiPECoTWw)

**Stop View**

Once any stop is clicked either from the information panel or from the map, it expands to show:

- Stop name
- Arrival date
- Pictures
- Stop Description
- Map
- Hearts (count next to it)
- Comments (count next to it)
- Close button

![](https://lh3.googleusercontent.com/gHbHoDfnjViDjKAQK8P2uRNfO71eZz4mC5k94j41acMeAlRwJLN5df1Sg2jiAVRvgBUVI_q9-2tdrb-B6aIVeN_l80t1IQmFpv9aT-vKXzfHu-0pvll98Un2ot9ZrSGAx4q_xubJ)

**Picture View**

Once any picture is clicked, it expands to show:

- Picture
- Left-right arrows to view more pictures
- Close button
  ![](https://lh3.googleusercontent.com/K1o_Fs7-4tU8KLY80p8GP-CpvqRd0apRH0SQ-hqmo-8tusQRmtsLnNsQ4q1CDFHjuDaPJapHaCiGLWxAY41LBRD7zWv5V45QTd5vMrRiMnaEu-ZaT7HGXhNIwUOi2n_oy_SSkI6-)

**Mobile**

**General initial view**

- Cover picture
- Memory title
- Share icon
- Overview panel
  - Total stops
  - Total duration
  - Total distance
  - Memory owner avatar + name
- Stops (with arrival date). Each stop as a “View” CTA
- Expandable map . When the map is expanded: full-screen map, showing all stop and stop buttons. Back button
- Back button

![](https://lh3.googleusercontent.com/kD09E9TaRhTu1X3roZsmba-BpAYYKRmf9fJjxX5cVUfd8R2xEQsi5xQM9KVJrDYnjze1A7NPMBKA9MIRJKEVLD56avfsUCEGSAJFMG4f5kde5ol2A1E2syJBZolH1WIfOVyBZaZL)

**Stop View**

Once any stop is clicked either from the information panel or from the map, it expands to show:

- Stop name
- Arrival date
- Pictures - left side scrolling
- Map
- Stop Description
- Hearts
- Comments
- Back button

![](https://lh3.googleusercontent.com/VNrT1yzNdY0lcfh_IJJhl0re9kmA-ZNT4ARXbJu-w1nA25ZxcU_NIgqYN3EUfEpIuO9eC2_j4OTzZgezI4frEwwyIC7G7HNQ70kHkGicldmJYGhZG-FwdIMeV_3YePZ5hpZPAMQX)

**Picture View**

Once any picture is clicked, it expands to show:

- Picture
- Side scrolling
- Close button

![](https://lh3.googleusercontent.com/Csye8VygP51WSxYizGh3gU8wHKiXLBaEImMAeVmNRPj4FbMaJX2Cx5eQrPGzBD3W0OVARfY-sfS3OdMrfhOjboDGxxJQMXlYdDZcIM48efxLENBdzaBOHyQRY2F2xZR-5YaS5L7l)

#### 2.1.3 Memory View Interactions

**Initial View**

- From the `explore` page, the user clicks on a memory → it opens as a toaster from the right
- User clicks on a stop: the stop is centered on the map
- User clicks on the share icon → a pop up  shows so the user can choose where to share this memory: copy the link, share on Facebook
- On desktop, the user clicks on collapse/expand panel → the panel is collapsed/expanded
- User clicks on a stop, either from the map or the panel → The stop opens as a toaster from the right
- User clicks on the close (X) button → the memory is collapsed back

**Stop view**

User clicks on a picture → Image viewer opens.

**How all items interact and flow is described in these diagrams:**

- [Mobile](https://xd.adobe.com/view/af5da148-40b1-4869-ab14-5338407c3cdf-fa0e/?fullscreen&hints=off)
- [Desktop](https://xd.adobe.com/view/c5ddd3c3-1ffb-440c-b89c-5cdee21aec6e-908e/?fullscreen&hints=off)

**Hearts and comments interactions**

- By default, only one comment is displayed
- User clicks on “comment” icon →
  Desktop: If there is more than one comment, up to 3 comments are displayed. If there are more than 3 comments, a “view more comments” link is displayed. When user clicks the comment icon again, the comments are collapsed.
  Mobile: If there is more than one comment → new screen opens displaying all comments. When user clicks < back button, goes back to post/feed
- User clicks on “read more” on a comment that has more than 252 characters → the full comment is displayed. When the user clicks on “read less” → the comment is collapsed to 252 characters.
- User clicks on “reply comment” → @ with the comment author is added to the “add comment” box for the user to add the new comment

View [Feed Business Rules doc](https://docs.google.com/document/d/17hvBjjXrlKf0PQRe4nikIWGXXE52_zCv7PTYc3rv9MQ/edit?usp=sharing) for gif examples of the above.

#### 2.1.4 Hearts and comments behavior (on memory and pictures)

Hearts and comments have the same behavior and interactions as on the feed page. Please refer to [this doc](https://docs.google.com/document/d/17hvBjjXrlKf0PQRe4nikIWGXXE52_zCv7PTYc3rv9MQ/edit?usp=sharing) for further details.

Hearts and comments can be given to:

- A stop containing the gallery

These hearts and comments can be given by a user from:

- A post ( which it’s intended to go to a “Stop”)

All hearts and comments will be recorded on the stop.

#### 2.1.5 Lo-Fi Prototypes

[Desktop](https://xd.adobe.com/view/75b8e3f7-7283-4517-b129-5c246d33be4b-20eb/)

[Mobile](https://xd.adobe.com/view/c38e8415-653b-49b7-9641-89b0ae9fed2d-96dd/)

#### 2.1.6 Process Flow Video

[Desktop](https://drive.google.com/file/d/17JZWf1ER4hAUiiacPN6BCZYUfDPcqR_p/view?usp=sharing)\

[Mobile](https://drive.google.com/file/d/1obP8Uo7RwK7vo_RMmk6YCOyUxmYeKjIp/view?usp=sharing)

# New Memory

### 3. Add new memory

All auth users can add a new memory at any time from the Navbar, by clicking on the `add new memory` button.

This action will launch the `add memory` wizard, from where the user will provide the initial minimum details to create a new memory.

![](https://lh6.googleusercontent.com/T8OluRby7XFRXeeMax_JylibkjZ1gm9A8iO_APue317WYvfY77UZBAXWGTWBmZiMiQphQLUazRoj_pFzMN2R_x8hWlyfRstxmZ_pZ0viz77i66HkKCX449yZrDGzI6aIstIEXGdA)

In order to start a memory, the minimum required details are:

- Memory cover Picture
- Place (stop)
- Arrival date
- Memory title
- Memory description
- Privacy setting

Once this information is provided by the user, a memory is created and the user can edit all further details:

- Add new Stop
  - Select place
  - Add arrival date
  - Add pictures
- Remove Stop
- Edit stops
- Edit initial general details
- Delete Memory

#### 2.3.1 `Add new stop` quick access

When the user is currently on a live memory (based on the date), both on the feed and on the `My Memories` page, the first thing to show will be the current memory with an `Add Stop` CTA that will take the user directly to the add new stop screen

![](https://lh4.googleusercontent.com/YrUQkEInKdDNIw1YR2w120UEi7U-m41MzBXrrdr67chN78N6cwPmZXYYzVCp2AAfK_oslwxoDCXVG8U4_dTRTeOoukHwSleRmBa3i4lk7wXMGxVkZoKYoYKNYhvOnAJ211LWBGkI)

![](https://lh3.googleusercontent.com/Ml6ZkbbnaddtX7xGqSo8UB4bl4UqMlCNchpzG8NMhkZOdQ2JrWZ_zPQX86GAysJbS9tvpuL8n8x2k5v8zwwdCl7AhKclVVVQYgqJ3UDrkZrPwkmSh78HaUSQt9IifyDOMiX3PmfV)

#### 2.3.2 Remove Stops and delete memory

If the user removes the initial stop while the memory still only has one stop, the memory will be deleted.

The user is able to delete the memory during the memory editing process before saving it regardless of the number of stops or information provided.

#### 2.3.3 Arrival date

The arrival date is set for each stop.

The user is allowed to set the same arrival date for different stops, in case they visited two different spots on the same day.

#### 2.3.4 Interaction and Flows

The flow to add a new memory and further add more details to it until it is saved are described in the below diagrams

- [Mobile](https://xd.adobe.com/view/709fbb10-1c6b-4de4-91c7-0576a0038d92-25cc/?fullscreen&hints=off)
- [Desktop](https://xd.adobe.com/view/13a777bd-95c8-4796-b7f8-39074a23c902-46f4/?fullscreen&hints=off)

#### 2.3.5 Interactive Prototypes

- [Mobile](https://xd.adobe.com/view/2b4da3a1-b67c-42b6-9385-46085602a2d3-7e1e/)
- [Desktop](https://xd.adobe.com/view/7844e530-ae61-4e4d-b06d-474eb1ea9480-2d17/)

#### 2.3.6 Process Flow Video

- [Mobile](https://drive.google.com/file/d/1nJoIn3bI3nXuo6_lnCKYOz2dhjxQOaVO/view?usp=sharing)
- [Desktop](https://drive.google.com/file/d/1v9s5zilPpQGNi2XOmwcWTc7FhwNlXgw8/view?usp=sharing)

## Memory View and Edit

(Auth only)

### 1. Introduction

Once a Memory is created by a user, they can access it to view, or edit it.

### 2. Business Rules

#### 2.2.1 Own memory view access

A user's own memory can be accessed to be viewed or edited from the user navigation menu, from the "my memories" tab. A new page will open displaying all the user's past and current memory

![](https://lh4.googleusercontent.com/GGgGM5qMRChYGQ6wE3HB94iFAzJ7UF84ly7Nm4aPdJAP5Gb_3oUQuDVP3gAfvCucXiy1lffSbBr_Hgzfxk-5GAnLEaSDsxVOlQHPpBgRENH8pE8lo0QzIh9EIYMwXHD0puM_Yj19)

When the user is viewing its own memory it looks and behaves exactly as when another user is viewing a public memory, the only difference is that it has an "EDIT" icon for the user to edit its own memory

![](https://lh3.googleusercontent.com/_5hkIj963PaW8nE1YyA3m7E_hjD7s4rxlu6701TSc8F2vS-K-3GP1JsauZK-iI5wEyxFf7Yh0E4U8f3U7MUSp9KqoehYU4sxvrEsCC-N-Vojc9Sg6EUaulY4HPu4AiMyejl8QYT6)![](https://lh4.googleusercontent.com/5e4xbW4JSSrYnWRChAHYtpVIttO3Y2-CARBapwhp_vIZi-uFSW0aZJ2r1N4Cou3-3zLrdXurWL8Z9PMgq8Qm8XxqjWvOZqrYv6ZOvfMazZo6aGR5q0R1IW51OIlnbtNP8K_4hgVf)

#### 2.2.2 Own memory edit

To edit its own memory, the user needs to click on the edit icon. Once the edit icon is clicked, everything that is editable becomes editable.

#### 2.2.1.1 Editable items of a memory

- General information panel
  - Cover picture
  - Memory title
  - Privacy settings
- Stop
  - Remove stop
  - Place
  - Arrival date
  - Add/remove images
- Add new Stop
  Just as when the user is adding a new memory
  - Select place
  - Add arrival date
  - Add pictures
- Remove Stop
- Delete Memory

### 3. Interactive Prototypes

#### 2.2.1.2 Removing Stops

If a user removes a stop on a memory that has only this one stop, the memory will be deleted.

#### 2.2.3 Interactions and flows

How all items interact and flow is described in these diagrams:

- [Mobile](https://xd.adobe.com/view/96b7707d-047c-4684-84e7-6f92445498be-c3e4/?fullscreen&hints=off)
- [Desktop](https://xd.adobe.com/view/3371dc64-dfc8-4802-808d-a73315fbb8ca-6622/?fullscreen&hints=off)

#### 2.2.4 Interactive Prototypes

- [Mobile](https://xd.adobe.com/view/2c0e1b51-c611-4cf6-88c9-7e9d771575d6-795d/)
- [Desktop](https://xd.adobe.com/view/5496a3be-e7de-4727-8c37-88a58e16f2e2-01c5/?fullscreen)

#### 2.2.5 Process Flow Video

- [Mobile](https://drive.google.com/file/d/1oXHcHISDddDfJ5JsAzMPzRCIA59Y85Em/view?usp=sharing)
- [Desktop](https://drive.google.com/file/d/1YY3VWLx9mQKO3WM1Rw4c68_gaAHEF5aG/view?usp=sharing)
