# Getting Started

## What is it?

A Design System is the single source of truth which groups all the elements that will allow the teams to design, realize and develop a product. So a Design System is not a deliverable, but a set of deliverables.

## How to create components in Figma?

You can create a single component out of a selection of layers. Or, create individual components in bulk from a selection of objects.

### Create a single component

There are a few ways to create a component. First, you'll need to select the layers you'd like to include in the component.

1. Select the layers you’d like to be included in the component.

1. You then have a few different methods for creating a component:

    - Click Create component in the toolbar.
    - Right-click on your selection and choose Create component.
    - Use the keyboard shortcuts:

      1. Mac: ⌥ Option - ⌘ Command - K
      1. Windows: Ctrl + Alt + K

1. Figma will nest the layers within a special component frame. Identify components in the Layers panel using the purple icon.

1. In the right sidebar, add a Description and Documentation link for collaborators.

### Create components in bulk

By default, the Create component action will create a single component from your selection.

You can also create components in bulk. This allows you to select multiple groups or frames and create components out of them. Create multiple components from:

- Objects and layers in frames

- Objects and layers in groups

- Single layers, like a path or vector network

- Layers in a boolean operation

**Note: If you select more than one layer that isn't on one of the above configurations, Figma will create a component for each individual layer**

1. Select the layers you want to create components from,

1. Click the  next to Create component in the toolbar.

1. Select Create Multiple components from the options.

1. Figma will create a component for each frame, group, boolean operation, or path

## How to use components in Figma?

### Assets Panel

The fastest way to access components in a file is via the Assets panel.

To open the Assets panel:

- Click on the Assets tab in the left sidebar.

- Or, use the Keyboard Shortcuts:

  - Mac: ⌥ Option - 2

  - Windows:: Alt + 2

### Structure

In the Assets panel, you will have access to the following components:

- Local Components: Components you created in this file.

  - Private to this file: Components you created in this file, but didn't publish to the Team Library.

- Used in this file: Components from other Libraries that you have already used in this file.

- Enabled Libraries: Any default Libraries that anyone has [enabled in a Team](https://help.figma.com/hc/en-us/articles/360041568033) or [Organization](https://help.figma.com/hc/en-us/articles/360040530413).

There will be a heading for each of these sections in the Assets panel. We will list all enabled libraries, with their file name as the heading. You can collapse the headings to reduce the space they take up. Or expand them to explore the components within those files.

### Explore library file

We display components in a path that mirrors the file's structure. The file path will follow this general structure: file > page > frame

Each step in the path will represent a heading in the Assets panel. You can use the arrows to expand the file path and explore the components within each frame.

We display pages in alphabetical order, not the order they are in the original file.

    - Tip! If you use a slash-separated naming convention, we will group those components together in the [Instance menu](https://help.figma.com/hc/en-us/articles/360039150413). e.g. file / page / frame /\*\*name\*\*/

## How to modify components in Figma?

Any instance you create is linked to the main component. When you make changes to the main component, Figma will apply any changes you apply to any linked instances.

If you are using instances within the same file as your main components, Figma applies changes immediately. If the components are published to a library, you need to publish those changes to see those updates in subscribed files.

### Update components

To make sure Figma applies changes to all instances of a component, you will need to edit the main component. You can only edit main components in the original files where they live.

**Unpublished components:**

  If you're on the Starter plan, or haven't published the components to a library, you can edit your main components like you would any other layers.

Figma will automatically apply any changes you make to the main component to any local instances in your file.

**Published components:**

  Figma will immediately apply any changes you make to any instances in that file. If you want those changes to apply to instances in other files, you will need to publish those changes to the Library.

Want to change the location of components? You can move published components between files and libraries. [Move published components →](https://help.figma.com/hc/en-us/articles/4404848314647/)

### Find main components

If you're working with instances in a separate file, use the Go to main component setting to open the library file. From there, you can apply any changes you want to the main component.

1. Select an instance in the current file.

1. Open the Design tab in the right sidebar.

1. Click  in the instance section to open the library file.

1. Select the main component and make any changes.

Note: If you accessed the main component from another file, Figma will give you the option to Return to instance after making your changes.

### Push overrides to main component

There may be situations where you want changes you've applied to an instance to apply to the main component as well.

You can use the Push overrides to main component setting to apply any overrides to the main component. This will also update any other instances of that component.

You can only push overrides if the main component is in the same file as the instance. It's not possible to push overrides to components in another file, including published libraries.

Note: It's not possible to push overrides to a component that's nested within another component. You will need to make those changes to the main component itself.

1. Select the instance with your overrides applied to it. You need to select the parent frame of the instance, not a sublayer.

1. In the right sidebar, click  next to the component name.

1. Select Push overrides to main component from the options.

1. Figma will apply your overrides to the main component.

### Publish changes to the library

If you make changes to a published style or component, this will only apply those changes to instances in the current file. If you want those changes to be reflected in your library, you will also need to publish those changes to the library.

Figma will display a blue dot on the icon in the Assets panel of the left sidebar to let you know if there are any updates that need to be published:

Caution: You can only publish and use components via the library, on the Professional, Education, or Organization plans. [Learn more about plans and pricing →](https://www.figma.com/pricing/)

1. Click either the Assets panel at the top of the left sidebar to open the library modal.

1. Add a description of any decisions or changes. This will show in the [file's version history](https://help.figma.com/hc/en-us/articles/360038006754), and the Updates tab of the Libraries modal.

1. View a list of changes to the library. This details any styles and components added, modified, or removed.

1. Choose which changes you want to publish:

   1. Check individual components you do want to publish

   1. Uncheck individual components you don't want to publish

   1. Uncheck Changes to deselect all styles and components

1. When you've finalized your styles and components, click the Publish button. Figma will show a notification to confirm your file has been successfully published.
