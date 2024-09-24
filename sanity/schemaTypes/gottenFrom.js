import { defineType, defineField } from "sanity";

export default defineType({
  name: 'gotten_from',
  title: 'Gotten From',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'url',
      title: "URL",
      type: "url"
    })
  ]
})