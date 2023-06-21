<!-- ---
name: Bug/issue report
about: Report an issue to help us improve
title: ''
labels: 'kind/bug'
assignees: ''
--- -->
<!-- ### Description -->
<!-- A brief description of the issue.-->

<!-- ### Expected Behavior -->
<!-- A brief description of what you expected to happen.-->

<!-- ### Screenshots -->
<!--- Add screenshots, if applicable, to help explain your problem.-->

<!-- ### Enviroment:
 - OS: Mac Linux Windows
 - Browser: Chrome Safari Firefox
 - Version: 
 - Device: Desktop Mobile -->


---
name: Bug/issue report
about: Report an issue to help us improve
title: ''
labels: 'kind/bug'
assignees: ''
---

body:
  - type: markdown
    attributes:
      value: |
        ### Description
        <!-- A brief description of the issue.-->

  - type: textarea
    id: description
    attributes:
      label: Description
      description: A brief description of the issue.
      placeholder: Enter a description
    validations:
      required: true

  - type: markdown
    attributes:
      value: |
        ### Expected Behavior
        <!-- A brief description of what you expected to happen.-->

  - type: textarea
    id: expected_behavior
    attributes:
      label: Expected Behavior
      description: A brief description of what you expected to happen.
      placeholder: Enter the expected behavior
    validations:
      required: true

  - type: markdown
    attributes:
      value: |
        ### Screenshots
        <!--- Add screenshots, if applicable, to help explain your problem.-->

  - type: file
    id: screenshots
    attributes:
      label: Screenshots
      description: Add screenshots, if applicable, to help explain your problem.

  - type: markdown
    attributes:
      value: |
        ### Enviroment:

  - type: select
    id: os
    attributes:
      label: OS
      description: Select your operating system.
      options:
        - Mac
        - Linux
        - Windows
    validations:
      required: true

  - type: select
    id: browser
    attributes:
      label: Browser
      description: Select your web browser.
      options:
        - Chrome
        - Safari
        - Firefox
    validations:
      required: true

  - type: text
    id: browser_version
    attributes:
      label: Version
      description: Enter the version of your web browser.
      placeholder: Enter the browser version
    validations:
      required: true

  - type: select
    id: device
    attributes:
      label: Device
      description: Select your device type.
      options:
        - Desktop
        - Mobile
    validations:
      required: true