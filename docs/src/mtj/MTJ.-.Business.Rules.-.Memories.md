# My Trip Journal

### Business Rules
### Memories (Auth only)
#### Version 1.0


### 1. Introduction


The Memory is the central element of MTJ. It is where the users record their journeys, add descriptions and pictures, and where other users leave their hearts and comments.

### 2. Business rules

##### 2.1 Memory view

###### 2.1.1 Memory access

A memory can be accessed by the user depending on the privacy status (details about it below).

Both authorized and non-authorized users can view a memory, following [this flow](https://excalidraw.com/#json=_d2gRrSqTfOx6eNVnvrv-,bAgzo_HKlHEyFdkscE5s_Q).

For details on what a non-authorized user has access to, please refer to [this doc](https://docs.google.com/document/d/1zzUMK66PKSaRr_oWjDd1S4Bq9nB1jQvNKrR3DHOfYIw/edit?usp=sharing).

###### 2.1.2 Anatomy of the memory


**Desktop**

*General initial view* 

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


*Stop View*

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


*Picture View*

Once any picture is clicked, it expands to show:

-   Picture
-   Left-right arrows to view more pictures
-   Close button
![](https://lh3.googleusercontent.com/K1o_Fs7-4tU8KLY80p8GP-CpvqRd0apRH0SQ-hqmo-8tusQRmtsLnNsQ4q1CDFHjuDaPJapHaCiGLWxAY41LBRD7zWv5V45QTd5vMrRiMnaEu-ZaT7HGXhNIwUOi2n_oy_SSkI6-)


**Mobile**

*General initial view*

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

*Stop View*

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


*Picture View*

Once any picture is clicked, it expands to show:

-   Picture
-   Side scrolling
-   Close button
![](https://lh3.googleusercontent.com/Csye8VygP51WSxYizGh3gU8wHKiXLBaEImMAeVmNRPj4FbMaJX2Cx5eQrPGzBD3W0OVARfY-sfS3OdMrfhOjboDGxxJQMXlYdDZcIM48efxLENBdzaBOHyQRY2F2xZR-5YaS5L7l)

###### 2.1.3 Memory View Interactions

*Initial View*

-   From the "explore" page, the user clicks on a memory → it opens as a toaster from the right
-   User clicks on a stop: the stop is centered on the map
-   User clicks on the share icon → a pop up  shows so the user can choose where to share this memory: copy the link, share on Facebook
-   On desktop, the user clicks on collapse/expand panel → the panel is collapsed/expanded
-   User clicks on a stop, either from the map or the panel → The stop opens as a toaster from the right
-   User clicks on the close (X) button → the memory is collapsed back

*Stop view*

User clicks on a picture → Image viewer opens.

**How all items interact and flow is described in these diagrams:**

-   [Mobile](https://xd.adobe.com/view/af5da148-40b1-4869-ab14-5338407c3cdf-fa0e/?fullscreen&hints=off)
-   [Desktop](https://xd.adobe.com/view/c5ddd3c3-1ffb-440c-b89c-5cdee21aec6e-908e/?fullscreen&hints=off)

*Hearts and comments interactions*

- By default, only one comment is displayed
- User clicks on “comment” icon → 
Desktop: If there is more than one comment, up to 3 comments are displayed. If there are more than 3 comments, a “view more comments” link is displayed. When user clicks the comment icon again, the comments are collapsed.
Mobile: If there is more than one comment → new screen opens displaying all comments.  When user clicks < back button, goes back to post/feed
- User clicks on “read more” on a comment that has more than 252 characters → the full comment is displayed. When the user clicks on “read less” → the comment is collapsed to 252 characters.
- User clicks on “reply comment” →  @ with the comment author is added to the “add comment” box for the user to add the new comment

View [Feed Business Rules doc](https://docs.google.com/document/d/17hvBjjXrlKf0PQRe4nikIWGXXE52_zCv7PTYc3rv9MQ/edit?usp=sharing) for gif examples of the above.

###### 2.1.4 Hearts and comments behavior (on memory and pictures)

Hearts and comments have the same behavior and interactions as on the feed page. Please refer to [this doc](https://docs.google.com/document/d/17hvBjjXrlKf0PQRe4nikIWGXXE52_zCv7PTYc3rv9MQ/edit?usp=sharing) for further details.

Hearts and comments can be given to: 

- A stop containing the gallery

These hearts and comments can be given by a user from:

- A post ( which it’s intended to go to a “Stop”) 


All hearts and comments will be recorded on the stop.


###### 2.1.5 Full Lo-Fi Prototypes

[Desktop](https://xd.adobe.com/view/75b8e3f7-7283-4517-b129-5c246d33be4b-20eb/)
[Mobile](https://xd.adobe.com/view/c38e8415-653b-49b7-9641-89b0ae9fed2d-96dd/)

###### 2.1.6 Full videos

[Desktop](https://drive.google.com/file/d/17JZWf1ER4hAUiiacPN6BCZYUfDPcqR_p/view?usp=sharing)\
[Mobile](https://drive.google.com/file/d/1obP8Uo7RwK7vo_RMmk6YCOyUxmYeKjIp/view?usp=sharing)
