# Overview


##  Feed

The feed is the home page of MTJ. As soon as an authenticated user logs in, they land on the feed.
The feed displays the user’s friend's updates and can interact/view them.

### Anatomy of the feed:
- Navbar
- Posts (main component, details below)
- If the user is currently on a live memory: indication of it and easy access to add a new stop
- On desktop only: Left sider
     -  Featured memories: four memories selected randomly
     -  People you may know:  five user profiles, selected from friends of friends. If the user       does not have any friends yet or does not have 5 possible contacts, select randomly.  

#### If the user does not have any friends.
The feed will not display any posts, instead, it will display a headline reading “Seems you don’t have any friend’s updates yet…
Search and add friends to see what they’re up to!” + a CTA “search for friends” that will link to the Explore (search) page. On mobile, will also have a list of 5 users under “people you may know”

#### Examples (no interactions)

-   [Desktop Feed with friends](https://xd.adobe.com/view/075a200b-ee7c-4abb-afcd-5733e5f1774c-5209/)
-   [Desktop Feed without friends](https://xd.adobe.com/view/3b9eca5c-edaa-402f-bf1c-5fa9079d5ffc-6ecd/?hints=off)
-   [Mobile Feed with friends](https://xd.adobe.com/view/74c3114f-d34b-442b-bd4b-0f138b6f31a7-2190/?hints=off)
-   [Mobile Feed without friends](https://xd.adobe.com/view/731f57ab-b696-4471-b955-b72ade2890bf-264c/?hints=off)

#### Post

The post is the main component of the feed page. Each post represents one friend update.

#### Friend’s Updates on Post

- Friend added a new stop to a memory
- Friend added a picture to a memory

#### Anatomy of the post

Each post consists of:
- User avatar + name
- Post type (added stop, added picture)
- Share icon
- Three dots to view additional details and actions
- Timestamp (time and day the post was made)
- Privacy status (icon for private, public or not listed)
- Post Description (standard)
- Tag - There are two types of tags: "Stop" & "Memory"
    - If the Stop is the first stop of a memory: "Memory" tag
    - If the stop is from an existing memory: "Stop" tag
- Post main image (clickable) + Name + Stop
- Heart (amount of hearts + who liked it - link to view all ) + Comment (amount of comments - link to view all) 
- Comments. Each comment has a heart. By default, 252 characters will be displayed for each comment, after this, there is a “read more” link.
By default, 1 comment per post is displayed. 
Total characters allowed for comments: 8,000
- Reply comment link
- Add a new comment box


#### Post Examples

[Desktop / Mobile  Post](https://xd.adobe.com/view/5ca805e1-1231-4d5d-ac85-f95eaaae0592-09fb/?hints=off)

### Interactions - Post

**How all items interact and flow is described in these diagrams:**

-   [Mobile](https://xd.adobe.com/view/9ad50269-961b-4687-89cf-c0cd6c90ba63-cf86/?fullscreen&hints=off)
-   [Desktop](https://xd.adobe.com/view/916da80a-8865-4e86-b187-85f1f66b5f1d-c43e/?fullscreen&hints=off)

**Interactions descriptions are below:**

- User clicks on Avatar or name: → Poster user profile with "back" CTA on the upper left corner ![](https://lh3.googleusercontent.com/EVx5FoSlDcUQQsMyc3FOWmEzi1l-9gpDCCOiKIyzf_7HpzYIgDZ2t5_c7rCucZYqIHxshJQi_tHi0b_C1kJUvsVco7MPMwUH8x7XIfoewjsMAiq8uVYSAzchpwn6Ov9_eckwdilE)

- User clicks on the main image on "new stop" post → Memory opens as toaster from the right with the stop expanded. Memory view as from "Explore" page. When the user closes the memory, goes back to feed.
![](https://lh3.googleusercontent.com/gQ9yBnLisdwlNI7gruXw_uYQCUoa99FB8dN-YFLvnUzsbMTHf8SG_0ZOLe7TGYKYUPKdK14pjVcZ3n2TSI8n3xmU4JjyvwQHow8Iq6z8nST8iWhOXWPraAqp-2uSWGkwCk3mU4uH)

- User clicks on the main image on "new picture" post → Image viewer opens. The image viewer has a "view memory" CTA → Memory opens on stop where the picture is. When the user closes the memory, goes back to feed. ![](https://lh6.googleusercontent.com/1ON8d4xt3t0odZvO1xqjrAHzZHVLLMOg7nn_2yhOh0g9OIz8b_zZXYS1wX7je8NW7nhHOhDddY7VtcUkI5fCTvvt1EDgDOOgYg7P_l4zRvhEkUlSn0l8OqNbn8nhtX_34T-7-M33)

-   User clicks on "comment" icon → 
Desktop: If there is more than one comment, up to 3 comments are displayed. If there are more than 3 comments, a "view more comments" link is displayed. When user clicks the comment link again, the comments are collapsed. ![](https://lh5.googleusercontent.com/DyklLvGXFFULIGODlNAxO3l942XvLknXYWDcpSSto0RVVsD2GGjb25ksfM2Mwwo6f20rFqFiSfMkzySF4A04cglQgT2_nfl2965HpZk6mlkfjywDvg-NSv-UhVN9NXi0GEmkZe7l)
Mobile: If there is more than one comment → new screen opens displaying all comments.  When user clicks < back button, goes back to post/feed
![](https://lh6.googleusercontent.com/vmSzMYCC-lDmuzXqjd70Kct3ert9U5bf-66qM62fflxVZOi0lv-Pf5SRnTHRELOB9fBMEpkaYPFsi35Ks5adcweAbcuvf4Dy_-StZK0CM2JPF8raGqISXDVyY-w-eZHkcjkR9ZJY)

-   User clicks on "read more" on a comment that has more than 252 characters → the full comment is displayed. When the user clicks on "read less" → the comment is collapsed to 252 characters. ![](https://lh3.googleusercontent.com/Tu9mRETkc3fJ_Osk3buJX7MpIiNSnhTAIdWx8a9GciTlkQ7Y53n1pJnqrN6EDkbUUUXgvI-Sf4uwCbvqJ2oiKSygxF5RZQ03HSitd1TdxMOzqyLggf9KeSsse78_pnGCXlJ-_u2a)

-   User clicks on "reply comment" →  @ with the comment author is added to the "add comment" box for the user to add the new comment ![](https://lh4.googleusercontent.com/FkCvTd7dTaPfssau5Mw_MgMxjMA2jULPT0lG0DS0YYRt-4FVB9764ngFg-l3uVCUCpBm5YntPm-2mCTTCfd6LyIYDDjfhmqSChughdSQ5-9VatHvohjmF0ZAoRfy9G8-JQlZeiI3)

- User clicks on "view more comments" → six more comments are displayed (desktop only)

-   User clicks on the share icon → a pop up  shows so the user can choose where to share this memory: copy the link, share on Facebook 
![](https://lh5.googleusercontent.com/KtO4P0hxcEvdsOZ5ui4bELgxlLcSoF2MEcUm_PU5P5SXUptIZqmfxe74JU9orO1sImMguw2pvt9HCXl_P012Eb5gqsNZ9wt_I4GXhd7FCGGvkq7ksZWRfG6GSleVyGIwKiyK-zhU)![](https://lh4.googleusercontent.com/3_khktgY38dgxNxiJp0HpiqzRiVYI5OK7_SMuS3ZfyUJTkwrt9B97_KfF-rn2NkTlBSVGFe0bRdnRrpB0t-dbu6nqpLHKEdNfDRWqGE2dLqlsNt5r-775jyznbt_51akHz_3DXJF)

-   User clicks on names next to hearts → pop up with all people who liked ![](https://lh5.googleusercontent.com/4cam1BcJ0pjkTbY30a46Pxv73ZiLKuu0UxaIJRZ9x7TWMMMyboMau4JuZkb5ve8K0M2ovvLHR6-WO2zJL--b8VB8LWkSqN68RljSMEDRBTGe5LILN0gPuOw95k3YGAmQfYp3z8Xi)![](https://lh3.googleusercontent.com/vHZT5WO4DfBXd6Hp2sWhZ5UKX4WWkupGcVzjL_wOVR6ILQ2YpTus5ThiRxkggEIHGc5cVfHRakidlO8Dvjl-gvQVgmla1dpWaR5qOevC5FWqsICvNGpX_c6Sis5hX1W7rZe2LgWH)



### Hearts and comments Behavior

Hearts and comments can be given to:

-   A stop containing the gallery

These hearts and comments can be given by a user from:

-   A post ( which it's intended to go to a "Stop")

All hearts and comments will be recorded on the stop.

### Full Lo-Fi interactive prototypes

[Desktop](https://xd.adobe.com/view/a2eaf12b-c27c-4369-ac41-f372f15024fd-f7b9/)
[Mobile](https://xd.adobe.com/view/368d12d1-fa57-4e63-b8ad-217191294b25-63de/)

### Full Videos

[Desktop](https://drive.google.com/file/d/1tF4ft8agEM8OQyU1AaSMSd8_sli-18I1/view?usp=sharingZIf_UUBxti54CZ5Q-Xrgje1/view?usp=sharing)\
[Mobile](https://drive.google.com/file/d/1VqTXUNnmSFVZniQaWmPnwnDixi2QgO3n/view?usp=sharing)









##  NavBar

The navbar is the main navigation of the whole site. It is present on every page except the landing page.
Both auth and non-auth user have access to it, however, the interactions are different.


### Elements of the navbar

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

#### Location of the Nav Bar

-   Mobile: At the bottom of the page

![](https://lh3.googleusercontent.com/H4oxmX-ss_l2Xtz1a5hKnXl1G5zVWGA7EMcUfqeaphW2AZduXnyZ4lnIIpn5x_Vvm_z7jpK7a_aWwkTGU7CulyqxIVSV4UDrmY6LbPOXZahou2Yhto-2ZMyp84WrFTBspiwzf3Zf)

-   Desktop: At the top of the page

![](https://lh6.googleusercontent.com/9xn5X-x2rwdT8StTRWhVBwLK2rWu8fUKeX3F9e5QywjuFl6eaTVm7zka_oYYmo8cPlUcdDnZw_V7-_8nYqd8YMCPUr-ebq25y6lhU3QPycTY9KqLaZKxWMQDk9O95ph16j7ogKq_)

In both cases, it is fixed and always visible.

If the user is not authenticated, the navbar will also include "log in" and "sign up" CTAs.

(On mobile, the CTAs will be located at the top navigation)

-   Mobile: Top and bottom

 ![](https://lh6.googleusercontent.com/CSvDioazI_Ms9sCdGf2gr34MXJLhvxseG-LrtXjkVqznZG3WAGz601Y-AvkaDPlqDR0mtORW_1SICC7tB9OlVmbl2xTmkGYpZCbhtHaDlqo9dDOrWtu0b4mJDM9ztcV6vO8-ODh9)![](https://lh3.googleusercontent.com/CTYsQtjhlff_3SmuyTnwTpIQBHUG1nyTJuPY2Vu5agJpjKI2YuoUH33UocmTTO1rrq90LrORBK_6oI00OiahS8LOyLP2PS-ETYtYxUOnz8uWmhO8VOWHBhWWlsYVxycfyqybUGZr)

-   Desktop: At the top of the page

![](https://lh4.googleusercontent.com/MQu-8W910yRQl2WXy0CfIw7NfRoqZXnENdzM0uUkSSD1nsVP-yEeAAqMvyOO3og-yuR_PwkzhoKdWdWCIM_2udbIRaWcnwXLejxHzOdc4i62cnUOSd7tgAhNVeDRC5_4JIRuehoz)

###  Interactions and Flows

The nav bar will ALWAYS interact in the same way all across the site. The interaction for auth and non-auth user is different.

All details are displayed in the wire flows below:

-   [Mobile - auth](https://xd.adobe.com/view/13e63d20-e8fa-46dd-8294-d7aa00958aa5-46b5/?fullscreen&hints=off)
-   [Mobile - non-auth](https://xd.adobe.com/view/ced7504e-8fc3-4a35-8c33-9aa746184a7a-9b84/?fullscreen&hints=off)
-   [Desktop - auth](https://xd.adobe.com/view/c2215c84-1465-4670-9198-2544961482fd-9772/?fullscreen&hints=off)
-   [Desktop - non-auth](https://xd.adobe.com/view/f1bb648f-7a82-4b34-949e-c27d0a65f262-a4e8/?fullscreen&hints=off)


## Add New Memory

This doc is a continuation of [this doc](https://docs.google.com/document/d/1DrYrEePyp32XyqyYVTj7foF6KDvO2Cy8MWshI1RYa8M/edit?usp=sharing)


All auth users can add a new memory at any time from the Navbar, by clicking on the "add new memory" button.

This action will launch the "add memory" wizard, from where the user will provide the initial minimum details to create a new memory.

![](https://lh6.googleusercontent.com/T8OluRby7XFRXeeMax_JylibkjZ1gm9A8iO_APue317WYvfY77UZBAXWGTWBmZiMiQphQLUazRoj_pFzMN2R_x8hWlyfRstxmZ_pZ0viz77i66HkKCX449yZrDGzI6aIstIEXGdA)

In order to start a memory, the minimum required details are:

-   Memory cover Picture
-   Place (stop)
-   Arrival date
-   Memory title
-   Memory description
-   Privacy setting

Once this information is provided by the user, a memory is created and the user can edit all further details:

- Add new Stop
  - Select place
  - Add arrival date
  - Add pictures
-   Remove Stop
-   Edit stops
-   Edit initial general details
-   Delete Memory

### "Add new stop" quick access

When the user is currently on a live memory (based on the date), both on the feed and on the "My Memories" page, the first thing to show will be the current memory with an "Add Stop" CTA that will take the user directly to the add new stop screen

![](https://lh4.googleusercontent.com/YrUQkEInKdDNIw1YR2w120UEi7U-m41MzBXrrdr67chN78N6cwPmZXYYzVCp2AAfK_oslwxoDCXVG8U4_dTRTeOoukHwSleRmBa3i4lk7wXMGxVkZoKYoYKNYhvOnAJ211LWBGkI)

![](https://lh3.googleusercontent.com/Ml6ZkbbnaddtX7xGqSo8UB4bl4UqMlCNchpzG8NMhkZOdQ2JrWZ_zPQX86GAysJbS9tvpuL8n8x2k5v8zwwdCl7AhKclVVVQYgqJ3UDrkZrPwkmSh78HaUSQt9IifyDOMiX3PmfV)

### Remove Stops and delete memory

If the user removes the initial stop while the memory still only has one stop, the memory will be deleted.

The user is able to delete the memory during the memory editing process before saving it regardless of the number of stops or information provided.

### Arrival date

The arrival date is set for each stop.

The user is allowed to set the same arrival date for different stops, in case they visited two different spots on the same day.

### Interaction and flows

The flow to add a new memory and further add more details to it until it is saved are described in the below diagrams

-   [Mobile](https://xd.adobe.com/view/709fbb10-1c6b-4de4-91c7-0576a0038d92-25cc/?fullscreen&hints=off)
-   [Desktop](https://xd.adobe.com/view/13a777bd-95c8-4796-b7f8-39074a23c902-46f4/?fullscreen&hints=off)

### Full Interactive Prototypes

-   [Mobile](https://xd.adobe.com/view/2b4da3a1-b67c-42b6-9385-46085602a2d3-7e1e/)
-   [Desktop](https://xd.adobe.com/view/7844e530-ae61-4e4d-b06d-474eb1ea9480-2d17/)

### Videos

-   [Mobile](https://drive.google.com/file/d/1nJoIn3bI3nXuo6_lnCKYOz2dhjxQOaVO/view?usp=sharing)
-   [Desktop](https://drive.google.com/file/d/1v9s5zilPpQGNi2XOmwcWTc7FhwNlXgw8/view?usp=sharing)