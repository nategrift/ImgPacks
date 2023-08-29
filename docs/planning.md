## ImgPacks

Place to share AI generated content.

## Endpoints

- User

  - Get
  - Create
  - Update
  - Delete

- Auth

  - Create Session
  - Refresh Session

- content

  - Create
  - Update
  - Delete
  - Get
  - Query
  - Unlisted

- Rating

  - Create
  - Delete

## Models

- User

  - First Name\*
  - Last Name
  - email\*
  - password\*
  - desc
  - Location
  - social links (linking table)
    - platform
    - link
  - isAnalyticsEnabled
  - receiveEmails

- Content

  - type \*
  - title \*
  - tags (linking table)
  - engine \*
  - prompt \*
  - location

- packs
  - title \*

## Technologies

UI Library: https://ant.design/
Backend Framework: NestJs (with express)
Frontend Framework: React (create-react-app)
