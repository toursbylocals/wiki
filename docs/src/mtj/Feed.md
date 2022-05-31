
# Introduction

The feed is the home page of MTJ. As soon as an authenticated user logs in, they land on the feed.
The feed displays the user’s friend's updates and can interact/view them.

# Business Rules

## Anatomy of the feed:
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

## Interactions - Post

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



## Hearts and comments Behavior

Hearts and comments can be given to:

-   A stop containing the gallery

These hearts and comments can be given by a user from:

-   A post ( which it's intended to go to a "Stop")

All hearts and comments will be recorded on the stop.

## Full Lo-Fi interactive prototypes

[Desktop](https://xd.adobe.com/view/a2eaf12b-c27c-4369-ac41-f372f15024fd-f7b9/)
[Mobile](https://xd.adobe.com/view/368d12d1-fa57-4e63-b8ad-217191294b25-63de/)

## Full Videos

[Desktop](https://drive.google.com/file/d/1tF4ft8agEM8OQyU1AaSMSd8_sli-18I1/view?usp=sharingZIf_UUBxti54CZ5Q-Xrgje1/view?usp=sharing)\
[Mobile](https://drive.google.com/file/d/1VqTXUNnmSFVZniQaWmPnwnDixi2QgO3n/view?usp=sharing)






